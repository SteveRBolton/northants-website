import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment ServiceLinks on ServiceLinksParagraph {
    serviceLandingPage {
      title
      url
      icon
    }
    servicePages {
      title
      url
    }
  }
`;

export default fragment;
