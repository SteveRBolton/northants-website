import { gql } from '@apollo/client';

const fragment = gql`
  fragment SearchResult on SearchResult {
    id
    url
    title
    teaser
    signposts {
      code
      name
      homepage
    }
  }
`;

export default fragment;
