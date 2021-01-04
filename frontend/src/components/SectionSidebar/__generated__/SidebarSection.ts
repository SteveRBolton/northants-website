/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SidebarSection
// ====================================================

export interface SidebarSection_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface SidebarSection {
  __typename: "SectionParagraph";
  name: string;
  pages: SidebarSection_pages[];
}
