/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HomepageNodeFull
// ====================================================

export interface HomepageNodeFull_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface HomepageNodeFull_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: HomepageNodeFull_body_embeds_paragraph_CallToActionParagraph_link;
}

export type HomepageNodeFull_body_embeds_paragraph = HomepageNodeFull_body_embeds_paragraph_BlockQuoteParagraph | HomepageNodeFull_body_embeds_paragraph_CallToActionParagraph;

export interface HomepageNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: HomepageNodeFull_body_embeds_paragraph;
}

export interface HomepageNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: HomepageNodeFull_body_embeds[];
}

export interface HomepageNodeFull_serviceLinks_serviceLandingPage {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
}

export interface HomepageNodeFull_serviceLinks_servicePages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
}

export interface HomepageNodeFull_serviceLinks {
  __typename: "ServiceLinksParagraph";
  serviceLandingPage: HomepageNodeFull_serviceLinks_serviceLandingPage;
  servicePages: HomepageNodeFull_serviceLinks_servicePages[];
}

export interface HomepageNodeFull {
  __typename: "HomepageNode";
  title: string;
  id: string;
  body: HomepageNodeFull_body;
  serviceLinks: HomepageNodeFull_serviceLinks[];
}
