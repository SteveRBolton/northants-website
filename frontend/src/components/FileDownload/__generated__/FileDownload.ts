/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FileDownload
// ====================================================

export interface FileDownload_files {
  __typename: "Document";
  title: string;
  url: string;
  type: string;
  size: string;
}

export interface FileDownload {
  __typename: "FileDownloadParagraph";
  files: FileDownload_files[];
}
