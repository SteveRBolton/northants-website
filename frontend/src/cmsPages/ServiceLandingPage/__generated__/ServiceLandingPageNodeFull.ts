/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNodeFull
// ====================================================

export interface ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph = ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CouncilSignpostParagraph | ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_CallToActionParagraph | ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph;

export interface ServiceLandingPageNodeFull_serviceLandingBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServiceLandingPageNodeFull_serviceLandingBody_embeds_paragraph;
}

export interface ServiceLandingPageNodeFull_serviceLandingBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServiceLandingPageNodeFull_serviceLandingBody_embeds[];
}

export interface ServiceLandingPageNodeFull_sections_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  summary: string;
}

export interface ServiceLandingPageNodeFull_sections_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
}

export type ServiceLandingPageNodeFull_sections_pages = ServiceLandingPageNodeFull_sections_pages_ServicePageNode | ServiceLandingPageNodeFull_sections_pages_ServiceLandingPageNode;

export interface ServiceLandingPageNodeFull_sections {
  __typename: "SectionParagraph";
  name: string;
  pages: ServiceLandingPageNodeFull_sections_pages[];
}

export interface ServiceLandingPageNodeFull_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface ServiceLandingPageNodeFull {
  __typename: "ServiceLandingPageNode";
  title: string;
  id: string;
  serviceLandingBody: ServiceLandingPageNodeFull_serviceLandingBody | null;
  sections: ServiceLandingPageNodeFull_sections[];
  breadcrumbs: ServiceLandingPageNodeFull_breadcrumbs[];
}
