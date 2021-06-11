<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\link\LinkItemInterface;
class MemorialQuickLink extends Paragraph implements GraphQLEntityFieldResolver {


  /**
   * @return \Drupal\link\LinkItemInterface|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLink(): ?LinkItemInterface {
    return $this->field_memorial_link_title->first();
  }

  public function getMemorialIcon() : ?string  {
    $iconField = $this->get('field_memorial_link_icon')->first();
    if ($iconField) {
      return $iconField->getString();
    }
    return null;
  }

  public function getMemorialLinkSummary(): string {
    $summary = $this->get('field_memorial_link_summ');
    return $summary->getString();
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    // title: String!
    // url: String!
    // summary: String
    // icon: Image
    if($fieldName === "icon") {
      return $this->getMemorialIcon();
    }
    if($fieldName === "link") {
      $link = $this->getLink();
      if(empty($link)) {
        return NULL;
      }
      return GraphQLFieldResolver::resolveLinkItem($link);
    }

    if($fieldName === "summary") {
      return $this->getMemorialLinkSummary();
    }

    throw new \Exception("Unable to resolve value for field via Memorial Quick Link resolver");
  }

}

