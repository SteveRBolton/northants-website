import { gql } from '@apollo/react-hooks';

export default gql`
  fragment ServiceLandingPageNode_Section on ServiceLandingPageNode {
    title
    url
    id
    summary
  }
`;
