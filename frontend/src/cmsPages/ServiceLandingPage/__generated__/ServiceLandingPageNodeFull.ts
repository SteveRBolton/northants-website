/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNodeFull
// ====================================================

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph";
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

export type ServiceLandingPageNodeFull_body_embeds_paragraph = ServiceLandingPageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph | ServiceLandingPageNodeFull_body_embeds_paragraph_CallToActionParagraph;

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
  breadcrumbs: ServiceLandingPageNodeFull_breadcrumbs[];
}
