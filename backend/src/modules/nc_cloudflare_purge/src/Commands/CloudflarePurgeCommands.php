<?php

namespace Drupal\nc_cloudflare_purge\Commands;

use Drush\Commands\DrushCommands;

/**
 * A Drush commandfile.
 */
class CloudflarePurgeCommands extends DrushCommands {

  /**
   * Purges everything from the Cloudflare cache.
   *
   * @command nc-cloudflare:purge-all
   * @aliases nc-cloudflare-purge-all
   */
  public function purgeAll() {
    try {
      $purge_service = \Drupal::service('nc_cloudflare_purge.service');
      $purge_service->purgeAll();
    }
    catch (\Exception $e) {
      $this->logger->error('ok', $e->getMessage());
    }
  }

  /**
   * Purge by URL from the Cloudflare cache.
   *
   * @command nc-cloudflare:purge-url
   * @aliases nc-cloudflare-purge-url
   * @param $urls
   */
  public function purgeByURL($urls) {
    try {
      $purge_service = \Drupal::service('nc_cloudflare_purge.service');
      $purge_service->purgeByUrl([$urls]);
    }
    catch (\Exception $e) {
      $this->logger->error('ok', $e->getMessage());
    }
  }

}
