<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Exception;

class Homepage extends Content implements GraphQLEntityFieldResolver {

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

    //Metadata
    if ($fieldName === "metaTitle") {
      return $this->getMetaTitle();
    }
    if ($fieldName === "metaDescription") {
      return $this->getMetaDescription();
    }
    if ($fieldName === "metaKeywords") {
      return $this->getMetaKeywords();
    }
    throw new Exception("Unable to resolve value via Homepage resolve.");
  }

}
