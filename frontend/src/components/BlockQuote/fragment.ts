import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment BlockQuote on BlockQuoteParagraph {
    quote
    citation
  }
`;

export default fragment;
