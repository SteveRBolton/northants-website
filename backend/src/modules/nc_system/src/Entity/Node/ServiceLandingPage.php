<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\nc_system\Entity\Paragraph\Section;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;
use Drupal\Core\Datetime\DrupalDateTime;

class ServiceLandingPage extends Content implements GraphQLEntityFieldResolver {

  public function getSummary(): string {
    /* @var $summaryField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $summaryField = $this->get('field_summary');
    return $summaryField->getString();
  }

  public function getIcon(): ?string {
    /* @var $iconField string */
    $iconField = $this->get('field_icon')->first();
    if ($iconField) {
      return $iconField->getString();
    }
    return null;
  }

  /**
   * @return \Drupal\nc_system\Entity\Node\ServiceLandingPage|null
   */
  public function getParent(): ?ServiceLandingPage {
    /* @var $parentField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $parentField = $this->get('field_parent');
    /* @var $parents array<\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
    $parents = $parentField->referencedEntities();
    if(!empty($parents)) {
      return $parents[0];
    }
    return null;
  }

  /**
   * @return \Drupal\nc_system\Entity\Paragraph\Section[]
   */
  public function getHasSections(): array {
    /* @var $sectionsField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList  */
    $sectionsField = $this->get('field_sections');
    /* @var $sections array<\Drupal\nc_system\Entity\Paragraph\Section> */
    $sections = $sectionsField->referencedEntities();
    return $sections;
  }

  public function getDateUpdated(): string {
    $date =  $this->getChangedTime();
    return strval($date);
  }
  /**
   * Loads all sections that reference this page.
   *
   * @return array<Section>
   */
  public function getInSections(): array {
    $sectionIDs = \Drupal::entityQuery('paragraph')->condition('type', 'section')->condition('field_pages', $this->id())->execute();
    /* @var $sections array<Section> */
    $sections =  Section::loadMultiple($sectionIDs);

    // Filter out orphaned 'sections.
    // If you delete a service landing page referencing a section, the section is not immediately deleted, so the entityQuery above will see it.
    // We don't want those sections, so they are filtered out here:
    // See https://www.drupal.org/project/entity_reference_revisions/issues/2771531
    return array_filter($sections, fn($section) => $section->getParentEntity() !== null);
  }

  /**
   * This function returns an array containing information about Service Alerts
   */
  public function getServicePageAlerts() {
    $active = $this->get('field_enable_alert')->getValue()[0]['value'];
    $expired = false;

    $expiration = $this->get('field_alert_expiration_date')->getValue()[0]['value'];
    $alertItem = ['title' => ''];

    if($expiration) {
      $currentTime = new DrupalDateTime('now');
      $currentTime = $currentTime->format('Y-m-d H:i:s');
      //2021-05-21T17:57:07
      $expiration = str_replace('T', ' ', $expiration);
      $expired = $currentTime > $expiration;
    }
    if ($active && !$expired) {
      $title = $this->get('field_alert_title')->getValue()[0]['value'];
      $body = GraphQLFieldResolver::resolveTextItem($this->get('field_alert_content')
        ->first());
      $alertType = strtolower($this->get('field_alert_type')->getValue()[0]['value']);

      $alertItem = [
        'title' => $title,
        'content' =>  $body['value'],
        'alertType' => $alertType
      ];
    }
    return $alertItem;
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if($fieldName === "body") {
      $body = $this->getBody();
      if($body) {
        return GraphQLFieldResolver::resolveTextItem($body);
      }
      return null;
    }

    if($fieldName === "summary") {
      return $this->getSummary();
    }

    if($fieldName === "hasSections") {
      return $this->getHasSections();
    }

    if($fieldName === "inSections") {
      return $this->getInSections();
    }

    if($fieldName === "url") {
      return $this->getUrl();
    }

    if ($fieldName === "breadcrumbs") {
      return $this->getBreadcrumbs();
    }

    if ($fieldName === "icon") {
      return $this->getIcon();
    }
    if($fieldName === "dateUpdated"){
      return $this->getDateUpdated();
    }
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
    if ($fieldName === "serviceAlert") {
      return $this->getServicePageAlerts();
    }


    throw new \Exception("Unable to resolve value via ServiceLandingPage resolve.");
  }

}
