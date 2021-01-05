/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionParentLink
// ====================================================

export interface SectionParentLink_parent {
  __typename: "ServiceLandingPageNode";
  url: string;
}

export interface SectionParentLink {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  parent: SectionParentLink_parent;
}
