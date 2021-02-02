/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccordionEmbeds
// ====================================================

export interface AccordionEmbeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface AccordionEmbeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface AccordionEmbeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: AccordionEmbeds_paragraph_CallToActionParagraph_link;
}

export interface AccordionEmbeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type AccordionEmbeds_paragraph = AccordionEmbeds_paragraph_AccordionItemParagraph | AccordionEmbeds_paragraph_CallToActionParagraph | AccordionEmbeds_paragraph_BlockQuoteParagraph;

export interface AccordionEmbeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: AccordionEmbeds_paragraph;
}
