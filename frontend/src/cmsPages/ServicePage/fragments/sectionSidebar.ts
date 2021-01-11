import { gql } from '@apollo/react-hooks';

export default gql`
  fragment ServicePageNode_SectionSidebar on ServicePageNode {
    title
    url
    id
  }
`;
