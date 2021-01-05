/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Section
// ====================================================

export interface Section_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  summary: string;
}

export interface Section {
  __typename: "SectionParagraph";
  name: string;
  pages: Section_pages[];
}
