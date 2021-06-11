/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MemorialQuickLink
// ====================================================

export interface MemorialQuickLink_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
}

export interface MemorialQuickLink {
  __typename: "QuickLinkParagraph";
  id: string;
  link: MemorialQuickLink_link;
  summary: string | null;
  icon: string | null;
}
