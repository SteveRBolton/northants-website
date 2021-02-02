/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EmbeddedParagraphAccordion
// ====================================================

export interface EmbeddedParagraphAccordion_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface EmbeddedParagraphAccordion_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface EmbeddedParagraphAccordion_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: EmbeddedParagraphAccordion_paragraph_CallToActionParagraph_link;
}

export interface EmbeddedParagraphAccordion_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type EmbeddedParagraphAccordion_paragraph = EmbeddedParagraphAccordion_paragraph_AccordionItemParagraph | EmbeddedParagraphAccordion_paragraph_CallToActionParagraph | EmbeddedParagraphAccordion_paragraph_BlockQuoteParagraph;

export interface EmbeddedParagraphAccordion {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraphAccordion_paragraph;
}
