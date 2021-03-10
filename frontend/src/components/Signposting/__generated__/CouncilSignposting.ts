/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CouncilSignposting
// ====================================================

export interface CouncilSignposting_otherCouncil {
  __typename: "LinkField";
  url: string;
}

export interface CouncilSignposting_signposts_council_homepage {
  __typename: "LinkField";
  url: string;
}

export interface CouncilSignposting_signposts_council {
  __typename: "SovereignCouncil";
  code: string;
  name: string;
  homepage: CouncilSignposting_signposts_council_homepage;
}

export interface CouncilSignposting_signposts_link {
  __typename: "LinkField";
  url: string;
}

export interface CouncilSignposting_signposts {
  __typename: "CouncilSignpostParagraph";
  council: CouncilSignposting_signposts_council;
  link: CouncilSignposting_signposts_link | null;
  ctaText: string | null;
}

export interface CouncilSignposting {
  __typename: "CouncilSignpostingParagraph";
  otherCouncil: CouncilSignposting_otherCouncil | null;
  signposts: CouncilSignposting_signposts[];
}
