"use client";
import React from "react";

import { MyEnum } from "@/utils";
import { PropsType } from "@/utils/interfaces";

const FileNode = ({
  node,
  index,
  onSelect,
  isSelected,
  selectedFile,
}: PropsType) => {
  const { name, type, children, path } = node;

  const handleFileClick = () => {
    if (type === "file" && onSelect) {
      onSelect(node); // Pass the file node to the onSelect function
    }
  };

  let margin = 0;
  if (index !== undefined) {
    margin = index * 10;
  }

  return (
    <li
      key={name}
      style={{ margin: 10 }}
      onClick={handleFileClick}
      className={`${isSelected ? "selected" : "dedwef"} cursor-pointer`}
    >
      {type === "file" ? (
        <span
          className={`${selectedFile?.path === path ? "text-[#007AFF]" : ""}`}
        >
          {name}
        </span>
      ) : (
        <details>
          <summary
            className={`${
              selectedFile?.path?.includes(path) ? "text-[#007AFF]" : ""
            }`}
          >
            {name}
          </summary>
          <ul>
            {children.map((child: any, index: number) => (
              <FileNode
                key={`${child.name} ${index + 1}`}
                node={child}
                onSelect={onSelect}
                isSelected={selectedFile && selectedFile.name === child?.name}
                selectedFile={selectedFile}
              />
            ))}
          </ul>
        </details>
      )}
    </li>
  );
};

const FileDirectory = ({
  data,
  onSelect,
  selectedFile,
  showPanal = true,
  className = "min-w-[230px]",
}: any) => {
  return (
    <div
      className={`max-w-[18%] ${className} bg-[#13161A] rounded-[4px] ${
        !showPanal ? "hidden" : ""
      }`}
    >
      <h2 className="px-3 py-3">
        {MyEnum.EXPLORER}
        <hr className="mt-2 border-[#FFFFFF14]" />
      </h2>

      <ul>
        {data.children.map((child: any, index: number) => (
          <FileNode
            key={`${child.name} ${index + 1}`}
            node={child}
            index={index}
            onSelect={onSelect}
            isSelected={selectedFile && selectedFile.name === child?.name}
            selectedFile={selectedFile}
          />
        ))}
      </ul>
    </div>
  );
};

export { FileDirectory };
