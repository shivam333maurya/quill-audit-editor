export interface TabProps {
  children?: React.ReactNode;
  onClick?: (index: number, tab: any) => void;
  selectedTab: number;
  data: any;
}

export interface PropsType {
  node?: any;
  onSelect?: (file: any) => void;
  index?: number;
  isSelected?: boolean;
  selectedFile?: any;
  loading: boolean;
}

export interface ShowPanalType {
  left: boolean;
  right: boolean;
}

export interface CurrentFileType {
  name: string;
  type: string;
  value: string;
  path: string;
}

export interface BreadCrumbType {
  name: string;
}

export interface IssueDetails {
  show: boolean;
  issue: any | null;
  index: number | null;
}

export interface ColumnWidthType {
  sm: any;
  md: any;
  lg: any;
}
