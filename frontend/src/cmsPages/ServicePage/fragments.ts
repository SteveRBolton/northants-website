import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import signpostingFragment from '../../components/Signposting/fragment';
import { sectionPagesFragment, sectionParentLinkFragment } from '../../components/SectionSidebar/fragment';

const servicePageNodeFull = gql`
  ${callToActionFragment}
  ${signpostingFragment}
  ${sectionPagesFragment}
  ${sectionParentLinkFragment}
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
      ...SectionPages
    }
    sections {
      ...SectionParentLink
    }
  }
`;

export { servicePageNodeFull };
