/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNode_Full
// ====================================================

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
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

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export type ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph;

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export type ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph = ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionItemParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_CallToActionParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_AccordionParagraph | ServiceLandingPageNode_Full_serviceLandingBody_embeds_paragraph_FileDownloadParagraph;

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
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  id: string;
  serviceLandingBody: ServiceLandingPageNode_Full_serviceLandingBody | null;
  hasSections: ServiceLandingPageNode_Full_hasSections[];
  breadcrumbs: ServiceLandingPageNode_Full_breadcrumbs[];
}
