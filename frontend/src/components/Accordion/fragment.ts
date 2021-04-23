import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../CallToAction/fragment';
import blockQuoteFragment from '../BlockQuote/fragment';
import fileDownloadFragment from '../FileDownload/fragment';
import highlightFragement from '../Highlight/fragment';

const fragment = gql`
  ${callToActionFragment}
  ${blockQuoteFragment}
  ${fileDownloadFragment}
  ${highlightFragement}
  fragment Accordion on AccordionParagraph {
    sections {
      id
      title
      summary
      body {
        value
        embeds {
          ...EmbeddedParagraphAccordion
        }
      }
    }
  }
  fragment EmbeddedParagraphAccordion on EmbeddedParagraph {
    id
    paragraph {
      ...CallToAction
      ...BlockQuote
      ...FileDownload
      ...Highlight
    }
  }
`;

export default fragment;
