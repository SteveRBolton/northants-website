import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';

const homepageNodeFull = gql`
  ${callToActionFragment}
  ${embeddedParagraphFragment}
  fragment HomepageNodeFull on HomepageNode {
    __typename
    title
    id
    homepageBody: body {
      value
      embeds {
        ...EmbeddedParagraph
      }
    }
  }
`;

export { homepageNodeFull };
