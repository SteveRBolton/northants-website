import { gql } from '@apollo/react-hooks';

export default gql`
  fragment ArticlePageNode_Featured on ArticlePageNode {
    id
    title
    url
    featuredImage1440x810 {
      url
      altText
    }
    image720x405
    image72x41
    imageAltText
    date
  }
`;