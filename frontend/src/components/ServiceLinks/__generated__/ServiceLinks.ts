/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceLinks
// ====================================================

export interface ServiceLinks_serviceLandingPage {
  __typename: "ServiceLandingPageNode";
  title: string;
  url: string;
}

export interface ServiceLinks_servicePages {
  __typename: "ServicePageNode";
  title: string;
  url: string;
}

export interface ServiceLinks {
  __typename: "ServiceLinksParagraph";
  serviceLandingPage: ServiceLinks_serviceLandingPage;
  servicePages: ServiceLinks_servicePages[];
}
