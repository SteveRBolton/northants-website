import { gql } from '@apollo/react-hooks';
import servicePageNode_SectionSidebar from '../../cmsPages/ServicePage/fragments/sectionSidebar';
import serviceLandingPageNode_SectionSidebar from '../../cmsPages/ServiceLandingPage/fragments/sectionSidebar';

export const sectionPagesFragment = gql`
  ${servicePageNode_SectionSidebar}
  ${serviceLandingPageNode_SectionSidebar}
  fragment SectionPages on SectionParagraph {
    name
    id
    pages {
      ...ServicePageNode_SectionSidebar
      ...ServiceLandingPageNode_SectionSidebar
    }
  }
`;

export const sectionParentLinkFragment = gql`
  fragment SectionParentLink on SectionParagraph {
    name
    id
    parent {
      url
    }
  }
`;
