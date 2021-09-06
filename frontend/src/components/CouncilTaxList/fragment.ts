import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment CouncilTaxList on CouncilTaxListParagraph {
    topText
    bottomText
  }
`;

export default fragment;
