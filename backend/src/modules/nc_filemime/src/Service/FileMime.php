<?php

namespace Drupal\nc_filemime\Service;

use Drupal\Core\Config\ConfigFactory;
use Symfony\Component\Yaml\Yaml;

class FileMime {

  /**
   * Create the FileMime client.
   */
  public function __construct(ConfigFactory $configFactory) {
    $this->config = $configFactory->get('nc_filemime.settings');
  }

  public function getNiceFileMime($filemime) {
    $niceFileMimes = $this->mapNiceFileMime();

    // Return a nice filemime if one exists.
    if (array_key_exists($filemime, $niceFileMimes)) {
      return $niceFileMimes[$filemime];
    }

    return $filemime;
  }

  private function mapNiceFileMime() {
    $niceFileMimesTemp = $this->config->get('nice_filemimes');
    $niceFileMimesReplaced = str_replace('_@_', '.', Yaml::dump($niceFileMimesTemp));
    $niceFileMimes = Yaml::parse($niceFileMimesReplaced);
    return $niceFileMimes;
  }

}
