import { gql } from '@apollo/client';

const fragment = gql`
  fragment PromoBanner on PromoBannerParagraph {
    title
    body {
      value
    }
    link {
      title
      url
      external
    }
    image1440x810 {
      url
      altText
    }
    image144x81 {
      url
      altText
    }
  }
`;

export default fragment;
