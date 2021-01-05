import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment Breadcrumbs on Breadcrumb {
    title
    url
  }
`;

export default fragment;
