<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;

class ServicePage extends Node implements GraphQLEntityFieldResolver {

  public function getBody() {
    return $this->get('field_wysiwyg_slices');
  }

  /**
   * @param string $fieldName
   *
   * @return array|mixed|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "body") {
      $body = $this->getBody()->first();
      $j =  GraphQLFieldResolver::resolveTextItem($body);
      return $j;
    }

    throw new \Exception("Unable to resolve value via ServicePage resolve.");
  }

}
