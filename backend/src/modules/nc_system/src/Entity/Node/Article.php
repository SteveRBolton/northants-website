<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Exception;

class Article extends Content implements GraphQLEntityFieldResolver {


  public function getSummary(): string {
    /* @var $summaryField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $summaryField = $this->get('field_summary');
    return $summaryField->getString();
  }
  public function getParentTitle() {
    /* @var $parentField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $parentField = $this->get('field_service_landing_page');
    /* @var $parents array<\Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
    $parents = $parentField->referencedEntities();
    if(!empty($parents)) {
      return $parents[0]->getTitle();
    }
    return null;
  }
  public function getParentUrl() {
    /* @var $parentField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $parentField = $this->get('field_service_landing_page');
    /* @var $parents array<\Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
    $parents = $parentField->referencedEntities();
    if(!empty($parents)) {
      return $parents[0]->toUrl()->toString();
    }
    return null;
  }
  public function getDate() {
    $date = date('j F Y', $this->getChangedTime());
    return $date;
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
    //Metadata
    if ($fieldName === "metaTitle") {
      return $this->getCouncilName();
      
    }

    if ($fieldName === "metaDescription") {
      return $this->getMetaDescription();
    }
    if ($fieldName === "metaKeywords") {
      return $this->getMetaKeywords();
    }
    if ($fieldName === "parentUrl") {
      return $this->getParentUrl();
    }
    if ($fieldName === "parentTitle") {
      return $this->getParentTitle();
    }
    if ($fieldName === "date"){
      return $this->getDate();
    }
    if($fieldName === "summary"){
      return $this->getSummary();
    }
    throw new Exception("Unable to resolve value via Article resolve.");
  }

}
