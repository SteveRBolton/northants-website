import { gql } from '@apollo/react-hooks';
import serviceLandingPageNode_Section from '../../cmsPages/ServiceLandingPage/fragments/section';
import servicePageNode_Section from '../../cmsPages/ServicePage/fragments/section';

const fragment = gql`
  ${serviceLandingPageNode_Section}
  ${servicePageNode_Section}
  fragment Section on SectionParagraph {
    name
    pages {
      ...ServiceLandingPageNode_Section
      ...ServicePageNode_Section
    }
  }
`;

export default fragment;
