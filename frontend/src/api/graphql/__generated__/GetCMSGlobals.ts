/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AlertType } from "./../../../types/graphql/__generated__/global.d";

// ====================================================
// GraphQL query operation: GetCMSGlobals
// ====================================================

export interface GetCMSGlobals_globals_footerLinks {
  __typename: "LinkFieldWithTitle";
  title: string;
  url: string;
  external: boolean;
}

export interface GetCMSGlobals_globals_sitewideAlerts_body {
  __typename: "FormattedField";
  value: string;
}

export interface GetCMSGlobals_globals_sitewideAlerts {
  __typename: "Alert";
  id: string;
  title: string;
  body: GetCMSGlobals_globals_sitewideAlerts_body;
  alertType: AlertType | null;
}

export interface GetCMSGlobals_globals {
  __typename: "DrupalGlobals";
  footerLinks: GetCMSGlobals_globals_footerLinks[];
  sitewideAlerts: GetCMSGlobals_globals_sitewideAlerts | null;
}

export interface GetCMSGlobals {
  globals: GetCMSGlobals_globals;
}
