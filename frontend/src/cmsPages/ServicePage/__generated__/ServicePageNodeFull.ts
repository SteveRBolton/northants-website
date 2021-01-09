/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServicePageNodeFull
// ====================================================

export interface ServicePageNodeFull_serviceBody_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface ServicePageNodeFull_serviceBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServicePageNodeFull_serviceBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServicePageNodeFull_serviceBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServicePageNodeFull_serviceBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ServicePageNodeFull_serviceBody_embeds_paragraph = ServicePageNodeFull_serviceBody_embeds_paragraph_CouncilSignpostParagraph | ServicePageNodeFull_serviceBody_embeds_paragraph_CallToActionParagraph | ServicePageNodeFull_serviceBody_embeds_paragraph_BlockQuoteParagraph;

export interface ServicePageNodeFull_serviceBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServicePageNodeFull_serviceBody_embeds_paragraph;
}

export interface ServicePageNodeFull_serviceBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServicePageNodeFull_serviceBody_embeds[];
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

export interface ServicePageNodeFull_canonicalSection_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface ServicePageNodeFull_canonicalSection {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: ServicePageNodeFull_canonicalSection_pages[];
}

export interface ServicePageNodeFull_sections_parent {
  __typename: "ServiceLandingPageNode";
  url: string;
}

export interface ServicePageNodeFull_sections {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  parent: ServicePageNodeFull_sections_parent;
}

export interface ServicePageNodeFull_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface ServicePageNodeFull {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  serviceBody: ServicePageNodeFull_serviceBody;
  signposting: ServicePageNodeFull_signposting | null;
  canonicalSection: ServicePageNodeFull_canonicalSection | null;
  sections: ServicePageNodeFull_sections[];
  breadcrumbs: ServicePageNodeFull_breadcrumbs[];
}
