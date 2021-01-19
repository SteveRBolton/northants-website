import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment Accordion on AccordionParagraph {
    sections {
      id
      title
      summary
      body {
        value
        embeds {
          id
          paragraph {
            ...CallToAction
            ...BlockQuote
          }
        }
      }
    }
  }
`;

export default fragment;
