<?php

namespace Drupal\nc_nodes\Commands;

use Drush\Commands\DrushCommands;
use Drupal\node\Entity\Node;

/**
 * A drush command file.
 *
 * @package Drupal\drush9_custom_commands\Commands
 */
class DrushCustomCommands extends DrushCommands
{

  /**
   * Drush command that updates Service Page
   *
   * @command drush_custom_commands:update-disclaimers
   * @aliases update-disclaimers
   * @usage drush_custom_commands:update-disclaimers
   */
  public function check_warningTextDisclaimer()
  {
    $query = \Drupal::entityQuery('node')
      ->condition('type', 'service_page');
    $results = $query->execute();

    if (!empty($results)) {
      foreach ($results as $node_id) {
        $node = Node::load($node_id);
        $node->set('field_content_warning', '1');
        $node->save();
      }
    }
  }
}
