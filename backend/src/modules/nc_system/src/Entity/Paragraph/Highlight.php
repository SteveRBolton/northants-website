<?php


namespace Drupal\nc_system\Entity\Paragraph;


use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\search_api\Plugin\DataType\Text;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;
use Drupal\views\Plugin\views\field\Boolean;

class Highlight extends Paragraph implements GraphQLEntityFieldResolver {

  public function getTitle(): string {

    $title = $this->get('field_highlight_title');
    $item =  $title->first()->getString();
    return $item;

  }

  public function getContent(): ?Text{
    $content = $this->get('field_content');

    $item = $content->first();

    return $item;

  }
  public function getWarning(): bool {
    $isWarning = $this->get('field_is_warning');
    return $isWarning->getBoolean;

  }
  /**
   * @param string $fieldName
   *
   * @return string|null
   * @throws \Exception
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "title") {
      return $this->getTitle();
    }

    if($fieldName === "content") {
      return $this->getContent();
    }
    if($fieldName === "isWarning") {
      return $this->getWarning();
    }
    throw new \Exception("Unable to resolve value for field via Highlight resolver");
  }

}
