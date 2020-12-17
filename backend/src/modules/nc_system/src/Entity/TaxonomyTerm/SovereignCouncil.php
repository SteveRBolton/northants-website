<?php

namespace Drupal\nc_system\Entity\TaxonomyTerm;

use Drupal\link\LinkItemInterface;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\taxonomy\Entity\Term;

/**
 * Class SovereignCouncil
 *
 * Sovereign Councils are the councils that made up Northamptonshire
 * before unitary authority merging. E.g 'East Northamptonshire', 'Corby'
 *
 * @package Drupal\nc_system\Entity\TaxonomyTerm
 */
class SovereignCouncil extends Term implements GraphQLEntityFieldResolver {

  /**
   * Gets the SovereignCouncil homepage as a LinkItem
   * @return \Drupal\link\LinkItemInterface
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getHomepage(): LinkItemInterface {
    return $this->get('field_homepage')->first();
  }

  /**
   * @param string $fieldName
   *
   * @return array|mixed|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "name") {
      return $this->getName();
    }

    if($fieldName === "homepage") {
      $link = $this->getHomepage();
      return GraphQLFieldResolver::resolveLinkItem($link);
    }

    throw new \Exception("Unable to resolve value for field via Signpost resolver");
  }
}
