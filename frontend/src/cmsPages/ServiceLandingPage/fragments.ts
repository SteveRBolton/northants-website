import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import sectionFragment from '../../components/Section/fragment';

const serviceLandingPageNodeFull = gql`
  ${callToActionFragment}
  ${sectionFragment}
  fragment ServiceLandingPageNodeFull on ServiceLandingPageNode {
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
    sections {
      ...Section
    }
  }
`;

export { serviceLandingPageNodeFull };
