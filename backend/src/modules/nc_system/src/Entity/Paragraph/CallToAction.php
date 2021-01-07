<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\link\LinkItemInterface;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class CallToAction extends Paragraph implements GraphQLEntityFieldResolver {

  /**
   * @return \Drupal\link\LinkItemInterface|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLink(): ?LinkItemInterface {
    return $this->field_link->first();
  }

  /**
   * {@inheritDoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "link") {
      $link = $this->getLink();
      if(empty($link)) {
        return NULL;
      }
      return GraphQLFieldResolver::resolveLinkItem($link);
    }

    throw new \Exception("Unable to resolve value for field via CallToAction resolver");
  }

}
