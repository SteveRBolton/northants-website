<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class Homepage extends Node implements GraphQLEntityFieldResolver {

  public function getBody(): TextItemBase {
    return $this->get('field_wysiwyg_slices')->first();
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "body") {
      $body = $this->getBody();
      return GraphQLFieldResolver::resolveTextItem($body);
    }

    if($fieldName === "url") {
      return $this->toUrl('canonical')->toString();
    }

    throw new \Exception("Unable to resolve value via ServiceLandingPage resolve.");
  }

}
