/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionPages
// ====================================================

export interface SectionPages_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface SectionPages_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
}

export type SectionPages_pages = SectionPages_pages_ServicePageNode | SectionPages_pages_ServiceLandingPageNode;

export interface SectionPages {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: SectionPages_pages[];
}
