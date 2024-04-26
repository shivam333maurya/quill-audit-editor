import React, { ReactNode } from "react";

export interface IShowPanalType {
  left: boolean;
  right: boolean;
}

export interface ICurrentFileType {
  name: string;
  type: string;
  value?: string;
  path: string;
}

export interface IDirectoryDataType extends ICurrentFileType {
  children?: ICurrentFileType[];
}

export interface IRawDirectoryDataType {
  name: string;
  type: string;
  value?: string;
  children?: IRawDirectoryDataType[];
}

export interface IBreadCrumbType {
  name: string;
  key?: number;
}

export interface IIssueColumnStyle {
  issueList: number;
  issuesList: number;
}

export interface IColumnWidthTypes {
  directoryColumn: number;
  editorColumn: string;
  issue: IIssueColumnStyle;
}

export interface IColumnStylesTypes {
  sm: IColumnWidthTypes;
  md: IColumnWidthTypes;
  lg: IColumnWidthTypes;
}

export interface IIssuesType {
  description: string;
  issue: string;
  remediation: string;
  issueType?: string;
}

export interface IIssueDetails {
  show: boolean;
  issue: IIssuesType | null;
  key: number | null;
}

export interface IIssueType {
  count: number;
  issue: string;
  issues: IIssuesType[];
  key: string;
}
