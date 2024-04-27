import {
  IBreadCrumbType,
  IDirectoryItem,
  IIssueDetails,
  IIssueType,
  IIssuesType,
  IShowPanalType,
} from "./interfaces";

export interface IFileNodePropsType {
  node: IDirectoryItem;
  onSelect?: (file: IDirectoryItem) => void;
  index?: number;
  isSelected?: boolean;
  selectedFile?: IDirectoryItem;
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
  data: IDirectoryItem;
  onSelect: (props: IDirectoryItem) => void;
  selectedFile: IDirectoryItem;
  showPanal: boolean;
  className: string;
  loading: boolean;
}

export interface IActiveTabsBarPropsType {
  items: IDirectoryItem[];
  selected: string;
  onClick: (file: IDirectoryItem) => void;
  onClear: (files: IDirectoryItem[], selected: IDirectoryItem) => void;
}

export interface CodeEditorPropsType {
  selectedFile: IDirectoryItem;
  selectedFiles: IDirectoryItem[];
  handleShowPanal: (prop: string) => void;
  showPanal: IShowPanalType;
  handleFileClick: (file: IDirectoryItem) => void;
  handleClearSelectedFile: (
    files: IDirectoryItem[],
    selected: IDirectoryItem
  ) => void;
  className: string;
  handleEditorDidMount: () => void;
}
