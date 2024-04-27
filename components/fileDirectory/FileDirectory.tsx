"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  IFileDirectoryPropsType,
  IFileNodePropsType,
} from "@/utils/interfaces/props-interfaces";
import { IDirectoryItem } from "@/utils/interfaces/interfaces";
import { EMyEnum, EIcons } from "@/utils";

const FileNode = ({
  node,
  index,
  onSelect,
  isSelected,
  selectedFile,
  loading,
}: IFileNodePropsType) => {
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
            <Image
              src={isOpen ? EIcons.ArrowDown : EIcons.ArrowRight}
              alt="folder"
              width={10}
              height={6}
              className="w-auto h-auto"
            />
            <Image
              src={activeFolder ? EIcons.FolderActive : EIcons.Folder}
              alt="folder"
              width={16}
              height={14}
              className="w-auto h-auto"
            />
            {name}
          </summary>
          <ul>
            {children?.map((child: IDirectoryItem, index: number) => (
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
}: IFileDirectoryPropsType) => {
  return (
    <div
      className={`max-w-[18%] ${className} bg-[#13161A] rounded-[4px] ${
        !showPanal ? "hidden" : ""
      }`}
    >
      <h2 className="px-3 py-3">
        {EMyEnum.EXPLORER}
        <hr className="mt-2 border-[#FFFFFF14]" />
      </h2>

      <ul>
        {data?.children?.map((child: IDirectoryItem, index: number) => (
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
