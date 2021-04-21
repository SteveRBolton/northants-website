import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment Highlight on HighlightParagraph {
    title
    content {
      value
    }
    isWarning
  }
`;

export default fragment;
