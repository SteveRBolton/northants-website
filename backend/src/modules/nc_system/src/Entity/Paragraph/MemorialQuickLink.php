<?php


namespace Drupal\nc_system\Entity\Paragraph;


use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class MemorialQuickLink extends Paragraph implements GraphQLEntityFieldResolver {

  public function getIcon(): string {
    /* @var $iconield \Drupal\Core\Field\FieldItemList */
    $iconField = $this->get('field_icon');

    /* @var $iconItem \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $iconItem = $iconField->first();
    if(!empty($iconItem)) {
      return $iconItem->getString();
    }
    return null;
  }

  // public function getCitation(): ?string {
  //   /* @var $citationField \Drupal\Core\Field\FieldItemList */
  //   $citationField = $this->get('field_citation');

  //   /* @var $citationItem \Drupal\Core\Field\Plugin\Field\FieldType\StringLongItem|null */
  //   $citationItem = $citationField->first();

  //   if(!empty($citationItem)) {
  //     return $citationItem->getString();
  //   }
  //   return null;

  // }

  /**
   * @param string $fieldName
   *
   * @return string|null
   * @throws \Exception
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "icon") {
      return $this->getIcon();
    }

    // if($fieldName === "citation") {
    //   return $this->getCitation();
    // }

    throw new \Exception("Unable to resolve value for field via MemorialQuickLink resolver");
  }

}
