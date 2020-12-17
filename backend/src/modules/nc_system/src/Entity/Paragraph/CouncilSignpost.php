<?php

namespace Drupal\nc_system\Entity\Paragraph;
use Drupal\link\LinkItemInterface;
use Drupal\nc_system\Entity\TaxonomyTerm\SovereignCouncil;
use Drupal\nc_system\GraphQLFieldResolver;
use Drupal\nc_system\Entity\GraphQLEntityFieldResolver;
use Drupal\paragraphs\Entity\Paragraph;

class CouncilSignpost extends Paragraph implements GraphQLEntityFieldResolver {

  /**
   * @return \Drupal\link\LinkItemInterface|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLink(): ?LinkItemInterface {
    return $this->get('field_link')->first();
  }

  /**
   * @return \Drupal\nc_system\Entity\TaxonomyTerm\SovereignCouncil
   */
  public function getCouncil(): SovereignCouncil {
    /* @var $councilField \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList */
    $councilField = $this->get('field_council');
    /* @var $entities array<SovereignCouncil> */
    $entities = $councilField->referencedEntities();
    return $entities[0];
  }
  /**
   * @param string $fieldName
   *
   * @return array|mixed|null
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function resolveGraphQLFieldToValue(string $fieldName) {

    if($fieldName === "link") {
      $link = $this->getLink();
      if(empty($link)) {
        return NULL;
      }
      return GraphQLFieldResolver::resolveLinkItem($link);
    }

    if($fieldName === "council") {
      return $this->getCouncil();
    }

    throw new \Exception("Unable to resolve value for field via CouncilSignpost resolver");
  }

}
