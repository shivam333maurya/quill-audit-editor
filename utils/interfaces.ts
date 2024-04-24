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
}
