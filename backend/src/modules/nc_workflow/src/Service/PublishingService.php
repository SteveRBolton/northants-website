<?php


namespace Drupal\nc_workflow\Service;

use Drupal\Core\Datetime\DrupalDateTime;

/**
 * Class PublishingService
 *
 * @package Drupal\nc_workflow\Service
 */
class PublishingService {

  /**
   * This function takes a date and then checks to see if it is a
   * Saturday, Sunday or if not the time is before 9am or after 5pm
   * @param DrupalDateTime $date
   * @return bool
   */
  function isOutOfHours(DrupalDateTime $date) {
    $start = 9; // 9am.
    $end = 17; // 5pm.

    $day = $date->format('D');
    $hour = intval($date->format('H'));

    if($day == 'Sat' || $day == 'Sun') {
      return TRUE;
    }

    if ($hour >= $end || $hour <= $start) {
      return TRUE;
    }

    return FALSE;
  }
}
