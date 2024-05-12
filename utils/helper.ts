import { IDirectoryItem, IRawDirectoryDataType } from "./interfaces/interfaces";

const getColorByIssueType = (issue: string) => {
  switch (issue) {
    case "Total Issues Found":
      return "#5481FE";
    case "High Severity Issues":
      return "#FF4D4D";
    case "Medium Severity Issues":
      return "#FFD166";
    case "Low Severity Issues":
      return "#06D6A0";
    case "Informational Issues":
      return "#E568FF";
    case "Optimisation Issues":
      return "#66E3F4";
    default:
      return "#FF4D4D";
  }
};

const generateDirectoryData = (
  fileData: IRawDirectoryDataType | undefined
): IDirectoryItem => {
  if (!fileData) {
    return { name: "", type: "", path: "", children: [] };
  }

  const { name, type, value, children: rawChildren } = fileData;

  const data: IDirectoryItem = {
    name,
    value,
    type,
    path: `/${name}`,
  };

  const addPath = (
    children: IRawDirectoryDataType[] = [],
    parentPath: string
  ): IDirectoryItem[] => {
    return children.map((child) => {
      const { name, type, value, children: nestedChildren } = child;
      const path = `${parentPath}/${name}`;

      if (type === "folder" && nestedChildren && nestedChildren.length > 0) {
        const updatedChildren = addPath(nestedChildren, path);
        return { name, type, path, children: updatedChildren };
      }

      return { name, type, path, value };
    });
  };

  data.children = addPath(rawChildren, data.path);
  return data;
};

export { getColorByIssueType, generateDirectoryData };
