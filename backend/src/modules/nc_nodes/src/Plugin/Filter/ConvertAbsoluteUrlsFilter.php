<?php

namespace Drupal\nc_nodes\Plugin\Filter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Site\Settings;
use Drupal\filter\FilterProcessResult;
use Drupal\paragraphs_entity_embed\Plugin\Filter\ParagraphEmbedFilter;

/**
 * Provides a filter that takes out the absolute url from saved links to make
 * them relative to the site.
 *
 * i.e. <a href="https://www.example.com/some/page"> becomes <a href="/some/page">
 *
 * @Filter(
 *   id = "nc_convert_absolute_urls",
 *   title = @Translation("Convert absolute URLs in links to relative ones (nc_nodes module)"),
 *   description = @Translation("If the domain is inside a link href then remove it to make the link relative."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_TRANSFORM_REVERSIBLE
 * )
 */
class ConvertAbsoluteUrlsFilter extends ParagraphEmbedFilter {

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $result = new FilterProcessResult($text);
    $frontend_uri = Settings::get('frontend_uri');

    if (strpos($text, $frontend_uri) !== FALSE) {
      $this->_convertAbsoluteLinkUrls($result, $text, $frontend_uri);
    }

    return $result;
  }

  /**
   * @param \Drupal\filter\FilterProcessResult $result
   * @param $text
   * @param string $frontend_uri
   *
   * @return \Drupal\filter\FilterProcessResult
   */
  protected function _convertAbsoluteLinkUrls(FilterProcessResult $result, $text, $frontend_uri) {
    $dom = Html::load($text);
    $xpath = new \DOMXPath($dom);

    foreach ($xpath->query('//a[@href]') as $node) {
      /** @var \DOMElement $node */
      $url = $node->getAttribute('href');
      $node->setAttribute('href', str_replace($frontend_uri, '', $url));
      $entity_output = $dom->saveXML($node);
      $this->replaceNodeContent($node, $entity_output);
    }

    $result->setProcessedText(Html::serialize($dom));

    return $result;
  }

}
