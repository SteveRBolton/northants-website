/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AlertType } from "./../../../types/graphql/__generated__/global.d";

// ====================================================
// GraphQL query operation: GetCMSContentOrRedirect
// ====================================================

export interface GetCMSContentOrRedirect_route_DrupalAccessDeniedRoute {
  __typename: "DrupalAccessDeniedRoute";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_AccordionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks_serviceLandingPage {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  icon: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks_servicePages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks {
  __typename: "ServiceLinksParagraph";
  serviceLandingPage: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks_serviceLandingPage;
  servicePages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks_servicePages[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promotedLinks {
  __typename: "PromotedLink";
  url: string;
  title: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_heroImages {
  __typename: "HeroImage";
  image1440x810: string;
  image144x81: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_body {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_image1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_image144x81 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner {
  __typename: "PromoBannerParagraph";
  title: string;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_body;
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_link;
  image1440x810: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_image1440x810;
  image144x81: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner_image144x81;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_featuredNews_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_featuredNews {
  __typename: "ArticlePageNode";
  id: string;
  title: string;
  url: string;
  featuredImage1440x810: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_featuredNews_featuredImage1440x810 | null;
  image720x405: string | null;
  image72x41: string | null;
  imageAltText: string | null;
  date: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialNewsLinks_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialNewsLinks {
  __typename: "ArticlePageNode";
  id: string;
  title: string;
  url: string;
  featuredImage1440x810: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialNewsLinks_featuredImage1440x810 | null;
  image720x405: string | null;
  image72x41: string | null;
  imageAltText: string | null;
  date: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialImages {
  __typename: "MemorialImage";
  image1440x810: string;
  image144x81: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialCondolenceLink {
  __typename: "LinkFieldWithTitle";
  url: string;
  title: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks_link {
  __typename: "LinkFieldWithTitle";
  url: string;
  title: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks {
  __typename: "MemorialLink";
  icon: string | null;
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks_link | null;
  summary: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode {
  __typename: "HomepageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  homepageBody: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_homepageBody | null;
  serviceLinks: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_serviceLinks[];
  promotedLinks: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promotedLinks[];
  heroImages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_heroImages[];
  promoBanner: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_promoBanner | null;
  featuredNews: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_featuredNews[];
  memorialTakeover: boolean;
  memorialNewsLinks: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialNewsLinks[];
  memorialImages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialImages[];
  memorialCondolenceLink: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialCondolenceLink | null;
  memorialSummary: string | null;
  memorialIcon: string | null;
  memorialQuickLinks: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks[] | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_AccordionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
  summary: string;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages_ServiceLandingPageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages_ServicePageNode;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections {
  __typename: "SectionParagraph";
  name: string;
  pages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections_pages[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceAlert {
  __typename: "ServicePageAlert";
  title: string;
  content: string | null;
  alertType: AlertType | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  id: string;
  url: string;
  icon: string | null;
  serviceLandingBody: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceLandingBody | null;
  hasSections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_hasSections[];
  breadcrumbs: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_breadcrumbs[];
  serviceAlert: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode_serviceAlert | null;
  dateUpdated: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_AccordionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody_embeds[];
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
  code: string;
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
  ctaText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting {
  __typename: "CouncilSignpostingParagraph";
  otherCouncil: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_otherCouncil | null;
  signposts: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting_signposts[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  url: string;
  id: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages_ServiceLandingPageNode {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
  id: string;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages_ServicePageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages_ServiceLandingPageNode;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  pages: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection_pages[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_inSections_parent {
  __typename: "ServiceLandingPageNode";
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_inSections {
  __typename: "SectionParagraph";
  name: string;
  id: string;
  parent: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_inSections_parent;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_breadcrumbs {
  __typename: "Breadcrumb";
  title: string;
  url: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceAlert {
  __typename: "ServicePageAlert";
  title: string;
  content: string | null;
  alertType: AlertType | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode {
  __typename: "ServicePageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  url: string;
  warningTextDisclaimer: boolean;
  topLineText: string | null;
  serviceBody: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceBody;
  signposting: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_signposting | null;
  canonicalSection: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_canonicalSection | null;
  inSections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_inSections[];
  breadcrumbs: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_breadcrumbs[];
  dateUpdated: string;
  serviceAlert: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode_serviceAlert | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "CouncilTaxListParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph_sections[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionItemParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_CallToActionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_BlockQuoteParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_AccordionParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_FileDownloadParagraph | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph_HighlightParagraph;

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds_paragraph;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body_embeds[];
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_featuredImage144x81 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode {
  __typename: "ArticlePageNode";
  title: string;
  id: string;
  url: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  body: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_body;
  summary: string;
  featuredImage1440x810: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_featuredImage1440x810 | null;
  featuredImage144x81: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode_featuredImage144x81 | null;
  image720x405: string | null;
  image72x41: string | null;
  imageAltText: string | null;
  featuredImageCaption: string | null;
  parentTitle: string | null;
  parentUrl: string | null;
  date: string;
}

export type GetCMSContentOrRedirect_route_DrupalNodeRoute_node = GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServiceLandingPageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ServicePageNode | GetCMSContentOrRedirect_route_DrupalNodeRoute_node_ArticlePageNode;

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
