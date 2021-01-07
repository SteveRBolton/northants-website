import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';

const homepageNodeFull = gql`
  ${callToActionFragment}
  fragment HomepageNodeFull on HomepageNode {
    __typename
    title
    id
    body {
      value
      embeds {
        id
        paragraph {
          ...CallToAction
        }
      }
    }
  }
`;

export { homepageNodeFull };
