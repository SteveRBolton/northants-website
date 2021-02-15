import { gql } from '@apollo/client';

const fragment = gql`
  fragment SearchResult on SearchResult {
    id
    url
    title
    teaser
    parent
    signposts {
      code
      name
      homepage
    }
  }
`;

export default fragment;
