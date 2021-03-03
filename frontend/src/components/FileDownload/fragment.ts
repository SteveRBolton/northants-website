import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment FileDownload on FileDownloadParagraph {
    files {
      title
      url
      type
      size
    }
  }
`;

export default fragment;
