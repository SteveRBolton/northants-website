import { gql } from '@apollo/client';

const fragment = gql`
  fragment NewsArticle on NewsArticle {
    id
    title
    link
    excerpt
    date
    image720x405
    image72x41
    imageAltText
  }
`;

export default fragment;
