<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class Accordion extends Paragraph implements GraphQLEntityFieldResolver {

  /**
   * @return \Drupal\nc_system\Entity\Paragraph\AccordionItem
   */
  public function getSections(): array {
    /* @var $sectionsField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $sectionsField = $this->get('field_section');
    return $sectionsField->referencedEntities();
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "sections") {
      return $this->getSections();
    }

    throw new \Exception("Unable to resolve value for field via Accordion resolver");
  }

}
