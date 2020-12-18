/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EmbeddedParagraph
// ====================================================

export interface EmbeddedParagraph_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
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

export type EmbeddedParagraph_paragraph = EmbeddedParagraph_paragraph_CouncilSignpostParagraph | EmbeddedParagraph_paragraph_CallToActionParagraph;

export interface EmbeddedParagraph {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraph_paragraph;
}
