import { gql } from '@apollo/react-hooks';

const serviceLandingPageNodeFull = gql`
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
  }
`;

export { serviceLandingPageNodeFull };
