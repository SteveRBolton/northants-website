<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class ServiceLandingPage extends Node implements GraphQLEntityFieldResolver {

  public function getBody(): TextItemBase {
    return $this->get('field_wysiwyg_slices')->first();
  }

  /**
   * @return \Drupal\nc_system\Entity\Paragraph\Section[]
   */
  public function getSections(): array {
    /* @var $sectionsField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList  */
    $sectionsField = $this->get('field_sections');
    /* @var $sections array<\Drupal\nc_system\Entity\Paragraph\Section> */
    $sections = $sectionsField->referencedEntities();
    return $sections;
  }


  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "body") {
      $body = $this->getBody();
      return GraphQLFieldResolver::resolveTextItem($body);
    }

    if($fieldName === "sections") {
      return $this->getSections();
    }

    if($fieldName === "url") {
      return $this->toUrl('canonical')->toString();
    }

    throw new \Exception("Unable to resolve value via ServiceLandingPage resolve.");
  }

}
