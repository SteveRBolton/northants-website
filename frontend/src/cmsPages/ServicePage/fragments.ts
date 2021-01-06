import { gql } from '@apollo/react-hooks';
import signpostingFragment from '../../components/Signposting/fragment';
import { sectionPagesFragment, sectionParentLinkFragment } from '../../components/SectionSidebar/fragment';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';

const servicePageNodeFull = gql`
  ${embeddedParagraphFragment}
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
        ...EmbeddedParagraph
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
