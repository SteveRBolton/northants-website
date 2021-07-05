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
        return Root::getNewsArticles($args['text'], $args['page'], $args['articleType'], $args['services'], $args['sortBy']);
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
    $active = $config ? $config->get('field_active')
      ->getValue()[0]['value'] : NULL;
    if ($active) {
      $title = $config->get('field_title')->getValue()[0]['value'];
      $body = GraphQLFieldResolver::resolveTextItem($config->get('field_body')
        ->first());
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
    return $active ? $alert : NULL;
  }

  /**
   * Get the global Drupal data
   *
   * @return array
   */
  public static function getGlobals(): array {
    return [
      '__typename' => 'DrupalGlobals',
      'footerLinks' => Root::getMenuLinks('footer', NULL, true),
      'accessibleLinks' => Root::getMenuLinks('accessible-links', NULL, true),
      'sitewideAlerts' => Root::getSitewideAlerts(),
    ];
  }

  /**
   * Returns the council name for the active theme
   *
   * @return string
   */
  public static function getCouncilName(): string {
    $councilName = \Drupal::service('nc_system.website_manager')->getCouncilName();

    return $councilName;
  }

  /**
   * Function to return a paginated list of search results for the Services
   * and Service Landing Page content types.
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
        'parent' => isset($result->getField('parent')->getValues()[0]) ? $result->getField('parent')->getValues()[0] : NULL,
        'topLineText' => isset($result->getField('top_line_text')->getValues()[0]) ? $result->getField('top_line_text')->getValues()[0] : NULL,
        'signposts' => $signpostsArr,
      ];
    }

    $extraData = $resultSet->getExtraData('search_api_spellcheck');
    $suggestedSearch = isset($extraData['collation']) ? $extraData['collation'] : NULL;
    $didYouMean = $suggestedSearch != NULL && $solr->search($suggestedSearch, 0, 1)->getResultCount() > 0 ? $suggestedSearch : NULL;

    return [
      "council_name" => $councilName,
      "total" => $resultSet->getResultCount(),
      "pageSize" => $pageSize,
      "page" => $page,
      "text" => $text,
      "didYouMean" => $didYouMean,
      "result_list" => $result_list,
    ];
  }

  /**
   * Function to return a paginated list of search results for the News
   * content type.
   *
   * @param $text
   * @param int $page
   * @param $articleType
   * @param $services
   *
   * @param $sortBy
   *
   * @return array
   * @throws \Drupal\search_api\SearchApiException
   */
  public static function getNewsArticles($text, $page, $articleType, $services, $sortBy) {
    $pageSize = 5;
    $councilName = self::getCouncilName();
    /* @var $solr \Drupal\nc_solr\SolrServiceProvider */
    $solr = \Drupal::service('nc-solr.solr.search');
    // Get service ID from path alias for Solr search
    $serviceId = 0;
    if ($services && ($services != 'all')) {
      $path = \Drupal::service('path_alias.manager')->getPathByAlias('/' . $services);
      if(preg_match('/node\/(\d+)/', $path, $matches)) {
        $node = \Drupal\node\Entity\Node::load($matches[1]);
        $serviceId = $node->id();
      }
    }
    // Get results
    $resultSet = $solr->news($text, $page, $pageSize, $articleType, $serviceId, $sortBy);
    $result_list = [];
    foreach ($resultSet->getIterator() as $result) {
      //Get image and format for resolveMediaImage function
      $image = $result->getField('featured_image')
        ->getValues() ? [
        'target_id' => $result->getField('featured_image')
          ->getValues()[0],
      ] : NULL;
      $image720x405 = $image ? GraphQLFieldResolver::resolveMediaImage($image, 720, 405)['url'] : '';
      $image72x41 = $image ? GraphQLFieldResolver::resolveMediaImage($image, 72, 41)['url'] : '';
      $imageAltText = $image ? GraphQLFieldResolver::resolveMediaImage($image)['altText'] : '';
      $result_list[] = [
        'id' => $result->getId(),
        'title' => $result->getField('title')->getValues()[0],
        'link' => $result->getField('url')->getValues()[0],
        'excerpt' => $result->getField('summary')->getValues()[0],
        'date' => $result->getField('publish_on')
          ->getValues() ? $result->getField('publish_on')
          ->getValues()[0] : $result->getField('created')->getValues()[0],
        'image720x405' => $image720x405,
        'image72x41' => $image72x41,
        'imageAltText' => $imageAltText,
      ];
    }
    $articleType = explode(',', $articleType);
    return [
      "council_name" => $councilName,
      "total" => $resultSet->getResultCount(),
      "pageSize" => $pageSize,
      "page" => $page,
      "text" => $text,
      "service" => $services,
      "articleType" => $articleType,
      "sortBy" => $sortBy,
      "result_list" => $result_list,
      "allServices" => self::getAllServices(),
      "allArticleTypes" => self::getAllArticleTypes(),
    ];
  }

  /**
   * Returns an array of all services that have search results,
   * based on the site's published Service Landing Pages
   *
   * @return array
   * @throws \Drupal\Core\Entity\EntityMalformedException
   */
  public static function getAllServices() {
    $solr = \Drupal::service('nc-solr.solr.search');
    // Get an array of all services for the Services dropdown
    $allServices = [];
    $nids = \Drupal::entityQuery('node')
      ->condition('type', 'service_landing_page')
      ->condition('status', 1)
      ->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);
    foreach ($nodes as $node) {
      $slug = ltrim($node->toUrl()->toString() ,'/');
      $title = $node->get('title')->value;
      $serviceId = $node->get('nid')->value;
      // Check that service search would return results, otherwise ignore
      $results = $solr->news('', 0, 5, '', $serviceId, 'DESC');
      if($results->getResultCount() > 0) {
        $allServices[] = [
          'title' => $title,
          'id' => $slug,
        ];
      }
    }
    $orderedServices = array_column($allServices, 'title');
    array_multisort($orderedServices, SORT_ASC, $allServices);
    array_unshift($allServices, [
      'title' => 'All services',
      'id' => 'all',
    ]);
    return $allServices;
  }
  /**
   * Returns an array of all article types.
   *
   * @return array
   */
  public static function getAllArticleTypes() {
    return [
      [
        'title' => 'Article',
        'id' => 'article',
      ],
      [
        'title' => 'Press release',
        'id' => 'press-release',
      ],
    ];
  }
}

