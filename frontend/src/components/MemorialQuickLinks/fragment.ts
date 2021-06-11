import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment MemorialQuickLink on QuickLinkParagraph {
    id
    link {
      title
      url
    }
    summary
    icon
  }
`;

export default fragment;
