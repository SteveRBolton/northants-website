<?php

namespace Drupal\nc_graphql;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityRepository;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Menu\MenuLinkTreeElement;
use Drupal\Core\Menu\MenuTreeParameters;
use \Drupal\Core\Url;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\nc_solr\SolrServiceProvider;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\taxonomy\Entity\Term;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Matcher\UrlMatcherInterface;

class Root {

  /**
   * The router.
   *
   * @var \Symfony\Component\Routing\Matcher\UrlMatcherInterface
   */
  protected UrlMatcherInterface $router;

  /**
   * @var \Drupal\Core\Entity\EntityTypeManager
   */
  protected EntityTypeManager $entityTypeManager;

  /**
   * @var \Drupal\Core\Entity\EntityRepository
   */
  protected EntityRepository $entityRepository;

  public function __construct(UrlMatcherInterface $router, EntityTypeManager $entityTypeManager, EntityRepository $entityRepository) {

    $this->router = $router;
    $this->entityTypeManager = $entityTypeManager;
    $this->entityRepository = $entityRepository;
  }

  public function getRoot() {
    return [
      'route' => function ($root, $args, $context) {
        $q = $this->entityTypeManager->getStorage('redirect')
          ->getQuery()
          ->condition('redirect_source.path', ltrim($args['path'], '/'));
        $r = $q->execute();
        $rid = reset($r);
        if ($rid) {
          /** @var \Drupal\redirect\Entity\Redirect $redirect */
          $redirect = $this->entityTypeManager->getStorage('redirect')
            ->load($rid);
          $url = $redirect->getRedirectUrl();
          $url->setOption('nc_disable_path_processing', TRUE);
          return [
            '__typename' => 'DrupalRedirectRoute',
            'destination' => $url->toString(),
            'status' => $redirect->getStatusCode(),
          ];
        }

        $config = config_pages_config('global_config');

        /** Handle homepage */
        if ($args['path'] === '/') {

          if ($config && $config->get('field_homepage')->entity) {
            return $r + [
                '__typename' => 'DrupalNodeRoute',
                'node' => $config->get('field_homepage')->entity,
              ];
          }
          throw new \Exception('No homepage has been set.');
        }

        try {
          $match_info = $this->router->match($args['path']);
          $entity = $this->findEntity($match_info);
          if ($entity && $entity instanceof Node) {
            return $r + [
                '__typename' => 'DrupalNodeRoute',
                'node' => $entity,
              ];
          }
        } catch (ResourceNotFoundException $e) {
          return [
            '__typename' => 'DrupalNotFoundRoute',
          ];
        } catch (AccessDeniedHttpException $e) {
          return [
            '__typename' => 'DrupalAccessDeniedRoute',
            'reason' => 'TODO: Add reason for access denied to graphql response.',
          ];
        }
        throw new \Exception('Cannot return a route for path ' . $args['path']);
      },
      'news' => function ($root, $args, $context) {
        return Root::getNewsArticles($args['text'], $args['page']);
      },
      'search' => function ($root, $args, $context, $info) {
        return Root::searchSolr($args['text'], $args['page']);
      },
      'globals' => function ($root, $args, $context) {
        return Root::getGlobals();
      },
    ];
  }

  public function findEntity(array $match_info): ?EntityInterface {
    foreach ($match_info as $o) {
      if ($o instanceof EntityInterface) {
        return $o;
      }
    }
    if ($match_info['_route'] === 'entity.node.revision' && $match_info['node_revision']) {
      return $this->entityTypeManager->getStorage('node')
        ->loadRevision($match_info['node_revision']);
    }
    return NULL;
  }

  /**
   * Get specific menu, links (title, url) upto max-depth 2.
   *
   * @param string $menuName
   * @param int $maxDepth
   *
   * @return array
   */
  public static function getMenuLinks($menuName = 'footer', $maxDepth = 2, $flatten = FALSE) {
    $menuTree = \Drupal::menuTree();

    $params = new MenuTreeParameters();
    $params->setMaxDepth($maxDepth);
    $params->onlyEnabledLinks();

    $tree = $menuTree->load($menuName, $params);
    $manipulators = [
      ['callable' => 'menu.default_tree_manipulators:checkAccess'],
      ['callable' => 'menu.default_tree_manipulators:generateIndexAndSort'],
    ];

    if ($flatten) {
      $manipulators[] = [
        'callable' => 'menu.default_tree_manipulators:flatten',
      ];
    }

    $tree = $menuTree->transform($tree, $manipulators);
    $list = [];

    $resolveLink = function (MenuLinkTreeElement $element) {
      $urlObj = $element->link->getUrlObject();

      if ($urlObj->isExternal()) {
        $url = $urlObj->getUri();
      }
      elseif ($urlObj->isRouted()) {
        $url = \Drupal::service('path_alias.manager')
          ->getAliasByPath('/' . $urlObj->getInternalPath());
      }
      elseif (!$urlObj->isExternal() && !$urlObj->isRouted()) {
        $url = Url::fromUri($urlObj->getUri())->toString();
      }
      else {
        $url = Url::fromUri($urlObj->getUri())->toString();
      }

      return [
        'title' => $element->link->getTitle(),
        'url' => $url,
        'external' => $urlObj->isExternal(),
      ];
    };

    foreach ($tree as $parent) {
      $parentLinks = $resolveLink($parent);
      if ($subtree = $parent->subtree) {
        $childrenLinks = [];
        foreach ($subtree as $children) {
          array_push($childrenLinks, $resolveLink($children));
        }
        $parentLinks['children'] = $childrenLinks;
      }
      array_push($list, $parentLinks);
    }

    return $list;
  }

