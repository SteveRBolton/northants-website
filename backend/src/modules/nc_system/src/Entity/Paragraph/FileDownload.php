<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\link\LinkItemInterface;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class FileDownload extends Paragraph implements GraphQLEntityFieldResolver {

  public function getFiles() {
    return $this->get('field_file')->getValue();
  }

  /**
   * {@inheritDoc}
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "files") {
      $files = $this->getFiles();
      $processedFiles = [];
      foreach ($files as $file) {
        $processedFiles[] = GraphQLFieldResolver::resolveFile($file);
      }
      return $processedFiles;
    }

    throw new \Exception("Unable to resolve value for field via FileDownload resolver");
  }

}
