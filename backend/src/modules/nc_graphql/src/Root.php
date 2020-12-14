<?php

namespace Drupal\nc_graphql;

use Drupal\block_content\BlockContentInterface;
use Drupal\block_content\Entity\BlockContent;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityRepository;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\Core\Menu\MenuLinkTreeElement;
use Drupal\Core\Menu\MenuTreeParameters;
use \Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\node\NodeInterface;
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
          $redirect = $this->entityTypeManager->getStorage('redirect')->load($rid);
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
        }
        catch (ResourceNotFoundException $e) {
          return [
            '__typename' => 'DrupalNotFoundRoute',
          ];
        }
        catch (AccessDeniedHttpException $e) {
          return [
            '__typename' => 'DrupalAccessDeniedRoute',
            'reason' => 'TODO: Add reason for access denied to graphql response.'
          ];
        }
        throw new \Exception('Cannot return a route for path ' . $args['path']);
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
      return $this->entityTypeManager->getStorage('node')->loadRevision($match_info['node_revision']);
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
  public static function getMenuLinks($menuName = 'footer', $maxDepth = 2) {
    $menuTree = \Drupal::menuTree();

    $params = new MenuTreeParameters();
    $params->setMaxDepth($maxDepth);
    $params->onlyEnabledLinks();

    $tree = $menuTree->load($menuName, $params);
    $manipulators = [
      ['callable' => 'menu.default_tree_manipulators:checkAccess'],
      ['callable' => 'menu.default_tree_manipulators:generateIndexAndSort']
    ];

    $tree = $menuTree->transform($tree, $manipulators);
    $list = [];

    $resolveLink = function (MenuLinkTreeElement $element) {
      $urlObj = $element->link->getUrlObject();

      if ($urlObj->isExternal()) {
        $url = $urlObj->getUri();
      } elseif ($urlObj->isRouted()) {
        $url = \Drupal::service('path.alias_manager')->getAliasByPath('/'.$urlObj->getInternalPath());
      } elseif (!$urlObj->isExternal() && !$urlObj->isRouted()) {
        $url = Url::fromUri($urlObj->getUri())->toString();
      } else {
        $url = Url::fromUri($urlObj->getUri())->toString();
      }

      return [
        'title' => $element->link->getTitle(),
        'url' => $url,
      ];
    };

    foreach ($tree as $parent) {
      $parentLinks = $resolveLink($parent);
      if ($subtree = $parent->subtree) {
        $childrenLinks = [];
        foreach ($subtree as $children ) {
          array_push($childrenLinks, $resolveLink($children));
        }
        $parentLinks['children'] = $childrenLinks;
      }
      array_push($list, $parentLinks);
    }

    return $list;
  }

}

