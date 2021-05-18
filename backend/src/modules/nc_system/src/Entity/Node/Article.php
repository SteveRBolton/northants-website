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
    if (!empty($parents)) {
      return $parents[0]->getTitle();
    }
    return NULL;
  }

  public function getParentUrl() {
    /* @var $parentField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $parentField = $this->get('field_service_landing_page');
    /* @var $parents array<\Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
    $parents = $parentField->referencedEntities();
    if (!empty($parents)) {
      return $parents[0]->toUrl()->toString();
    }
    return NULL;
  }

  public function getDateUpdated(): string {
    $date =  $this->getChangedTime();
    return strval($date);
  }

  public function getDate() {
    $date = date('j F Y', $this->getCreatedTime());
    return $date;
  }

  public function getImage() {
    $image = $this->get('field_featured_image')->getValue();
    return $image;
  }

  public function getImageAlt() {
    $image = $this->get('field_featured_image')->getValue();
    return $image;
  }

  public function getImageCaption(): ?string {
    $featuredImageCaption = $this->get('field_featured_image_caption');
    return $featuredImageCaption ? $featuredImageCaption->getString() : NULL;
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if ($fieldName === "body") {
      $body = $this->getBody();
      if ($body) {
        return GraphQLFieldResolver::resolveTextItem($body);
      }
      return NULL;
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
    if ($fieldName === "parentUrl") {
      return $this->getParentUrl();
    }
    if ($fieldName === "parentTitle") {
      return $this->getParentTitle();
    }
    if ($fieldName === "date") {
      return $this->getDate();
    }
    if($fieldName === "dateUpdated"){
      return $this->getDateUpdated();
    }
    if ($fieldName === "summary") {
      return $this->getSummary();
    }
    if ($fieldName === "url") {
      return $this->getUrl();
    }
    if ($fieldName === "featuredImage1440x810") {
      $image = $this->getImage();
      $width = '1440';
      $height = '810';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height);
      }
      return NULL;
    }
    if ($fieldName === "image720x405") {
      $image = $this->getImage();
      $width = '720';
      $height = '405';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height)['url'];
      }
      return NULL;
    }
    if ($fieldName === "image72x41") {
      $image = $this->getImage();
      $width = '72';
      $height = '41';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height)['url'];
      }
      return NULL;
    }
    if ($fieldName === "imageAltText"){
      $image = $this->getImage();
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0])['altText'];
      }
      return NULL;
    }
    if ($fieldName === "featuredImage144x81") {
      $image = $this->getImage();
      $width = '144';
      $height = '81';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height);
      }
      return NULL;
    }
    if ($fieldName === "featuredImageCaption") {
      return $this->getImageCaption();
    }
    throw new Exception("Unable to resolve value via Article resolve.");
  }

}
