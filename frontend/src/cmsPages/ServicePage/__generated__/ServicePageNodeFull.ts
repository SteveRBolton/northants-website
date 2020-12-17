/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServicePageNodeFull
// ====================================================

export interface ServicePageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph";
}

export interface ServicePageNodeFull_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServicePageNodeFull_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServicePageNodeFull_body_embeds_paragraph_CallToActionParagraph_link;
}

export type ServicePageNodeFull_body_embeds_paragraph = ServicePageNodeFull_body_embeds_paragraph_CouncilSignpostParagraph | ServicePageNodeFull_body_embeds_paragraph_CallToActionParagraph;

export interface ServicePageNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServicePageNodeFull_body_embeds_paragraph;
}

export interface ServicePageNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServicePageNodeFull_body_embeds[];
}

export interface ServicePageNodeFull_signposting_otherCouncil {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNodeFull_signposting_signposts_council_homepage {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNodeFull_signposting_signposts_council {
  __typename: "SovereignCouncil";
  name: string;
  homepage: ServicePageNodeFull_signposting_signposts_council_homepage;
}

export interface ServicePageNodeFull_signposting_signposts_link {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNodeFull_signposting_signposts {
  __typename: "CouncilSignpostParagraph";
  council: ServicePageNodeFull_signposting_signposts_council;
  link: ServicePageNodeFull_signposting_signposts_link | null;
}

export interface ServicePageNodeFull_signposting {
  __typename: "CouncilSignpostingParagraph";
  topLine: string | null;
  otherCouncil: ServicePageNodeFull_signposting_otherCouncil | null;
  signposts: ServicePageNodeFull_signposting_signposts[];
}

export interface ServicePageNodeFull {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  body: ServicePageNodeFull_body;
  signposting: ServicePageNodeFull_signposting | null;
}
