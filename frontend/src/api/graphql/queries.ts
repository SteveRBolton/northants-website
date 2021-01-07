import { gql } from '@apollo/react-hooks';
import { homepageNodeFull } from '../../cmsPages/Homepage/fragments';
import { servicePageNodeFull } from '../../cmsPages/ServicePage/fragments';
import { serviceLandingPageNodeFull } from '../../cmsPages/ServiceLandingPage/fragments';

export const getCMSContentOrRedirect = gql`
  ${homepageNodeFull}
  ${serviceLandingPageNodeFull}
  ${servicePageNodeFull}
  query GetCMSContentOrRedirect($path: String!) {
    route(path: $path) {
      ... on DrupalNodeRoute {
        node {
          ...HomepageNodeFull
          ...ServiceLandingPageNodeFull
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
