import { gql } from '@apollo/react-hooks';
import signpostingFragment from '../../components/Signposting/fragment';
import { sectionPagesFragment, sectionParentLinkFragment } from '../../components/SectionSidebar/fragment';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';
import breadcrumbsFragment from '../../components/Breadcrumbs/fragment';

const servicePageNodeFull = gql`
  ${embeddedParagraphFragment}
  ${signpostingFragment}
  ${sectionPagesFragment}
  ${sectionParentLinkFragment}
  ${breadcrumbsFragment}
  fragment ServicePageNodeFull on ServicePageNode {
    __typename
    title
    id
    serviceBody: body {
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
    breadcrumbs {
      ...Breadcrumbs
    }
  }
`;

export { servicePageNodeFull };