  /**
   * Get specific menu, links (title, url) upto max-depth 2.
   *
   * @return array | null
   */
  public static function getSitewideAlerts(): ?array {
    $config = config_pages_config('sitewide_alerts');
    $active = $config ? $config->get('field_active')->getValue()[0]['value'] : NULL;
    if ($active) {
      $title = $config->get('field_title')->getValue()[0]['value'];
      $body = GraphQLFieldResolver::resolveTextItem($config->get('field_body')->first());
      $alertType = $config->get('field_alert_type')->getValue()[0]['value'];
      $id = hash('MD5', $title . $body['value']);

      $alert = [
        'title' => $title,
        'body' => [
          'value' => $body['value'],
        ],
        'alertType' => $alertType,
        'id' => $id,
      ];
    }
    return $alert ? $alert : null;
  }

  /**
   * Get the global Drupal data
   * @return array
   */
  public static function getGlobals(): array {
    return [
      '__typename' => 'DrupalGlobals',
      'footerLinks' => Root::getMenuLinks('footer', NULL, TRUE),
      'sitewideAlerts' => Root::getSitewideAlerts(),
    ];
  }

  /**
   * Returns the council name for the active theme
   *
   * @return string
   */
  public static function getCouncilName(): string {
    $councilName = '';

    if (isset($_ENV['NEXT_PUBLIC_THEME'])) {
      switch ($_ENV['NEXT_PUBLIC_THEME']) {
        case 'west':
          $councilName = 'West Northamptonshire Council';
          break;

        case 'north':
          $councilName = 'North Northamptonshire Council';
          break;

        default:
          break;
      }
    }

    return $councilName;
  }

  /**
   * Function to return a paginated list of search results.
   * Actual search
   *
   * @param $text
   * @param int $page (The page of results to request)
   */
  public static function searchSolr($text, $page = 0) {
    $councilName = self::getCouncilName();
    $pageSize = 10;
    /* @var $solr \Drupal\nc_solr\SolrServiceProvider */
    $solr = \Drupal::service('nc-solr.solr.search');
    $resultSet = $solr->search($text, $page, $pageSize);

    $result_list = [];
    /* @var $result \Drupal\search_api\Item\Item */

    foreach ($resultSet->getIterator() as $result) {
      $signpostsArr = [];
      $signposts = $result->getField('signposts')->getValues();
      foreach ($signposts as $signpostId) {
        $signpost = Paragraph::load($signpostId);
        $councilId = $signpost->get('field_council')
          ->getValue()[0]['target_id'];
        $council = Term::load($councilId);
        $signpostsArr[] = [
          'code' => $council->get('field_sovereign_code')->value,
          'name' => $council->get('name')->value,
          'homepage' => $signpost->get('field_link')->uri ? $signpost->get('field_link')->uri : $council->get('field_homepage')->uri,
        ];
      }

      $result_list[] = [
        'id' => $result->getId(),
        'url' => $result->getField('url')->getValues()[0],
        'title' => $result->getField('title')->getValues()[0],
        'teaser' => $result->getField('summary')->getValues()[0],
        'parent' => $result->getField('parent')->getValues()[0],
        'signposts' => $signpostsArr,
      ];
    }

    return [
      "council_name" => $councilName,
      "total" => $resultSet->getResultCount(),
      "pageSize" => $pageSize,
      "page" => $page,
      "text" => $text,
      "result_list" => $result_list,
    ];
  }

  /**
   * Function to return a list of the 30 most recent news articles.
   * TODO: Integrate with solr
   */
  public static function getNewsArticles($text, $page = 0) {
    $councilName = self::getCouncilName();
    $nids = \Drupal::entityQuery('node')
      ->condition('type', 'news_article')
      ->condition('status', '1')
      ->execute();
    $newsArticles = Node::loadMultiple($nids);

    $result_list = [];

    foreach ($newsArticles as $result) {
      $thumbnail = $result->get('field_featured_image')->getValue() ?
        GraphQLFieldResolver::resolveMediaImage($result->get('field_featured_image')->getValue()[0] , 420, 420)
        : NULL;
      $result_list[] = [
        'id' => $result->id(),
        'title' => $result->getTitle(),
        'link' => \Drupal::service('path_alias.manager')
          ->getAliasByPath('/node/' . $result->id()),
        'excerpt' => $result->get('field_summary')->getValue()[0]['value'],
        'date' => $result->get('publish_on')->value ? $result->get('publish_on')->value : $result->get('created')->value,
        'thumbnail' => $thumbnail['url'],
      ];
    }
    return [
      "council_name" => $councilName,
      "total" => 30,
      "pageSize" => 30,
      "page" => 0,
      "text" => $text,
      "result_list" => $result_list,
    ];
  }
}

