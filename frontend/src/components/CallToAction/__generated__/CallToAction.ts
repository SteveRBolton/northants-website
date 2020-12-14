/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CallToAction
// ====================================================

export interface CallToAction_link {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface CallToAction {
  __typename: "CallToActionParagraph";
  link: CallToAction_link;
}
