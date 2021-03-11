<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;

class Content extends Node implements GraphQLEntityFieldResolver {

  public function getCouncilName(): string {
    $councilName = '';

    if (isset($_ENV['NEXT_PUBLIC_THEME'])) {
      switch ($_ENV['NEXT_PUBLIC_THEME']) {
        case 'west':
          $councilName = 'West Northamptonshire Council';
          break;

        case 'north':
          $councilName = 'North Northamptonshire Council';
          break;

        default:
          break;
      }
    }

    return $councilName;
  }

  public function getUrl(): string {
    $url = $this->toUrl()->toString();
    return $url;
  }

  public function getBody(): ?TextItemBase {
    /* @var $bodyField \Drupal\Core\Field\FieldItemList */
    $bodyField = $this->get('field_wysiwyg_slices');

    /* @var $bodyItem TextItemBase|null */
    $bodyItem = $bodyField->first();

    return $bodyItem;
  }

  public function getMetaTitle(): string {
    $metaTitleField = $this->get('field_meta_title');
    $titleField = $this->getTitle();
    $metaTitle = $metaTitleField->getString() ? $metaTitleField->getString() : $titleField;
    $metaTitle = $metaTitle . (!empty($this->getCouncilName()) ? ' | ' . $this->getCouncilName() : '');
    return $metaTitle;
  }

  public function getMetaDescription(): ?string {
    $metaDescriptionField = $this->get('field_meta_description');
    $metaDescriptionItem = $metaDescriptionField->first();
    $summaryField = $this->get('field_summary');
    $summaryItem = $summaryField->first();
    if ($metaDescriptionItem) {
      return $metaDescriptionItem->getString();
    } elseif ($summaryItem) {
      return $summaryItem->getString();
    }
    return null;
  }

  public function getMetaKeywords(): ?string {
    $keywordField = $this->get('field_keywords');
    $keywordItem = $keywordField->first();
    if ($keywordItem) {
      return $keywordItem->getString();
    }
    return null;
  }

  /**
   * @return \string[][]
   * @throws \Drupal\Core\Entity\EntityMalformedException
   */
  public function getBreadcrumbs() {
    $breadcrumbs = [];
    // Start with parent
    $current = $this->getParent();
    // Keep adding breadcrumbs until we reach the top (getParent() return null)
    while(!empty($current)) {
      array_push($breadcrumbs, [
        'title' => $current->getTitle(),
        'url' => $current->toUrl()->toString()
      ]);
      $current = $current->getParent();
    }

    array_push($breadcrumbs, [
      'title' => 'Home',
      'url' => '/'
    ]);
    return array_reverse($breadcrumbs);
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    //Metadata
    if ($fieldName === "metaTitle") {
      return $this->getMetaTitle();
    }
    if ($fieldName === "metaDescription") {
      return $this->getMetaDescription();
    }
    if ($fieldName === "metaKeywords") {
      return $this->getMetaKeywords();
    }
    throw new \Exception("Unable to resolve value via Content resolve.");
  }

}
