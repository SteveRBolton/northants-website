import { gql } from '@apollo/client';

const fragment = gql`
  fragment NewsArticle on NewsArticle {
    id
    title
    link
    excerpt
    date
    thumbnail
  }
`;

export default fragment;
