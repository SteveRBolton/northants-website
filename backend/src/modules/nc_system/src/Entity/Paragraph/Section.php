<?php

namespace Drupal\nc_system\Entity\Paragraph;

use Drupal\Core\Entity\EntityStorageException;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\Entity\Node\ServiceLandingPage;
use Drupal\nc_system\Entity\Node\ServicePage;
use Drupal\paragraphs\Entity\Paragraph;

class Section extends Paragraph implements GraphQLEntityFieldResolver {

  public function getName(): string {
    /* @var $stringItem \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $stringItem = $this->get('field_name')->first();
    return $stringItem->getString();
  }

  /**
   * @return array<ServicePage>
   */
  public function getPages(): array {
    /* @var $pagesField  \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $pagesField = $this->get('field_pages');
    return $pagesField->referencedEntities();
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "name") {
      return $this->getName();
    }

    if($fieldName === "pages") {
      return $this->getPages();
    }

    if($fieldName === "parent") {
      return $this->getParentEntity();
    }
    throw new \Exception("Unable to resolve value for field via Section resolver");
  }


}
