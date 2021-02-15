import { gql } from '@apollo/react-hooks';
import { homepageNodeFull } from '../../cmsPages/Homepage/fragments';
import servicePageNode_Full from '../../cmsPages/ServicePage/fragments/full';
import serviceLandingPageNode_Full from '../../cmsPages/ServiceLandingPage/fragments/full';
import searchResult from '../../components/Search/SearchResult/fragment';

export const getCMSContentOrRedirect = gql`
  ${homepageNodeFull}
  ${serviceLandingPageNode_Full}
  ${servicePageNode_Full}
  query GetCMSContentOrRedirect($path: String!) {
    route(path: $path) {
      ... on DrupalNodeRoute {
        node {
          ...HomepageNodeFull
          ...ServiceLandingPageNode_Full
          ...ServicePageNode_Full
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
