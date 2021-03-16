/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNewsArticles
// ====================================================

export interface GetNewsArticles_news_result_list {
  __typename: "NewsArticle";
  id: string;
  title: string;
  link: string;
  excerpt: string;
  date: number;
  image720x405: string | null;
  image72x41: string | null;
  imageAltText: string | null;
}

export interface GetNewsArticles_news {
  __typename: "NewsArticles";
  council_name: string;
  total: number;
  pageSize: number;
  page: number;
  text: string;
  result_list: GetNewsArticles_news_result_list[] | null;
}

export interface GetNewsArticles {
  news: GetNewsArticles_news;
}

export interface GetNewsArticlesVariables {
  text: string;
  page: number;
}
