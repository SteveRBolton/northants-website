import { gql } from '@apollo/react-hooks';
import callToActionFragment from '../../components/CallToAction/fragment';
import serviceLinksFragment from '../../components/ServiceLinks/fragment';
import embeddedParagraphFragment from '../../components/TextWithSlices/fragment';
import promoBannerFragment from '../../components/PromoBanner/fragment';
import articlePageFragment from '../ArticlePage/fragments/featured';
import quickLinksFragment from '../../components/MemorialQuickLinks/fragment';

const homepageNodeFull = gql`
  ${callToActionFragment}
  ${embeddedParagraphFragment}
  ${serviceLinksFragment}
  ${promoBannerFragment}
  ${articlePageFragment}
  ${quickLinksFragment}
  fragment HomepageNodeFull on HomepageNode {
    __typename
    title
    id
    metaTitle
    metaDescription
    metaKeywords
    homepageBody: body {
      value
      embeds {
        ...EmbeddedParagraph
      }
    }
    serviceLinks {
      ...ServiceLinks
    }
    promotedLinks {
      url
      title
    }
    heroImages {
      image1440x810
      image144x81
    }
    promoBanner {
      ...PromoBanner
    }
    featuredNews {
      ...ArticlePageNode_Featured
    }
    memorialTakeover
    memorialQuickLinks {
      ...MemorialQuickLink
    }
  }
`;
export { homepageNodeFull };
