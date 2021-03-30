<?php

/**
 * @file
 * Cloudflare configuration.
 *
 * If you use the Cloudflare cache purge module, you should configure it here.
 */

$config['cloudflare_purge.settings']['cloudflare_enable'] = isset($_ENV['CLOUDFLARE_PURGE_ENABLED']) ? $_ENV['CLOUDFLARE_PURGE_ENABLED'] : FALSE;
$config['cloudflare_purge.settings']['cloudflare_purge_email'] = isset($_ENV['CLOUDFLARE_EMAIL']) ? $_ENV['CLOUDFLARE_EMAIL'] : '';
$config['cloudflare_purge.settings']['cloudflare_purge_api_key'] = isset($_ENV['CLOUDFLARE_API_KEY']) ? $_ENV['CLOUDFLARE_API_KEY'] : '';
$config['cloudflare_purge.settings']['cloudflare_purge_zone_id'] = isset($_ENV['CLOUDFLARE_ZONE_ID']) ? $_ENV['CLOUDFLARE_ZONE_ID'] : '';

// We disable the Cloudflare purging on local and development environments
if (SETTINGS_ENVIRONMENT !== D_ENVIRONMENT_PROD) {
  $config['cloudflare_purge.settings']['cloudflare_enable'] = FALSE;
}
