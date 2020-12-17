import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import signpostingFragment from '../../components/Signposting/fragment';

const servicePageNodeFull = gql`
  ${callToActionFragment}
  ${signpostingFragment}
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
            ...CallToAction
          }
        }
      }
    }
    signposting {
      ...CouncilSignposting
    }
  }
`;

export { servicePageNodeFull };
