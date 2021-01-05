import { gql } from '@apollo/react-hooks';
import breadcrumbsFragment from '../../components/Breadcrumbs/fragment';

const serviceLandingPageNodeFull = gql`
  ${breadcrumbsFragment}
  fragment ServiceLandingPageNodeFull on ServiceLandingPageNode {
    __typename
    title
    id
    body {
      value
      embeds {
        id
        paragraph {
          ... on CallToActionParagraph {
            __typename
            link {
              title
              url
              external
            }
          }
        }
      }
    }
    breadcrumbs {
      ...Breadcrumbs
    }
  }
`;

export { serviceLandingPageNodeFull };
