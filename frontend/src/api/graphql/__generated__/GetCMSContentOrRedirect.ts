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

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds_paragraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds_paragraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds_paragraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_body;
}

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
