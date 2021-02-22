import { gql } from '@apollo/react-hooks';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';

const articleNodeFull = gql`
  ${embeddedParagraphFragment}
  fragment ArticleNodeFull on ArticlePageNode {
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
    parentTitle
    parentUrl
    date
  }
`;

export { articleNodeFull };
