/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSearchResults
// ====================================================

export interface GetSearchResults_search_result_list_signposts {
  __typename: "CouncilData";
  code: string;
  name: string;
  homepage: string;
}

export interface GetSearchResults_search_result_list {
  __typename: "SearchResult";
  id: string;
  url: string;
  title: string;
  teaser: string;
  parent: string | null;
  signposts: GetSearchResults_search_result_list_signposts[] | null;
}

export interface GetSearchResults_search {
  __typename: "SearchResults";
  council_name: string;
  total: number;
  pageSize: number;
  page: number;
  text: string;
  result_list: GetSearchResults_search_result_list[] | null;
}

export interface GetSearchResults {
  search: GetSearchResults_search;
}

export interface GetSearchResultsVariables {
  text: string;
  page: number;
}
