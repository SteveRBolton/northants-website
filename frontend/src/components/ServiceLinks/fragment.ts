import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment ServiceLinks on ServiceLinksParagraph {
    serviceLandingPage {
      title
      url
    }
    servicePages {
      title
      url
    }
  }
`;

export default fragment;
