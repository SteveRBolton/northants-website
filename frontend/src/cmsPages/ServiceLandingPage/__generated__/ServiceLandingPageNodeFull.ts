/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLandingPageNodeFull
// ====================================================

export interface ServiceLandingPageNodeFull_body_embeds_paragraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ServiceLandingPageNodeFull_body_embeds_paragraph {
  __typename: "CallToActionParagraph";
  link: ServiceLandingPageNodeFull_body_embeds_paragraph_link;
}

export interface ServiceLandingPageNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ServiceLandingPageNodeFull_body_embeds_paragraph;
}

export interface ServiceLandingPageNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ServiceLandingPageNodeFull_body_embeds[];
}

export interface ServiceLandingPageNodeFull {
  __typename: "ServiceLandingPageNode";
  title: string;
  id: string;
  body: ServiceLandingPageNodeFull_body;
}
