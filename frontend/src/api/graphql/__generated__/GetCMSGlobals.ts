/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCMSGlobals
// ====================================================

export interface GetCMSGlobals_globals_footerLinks {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSGlobals_globals {
  __typename: "DrupalGlobals";
  footerLinks: GetCMSGlobals_globals_footerLinks[];
}

export interface GetCMSGlobals {
  globals: GetCMSGlobals_globals;
}
