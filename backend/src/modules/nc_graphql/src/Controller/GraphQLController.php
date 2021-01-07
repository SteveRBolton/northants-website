<?php

namespace Drupal\nc_graphql\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs\ParagraphInterface;
use GraphQL\Server\RequestError;
use GraphQL\Server\StandardServer;
use GraphQL\Type\Definition\ListOfType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Utils\BuildSchema;
use GraphQL\Validator\Rules\DisableIntrospection;
use GraphQL\Validator\Rules\QueryComplexity;
use GraphQL\Validator\Rules\QueryDepth;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Psr\Http\Message\ServerRequestInterface;

/**
 * Class GraphQLController
 *
 * Handles all requests to /graphql
 * May respond to direct graphql queries, or show a graphqli web interface.
 *
 * @package Drupal\nc_graphql\Controller
 */
class GraphQLController extends ControllerBase {

  /**
   * Resolves a Drupal Entity to a GraphQL type from the schema.
   * @param \Drupal\Core\Entity\EntityInterface $entity
   * @param $context
   * @param \GraphQL\Type\Definition\ResolveInfo $info
   *
   * @return string
   * @throws \Exception
   */
  static function resolveEntityType(EntityInterface $entity, $context, ResolveInfo $info) {
    switch ($entity->getEntityTypeId()) {
      case 'node':
        $contentTypes = [
          'homepage' => 'HomepageNode',
          'service_page' => 'ServicePageNode',
          'service_landing_page' => 'ServiceLandingPageNode',
        ];
        return $contentTypes[$entity->bundle()];
      case 'paragraph':
        $paragraphTypes = [
          'call_to_action' => 'CallToActionParagraph',
          'council_signpost' => 'CouncilSignpostParagraph',
          'council_signposting' => 'CouncilSignpostingParagraph',
          'pull_quote' => 'BlockQuoteParagraph',
          'section' => 'SectionParagraph'
        ];
        return $paragraphTypes[$entity->bundle()];
      case 'embedded_paragraphs':
        return 'EmbeddedParagraph';
      case 'block':
        throw new \Exception("BLOCK TYPE FOUND {$entity->getEntityTypeId()} {$entity->bundle()}");
    }
    throw new \Exception("Cannot identify type for {$entity->getEntityTypeId()} {$entity->bundle()}");
  }

