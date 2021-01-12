import { gql } from '@apollo/react-hooks';

export default gql`
  fragment ServicePageNode_Section on ServicePageNode {
    title
    url
    id
    summary
  }
`;
