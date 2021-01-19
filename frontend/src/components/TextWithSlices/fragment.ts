import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../CallToAction/fragment';
import blockQuoteFragment from '../BlockQuote/fragment';
import accordionFragment from '../Accordion/fragment';

const fragment = gql`
  ${callToActionFragment}
  ${blockQuoteFragment}
  ${accordionFragment}
  fragment EmbeddedParagraph on EmbeddedParagraph {
    id
    paragraph {
      ...CallToAction
      ...BlockQuote
      ...Accordion
    }
  }
`;

export default fragment;
