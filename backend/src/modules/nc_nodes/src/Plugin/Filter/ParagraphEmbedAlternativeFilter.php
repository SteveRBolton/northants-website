<?php

namespace Drupal\nc_nodes\Plugin\Filter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Render\BubbleableMetadata;
use Drupal\Core\Render\RenderContext;
use Drupal\entity_embed\Exception\EntityNotFoundException;
use Drupal\entity_embed\Exception\RecursiveRenderingException;
use Drupal\filter\FilterProcessResult;
use Drupal\paragraphs_entity_embed\Plugin\Filter\ParagraphEmbedFilter;

/**
 * Provides an alternative Paragraphs Entity Embed Filter which only does its
 * work if the request isn't via the JSON API.
 *
 * @Filter(
 *   id = "nc_paragraphs_entity_embed",
 *   title = @Translation("Display embedded paragraphs (not API) (nc_nodes module)"),
 *   description = @Translation("Embeds paragraphs using data attribute: data-paragraph-type but not if the request is via the API."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_TRANSFORM_REVERSIBLE
 * )
 */
class ParagraphEmbedAlternativeFilter extends ParagraphEmbedFilter {

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $route_name = \Drupal::routeMatch()->getRouteName();

    if (strpos($route_name, 'json') === FALSE) {
      // If this isn't a JSON API request then let the ParagraphEmbedFilter
      // do it's thing.
      return parent::process($text, $langcode);
    }

    $result = new FilterProcessResult($text);

    if (strpos($text, 'data-paragraph-id') !== FALSE) {
      // For JSON API we want to include all the paragraphs in the JSON response.
      $this->_includeParagraphIds($result, $text);
    }

    return $result;
  }

  /**
   * For each embedded paragraph, rewrite the id to point at the paragraph itself
   * not the embedded one as the embedded one is of no interest to anyone at
   * the other end of the JSON API!
   *
   * @param \Drupal\filter\FilterProcessResult $result
   * @param $text
   *
   * @return \Drupal\filter\FilterProcessResult
   */
  protected function _includeParagraphIds(FilterProcessResult $result, $text) {
    $dom = Html::load($text);
    $xpath = new \DOMXPath($dom);

    foreach ($xpath->query('//drupal-paragraph[@data-paragraph-id]') as $node) {
      /** @var \DOMElement $node */
      $entity_output = '';

      /** @var \DOMElement $node */
      try {
        // Load the entity either by UUID (preferred) or ID.
        $entity = $this->_loadEmbeddedParagraphFromDOMNode($node);

        if (!empty($entity)) {
          // Protect ourselves from recursive rendering.
          static $depth = 0;
          $depth++;
          if ($depth > 20) {
            throw new RecursiveRenderingException(sprintf('Recursive rendering detected when rendering embedded %s entity %s.', $entity_type, $entity->id()));
          }

          /** @var \Drupal\paragraphs\Entity\Paragraph $paragraph */
          $paragraph = $entity->get('paragraph')[0]->entity;
          $node->setAttribute('data-paragraph-id', $paragraph->uuid());
          $node->setAttribute('data-paragraph-revision-id', $paragraph->getRevisionId());
          $entity_output = $dom->saveXML($node);
          $depth--;
        }
        else {
          throw new EntityNotFoundException(sprintf('Unable to load an embedded embedded_paragraph entity'));
        }
      } catch (\Exception $e) {
        watchdog_exception('entity_embed', $e);
      }

      $this->replaceNodeContent($node, $entity_output);
    }

    $result->setProcessedText(Html::serialize($dom));

    return $result;
  }

  /**
   * Given an HTML node from a text input that describes a drupal-paragraph
   * element, return the entity it is referring to.
   *
   * @param $node
   *
   * @return \Drupal\Core\Entity\EntityInterface|mixed|null
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  protected function _loadEmbeddedParagraphFromDOMNode($node) {
    $id = NULL;
    $entity = NULL;
    $id = $node->getAttribute('data-paragraph-id');
    $revision_id = $node->getAttribute('data-paragraph-revision-id');
    $entity_type = 'embedded_paragraphs';

    if (!empty($revision_id)) {
      $entity = $this->entityTypeManager->getStorage($entity_type)
        ->loadRevision($revision_id);
    }
    else {
      $embed_entity = $this->entityTypeManager->getStorage($entity_type)
        ->loadByProperties(['uuid' => $id]);
      $entity = current($embed_entity);
    }

    return $entity;
  }

}
