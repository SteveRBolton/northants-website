<?php

namespace Drupal\nc_system\Entity\Node;

use Drupal\nc_system\Entity\Paragraph\CouncilSignposting;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class ServicePage extends Node implements GraphQLEntityFieldResolver {

  public function getBody(): TextItemBase {
    return $this->get('field_wysiwyg_slices')->first();
  }

  public function getSignposting(): ?CouncilSignposting {
    /* @var $entityReference \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList*/
    $signpostingField = $this->get('field_signposting');
    /* @var $entities array<CouncilSignposting> */
    $entities = $signpostingField->referencedEntities();
    if(!empty($entities)) {
      return $entities[0];
    }
    return null;
  }

  /**
   * @param string $fieldName
   *
   * @return array|mixed|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if ($fieldName === "body") {
      $body = $this->getBody();
      return GraphQLFieldResolver::resolveTextItem($body);
    }

    if ($fieldName === "signposting") {
      return $this->getSignposting();
    }
    throw new \Exception("Unable to resolve value via ServicePage resolve.");
  }

}
