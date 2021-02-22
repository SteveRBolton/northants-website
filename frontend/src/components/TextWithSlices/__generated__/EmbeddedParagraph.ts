/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EmbeddedParagraph
// ====================================================

export interface EmbeddedParagraph_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface EmbeddedParagraph_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface EmbeddedParagraph_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: EmbeddedParagraph_paragraph_CallToActionParagraph_link;
}

export interface EmbeddedParagraph_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export type EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph = EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph;

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: EmbeddedParagraph_paragraph_AccordionParagraph_sections_body;
}

export interface EmbeddedParagraph_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: EmbeddedParagraph_paragraph_AccordionParagraph_sections[];
}

export interface EmbeddedParagraph_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface EmbeddedParagraph_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: EmbeddedParagraph_paragraph_FileDownloadParagraph_files[];
}

export type EmbeddedParagraph_paragraph = EmbeddedParagraph_paragraph_AccordionItemParagraph | EmbeddedParagraph_paragraph_CallToActionParagraph | EmbeddedParagraph_paragraph_BlockQuoteParagraph | EmbeddedParagraph_paragraph_AccordionParagraph | EmbeddedParagraph_paragraph_FileDownloadParagraph;

export interface EmbeddedParagraph {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraph_paragraph;
}
