"use client";
import React, { useState } from "react";

import { MyEnum } from "@/utils";
import { PropsType } from "@/utils/interfaces";
import Image from "next/image";
import { arrowDown, arrowRight, folder, folderActive } from "@/assets";

const FileNode = ({
  node,
  index,
  onSelect,
  isSelected,
  selectedFile,
  loading = true,
}: PropsType) => {
  const { name, type, children, path } = node;
  const [isOpen, setIsOpen] = useState(false);
  const activeFolder = selectedFile?.path?.includes(path);
  const activeFile = selectedFile?.path === path;

  const handleFileClick = (type: string) => {
    if (!loading) {
      if (type === "file" && onSelect) {
        onSelect(node); // Pass the file node to the onSelect function
      }
      if (type === "folder" && onSelect) {
        setIsOpen(!isOpen);
      }
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
      className={`${isSelected ? "selected" : "dedwef"} cursor-pointer`}
    >
      {type === "file" ? (
        <span
          className={`${activeFile ? "text-[#007AFF]" : ""}`}
          onClick={() => handleFileClick(type)}
        >
          {name}
        </span>
      ) : (
        <details className={`${isOpen ? "open" : ""}`}>
          <summary
            className={`flex items-center gap-2 ${
              activeFolder ? "text-[#007AFF]" : ""
            }`}
            onClick={() => handleFileClick(type)}
          >
            <Image src={isOpen ? arrowDown : arrowRight} alt="folder" />
            <Image src={activeFolder ? folderActive : folder} alt="folder" />
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
                loading={loading}
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
  loading,
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
            loading={loading}
          />
        ))}
      </ul>
    </div>
  );
};

export { FileDirectory };
