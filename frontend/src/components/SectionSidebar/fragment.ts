import { gql } from '@apollo/react-hooks';

export const sectionPagesFragment = gql`
  fragment SectionPages on SectionParagraph {
    name
    id
    pages {
      title
      url
      id
    }
  }
`;

export const sectionParentLinkFragment = gql`
  fragment SectionParentLink on SectionParagraph {
    name
    id
    parent {
      url
    }
  }
`;
