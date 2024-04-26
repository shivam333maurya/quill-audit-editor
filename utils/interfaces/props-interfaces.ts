import {
  IBreadCrumbType,
  ICurrentFileType,
  IDirectoryDataType,
  IIssueDetails,
  IIssueType,
  IIssuesType,
  IShowPanalType,
} from "./interfaces";

export interface IFileNodePropsType {
  node: IDirectoryDataType;
  onSelect?: (file: ICurrentFileType) => void;
  index?: number;
  isSelected?: boolean;
  selectedFile?: ICurrentFileType;
  loading: boolean;
}

export interface IOverlayPanalPropsType {
  children: React.ReactNode;
  className?: string;
  showPanal?: boolean;
}

export interface IBreadCrumbPropsType {
  list: IBreadCrumbType[];
  onClick?: (item: IBreadCrumbType) => void;
  key?: number;
}

export interface IIssuesTabPropsType {
  handleIssuesClick?: (issue: IIssueType) => void;
  selectedIssue?: IIssueType;
  breadCrumbItems: IBreadCrumbType[];
  issueDetails: IIssueDetails;
  handleIssueClick?: (issue: IIssuesType, key: number) => void;
  handleBreadCrumb: (item: IBreadCrumbType) => void;
}

export interface IIssuesDetailsPropsType {
  issueDetails: IIssueDetails;
}

export interface ITabDataProps {
  name: string;
  component: JSX.Element;
}

export interface ITabsProps {
  children?: React.ReactNode;
  onClick?: (key: number, tab: ITabDataProps) => void;
  selectedTab: number;
  data: ITabDataProps[];
}

export interface IIssuePropsType {
  selectedIssue: IIssueType;
  onClick?: (item: IIssuesType, index: number) => void;
}

export interface IIssueListPropsType {
  issues: IIssueType[];
  onClick?: (issue: IIssueType) => void;
}

export interface IFileDirectoryPropsType {
  data: IDirectoryDataType;
  onSelect: (props: ICurrentFileType) => void;
  selectedFile: ICurrentFileType;
  showPanal: boolean;
  className: string;
  loading: boolean;
}

export interface IActiveTabsBarPropsType {
  items: ICurrentFileType[];
  selected: string;
  onClick: (file: ICurrentFileType) => void;
  onClear: (files: ICurrentFileType[], selected: ICurrentFileType) => void;
}

export interface CodeEditorPropsType {
  selectedFile: ICurrentFileType;
  selectedFiles: ICurrentFileType[];
  handleShowPanal: (prop: string) => void;
  showPanal: IShowPanalType;
  handleFileClick: (file: ICurrentFileType) => void;
  handleClearSelectedFile: (
    files: ICurrentFileType[],
    selected: ICurrentFileType
  ) => void;
  className: string;
  handleEditorDidMount: () => void;
}
