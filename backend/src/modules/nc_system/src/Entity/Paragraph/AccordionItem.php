<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class AccordionItem extends Paragraph implements GraphQLEntityFieldResolver {

  public function getTitle(): string {
    /* @var $title \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $title = $this->get('field_title');
    return $title->getString();
  }

  public function getSectionSummary(): ?string {
    /* @var $summaryField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $summaryField = $this->get('field_summary');
    return $summaryField->getString();
  }

  public function getBody(): TextItemBase {
    /* @var $bodyField \Drupal\Core\Field\FieldItemList */
    $bodyField = $this->get('field_wysiwyg_slices');

    /* @var $bodyItem TextItemBase|null */
    $bodyItem = $bodyField->first();

    return $bodyItem;
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "title") {
      return $this->getTitle();
    }

    if($fieldName === "summary") {
      return $this->getSectionSummary();
    }

    if($fieldName === "body") {
      $body = $this->getBody();
      if($body) {
        return GraphQLFieldResolver::resolveTextItem($body);
      }
      return null;
    }

    throw new \Exception("Unable to resolve value for field via CouncilSignpost resolver");
  }

}
