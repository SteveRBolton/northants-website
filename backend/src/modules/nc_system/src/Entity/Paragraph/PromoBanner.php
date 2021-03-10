<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\link\LinkItemInterface;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class PromoBanner extends Paragraph implements GraphQLEntityFieldResolver {

  public function getTitle(): string {
    /* @var $stringItem \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $stringItem = $this->get('field_title')->first();
    return $stringItem->getString();
  }

  public function getBody(): TextItemBase {
    /* @var $bodyField \Drupal\Core\Field\FieldItemList */
    $bodyField = $this->get('field_body');
    /* @var $bodyItem TextItemBase */
    $bodyItem = $bodyField->first();
    return $bodyItem;
  }

  public function getLink(): LinkItemInterface {
    return $this->get('field_call_to_action')->first();
  }

  public function getImage() {
    $image = $this->get('field_image')->getValue();
    return $image;
  }

  public function resolveGraphQLFieldToValue(string $fieldName) {
    if ($fieldName === 'title') {
      return $this->getTitle();
    }
    if ($fieldName === 'body') {
      $body = $this->getBody();
      return GraphQLFieldResolver::resolveTextItem($body);
    }
    if ($fieldName === 'link') {
      $link = $this->getLink();
      if(empty($link)) {
        return NULL;
      }
      return GraphQLFieldResolver::resolveLinkItem($link);
    }
    if ($fieldName === 'image1440x810') {
      $image = $this->getImage();
      $width = '1440';
      $height = '810';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height);
      }
      return NULL;
    }
    if ($fieldName === 'image144x81') {
      $image = $this->getImage();
      $width = '144';
      $height = '81';
      if ($image) {
        return GraphQLFieldResolver::resolveMediaImage($image[0], $width, $height);
      }
      return NULL;
    }
    throw new \Exception("Unable to resolve value for field via PromoBannerß resolver");
  }
}
