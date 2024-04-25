"use client";
import { useMemo, useState } from "react";

import {
  OverlayPanal,
  CodeEditor,
  FileDirectory,
  EditorHeader,
  BreadCrumb,
} from "@/components";
import { IssuesTab } from "@/components";
import {
  defaultFileData,
  defaultWidth,
  fileData,
  generateDirectoryData,
} from "@/utils";
import {
  BreadCrumbType,
  ColumnWidthType,
  CurrentFileType,
  IssueDetails,
  ShowPanalType,
} from "@/utils/interfaces";

export default function AiAudit() {
  const [currentFile, setCurrentFile] = useState<CurrentFileType>({
    ...defaultFileData,
  });
  const [selectedFiles, setSelectedFiles] = useState<CurrentFileType[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<any>(null);
  const [breadCrumbItems, setBreadCrumbItems] = useState<BreadCrumbType[]>([
    {
      name: "Issue Count",
    },
  ]);
  const [showPanal, setShowPanal] = useState<ShowPanalType>({
    right: true,
    left: true,
  });
  const [issueDetails, setIssueDetails] = useState<IssueDetails>({
    show: false,
    issue: null,
    index: null,
  });
  const [columnWidth, setColumnWidth] = useState<ColumnWidthType>({
    ...defaultWidth,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const handleFileSelection = (file: any) => {
    const currentFile: any = { ...file };

    setSelectedFiles((prev) => {
      const paths = prev.map((item) => item.path);
      if (!paths.includes(currentFile.path)) {
        return [...prev, currentFile];
      } else {
        return prev;
      }
    });
  };

  const handleFileClick = (file: any) => {
    setCurrentFile(file);
    handleFileSelection(file);
  };

  const handleClearSelectedFile = (files: any, selected: any) => {
    const newItems = files.filter((file: any) => file.path !== selected.path);
    const currentFile = newItems.at(-1);
    setSelectedFiles(newItems);
    if (!newItems.length) {
      setCurrentFile({ ...defaultFileData });
    } else {
      setCurrentFile(currentFile);
    }
  };

  const handleShowPanal = (panal: any) => {
    if (panal === "left") {
      setShowPanal({ ...showPanal, left: !showPanal.left });
    }
    if (panal === "right") {
      setShowPanal({ ...showPanal, right: !showPanal.right });
    }
  };

  const handleIssuesClick = (issue: any) => {
    setSelectedIssue(issue);
    setBreadCrumbItems((prev) => [
      prev[0],
      {
        name: issue.issue,
      },
    ]);
    setColumnWidth((prev) => {
      const sm = {
        ...prev.sm,
        editorColumn: "calc(100%-650px)",
      };
      return { ...prev, sm };
    });
  };

  const handleIssueClick = (issue: any, index: any) => {
    setIssueDetails({ show: true, issue: issue, index });
    setBreadCrumbItems((prev) => [
      ...prev,
      {
        name: `Issue #${index + 1}`,
      },
    ]);
    setColumnWidth((prev) => {
      const sm = {
        ...prev.sm,
        editorColumn: "calc(100%-650px)",
      };
      return { ...prev, sm };
    });
  };

  const handleIssueBreadCrumb = (name: any, index: number) => {
    if (index === 1) {
      setBreadCrumbItems((prev) => [prev[0], prev[1]]);
      setIssueDetails({ show: false, issue: null, index: null });
    } else if (index === 0) {
      setBreadCrumbItems((prev) => [prev[0]]);
      setIssueDetails({ show: false, issue: null, index: null });
      setSelectedIssue(null);
    } else {
      return;
    }
  };

  function handleEditorDidMount() {
    setLoading(false);
  }

  const fileDirectoryData = useMemo(() => {
    const data = generateDirectoryData(fileData);
    return data;
  }, []);

  return (
    <main className="h-full">
      <BreadCrumb
        list={[
          { name: "Ai Audit" },
          { name: "My Project" },
          { name: "Code Editor" },
        ]}
      />
      <div className="h-[calc(100%-28px)] bg-[#191D23] px-2 py-3 mx-3 rounded-[4px]">
        <EditorHeader />
        <hr className="mb-2 border-[#FFFFFF14]" />
        <div className="flex gap-3 h-[calc(100%-54px)]">
          <FileDirectory
            className={`min-w-[${columnWidth.sm.directoryColumn}px]`}
            columnWidth={columnWidth}
            data={fileDirectoryData}
            selectedFile={currentFile}
            onSelect={handleFileClick}
            showPanal={showPanal.left}
            loading={loading}
          />
          <CodeEditor
            className={`min-w-[${columnWidth.sm.editorColumn}]`}
            selectedFiles={selectedFiles}
            selectedFile={currentFile}
            handleShowPanal={handleShowPanal}
            handleClearSelectedFile={handleClearSelectedFile}
            handleFileClick={handleFileClick}
            handleEditorDidMount={handleEditorDidMount}
            showPanal={showPanal}
          />
          {!selectedIssue && !issueDetails.show && (
            <OverlayPanal
              // className={`min-w-[${columnWidth.sm.issue.issuesList}px]`}
              showPanal={showPanal.right}
            >
              <IssuesTab
                breadCrumbItems={breadCrumbItems}
                handleIssuesClick={handleIssuesClick}
                issueDetails={issueDetails}
                handleBreadCrumb={handleIssueBreadCrumb}
              />
            </OverlayPanal>
          )}

          {selectedIssue && !issueDetails.show && (
            <OverlayPanal
              // className={`min-w-[${columnWidth.sm.issue.issueList}px]`}
              showPanal={showPanal.right}
            >
              <IssuesTab
                issueDetails={issueDetails}
                breadCrumbItems={breadCrumbItems}
                selectedIssue={selectedIssue}
                handleIssueClick={handleIssueClick}
                handleBreadCrumb={handleIssueBreadCrumb}
              />
            </OverlayPanal>
          )}
          {selectedIssue && issueDetails.show && (
            <OverlayPanal
              // className={`min-w-[${columnWidth.sm.issue.issueList}px]`}
              showPanal={showPanal.right}
            >
              <IssuesTab
                selectedIssue={selectedIssue}
                issueDetails={issueDetails}
                breadCrumbItems={breadCrumbItems}
                handleBreadCrumb={handleIssueBreadCrumb}
              />
            </OverlayPanal>
          )}
        </div>
      </div>
    </main>
  );
}
