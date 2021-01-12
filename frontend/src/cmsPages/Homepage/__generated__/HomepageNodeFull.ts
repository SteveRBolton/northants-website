/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HomepageNodeFull
// ====================================================

export interface HomepageNodeFull_homepageBody_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type HomepageNodeFull_homepageBody_embeds_paragraph = HomepageNodeFull_homepageBody_embeds_paragraph_CouncilSignpostParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_BlockQuoteParagraph;

export interface HomepageNodeFull_homepageBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: HomepageNodeFull_homepageBody_embeds_paragraph;
}

export interface HomepageNodeFull_homepageBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: HomepageNodeFull_homepageBody_embeds[];
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
  homepageBody: HomepageNodeFull_homepageBody | null;
  serviceLinks: HomepageNodeFull_serviceLinks[];
}
