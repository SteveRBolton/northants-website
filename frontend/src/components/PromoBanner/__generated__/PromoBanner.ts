/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PromoBanner
// ====================================================

export interface PromoBanner_body {
  __typename: "FormattedField";
  value: string;
}

export interface PromoBanner_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface PromoBanner_image1440x810 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface PromoBanner_image144x81 {
  __typename: "Image";
  url: string;
  altText: string | null;
}

export interface PromoBanner {
  __typename: "PromoBannerParagraph";
  title: string;
  body: PromoBanner_body;
  link: PromoBanner_link;
  image1440x810: PromoBanner_image1440x810;
  image144x81: PromoBanner_image144x81;
}
