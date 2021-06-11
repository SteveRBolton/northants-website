/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Accordion
// ====================================================

export interface Accordion_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "PromoBannerParagraph" | "QuickLinkParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface Accordion_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface Accordion_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: Accordion_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface Accordion_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface Accordion_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface Accordion_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: Accordion_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface Accordion_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface Accordion_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: Accordion_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type Accordion_sections_body_embeds_paragraph = Accordion_sections_body_embeds_paragraph_AccordionItemParagraph | Accordion_sections_body_embeds_paragraph_CallToActionParagraph | Accordion_sections_body_embeds_paragraph_BlockQuoteParagraph | Accordion_sections_body_embeds_paragraph_FileDownloadParagraph | Accordion_sections_body_embeds_paragraph_HighlightParagraph;

export interface Accordion_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: Accordion_sections_body_embeds_paragraph;
}

export interface Accordion_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: Accordion_sections_body_embeds[];
}

export interface Accordion_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: Accordion_sections_body;
}

export interface Accordion {
  __typename: "AccordionParagraph";
  sections: Accordion_sections[];
}
