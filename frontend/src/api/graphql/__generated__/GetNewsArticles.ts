/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNewsArticles
// ====================================================

export interface GetNewsArticles_news_allServices {
  __typename: "NewsParams";
  id: string;
  title: string;
}

export interface GetNewsArticles_news_allArticleTypes {
  __typename: "NewsParams";
  id: string;
  title: string;
}

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
  service: string;
  articleType: string[];
  sortBy: string;
  allServices: GetNewsArticles_news_allServices[];
  allArticleTypes: GetNewsArticles_news_allArticleTypes[];
  result_list: GetNewsArticles_news_result_list[] | null;
}

export interface GetNewsArticles {
  news: GetNewsArticles_news;
}

export interface GetNewsArticlesVariables {
  text: string;
  page: number;
  articleType?: string | null;
  services?: string | null;
  sortBy: string;
}
