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

  public function getMemorialImages(): array {
    $config = config_pages_config('memorial_takeover');
    $memorialImagesField = $config ? $config->get('field_memorial_images')->getValue() : [];
    return $memorialImagesField;
  }

  public function getMemorialCondolenceLink(): array {
    $config = config_pages_config('memorial_takeover');
    $memorialCondolenceLinkField = $config ? $config->get('field_condolence_link'):[];
    $memorialCondolenceLinks = [];

    foreach ($memorialCondolenceLinkField as $link) {
      $test = $this->getLink($link);
      array_push($memorialCondolenceLinks, $test);
    }
    return $memorialCondolenceLinks;
  }

  public function getMemorialSummary(): array {
    $config = config_pages_config('memorial_takeover');
    $memorialSummaryField = $config ? $config->get('field_memorial_summary')->getValue():[];
    return $memorialSummaryField;
  }

  public function getMemorialIcon(): array {
    $config = config_pages_config('memorial_takeover');
    $memorialIconField = $config ? $config->get('field_memorial_icon')->getValue() : [];
    return $memorialIconField;
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

  public function getMemorialTheme(): bool {
    $config = config_pages_config('memorial_takeover');
    $active = $config ? $config->get('field_memorial_theme') : NULL;

    if (!is_null($active)) {
      if ($active->getString() === "1") {
        return true;
      }
    }

    return false;
  }

  public function getMemorialQuickLinks(): array {
    $config = config_pages_config('memorial_takeover');
    $quickLinksField = $config ? $config->get('field_quick_links'): [];

    $quickLinks = [];
    foreach ($quickLinksField as $link) {
      $test = $this->getLink($link);
      array_push($quickLinks, $test);
    }
    return $quickLinks;
  }

  public function getMemorialNewsLinks() : array {
    $config = config_pages_config('memorial_takeover');
    if($this->getMemorialTheme()){
      $articlePages = $config->get('field_memorial_news_links')->referencedEntities();
      $publishedPages = [];
      foreach($articlePages as $page){
        if($page->isPublished()) {
          $publishedPages[] = $page;
        }
      }
      return $publishedPages;
    }
    return [];
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

    if ($fieldName === 'memorialTakeover') {
      return $this->getMemorialTheme();
    }

    if ($fieldName === 'memorialQuickLinks') {
      
      $quickLinks = [];
      $quickLinksField = $this->getMemorialQuickLinks();

      foreach ($quickLinksField as $link) {
        $linkData = GraphQLFieldResolver::resolveLinkItem($link);
        $linkObj = [ "title"=> $linkData['title'], "url" => $linkData['url'] ];
        array_push($quickLinks, $linkObj);
      }
      return $quickLinks;
      
    }
    
    if ($fieldName === "memorialImages") {
      $memorialImages = [];
      $memorialImagesData = $this->getMemorialImages();

      foreach ($memorialImagesData as $image) {
        $image1440x810 = GraphQLFieldResolver::resolveMediaImage($image, 1440, 810);
        $image144x81 = GraphQLFieldResolver::resolveMediaImage($image, 144, 81);

        $imageObj = [ "image1440x810"=> $image1440x810['url'], "image144x81" => $image144x81['url'] ];
        array_push($memorialImages, $imageObj);
      }

      return $memorialImages;
    }

    if($fieldName === "memorialIcon") {
      $icon = $this->getMemorialIcon();
      $sddf = $icon[0];
      return $icon[0][value];
    }

    if($fieldName === "memorialCondolenceLink") {
      $condolenceLinks = [];
      $condolenceLinksField = $this->getMemorialCondolenceLink();

      foreach ($condolenceLinksField as $link) {
        $linkData = GraphQLFieldResolver::resolveLinkItem($link);
        $linkObj = [ "title"=> $linkData['title'], "url" => $linkData['url'] ];
        array_push($condolenceLinks, $linkObj);
      }
      return $condolenceLinks;
    }

    if($fieldName === "memorialSummary") {
      $summaryList = $this->getMemorialSummary();
      $returnedList = [];
      foreach ($summaryList as $summary) {
        array_push($returnedList, $summary['value']);
      }
      return $returnedList;
    }

    if ($fieldName === 'memorialNewsLinks') {
      return $this->getMemorialNewsLinks();
    }

    throw new Exception("Unable to resolve value via Homepage resolve.");
  }

}
