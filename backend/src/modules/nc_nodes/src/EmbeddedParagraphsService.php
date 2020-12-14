<?php

/**
 * @file
 * A helper service for managing the data within a paragrpah.
 */

namespace Drupal\nc_nodes;


use Drupal\Component\Utility\Html;

class EmbeddedParagraphsService {

  /**
   * Given a piece of HTML, return any Paragraphs referenced by it.
   *
   * @param $html
   *
   * @return \Drupal\paragraphs\Entity\Paragraph[]
   */
  public function getParagraphsFromHTML($html) {
    $paragraphs = [];

    /** @var \DOMElement $node */
    foreach ($this->getEmbeddedParagraphReferencesFromHTML($html) as $node) {
      try {
        $embedded_paragraph = $this->loadEmbeddedParagraphFromDOMNode($node);

        if (!empty($embedded_paragraph)) {
          /** @var \Drupal\paragraphs\Entity\Paragraph $paragraph */
          $paragraph = $embedded_paragraph->get('paragraph')[0]->entity;

          if (!in_array($paragraph, $paragraphs)) {
            $paragraphs[] = $paragraph;
          }
        }
      } catch (\Exception $e) {
        watchdog_exception('nc_nodes', $e);
      }
    }

    return $paragraphs;
  }


  /**
   *  Given a piece of HTML, return the EmbeddedParagraph(s) in it.
   * @param $html
   *
   * @return array<\Drupal\nc_system\Entity\EmbeddedParagraphs>
   */
  public function getEmbeddedParagraphsFromHTML($html) {
    $embeds = [];
    /** @var \DOMElement $node */
    foreach ($this->getEmbeddedParagraphReferencesFromHTML($html) as $node) {
      try {
        $embedded_paragraph = $this->loadEmbeddedParagraphFromDOMNode($node);
        if (!empty($embedded_paragraph)) {
          if(!in_array($embedded_paragraph, $embeds)) {
            $embeds[] = $embedded_paragraph;
          }
        }
      } catch (\Exception $e) {
        watchdog_exception('nc_nodes', $e);
      }
    }

    return $embeds;
  }

  /**
   * Given a piece of HTML, extract all the <drupal-paragraph> nodes.
   *
   * @param $html
   *
   * @return \DOMNodeList|false
   */
  public function getEmbeddedParagraphReferencesFromHTML($html) {
    $dom = Html::load($html);
    $xpath = new \DOMXPath($dom);
    return $xpath->query('//drupal-paragraph[@data-paragraph-id]');
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
  public function loadEmbeddedParagraphFromDOMNode($node) {
    $id = NULL;
    $entity = NULL;
    $id = $node->getAttribute('data-paragraph-id');
    $revision_id = $node->getAttribute('data-paragraph-revision-id');
    $entity_type = 'embedded_paragraphs';

    $entity_type_manager = \Drupal::entityTypeManager();

    if (!empty($revision_id)) {
      $entity = $entity_type_manager->getStorage($entity_type)
        ->loadRevision($revision_id);
    }
    else {
      $embed_entity = $entity_type_manager->getStorage($entity_type)
        ->loadByProperties(['uuid' => $id]);
      $entity = current($embed_entity);
    }

    return $entity;
  }

}
