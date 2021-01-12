import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import serviceLinksFragment from '../../components/ServiceLinks/fragment';

const homepageNodeFull = gql`
  ${callToActionFragment}
  ${serviceLinksFragment}
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
    serviceLinks {
      ...ServiceLinks
    }
  }
`;

export { homepageNodeFull };
