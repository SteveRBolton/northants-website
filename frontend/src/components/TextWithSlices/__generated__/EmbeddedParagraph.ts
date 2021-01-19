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

export type EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph = EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | EmbeddedParagraph_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph;

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

export type EmbeddedParagraph_paragraph = EmbeddedParagraph_paragraph_AccordionItemParagraph | EmbeddedParagraph_paragraph_CallToActionParagraph | EmbeddedParagraph_paragraph_BlockQuoteParagraph | EmbeddedParagraph_paragraph_AccordionParagraph;

export interface EmbeddedParagraph {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraph_paragraph;
}
