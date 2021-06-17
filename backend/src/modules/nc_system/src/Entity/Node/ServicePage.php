<?php

namespace Drupal\nc_system\Entity\Node;

use Drupal\nc_system\Entity\Paragraph\CouncilSignposting;
use Drupal\nc_system\Entity\Paragraph\Section;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\Core\Datetime\DrupalDateTime;
use phpDocumentor\Reflection\Types\Boolean;


/**
 * Class ServicePage
 *
 * Service pages are used for the majority of the content on the site.
 * They consist of a WYSIWYG 'body' field with embedded paragraphs
 * as well as an optional Signposting paragraph,
 * and automatically generated 'In this section' links.
 *
 * See:
 * @type \Drupal\nc_system\Entity\EmbeddedParagraphs
 * @type \Drupal\nc_system\Entity\Paragraph\CouncilSignposting
 * @type \Drupal\nc_system\Entity\Node\ServiceLandingPage
 * @type Section
 *
 * @package Drupal\nc_system\Entity\Node
 */
class ServicePage extends Content implements GraphQLEntityFieldResolver {

  public function getSummary(): string {
    /* @var $summaryField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $summaryField = $this->get('field_summary');
    return $summaryField->getString();
  }

  public function getSignpostingTitle(): string {
    /* @var $titleField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $titleField = $this->get('field_signposting_title');
    return $titleField->getString();
  }

  public function getSignposting(): ?CouncilSignposting {
    /* @var $entityReference \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList*/
    $signpostingField = $this->get('field_signposting');
    /* @var $entities array<CouncilSignposting> */
    $entities = $signpostingField->referencedEntities();
    if(!empty($entities)) {
      return $entities[0];
    }
    return null;
  }

  /**
   * This function returns true or false depending field_content_warning being checked or not
   */
  public function getWarningDisclaimer(): bool {
    /* @var $disclaimerValue \Drupal\Core\Field\Plugin\Field\FieldType\BooleanItem */
    $disclaimerValue = $this->get('field_content_warning');
    if ($disclaimerValue->getString() === "1") {
      return true;
    }
    return false;
  }

  /**
   * @return \Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage|null
   */
  public function getParent() {
    /* @var $parentField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $parentField = $this->get('field_parent');
    /* @var $parents array<\Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
    $parents = $parentField->referencedEntities();
    if(!empty($parents)) {
      return $parents[0];
    }
    return null;
  }

  /**
   * This function returns an array containing information about Service Alerts
   */
  public function getServicePageAlerts() {

    $parent = $this->getParent();
    $alertItem = ['title' => ''];

    // Check for landing content type in page hierarchy
    do {
      if ($parent && $parent->isPublished()) {
        if ($parent->getType() === 'service_landing_page') {
          break;
        }
      } else {
        break;
      }

      $parent = $parent->getParent();
    } while (!is_null($parent));

    if($parent && $parent->isPublished()) {
      $active = empty($parent->get('field_enable_alert')->getValue()) ? FALSE: $parent->get('field_enable_alert')->getValue()[0]['value'];
      $expired = false;

      $expiration = empty($parent->get('field_alert_expiration_date')->getValue()) ? FALSE : $parent->get('field_alert_expiration_date')->getValue()[0]['value'];

      if($expiration) {
        $currentTime = new DrupalDateTime('now');
        $currentTime = $currentTime->format('Y-m-d H:i:s');
        $expiration = str_replace('T', ' ', $expiration);
        $expired = $currentTime > $expiration;
      }
      if ($active && !$expired) {
        $title = $parent->get('field_alert_title')->getValue()[0]['value'];
        $body = GraphQLFieldResolver::resolveTextItem($parent->get('field_alert_content')
          ->first());
        $alertType = strtolower($parent->get('field_alert_type')->getValue()[0]['value']);

        $alertItem = [
          'title' => $title,
          'content' =>  $body['value'],
          'alertType' => $alertType
        ];
      }
    }

    return $alertItem;
  }

  /**
   * Determines the 'canonical' Section this ServicePage belongs to (if any).
   *
   * The 'canonical' Section is the first section (if any) in the ServicePages's parent that references the ServicePage.
   * If no 'canonical' Section is found, null is returned.
   *
   * @return \Drupal\nc_system\Entity\Paragraph\Section|null
   */
  public function getCanonicalSection(): ?Section  {
    $parent = $this->getParent();
    $uuid = $this->uuid();
    if($parent instanceof ServiceLandingPage) {
      $sections = $parent->getHasSections();
      foreach($sections as $section) {
        $pageUUIDS = array_map(fn($page) => $page->uuid(), $section->getPages());
        if(in_array($uuid, $pageUUIDS)) {
          return $section;
        }
      }
    }
    return null;
  }
  public function getDateUpdated(): string {
    $date = $this->getChangedTime();
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
    // and;
    // If the section is in a revision we don't want these so we compare with the sections in the current revision
    return array_filter($sections, function($section) {
      $parentEntity = $section->getParentEntity();

      if ($parentEntity !== null) {
        $currentSectionIDs = array_column($parentEntity->field_sections->getValue(), 'target_id');

        if (in_array($section->id(), $currentSectionIDs)) {
          return true;
        }
      }

      return false;
    });
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {
    if ($fieldName === "body") {
      $body = $this->getBody();
      return GraphQLFieldResolver::resolveTextItem($body);
    }

    if($fieldName === "summary") {
      return $this->getSummary();
    }

    if ($fieldName === "signposting") {
      return $this->getSignposting();
    }

    if($fieldName === "canonicalSection") {
      return $this->getCanonicalSection();
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

    if ($fieldName === "topLineText") {
      return $this->getSignpostingTitle() ? $this->getSignpostingTitle() : 'Select your local area for more information:';
    }

    if ($fieldName === "warningTextDisclaimer") {
      return $this->getWarningDisclaimer();
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

    throw new \Exception("Unable to resolve value via ServicePage resolve.");
  }

}
