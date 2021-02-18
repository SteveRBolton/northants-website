<?php

namespace Drupal\nc_nodes\Commands;

use Drush\Commands\DrushCommands;
use Drupal\node\Entity\Node;

/**
 * A drush command file.
 *
 * @package Drupal\drush9_custom_commands\Commands
 */
class DrushCommands extends DrushCommands
{

  /**
   * Drush command that updates review dates
   *
   * @command drush9_custom_commands:review
   * @aliases d9-review-date
   * @usage drush9_custom_commands:d9-review-date
   */
  public function review_dates()
  {
    $query = \Drupal::entityQuery('node')
      ->condition('type', ['service_landing_page', 'service_page'], 'in')
      ->notExists('field_revision_date');
    $results = $query->execute();

    if (!empty($results)) {
      foreach ($results as $node_id) {
        $node = Node::load($node_id);
        $node->set('field_revision_date', date('Y-m-d', strtotime('+1 year')));
        $url_alias = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'. $node_id, 'en');
        $node->save();
      }
    }
  }
}
