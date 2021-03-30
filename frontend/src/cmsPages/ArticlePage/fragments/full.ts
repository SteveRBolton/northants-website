import { gql } from '@apollo/react-hooks';
import embeddedParagraphFragment from '../../../components/TextWithSlices/fragment';

const articleNode_Full = gql`
  ${embeddedParagraphFragment}
  fragment ArticleNode_Full on ArticlePageNode {
    __typename
    title
    id
    url
    metaTitle
    metaDescription
    metaKeywords
    body {
      value
      embeds {
        ...EmbeddedParagraph
      }
    }
    summary
    featuredImage1440x810 {
      url
      altText
    }
    featuredImage144x81 {
      url
      altText
    }
    image720x405
    image72x41
    imageAltText
    featuredImageCaption
    parentTitle
    parentUrl
    date
  }
`;

export { articleNode_Full };
