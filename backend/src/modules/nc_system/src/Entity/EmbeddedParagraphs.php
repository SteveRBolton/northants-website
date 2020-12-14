<?php


namespace Drupal\nc_system\Entity;

class EmbeddedParagraphs extends \Drupal\paragraphs_entity_embed\Entity\EmbeddedParagraphs implements GraphQLEntityFieldResolver {

  function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "paragraph") {
      $paragraphs = $this->getParagraph();
      if(!empty($paragraphs)) {
        return $paragraphs[0];
      }
    }
    throw new \Exception("Unable to resolve value via EmbeddedParagraphs resolve.");
  }
}
