/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HomepageNodeFull
// ====================================================

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
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

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_HighlightParagraph;

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph_sections[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph_files[];
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_HighlightParagraph_content {
  __typename: "FormattedField";
  value: string;
}

export interface HomepageNodeFull_homepageBody_embeds_paragraph_HighlightParagraph {
  __typename: "HighlightParagraph";
  title: string;
  content: HomepageNodeFull_homepageBody_embeds_paragraph_HighlightParagraph_content | null;
  isWarning: boolean | null;
}

export type HomepageNodeFull_homepageBody_embeds_paragraph = HomepageNodeFull_homepageBody_embeds_paragraph_AccordionItemParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_CallToActionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_BlockQuoteParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_AccordionParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_FileDownloadParagraph | HomepageNodeFull_homepageBody_embeds_paragraph_HighlightParagraph;

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
  icon: string | null;
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

export interface HomepageNodeFull_promotedLinks {
  __typename: "PromotedLink";
  url: string;
  title: string;
}

export interface HomepageNodeFull_heroImages {
  __typename: "HeroImage";
  image1440x810: string;
  image144x81: string;
}

export interface HomepageNodeFull_promoBanner_body {
  __typename: "FormattedField";
  value: string;
}

export interface HomepageNodeFull_promoBanner_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface HomepageNodeFull_promoBanner_image1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface HomepageNodeFull_promoBanner_image144x81 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface HomepageNodeFull_promoBanner {
  __typename: "PromoBannerParagraph";
  title: string;
  body: HomepageNodeFull_promoBanner_body;
  link: HomepageNodeFull_promoBanner_link;
  image1440x810: HomepageNodeFull_promoBanner_image1440x810;
  image144x81: HomepageNodeFull_promoBanner_image144x81;
}

export interface HomepageNodeFull_featuredNews_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface HomepageNodeFull_featuredNews {
  __typename: "ArticlePageNode";
  id: string;
  title: string;
  url: string;
  featuredImage1440x810: HomepageNodeFull_featuredNews_featuredImage1440x810 | null;
  image720x405: string | null;
  image72x41: string | null;
  imageAltText: string | null;
  date: string;
}

export interface HomepageNodeFull_memorialNewsLinks_featuredImage144x81 {
  __typename: "Image";
  url: string;
}

export interface HomepageNodeFull_memorialNewsLinks {
  __typename: "ArticlePageNode";
  title: string;
  summary: string;
  featuredImage144x81: HomepageNodeFull_memorialNewsLinks_featuredImage144x81 | null;
}

export interface HomepageNodeFull {
  __typename: "HomepageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  homepageBody: HomepageNodeFull_homepageBody | null;
  serviceLinks: HomepageNodeFull_serviceLinks[];
  promotedLinks: HomepageNodeFull_promotedLinks[];
  heroImages: HomepageNodeFull_heroImages[];
  promoBanner: HomepageNodeFull_promoBanner | null;
  featuredNews: HomepageNodeFull_featuredNews[];
  memorialTakeover: boolean;
  memorialNewsLinks: HomepageNodeFull_memorialNewsLinks[];
}
