/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionPages
// ====================================================

export interface SectionPages_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface SectionPages {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: SectionPages_pages[];
}
