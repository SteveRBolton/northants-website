import { gql } from '@apollo/react-hooks';

const fragment = gql`
  fragment CouncilSignposting on CouncilSignpostingParagraph {
    otherCouncil {
      url
    }
    signposts {
      council {
        name
        homepage {
          url
        }
      }
      link {
        url
      }
    }
  }
`;

export default fragment;
