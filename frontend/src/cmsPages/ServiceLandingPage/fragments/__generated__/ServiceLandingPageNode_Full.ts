/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNode_Full
// ====================================================

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph = ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CouncilSignpostParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CallToActionParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph;

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServiceLandingPageNode_Full_serviceLandingBody_embeds[];
}

export interface ServiceLandingPageNode_Full_hasSections_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export interface ServiceLandingPageNode_Full_hasSections_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export type ServiceLandingPageNode_Full_hasSections_pages = ServiceLandingPageNode_Full_hasSections_pages_ServiceLandingPageNode | ServiceLandingPageNode_Full_hasSections_pages_ServicePageNode;

export interface ServiceLandingPageNode_Full_hasSections {
  __typename: "SectionParagraph";
  name: string;
  pages: ServiceLandingPageNode_Full_hasSections_pages[];
}

export interface ServiceLandingPageNode_Full_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface ServiceLandingPageNode_Full {
  __typename: "ServiceLandingPageNode";
  title: string;
  id: string;
  serviceLandingBody: ServiceLandingPageNode_Full_serviceLandingBody | null;
  hasSections: ServiceLandingPageNode_Full_hasSections[];
  breadcrumbs: ServiceLandingPageNode_Full_breadcrumbs[];
}
