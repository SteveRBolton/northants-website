/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Highlight
// ====================================================

export interface Highlight_content {
  __typename: "FormattedField";
  value: string;
}

export interface Highlight {
  __typename: "HighlightParagraph";
  title: string;
  content: Highlight_content | null;
  isWarning: boolean | null;
}
