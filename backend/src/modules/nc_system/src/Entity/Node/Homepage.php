<?php

namespace Drupal\nc_system\Entity\Node;
use Drupal\link\LinkItemInterface;
use Drupal\nc_system\Entity\Paragraph\PromoBanner;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Exception;

class Homepage extends Content implements GraphQLEntityFieldResolver {

  public function getServiceLinks(): ?array {
    /* @var $serviceLinkField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList  */
    $serviceLinkField = $this->get('field_service_links_list');
    /* @var $serviceLinks array<\Drupal\nc_system\Entity\Paragraph\ServiceLinks> */
    $serviceLinks = $serviceLinkField->referencedEntities();
    return $serviceLinks;
  }

  /**
   * @return \Drupal\link\LinkItemInterface|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLink($link): LinkItemInterface {
    return $link;
  }

  public function getPromotedLinks(): array {
    $promoLinks = [];
    $promoLinksField = $this->field_homepage_hero_links;
    foreach ($promoLinksField as $link) {
      $test = $this->getLink($link);
      array_push($promoLinks, $test);
    }
    return $promoLinks;
  }

  public function getHeroImages(): array {
    $heroImagesField = $this->get('field_homepage_hero_images')->getValue();
    return $heroImagesField;
  }

  public function getPromoBanner(): ?PromoBanner{
    /* @var $entityReference \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList*/
    $promoBannerField = $this->get('field_promotional_banner');
    /* @var $entities array<PromoBanner> */
    $entities = $promoBannerField->referencedEntities();
    if(!empty($entities)) {
      return $entities[0];
    }
    return null;
  }

  public function getFeaturedNews($number): array {
    $featuredNews = [];
    $nids = \Drupal::entityQuery('node')
      ->condition('type','news_article')
      ->condition('promote', 1)
      ->condition('status', 1)
      ->sort('created', 'DESC')
      ->range(0, $number)
      ->execute();
    $nodes =  \Drupal\node\Entity\Node::loadMultiple($nids);
    return $nodes;
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

    if ($fieldName === "serviceLinks") {
      return $this->getServiceLinks();
    }

    //Metadata
    if ($fieldName === "metaTitle") {
      return $this->getCouncilName();
    }
    if ($fieldName === "metaDescription") {
      return $this->getMetaDescription();
    }
    if ($fieldName === "metaKeywords") {
      return $this->getMetaKeywords();
    }
    if ($fieldName === "promoBanner") {
      return $this->getPromoBanner();
    }
    if ($fieldName === "promotedLinks") {
      $promotedLinks = [];
      $promotedLinksField = $this->getPromotedLinks();

      foreach ($promotedLinksField as $link) {
        $linkData = GraphQLFieldResolver::resolveLinkItem($link);
        $linkObj = [ "title"=> $linkData['title'], "url" => $linkData['url'] ];
        array_push($promotedLinks, $linkObj);
      }
      return $promotedLinks;
    }
    if ($fieldName === "heroImages") {
      $images = [];
      $imagesData = $this->getHeroImages();

      foreach ($imagesData as $image) {
        $image1440x810 = GraphQLFieldResolver::resolveMediaImage($image, 1440, 810);
        $image144x81 = GraphQLFieldResolver::resolveMediaImage($image, 144, 81);

        $imageObj = [ "image1440x810"=> $image1440x810['url'], "image144x81" => $image144x81['url'] ];
        array_push($images, $imageObj);
      }

      return $images;
    }
    if ($fieldName === 'featuredNews') {
      $featuredNews = $this->getFeaturedNews(3);
      return $featuredNews;
    }
    throw new Exception("Unable to resolve value via Homepage resolve.");
  }

}
