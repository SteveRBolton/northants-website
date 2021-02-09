/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SearchResult
// ====================================================

export interface SearchResult_signposts {
  __typename: "CouncilData";
  code: string;
  name: string;
  homepage: string;
}

export interface SearchResult {
  __typename: "SearchResult";
  id: string;
  url: string;
  title: string;
  teaser: string;
  signposts: SearchResult_signposts[] | null;
}
