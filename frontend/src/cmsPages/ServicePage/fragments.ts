import { gql } from '@apollo/react-hooks';

const servicePageNodeFull = gql`
  fragment ServicePageNodeFull on ServicePageNode {
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

export { servicePageNodeFull };