  static function resolveSlice(ParagraphInterface $paragraph, $context, ResolveInfo $info) {
    return self::resolveEntityType($paragraph, $context, $info);
  }
  /**
   * Maps fields on drupal entities to graphql types.
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   * @param $args
   * @param $context
   * @param \GraphQL\Type\Definition\ResolveInfo $info
   *
   * @return mixed
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
static function resolveEntityField(ContentEntityInterface $entity, $args, $context, ResolveInfo $info) {

  // All entities have ids
  if ($info->fieldName === 'id') {
    return $entity->uuid();
  }

  // Try to resolve via the Entity bundle class first.
  if($entity instanceof GraphQLEntityFieldResolver) {
    try {
      return $entity->resolveGraphQLFieldToValue($info->fieldName);
    } catch(\Exception $e) {
      //Fallback to the generic resolver.
      // Generically handle lists of items
      if ($info->returnType instanceof ListOfType) {
        $map = [];
        foreach ($entity->get($info->fieldName) as $v) {
          $map[] = GraphQLFieldResolver::resolveFieldItem($v, $entity->get($info->fieldName)->getFieldDefinition());
        }
        return $map;
      }
      return GraphQLFieldResolver::resolveFieldItem($entity->get($info->fieldName)->first(),$entity->get($info->fieldName)->getFieldDefinition());
    }
  }

//  $updateAccess = $entity->access('update');
//
//  if ($info->fieldName === 'versionStatus' && $entity->getEntityTypeId() === 'node') {
//    if (!$updateAccess) {
//      return NULL;
//    }
//    if ($entity->in_preview) {
//      return "PREVIEW";
//    }
//    if ($entity->isDefaultRevision() && $entity->status->value) {
//      return "PUBLISHED";
//    }
//    if ($entity->isLatestRevision() && !$entity->status->value) {
//      return "DRAFT";
//    }
//    return "PREVIOUS_REVISION";
//  }

//  if (in_array($info->fieldName, ['editUrl', 'defaultVersionUrl', 'latestVersionUrl'])) {
//    if ($updateAccess) {
//      if ($entity->in_preview) {
//        if ($info->fieldName === 'editUrl') {
//          $o = ['query' => ['uuid' => $entity->uuid()]];
//          if ($entity->isNew()) {
//            return Url::fromRoute('node.add', ['node_type' => $entity->bundle()], $o)->setAbsolute()->toString();
//          }
//          else {
//            return $entity->toUrl('edit-form', $o)->setAbsolute()->toString();
//          }
//        }
//      }
//      else {
//        if ($info->fieldName === 'editUrl') {
//          return $entity->toUrl('edit-form')->setAbsolute()->toString();
//        }
//
//        if ($info->fieldName === 'defaultVersionUrl' && !$entity->isDefaultRevision()) {
//          return $entity->toUrl('canonical')->setAbsolute()->toString();
//        }
//
//        if ($info->fieldName === 'latestVersionUrl' && !$entity->isLatestRevision()) {
//          return $entity->toUrl('latest-version')->setAbsolute()->toString();
//        }
//      }
//    }
//    return NULL;
//  }
}


  public function graphql(ServerRequestInterface $request) {

    $accept = $request->getHeaderLine('accept');

    // Show CLI if 'text/html' is in the 'accept' request header.
    if (strpos($accept, 'text/html') !== FALSE) {
      return new Response($this->graphiql());
    }

    $typeConfigDecorator = function ($typeConfig, $typeDefinitionNode) {
      foreach ($typeDefinitionNode->directives as $d) {
        if ($d->name->value === 'entity') {
          $typeConfig['resolveField'] = self::class . '::resolveEntityField';
          break;
        }
      }

      foreach ($typeDefinitionNode->directives as $d) {
        if ($d->name->value === 'entityType') {
          $typeConfig['resolveType'] = self::class . '::resolveEntityType';
          break;
        }
        if($d->name->value === 'slice') {
          $typeConfig['resolveType'] = self::class . '::resolveSlice';
          break;
        }
      }

      return $typeConfig;
    };

    // Build your existing schema
    $originalSchema = BuildSchema::build(file_get_contents(DRUPAL_ROOT . '/../src/schema.graphql'), $typeConfigDecorator);
    // Extend schema with federation
    $federation = new \Drupal\nc_graphql\Federation();
    $extendedSchema = $federation->extendSchema($originalSchema);
    $schema = $extendedSchema;

    // Add resolvers to root.
    $root = \Drupal::service('nc_graphql.root')->getRoot();
    $root = $federation->addResolversToRootValue($root);

    $rules = [
      new QueryComplexity(5000), // 3.5k at last check
      new QueryDepth(15), // 8 at last check.
    ];
    if (NC_GRAPHQL_ALLOW_INTROSPECTION !== TRUE) {
      $rules[] = new DisableIntrospection();
    }

    $server = new StandardServer([
      'schema' => $schema,
      'rootValue' => $root,
      'validationRules' => $rules,
      'errorsHandler' => function (array $errors, callable $formatter) {
        foreach ($errors as $error) {
          watchdog_exception('nc_graphql', $error);
        }
        return array_map($formatter, $errors);
      },
      'debugFlag' => NC_GRAPHQL_DEBUG,
      'queryBatching' => TRUE,
      'persistentQueryLoader' => function($queryId, $params) {

        $c = \Drupal::cache()->get('nc_graphql_persisted_query:' . $queryId);
        if ($c === FALSE) {
          throw new RequestError('PersistedQueryNotFound');
        }

        return $c->data;
      }
    ]);

    if (stripos($request->getHeaderLine('content-type'), 'application/json') !== FALSE) {
      $input = Json::decode($request->getBody()->getContents());
      $this->persistQueries($input);
      $request = $request->withParsedBody($input);
    }

    $output = $server->executePsrRequest($request);
    return new JsonResponse($output);
  }

  public function persistQueries($input) {
    if (!is_array($input)) {
      $input = [$input];
    }
    foreach ($input as $i) {
      if (!empty($i['query']) && !empty($i["extensions"]["persistedQuery"]["sha256Hash"])) {
        $hash = hash('sha256', $i['query']);
        \Drupal::cache()->set('nc_graphql_persisted_query:' . $hash, $i['query']);
      }
    }
  }

  public function graphiql() {
    return <<<HTML
      <!DOCTYPE html>
      <html>
        <head>
          <title>Graphiql</title>
          <link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
        </head>
        <body style="margin: 0;">
          <div id="graphiql" style="height: 100vh;"></div>

          <script
            crossorigin
            src="https://unpkg.com/react/umd/react.production.min.js"
          ></script>
          <script
            crossorigin
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          ></script>
          <script
            crossorigin
            src="https://unpkg.com/graphiql/graphiql.min.js"
          ></script>

          <script>
            const graphQLFetcher = graphQLParams =>
              fetch('/graphql', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(graphQLParams),
              })
                .then(response => response.json())
                .catch(() => response.text());
            ReactDOM.render(
              React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
              document.getElementById('graphiql'),
            );
          </script>
        </body>
      </html>
    HTML;
  }
}
