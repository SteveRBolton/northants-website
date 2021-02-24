<?php

namespace Drupal\nc_solr;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;

/**
 * Service for accessing Northants Solr Services.
 */
class SolrServiceProvider {
  /**
   * SolrServiceProvider constructor.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   *   The config factory.
   *
   * @param LoggerChannelFactoryInterface $loggerChannelFactory
   *
   */
  public function __construct(ConfigFactoryInterface $configFactory, LoggerChannelFactoryInterface $loggerChannelFactory) {
    $this->loggerChannel = $loggerChannelFactory->get('nc_solr');
  }

  /** Perform a search using solr.
   *
   * @param $pageSize int
   * @param $page int
   * @return \Drupal\search_api\Query\ResultSet|\Drupal\search_api\Query\ResultSetInterface
   * @throws \Drupal\search_api\SearchApiException
   */
  public function search($text, $page, $pageSize) {
    /* @var $index \Drupal\search_api\Entity\Index */
    $index = \Drupal\search_api\Entity\Index::load('main_search_index');
    /* @var $query \Drupal\search_api\Query\Query */
    $query = $index->query();#

    //Search for the provided text
    $query->keys($text);
    //Perform search on these fields
    $query->setFulltextFields(['title', 'body', 'summary', 'url', 'parent', 'signposts', 'processed']);
    // In English
    $query->setLanguages(['en']);
    // Get one page at a time
    $query->range($page * $pageSize, $pageSize);
    return $query->execute();
  }
}
