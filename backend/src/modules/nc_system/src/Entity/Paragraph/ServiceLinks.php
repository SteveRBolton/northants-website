<?php

namespace Drupal\nc_system\Entity\Paragraph;

use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\Entity\Node\ServiceLandingPage;
use Drupal\paragraphs\Entity\Paragraph;

class ServiceLinks extends Paragraph implements GraphQLEntityFieldResolver {

  public function getLandingPage(): ServiceLandingPage {
      /* @var $landingPage \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
      $landingPage = $this->get('field_service_landing_page');
      /* @var $landingPages array<\Drupal\nc_system\Entity\Node\ServicePage|\Drupal\nc_system\Entity\Node\ServiceLandingPage> */
      $landingPages = $landingPage->referencedEntities();
      if(!empty($landingPages)) {
        return $landingPages[0];
      }
  }
  /**
   * @return array<ServicePage>
   */
  public function getServicePages(): array {
    /* @var $pagesField  \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $pagesField = $this->get('field_service_pages');
    $servicePages = $pagesField->referencedEntities();

    $publishedPages = [];
    foreach($servicePages as $page){
      if($page->isPublished()) {
        $publishedPages[] = $page;
      }
    }
    return $publishedPages;
  }

  /**
   * {@inheritdoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "serviceLandingPage") {
      return $this->getLandingPage();
    }

    if($fieldName === "servicePages") {
      $test =  $this->getServicePages();
      return $this->getServicePages();
    }

    throw new \Exception("Unable to resolve value for field via Service Links resolver");
  }

}
