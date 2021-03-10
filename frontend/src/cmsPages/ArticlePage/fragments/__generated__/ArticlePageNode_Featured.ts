/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticlePageNode_Featured
// ====================================================

export interface ArticlePageNode_Featured_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface ArticlePageNode_Featured {
  __typename: "ArticlePageNode";
  id: string;
  title: string;
  url: string;
  featuredImage1440x810: ArticlePageNode_Featured_featuredImage1440x810 | null;
  date: string;
}
