/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Section
// ====================================================

export interface Section_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export interface Section_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export type Section_pages = Section_pages_ServiceLandingPageNode | Section_pages_ServicePageNode;

export interface Section {
  __typename: "SectionParagraph";
  name: string;
  pages: Section_pages[];
}
