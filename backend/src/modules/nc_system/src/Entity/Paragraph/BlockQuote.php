<?php


namespace Drupal\nc_system\Entity\Paragraph;


use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class BlockQuote extends Paragraph implements GraphQLEntityFieldResolver {

  public function getQuote(): string {
    /* @var $quoteField \Drupal\Core\Field\FieldItemList */
    $quoteField = $this->get('field_quote_text');

    /* @var $quoteItem \Drupal\Core\Field\Plugin\Field\FieldType\StringLongItem */
    $quoteItem = $quoteField->first();

    return $quoteItem->getString();
  }

  public function getCitation(): ?string {
    /* @var $citationField \Drupal\Core\Field\FieldItemList */
    $citationField = $this->get('field_citation');

    /* @var $citationItem \Drupal\Core\Field\Plugin\Field\FieldType\StringLongItem|null */
    $citationItem = $citationField->first();

    if(!empty($citationItem)) {
      return $citationItem->getString();
    }
    return null;

  }

  /**
   * @param string $fieldName
   *
   * @return string|null
   * @throws \Exception
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "quote") {
      return $this->getQuote();
    }

    if($fieldName === "citation") {
      return $this->getCitation();
    }

    throw new \Exception("Unable to resolve value for field via BlockQuote resolver");
  }

}
