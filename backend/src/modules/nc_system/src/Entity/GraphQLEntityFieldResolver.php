<?php
namespace Drupal\nc_system\Entity;

interface GraphQLEntityFieldResolver {

  /**
   * Resolve the provided fieldName to data for graphql.
   * @param string $fieldName
   *
   * @return mixed
   */
  public function resolveGraphQLFieldToValue(string $fieldName);


}
