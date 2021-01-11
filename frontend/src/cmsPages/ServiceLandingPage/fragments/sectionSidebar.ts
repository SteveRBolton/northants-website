import { gql } from '@apollo/react-hooks';

export default gql`
  fragment ServiceLandingPageNode_SectionSidebar on ServiceLandingPageNode {
    title
    url
    id
  }
`;
