<?php

namespace Drupal\nc_nodes\Plugin\Filter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Site\Settings;
use Drupal\filter\FilterProcessResult;
use Drupal\node\Entity\Node;
use Drupal\node\NodeInterface;
use Drupal\paragraphs_entity_embed\Plugin\Filter\ParagraphEmbedFilter;

/**
 * Provides a filter that takes /node/id type urls and replaces then with their
 * current alias or strips them if the node is unpublished.
 *
 * i.e. <a href="https://www.example.com/node/5"> becomes <a href="/some/page">
 *
 * @Filter(
 *   id = "nc_convert_relative_node_urls",
 *   title = @Translation("Convert node urls to their alias (nc_nodes module)"),
 *   description = @Translation("Href links of the type /node/id become their alias or are removed if the node is unpublished."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_TRANSFORM_REVERSIBLE
 * )
 */
class ConvertRelativeNodeUrlsFilter extends ParagraphEmbedFilter {

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $result = new FilterProcessResult($text);

    if (strpos($text, 'href="/node/') !== FALSE) {
      $this->_convertRelativeNodeUrls($result, $text);
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
  protected function _convertRelativeNodeUrls(FilterProcessResult $result, $text) {
    $dom = Html::load($text);
    $xpath = new \DOMXPath($dom);

    foreach ($xpath->query('//a[@href]') as $node) {
      /** @var \DOMElement $node */
      $url = $node->getAttribute('href');
      $found = preg_match('/\/node\/([0-9]*)/', $url, $matches);

      if ($found === 1 && !empty($matches[1])) {
        $entity = Node::load($matches[1]);
        if (!empty($entity) && $entity instanceof NodeInterface && $entity->isPublished()) {
          // If this is a published node reference then link to its real URL.
          $node->setAttribute('href', $entity->toUrl()->toString());

          if ($entity->hasField('seo_title') && !empty($entity->seo_title->value)) {
            $node->setAttribute('title', $entity->seo_title->value);
          }

          $entity_output = $dom->saveXML($node);
          $this->replaceNodeContent($node, $entity_output);
        }
        else {
          // If this is an unpublished node or not really a node at all then
          // remove the link.
          $new_node = $dom->createTextNode($node->textContent);
          $node->parentNode->replaceChild($new_node, $node);
        }
      }
    }

    $result->setProcessedText(Html::serialize($dom));

    return $result;
  }

}
