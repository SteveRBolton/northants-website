/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNodeFull
// ====================================================

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServiceLandingPageNodeFull_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ServiceLandingPageNodeFull_body_embeds_paragraph = ServiceLandingPageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph | ServiceLandingPageNodeFull_body_embeds_paragraph_CallToActionParagraph | ServiceLandingPageNodeFull_body_embeds_paragraph_BlockQuoteParagraph;

export interface ServiceLandingPageNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServiceLandingPageNodeFull_body_embeds_paragraph;
}

export interface ServiceLandingPageNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServiceLandingPageNodeFull_body_embeds[];
}

export interface ServiceLandingPageNodeFull_sections_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  summary: string;
}

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
  body: ServiceLandingPageNodeFull_body;
  sections: ServiceLandingPageNodeFull_sections[];
  breadcrumbs: ServiceLandingPageNodeFull_breadcrumbs[];
}
