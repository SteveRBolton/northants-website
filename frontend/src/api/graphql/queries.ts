import { gql } from '@apollo/react-hooks';
import { servicePageNodeFull } from '../../cmsPages/ServicePage/fragments';

export const getCMSContentOrRedirect = gql`
  ${servicePageNodeFull}
  query GetCMSContentOrRedirect($path: String!) {
    route(path: $path) {
      ... on DrupalNodeRoute {
        node {
          ...ServicePageNodeFull
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
