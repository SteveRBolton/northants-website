import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment Section on SectionParagraph {
    name
    pages {
      title
      url
      summary
    }
  }
`;

export default fragment;
