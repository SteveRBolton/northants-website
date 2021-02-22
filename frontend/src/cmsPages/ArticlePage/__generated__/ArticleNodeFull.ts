/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleNodeFull
// ====================================================

export interface ArticleNodeFull_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ArticleNodeFull_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ArticleNodeFull_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ArticleNodeFull_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ArticleNodeFull_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph {
  __typename: "AccordionItemParagraph" | "AccordionParagraph" | "CouncilSignpostParagraph" | "CouncilSignpostingParagraph" | "SectionParagraph" | "ServiceLinksParagraph";
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph {
  __typename: "CallToActionParagraph";
  link: ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph_link;
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph {
  __typename: "BlockQuoteParagraph";
  quote: string;
  citation: string | null;
}

export type ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph = ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_AccordionItemParagraph | ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_CallToActionParagraph | ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph_BlockQuoteParagraph;

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds_paragraph;
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body_embeds[];
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections {
  __typename: "AccordionItemParagraph";
  id: string;
  title: string;
  summary: string | null;
  body: ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections_body;
}

export interface ArticleNodeFull_body_embeds_paragraph_AccordionParagraph {
  __typename: "AccordionParagraph";
  sections: ArticleNodeFull_body_embeds_paragraph_AccordionParagraph_sections[];
}

export type ArticleNodeFull_body_embeds_paragraph = ArticleNodeFull_body_embeds_paragraph_AccordionItemParagraph | ArticleNodeFull_body_embeds_paragraph_CallToActionParagraph | ArticleNodeFull_body_embeds_paragraph_BlockQuoteParagraph | ArticleNodeFull_body_embeds_paragraph_AccordionParagraph;

export interface ArticleNodeFull_body_embeds {
  __typename: "EmbeddedParagraph";
  id: string;
  paragraph: ArticleNodeFull_body_embeds_paragraph;
}

export interface ArticleNodeFull_body {
  __typename: "FormattedFieldWithParagraphsEmbed";
  value: string;
  embeds: ArticleNodeFull_body_embeds[];
}

export interface ArticleNodeFull {
  __typename: "ArticlePageNode";
  title: string;
  id: string;
  metaTitle: string;
  metaDescription: string | null;
  metaKeywords: string | null;
  body: ArticleNodeFull_body;
  summary: string;
  parentTitle: string | null;
  parentUrl: string | null;
  date: string;
}
