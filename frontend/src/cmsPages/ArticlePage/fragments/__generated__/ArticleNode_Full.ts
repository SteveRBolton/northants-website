/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleNode_Full
// ====================================================

export interface ArticleNode_Full_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ArticleNode_Full_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ArticleNode_Full_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ArticleNode_Full_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ArticleNode_Full_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "PromoBannerParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export type ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph | ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_FileDownloadParagraph;

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface ArticleNode_Full_body_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: ArticleNode_Full_body_embeds_paragraph_AccordionParagraph_sections[];
}

export interface ArticleNode_Full_body_embeds_paragraph_FileDownloadParagraph_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface ArticleNode_Full_body_embeds_paragraph_FileDownloadParagraph {
  __typename: "FileDownloadParagraph";
  files: ArticleNode_Full_body_embeds_paragraph_FileDownloadParagraph_files[];
}

export type ArticleNode_Full_body_embeds_paragraph = ArticleNode_Full_body_embeds_paragraph_AccordionItemParagraph | ArticleNode_Full_body_embeds_paragraph_CallToActionParagraph | ArticleNode_Full_body_embeds_paragraph_BlockQuoteParagraph | ArticleNode_Full_body_embeds_paragraph_AccordionParagraph | ArticleNode_Full_body_embeds_paragraph_FileDownloadParagraph;

export interface ArticleNode_Full_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ArticleNode_Full_body_embeds_paragraph;
}

export interface ArticleNode_Full_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ArticleNode_Full_body_embeds[];
}

export interface ArticleNode_Full_featuredImage1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface ArticleNode_Full_featuredImage144x81 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface ArticleNode_Full {
  __typename: "ArticlePageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  body: ArticleNode_Full_body;
  summary: string;
  featuredImage1440x810: ArticleNode_Full_featuredImage1440x810 | null;
  featuredImage144x81: ArticleNode_Full_featuredImage144x81 | null;
  featuredImageCaption: string | null;
  parentTitle: string | null;
  parentUrl: string | null;
  date: string;
}
