<?php

namespace Drupal\nc_system;
use Drupal;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem;
use Drupal\file\Entity\File;
use Drupal\link\LinkItemInterface;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\media\Entity\Media;
use Drupal\text\Plugin\Field\FieldType\TextItemBase;


class GraphQLFieldResolver {

  /**
   * Resolves field item to graphql objects based on type.
   * @param \Drupal\Core\Field\FieldItemInterface $item
   * @param \Drupal\Core\Field\FieldDefinitionInterface $definition
   *
   * @return mixed
   * @throws \Exception
   */
  public static function resolveFieldItem(FieldItemInterface $item, FieldDefinitionInterface $definition) {

    if($item instanceof TextItemBase) {
      return self::resolveTextItem($item);
    }

    if ($item instanceof LinkItem) {
      return self::resolveLinkItem($item);
    }

    //Resolve entity reference items to the entity.
    if ($item instanceof EntityReferenceItem) {
      return $item->entity;
    }

    // Resolve empty fields to NULL, except empty booleans which resolve to false.
    if ($item->isEmpty()) {
      if ($definition->getType() === 'boolean') {
        return FALSE;
      }
      return NULL;
    }

    // Last ditch effort, grab the item value.
    return $item->value;

  }

  /**
   * @param \Drupal\link\LinkItemInterface $item
   *
   * @return array
   */
  public static function resolveLinkItem(LinkItemInterface $item) {
    return [
      'url' => $item->getUrl()->toString(),
      'title' => $item->title,
      'external' => $item->getUrl()->isExternal()
    ];
  }

  public static function resolveMediaImage($image, $width = NULL, $height = NULL) {
    $mid = $image['target_id'];
    $media = Media::load($mid);

    $fid = $media->get('field_media_image')->target_id;
    $file = File::load($fid);
    $fileUri = $file->getFileUri();

    $responsiveImageEffectService = \Drupal::getContainer()->get('responsive_image_effect.responsive_image_service');

    $url = $responsiveImageEffectService->responsiveImageUrl($fileUri, ['w' => $width, 'h' => $height]);
    $altText = $media->get('field_media_image')->alt;

    return [
      'url' => $url,
      'altText' => $altText,
    ];
  }

  /**
   * @param \Drupal\text\Plugin\Field\FieldType\TextItemBase $item
   *
   * @return array
   */
  public static function resolveTextItem(TextItemBase $item): array {
      if($item->format === "embed_basic_html" || $item->format === "basic_html_with_embed_for_accordion") {
        // Maps to FormattedFieldWithParagraphEmbed
        /* @var $embedded_service \Drupal\nc_nodes\EmbeddedParagraphsService  */
        $embedded_service = Drupal::service('nc_nodes.embedded_paragraphs');
        $embeds = $embedded_service->getEmbeddedParagraphsFromHTML($item->value);
        return [
          'value' => $item->value,
          'format' => $item->format,
          'processed' => $item->processed,
          'embeds' => $embeds
        ];
      } else {
        // Maps to FormattedField
        return [
          'value' => $item->value,
          'format' => $item->format,
          'processed' => $item->processed
        ];
      }
    }
}


