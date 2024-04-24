"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

import { LuArrowRightToLine } from "react-icons/lu";
import { LuArrowLeftToLine } from "react-icons/lu";
import { ActiveTabsBar } from "@/components";

const CodeEditor = ({
  selectedFile,
  selectedFiles = [],
  handleShowPanal,
  showPanal,
  handleFileClick,
  handleClearSelectedFile,
  className = "",
}: any) => {
  const [editorData, setEditor] = useState<any>(selectedFile);

  useEffect(() => {
    setEditor(selectedFile);
  }, [selectedFile]);

  return (
    <div
      className={`w-[58%] ${className.toString()} flex-1 bg-[#13161A] relative rounded-[4px]`}
    >
      <div
        className="absolute left-[-9px] bottom-4 z-[99] bg-[#007AFF] w-[20px] h-[20px] flex items-center justify-center rounded-[2px]"
        onClick={() => {
          handleShowPanal("left");
        }}
      >
        {showPanal.left ? <LuArrowLeftToLine /> : <LuArrowRightToLine />}
      </div>
      <div
        className="absolute right-[-9px] bottom-4 z-[99] bg-[#007AFF] w-[20px] h-[20px] flex items-center justify-center rounded-[2px]"
        onClick={() => {
          handleShowPanal("right");
        }}
      >
        {showPanal.right ? <LuArrowRightToLine /> : <LuArrowLeftToLine />}
      </div>
      {selectedFiles?.length ? (
        <ActiveTabsBar
          onClick={handleFileClick}
          onClear={handleClearSelectedFile}
          items={selectedFiles}
          selected={selectedFile?.path}
        />
      ) : null}
      <Editor
        height={`calc(100% - ${selectedFiles?.length ? 40 : 0}px)`}
        width={"100%"}
        defaultLanguage="javascript"
        value={editorData.value}
        className="code-editor"
      />
    </div>
  );
};

export { CodeEditor };
