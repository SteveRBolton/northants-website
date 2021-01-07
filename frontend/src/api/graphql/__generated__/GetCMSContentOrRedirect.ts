/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCMSContentOrRedirect
// ====================================================

export interface GetCMSContentOrRedirect_route_DrupalAccessDeniedRoute {
  __typename: "DrupalAccessDeniedRoute";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CallToActionParagraph_link;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CouncilSignpostParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph_CallToActionParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode {
  __typename: "HomepageNode";
  title: string;
  id: string;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_body;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CouncilSignpostParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph_BlockQuoteParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_sections_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  summary: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_sections {
  __typename: "SectionParagraph";
  name: string;
  pages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_sections_pages[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  id: string;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_body;
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_sections[];
  breadcrumbs: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_breadcrumbs[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CouncilSignpostParagraph {
  __typename: "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CouncilSignpostParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph_BlockQuoteParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_otherCouncil {
  __typename: "LinkField";
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_council_homepage {
  __typename: "LinkField";
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_council {
  __typename: "SovereignCouncil";
  name: string;
  homepage: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_council_homepage;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_link {
  __typename: "LinkField";
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts {
  __typename: "CouncilSignpostParagraph";
  council: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_council;
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts_link | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting {
  __typename: "CouncilSignpostingParagraph";
  topLine: string | null;
  otherCouncil: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_otherCouncil | null;
  signposts: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_sections_parent {
  __typename: "ServiceLandingPageNode";
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_sections {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  parent: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_sections_parent;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_body;
  signposting: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting | null;
  canonicalSection: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection | null;
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_sections[];
  breadcrumbs: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_breadcrumbs[];
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute {
  __typename: "DrupalNodeRoute";
  node: GetCMSContentOrRedirect_route_DrupalNodeRoute_node;
}

export interface GetCMSContentOrRedirect_route_DrupalNotFoundRoute {
  __typename: "DrupalNotFoundRoute";
  info: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalRedirectRoute {
  __typename: "DrupalRedirectRoute";
  destination: string;
  status: number;
}

export interface GetCMSContentOrRedirect_route_DrupalOfflineRoute {
  __typename: "DrupalOfflineRoute";
  info: string | null;
}

export type GetCMSContentOrRedirect_route = GetCMSContentOrRedirect_route_DrupalAccessDeniedRoute | GetCMSContentOrRedirect_route_DrupalNodeRoute | GetCMSContentOrRedirect_route_DrupalNotFoundRoute | GetCMSContentOrRedirect_route_DrupalRedirectRoute | GetCMSContentOrRedirect_route_DrupalOfflineRoute;

export interface GetCMSContentOrRedirect {
  route: GetCMSContentOrRedirect_route;
}

export interface GetCMSContentOrRedirectVariables {
  path: string;
}
