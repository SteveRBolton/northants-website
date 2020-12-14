<?php

/**
 * @file
 * E-mail settings.
 */

if (SETTINGS_ENVIRONMENT === D_ENVIRONMENT_PROD) {
  $config['reroute_email.settings']['enable'] = FALSE;
}
else {
  $config['reroute_email.settings']['address'] = 'YOUR_EMAIL@deeson.co.uk';
  $config['reroute_email.settings']['enable'] = TRUE;
  $config['reroute_email.settings']['message'] = TRUE;
  $config['reroute_email.settings']['whitelist'] = '*@deeson.co.uk';
}
