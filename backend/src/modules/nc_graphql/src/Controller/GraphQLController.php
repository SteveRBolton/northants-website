<?php

namespace Drupal\nc_graphql\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem;
use Drupal\Core\Url;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs_entity_embed\Entity\EmbeddedParagraphs;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;
use Drupal\text\Plugin\Field\FieldType\TextWithSummaryItem;
use GraphQL\GraphQL;
use GraphQL\Language\Parser;
use GraphQL\Server\RequestError;
use GraphQL\Server\StandardServer;
use GraphQL\Type\Definition\ListOfType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Utils\AST;
use GraphQL\Utils\BuildSchema;
use GraphQL\Utils\SchemaPrinter;
use GraphQL\Validator\DocumentValidator;
use GraphQL\Validator\Rules\DisableIntrospection;
use GraphQL\Validator\Rules\QueryComplexity;
use GraphQL\Validator\Rules\QueryDepth;
use GraphQL\Validator\ValidationContext;
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
          'service_page' => 'ServicePageNode',
        ];
        return $contentTypes[$entity->bundle()];
      case 'paragraph':
        $paragraphTypes = [
          'call_to_action' => 'CallToActionParagraph',
        ];
        return $paragraphTypes[$entity->bundle()];
      case 'embedded_paragraphs':
        return 'EmbeddedParagraph';
      case 'block':
        throw new \Exception("BLOCK TYPE FOUND {$entity->getEntityTypeId()} {$entity->bundle()}");
    }
    throw new \Exception("Cannot identify type for {$entity->getEntityTypeId()} {$entity->bundle()}");
  }

  /**
   * Maps fields on drupal entities to graphql types.
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   * @param $args
   * @param $context
   * @param \GraphQL\Type\Definition\ResolveInfo $info
   *
   * @return mixed
   * @throws \Drupal\Core\Entity\EntityMalformedException
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
      }

      return $typeConfig;
    };

//    $c = \Drupal::cache()->get('nc_graphql.schema');
//    if ($c = \Drupal::cache()->get('nc_graphql.schema')) {
//      $doc = AST::fromArray($c->data);
//    }
//    else {
//      $doc = Parser::parse(file_get_contents(DRUPAL_ROOT . '/../src/schema.graphql'));
//      \Drupal::cache()->set('nc_graphql.schema', AST::toArray($doc));
//    }

    $doc = Parser::parse(file_get_contents(DRUPAL_ROOT . '/../src/schema.graphql'));

    // Build your existing schema
    $originalSchema = BuildSchema::build($doc);

    // Extend existing schema with Federation
    $federation = new \Drupal\nc_graphql\Federation();
    //$federation = new \PascalDeVink\GraphQLFederation\Federation();
    $extendedSchema = $federation->extendSchema($originalSchema);

    // Federation loses custom type loaders so we reset them here
//    $schemaString = \GraphQL\Utils\SchemaPrinter::doPrint($extendedSchema);
//    $schema = \GraphQL\Utils\BuildSchema::build($schemaString, $typeConfigDecorator);

    //$test = SchemaPrinter::doPrint($schema);

    // Get your root value resolver.
    //$root = \Drupal::service('nc_graphql.root')->getRoot();

    // And extend it with Federation resolvers.
    //$root = $federation->addResolversToRootValue($root);

    // Doing this is easier than fixing https://github.com/pascaldevink/php-graphql-federation/issues/1
//    $root['_service'] = function() {
//      return [
//        'sdl' => file_get_contents(DRUPAL_ROOT . '/../src/schema.graphql'),
//      ];
//    };
//
//    $root['_service'] = ['sdl' => file_get_contents(DRUPAL_ROOT . '/../src/schema.graphql')];

    // old
    $schema = BuildSchema::build($doc, $typeConfigDecorator);
    $root = \Drupal::service('nc_graphql.root')->getRoot();

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
      'debug' => NC_GRAPHQL_DEBUG,
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
