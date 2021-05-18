import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../../components/CallToAction/fragment';
import sectionFragment from '../../../components/Section/fragment';
import blockQuoteFragment from '../../../components/BlockQuote/fragment';
import embeddedParagraphFragment from '../../../components/TextWithSlices/fragment';
import breadcrumbsFragment from '../../../components/Breadcrumbs/fragment';

export default gql`
  ${callToActionFragment}
  ${sectionFragment}
  ${blockQuoteFragment}
  ${embeddedParagraphFragment}
  ${breadcrumbsFragment}
  fragment ServiceLandingPageNode_Full on ServiceLandingPageNode {
    __typename
    title
    metaTitle
    metaDescription
    metaKeywords
    id
    url
    icon
    serviceLandingBody: body {
      value
      embeds {
        ...EmbeddedParagraph
      }
    }
    hasSections {
      ...Section
    }
    breadcrumbs {
      ...Breadcrumbs
    }
    dateUpdated
  }
`;
