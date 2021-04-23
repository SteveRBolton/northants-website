import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../CallToAction/fragment';
import blockQuoteFragment from '../BlockQuote/fragment';
import accordionFragment from '../Accordion/fragment';
import highlightFragment from '../Highlight/fragment';

import fileDownloadFragment from '../FileDownload/fragment';

const fragment = gql`
  ${callToActionFragment}
  ${blockQuoteFragment}
  ${accordionFragment}
  ${fileDownloadFragment}
  ${highlightFragment}
  fragment EmbeddedParagraph on EmbeddedParagraph {
    id
    paragraph {
      ...CallToAction
      ...BlockQuote
      ...Accordion
      ...FileDownload
      ...Highlight
    }
  }
`;

export default fragment;
