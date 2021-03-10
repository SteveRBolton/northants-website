import { gql } from '@apollo/react-hooks';
import embeddedParagraphFragment from '../../../components/TextWithSlices/fragment';

const articleNode_Full = gql`
  ${embeddedParagraphFragment}
  fragment ArticleNode_Full on ArticlePageNode {
    __typename
    title
    id
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
    featuredImageCaption
    parentTitle
    parentUrl
    date
  }
`;

export { articleNode_Full };
