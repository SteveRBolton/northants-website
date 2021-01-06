import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../CallToAction/fragment';
import blockQuoteFragment from '../BlockQuote/fragment';

const fragment = gql`
  ${callToActionFragment}
  ${blockQuoteFragment}
  fragment EmbeddedParagraph on EmbeddedParagraph {
    id
    paragraph {
      ...CallToAction
      ...BlockQuote
    }
  }
`;

export default fragment;
