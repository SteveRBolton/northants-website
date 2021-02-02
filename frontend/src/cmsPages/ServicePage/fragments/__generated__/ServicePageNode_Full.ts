/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServicePageNode_Full
// ====================================================

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServicePageNode_Full_serviceBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph;

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph_sections[];
}

export type ServicePageNode_Full_serviceBody_embeds_paragraph = ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionItemParagraph | ServicePageNode_Full_serviceBody_embeds_paragraph_CallToActionParagraph | ServicePageNode_Full_serviceBody_embeds_paragraph_BlockQuoteParagraph | ServicePageNode_Full_serviceBody_embeds_paragraph_AccordionParagraph;

export interface ServicePageNode_Full_serviceBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServicePageNode_Full_serviceBody_embeds_paragraph;
}

export interface ServicePageNode_Full_serviceBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServicePageNode_Full_serviceBody_embeds[];
}

export interface ServicePageNode_Full_signposting_otherCouncil {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNode_Full_signposting_signposts_council_homepage {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNode_Full_signposting_signposts_council {
  __typename: "SovereignCouncil";
  code: string;
  name: string;
  homepage: ServicePageNode_Full_signposting_signposts_council_homepage;
}

export interface ServicePageNode_Full_signposting_signposts_link {
  __typename: "LinkField";
  url: string;
}

export interface ServicePageNode_Full_signposting_signposts {
  __typename: "CouncilSignpostParagraph";
  council: ServicePageNode_Full_signposting_signposts_council;
  link: ServicePageNode_Full_signposting_signposts_link | null;
}

export interface ServicePageNode_Full_signposting {
  __typename: "CouncilSignpostingParagraph";
  otherCouncil: ServicePageNode_Full_signposting_otherCouncil | null;
  signposts: ServicePageNode_Full_signposting_signposts[];
}

export interface ServicePageNode_Full_canonicalSection_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface ServicePageNode_Full_canonicalSection_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
}

export type ServicePageNode_Full_canonicalSection_pages = ServicePageNode_Full_canonicalSection_pages_ServicePageNode | ServicePageNode_Full_canonicalSection_pages_ServiceLandingPageNode;

export interface ServicePageNode_Full_canonicalSection {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: ServicePageNode_Full_canonicalSection_pages[];
}

export interface ServicePageNode_Full_inSections_parent {
  __typename: "ServiceLandingPageNode";
  url: string;
}

export interface ServicePageNode_Full_inSections {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  parent: ServicePageNode_Full_inSections_parent;
}

export interface ServicePageNode_Full_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface ServicePageNode_Full {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  serviceBody: ServicePageNode_Full_serviceBody;
  signposting: ServicePageNode_Full_signposting | null;
  canonicalSection: ServicePageNode_Full_canonicalSection | null;
  inSections: ServicePageNode_Full_inSections[];
  breadcrumbs: ServicePageNode_Full_breadcrumbs[];
}
