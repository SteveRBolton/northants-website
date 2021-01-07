import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import sectionFragment from '../../components/Section/fragment';
import blockQuoteFragment from '../../components/BlockQuote/fragment';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';
import breadcrumbsFragment from '../../components/Breadcrumbs/fragment';

const serviceLandingPageNodeFull = gql`
  ${callToActionFragment}
  ${sectionFragment}
  ${blockQuoteFragment}
  ${embeddedParagraphFragment}
  ${breadcrumbsFragment}
  fragment ServiceLandingPageNodeFull on ServiceLandingPageNode {
    __typename
    title
    id
    body {
      value
      embeds {
        ...EmbeddedParagraph
      }
    }
    sections {
      ...Section
    }
    breadcrumbs {
      ...Breadcrumbs
    }
  }
`;

export { serviceLandingPageNodeFull };
