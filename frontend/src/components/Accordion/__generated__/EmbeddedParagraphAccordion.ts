/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EmbeddedParagraphAccordion
// ====================================================

export interface EmbeddedParagraphAccordion_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
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

export interface EmbeddedParagraphAccordion_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface EmbeddedParagraphAccordion_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: EmbeddedParagraphAccordion_paragraph_FileDownloadParagraph_files[];
}

export interface EmbeddedParagraphAccordion_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface EmbeddedParagraphAccordion_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: EmbeddedParagraphAccordion_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type EmbeddedParagraphAccordion_paragraph = EmbeddedParagraphAccordion_paragraph_AccordionItemParagraph | EmbeddedParagraphAccordion_paragraph_CallToActionParagraph | EmbeddedParagraphAccordion_paragraph_BlockQuoteParagraph | EmbeddedParagraphAccordion_paragraph_FileDownloadParagraph | EmbeddedParagraphAccordion_paragraph_HighlightParagraph;

export interface EmbeddedParagraphAccordion {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraphAccordion_paragraph;
}
