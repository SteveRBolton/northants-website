/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HomepageNodeFull
// ====================================================

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export type HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph;

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export type HomepageNodeFull_homepageBody_embeds_paragraph = HomepageNodeFull_homepageBody_embeds_paragraph_AccordionItemParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_BlockQuoteParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph;

export interface HomepageNodeFull_homepageBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: HomepageNodeFull_homepageBody_embeds_paragraph;
}

export interface HomepageNodeFull_homepageBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: HomepageNodeFull_homepageBody_embeds[];
}

export interface HomepageNodeFull_serviceLinks_serviceLandingPage {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  icon: string | null;
}

export interface HomepageNodeFull_serviceLinks_servicePages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
}

export interface HomepageNodeFull_serviceLinks {
  __typename: "ServiceLinksParagraph";
  serviceLandingPage: HomepageNodeFull_serviceLinks_serviceLandingPage;
  servicePages: HomepageNodeFull_serviceLinks_servicePages[];
}

export interface HomepageNodeFull {
  __typename: "HomepageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  homepageBody: HomepageNodeFull_homepageBody | null;
  serviceLinks: HomepageNodeFull_serviceLinks[];
}
