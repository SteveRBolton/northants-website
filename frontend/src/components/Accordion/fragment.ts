import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../CallToAction/fragment';
import blockQuoteFragment from '../BlockQuote/fragment';
import fileDownloadFragment from '../FileDownload/fragment';

const fragment = gql`
  ${callToActionFragment}
  ${blockQuoteFragment}
  ${fileDownloadFragment}
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
    }
  }
`;

export default fragment;
