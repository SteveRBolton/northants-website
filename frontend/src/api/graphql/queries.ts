import { gql } from '@apollo/react-hooks';
import { homepageNodeFull } from '../../cmsPages/Homepage/fragments';
import servicePageNode_Full from '../../cmsPages/ServicePage/fragments/full';
import serviceLandingPageNode_Full from '../../cmsPages/ServiceLandingPage/fragments/full';
import searchResult from '../../components/Search/SearchResult/fragment';
import newsArticle from '../../components/News/NewsArticle/fragment';
import { articleNode_Full } from '../../cmsPages/ArticlePage/fragments/full';

export const getCMSContentOrRedirect = gql`
  ${homepageNodeFull}
  ${serviceLandingPageNode_Full}
  ${servicePageNode_Full}
  ${articleNode_Full}
  query GetCMSContentOrRedirect($path: String!) {
    route(path: $path) {
      ... on DrupalNodeRoute {
        node {
          ...HomepageNodeFull
          ...ServiceLandingPageNode_Full
          ...ServicePageNode_Full
          ...ArticleNode_Full
        }
      }
      ... on DrupalNotFoundRoute {
        info
      }
      ... on DrupalRedirectRoute {
        destination
        status
      }
      ... on DrupalOfflineRoute {
        info
      }
    }
  }
`;

export const getCMSGlobals = gql`
  query GetCMSGlobals {
    globals {
      footerLinks {
        title
        url
        external
      }
      sitewideAlerts {
        id
        title
        body {
          value
        }
        alertType
      }
    }
  }
`;

export const getSearchResults = gql`
  ${searchResult}
  query GetSearchResults($text: String!, $page: Int!) {
    search(text: $text, page: $page) {
      council_name
      total
      pageSize
      page
      text
      result_list {
        ...SearchResult
      }
    }
  }
`;

export const getNewsArticles = gql`
  ${newsArticle}
  query GetNewsArticles($text: String!, $page: Int!) {
    news(text: $text, page: $page) {
      council_name
      total
      pageSize
      page
      text
      result_list {
        ...NewsArticle
      }
    }
  }
`;
