import { gql } from '@apollo/react-hooks';
import signpostingFragment from '../../../components/Signposting/fragment';
import { sectionPagesFragment, sectionParentLinkFragment } from '../../../components/SectionSidebar/fragment';
import embeddedParagraphFragment from '../../../components/TextWithSlices/fragment';
import breadcrumbsFragment from '../../../components/Breadcrumbs/fragment';

export default gql`
  ${embeddedParagraphFragment}
  ${signpostingFragment}
  ${sectionPagesFragment}
  ${sectionParentLinkFragment}
  ${breadcrumbsFragment}
  fragment ServicePageNode_Full on ServicePageNode {
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
    inSections {
      ...SectionParentLink
    }
    breadcrumbs {
      ...Breadcrumbs
    }
  }
`;
