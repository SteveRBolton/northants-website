<?php

namespace Drupal\nc_system\Entity\Node;

use Drupal\nc_system\Entity\Paragraph\CouncilSignposting;
use Drupal\nc_system\Entity\Paragraph\Section;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\node\Entity\Node;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;


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
class ServicePage extends Node implements GraphQLEntityFieldResolver {

  public function getBody(): TextItemBase {
    return $this->get('field_wysiwyg_slices')->first();
  }

  public function getSummary(): string {
    /* @var $summaryField \Drupal\Core\Field\Plugin\Field\FieldType\StringItem */
    $summaryField = $this->get('field_summary');
    return $summaryField->getString();
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

  public function getBreadcrumbs() {
    $breadcrumbs = [
      ['title' => 'Home',
        'url' => '/']
    ];
    $parentField = $this->get('field_parent');
    $entities = $parentField->referencedEntities();
    if(!empty($parentField)) {
      $parentPage = [
        'title' => $entities[0]->getTitle(),
        'url' => $entities[0]->toUrl()->toString()
      ];
      array_push($breadcrumbs, $parentPage);
    }

    $currentPage = [
      'title' => $this->getTitle(),
      'url' => $this->toUrl()->toString()
    ];
    array_push($breadcrumbs, $currentPage);
    return $breadcrumbs;
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
      $sections = $parent->getSections();
      foreach($sections as $section) {
        $pageUUIDS = array_map(fn($page) => $page->uuid(), $section->getPages());
        if(in_array($uuid, $pageUUIDS)) {
          return $section;
        }
      }
    }
    return null;
  }

  /**
   * Loads all sections that reference this page.
   *
   * @return array<Section>
   */
  public function getSections(): array {
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

    if($fieldName === "sections") {
      return $this->getSections();
    }

    if($fieldName === "url") {
      return $this->toUrl('canonical')->toString();
    }


    if ($fieldName === "breadcrumbs") {
      return $this->getBreadcrumbs();
    }
    throw new \Exception("Unable to resolve value via ServicePage resolve.");
  }

}
