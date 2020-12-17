import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment CallToAction on CallToActionParagraph {
    link {
      title
      url
      external
    }
  }
`;

export default fragment;
