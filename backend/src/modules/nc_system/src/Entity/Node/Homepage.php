<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;
use Drupal\nc_system\Entity\Paragraph\ServiceLinks;

class Homepage extends Node implements GraphQLEntityFieldResolver {

  public function getBody(): ?TextItemBase {
    /* @var $bodyField \Drupal\Core\Field\FieldItemList */
    $bodyField = $this->get('field_wysiwyg_slices');

    /* @var $bodyItem TextItemBase|null */
    $bodyItem = $bodyField->first();

    return $bodyItem;
  }

  public function getServiceLinks(): ?array {
    /* @var $serviceLinkField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList  */
    $serviceLinkField = $this->get('field_service_links_list');
    /* @var $serviceLinks array<\Drupal\nc_system\Entity\Paragraph\ServiceLinks> */
    $serviceLinks = $serviceLinkField->referencedEntities();
    return $serviceLinks;
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "body") {
      $body = $this->getBody();
      if($body) {
        return GraphQLFieldResolver::resolveTextItem($body);
      }
      return null;
    }

    if ($fieldName === "serviceLinks") {
      return $this->getServiceLinks();
    }

    throw new \Exception("Unable to resolve value via Homepage resolve.");
  }

}
