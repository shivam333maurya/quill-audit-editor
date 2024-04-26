import {
  IDirectoryDataType,
  IRawDirectoryDataType,
} from "./interfaces/interfaces";

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

const generateDirectoryData = (fileData: IRawDirectoryDataType) => {
  const data = {
    ...fileData,
    path: `/${fileData.name}`,
    children: fileData.children,
  };

  const addPath = (fileStructure: any, parentPath: string) => {
    return fileStructure.map((node: any) => {
      const { name, type, children, value } = node;
      const path = parentPath ? `${parentPath}/${name}` : `/${name}`;

      if (type === "folder" && children && children.length > 0) {
        const updatedChildren = addPath(children, path);
        return {
          name,
          type,
          path,
          children: updatedChildren,
        };
      }

      return {
        name,
        type,
        path,
        value,
      };
    });
  };

  const children = addPath(fileData.children, data.path);
  data.children = children;
  return data;
};

export { getColorByIssueType, generateDirectoryData };
