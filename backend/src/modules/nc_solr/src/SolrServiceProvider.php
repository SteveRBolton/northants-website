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
   * @return \Drupal\search_api\Query\ResultSet|\Drupal\search_api\Query\ResultSetInterface | void
   * @throws \Drupal\search_api\SearchApiException
   */
  public function search($text, $page, $pageSize) {
    /* @var $index \Drupal\search_api\Entity\Index */
    $index = \Drupal\search_api\Entity\Index::load('main_search_index');
    /* @var $query \Drupal\search_api\Query\Query */
    $query = $index->query();
    // Set parse mode
    $query->getParseMode()->setConjunction('OR');
    //Search for the provided text
    $query->keys($text);
    //Perform search on these fields
    $query->setFulltextFields(['title', 'body', 'summary', 'url', 'parent', 'signposts', 'processed', 'meta_keywords', 'meta_title', 'meta_summary', 'terms', 'negative_search_boost']);
    // In English
    $query->setLanguages(['en']);
    // Get one page at a time
    $query->range($page * $pageSize, $pageSize);
    //Spellchecking for Did you mean? Functionality
    $keys = $query->getKeys();
    if($keys) {
      if (!is_array($keys)) {
        return;
      }
      $query->setOption('search_api_spellcheck', [
        'keys' => array_filter($keys, 'is_int', ARRAY_FILTER_USE_KEY),
        'count' => '10',
        'collate' => TRUE,
      ]);
    }
    return $query->execute();
  }

  /** Search the news index using solr
   *
   * @param $pageSize int
   * @param $page int
   * @param $articleTypes string
   * @param $services string
   * @return \Drupal\search_api\Query\ResultSet|\Drupal\search_api\Query\ResultSetInterface
   * @throws \Drupal\search_api\SearchApiException
   */
  public function news($text, $page, $pageSize, $articleType, $services, $sortBy) {
    /* @var $index \Drupal\search_api\Entity\Index */
    $index = \Drupal\search_api\Entity\Index::load('news');
    /* @var $query \Drupal\search_api\Query\Query */
    $query = $index->query();#

    //Search for the provided text
    $query->keys($text);
    //Perform search on these fields
    $query->setFulltextFields(['title', 'body', 'summary', 'url', 'parent', 'parent_title', 'processed', 'keywords', 'meta_title', 'meta_summary']);
    // Only search for press releases
    if ($articleType == 'press-release') {
      $query->addCondition('press_release', TRUE);
    }
    // Only search for articles
    if ($articleType == 'article') {
      $query->addCondition('press_release', FALSE);
    }
    // Search for articles in a particular service category
    if ($services != 0) {
      $query->addCondition('parent', $services);
    }
    //Sort
    $query->sort('created', $sortBy);
    // In English
    $query->setLanguages(['en']);
    // Get one page at a time
    $query->range($page * $pageSize, $pageSize);
    return $query->execute();
  }

}
