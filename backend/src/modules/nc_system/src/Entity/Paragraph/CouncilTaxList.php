<?php


namespace Drupal\nc_system\Entity\Paragraph;


use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class CouncilTaxList extends Paragraph implements GraphQLEntityFieldResolver {

    public function getTopText(): string {
        $topText = $this->get('field_top_text');
        $topTextItem = $topText->first();
        $processed = nl2br($topTextItem->getString());
        return $processed;
    }

    public function getBottomText(): string {
        $bottomText = $this->get('field_bottom_text');
        $bottomTextItem = $bottomText->first();
        $processed = nl2br($bottomTextItem->getString());
        return $processed;
    }

  /**
   * @param string $fieldName
   *
   * @return string|null
   * @throws \Exception
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "topText") {
        return $this->getTopText();
    }
  
    if($fieldName === "bottomText") {
        return $this->getBottomText();
    }

    throw new \Exception("Unable to resolve value for field via CouncilTaxList resolver");
  }

}