import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import signpostingFragment from '../../components/Signposting/fragment';
import breadcrumbsFragment from '../../components/Breadcrumbs/fragment';

const servicePageNodeFull = gql`
  ${callToActionFragment}
  ${signpostingFragment}
  ${breadcrumbsFragment}
  fragment ServicePageNodeFull on ServicePageNode {
    __typename
    title
    id
    body {
      value
      embeds {
        id
        paragraph {
          ... on CallToActionParagraph {
            ...CallToAction
          }
        }
      }
    }
    signposting {
      ...CouncilSignposting
    }
    breadcrumbs {
      ...Breadcrumbs
    }
  }
`;

export { servicePageNodeFull };
