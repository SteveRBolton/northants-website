import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import signpostingFragment from '../../components/Signposting/fragment';
import sidebarSectionFragment from '../../components/SectionSidebar/fragment';

const servicePageNodeFull = gql`
  ${callToActionFragment}
  ${signpostingFragment}
  ${sidebarSectionFragment}
  fragment ServicePageNodeFull on ServicePageNode {
    __typename
    title
    id
    body {
      value
      embeds {
        id
        paragraph {
          ...CallToAction
        }
      }
    }
    signposting {
      ...CouncilSignposting
    }
    canonicalSection {
      ...SidebarSection
    }
  }
`;

export { servicePageNodeFull };
