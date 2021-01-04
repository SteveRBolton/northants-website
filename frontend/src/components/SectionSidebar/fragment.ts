import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment SidebarSection on SectionParagraph {
    name
    pages {
      title
      url
      id
    }
  }
`;

export default fragment;
