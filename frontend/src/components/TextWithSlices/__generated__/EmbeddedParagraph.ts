/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EmbeddedParagraph
// ====================================================

export interface EmbeddedParagraph_paragraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface EmbeddedParagraph_paragraph {
  __typename: "CallToActionParagraph";
  link: EmbeddedParagraph_paragraph_link;
}

export interface EmbeddedParagraph {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: EmbeddedParagraph_paragraph;
}
