/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServicePageNodeFull
// ====================================================

export interface ServicePageNodeFull_body_embeds_paragraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServicePageNodeFull_body_embeds_paragraph {
  __typename: "CallToActionParagraph";
  link: ServicePageNodeFull_body_embeds_paragraph_link;
}

export interface ServicePageNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServicePageNodeFull_body_embeds_paragraph;
}

export interface ServicePageNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServicePageNodeFull_body_embeds[];
}

export interface ServicePageNodeFull {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  body: ServicePageNodeFull_body;
}
