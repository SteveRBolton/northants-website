<?php


namespace Drupal\nc_system\Entity\Paragraph;


use Drupal\link\LinkItemInterface;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class CouncilSignposting extends Paragraph implements GraphQLEntityFieldResolver {

  public function getTopLine(): ?string {
    /* @var $first \Drupal\Core\Field\Plugin\Field\FieldType\StringItem|null */
    $item = $this->get('field_signposting_top_line_text')->first();
    if(!empty($item)) {
      return $item->getString();
    }
    return null;
  }

  public function getOtherCouncilLink(): ?LinkItemInterface {
    return $this->get('field_other_council_link')->first();
  }

  /**
   * @return array<\Drupal\nc_system\Entity\Paragraph\CouncilSignpost>
   */
  public function getSignposts(): array {
    /* @var $signpostsField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $signpostsField = $this->get('field_signposts');
    return $signpostsField->referencedEntities();
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "topLine") {
      return $this->getTopLine();
    }

    if($fieldName === "otherCouncil") {
      $linkItem = $this->getOtherCouncilLink();
      return !empty($linkItem) ? GraphQLFieldResolver::resolveLinkItem($linkItem) : NULL;
    }

    if($fieldName === "signposts") {
      return $this->getSignposts();
    }

    throw new \Exception("Unable to resolve value for field via CouncilSignposting resolver");
  }

}
