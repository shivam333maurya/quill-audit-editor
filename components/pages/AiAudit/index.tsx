"use client";
import { useMemo, useState } from "react";

import {
  IBreadCrumbType,
  IColumnStylesTypes,
  ICurrentFileType,
  IIssueDetails,
  IIssueType,
  IIssuesType,
  IShowPanalType,
} from "@/utils/interfaces/interfaces";
import {
  OverlayPanal,
  CodeEditor,
  FileDirectory,
  EditorHeader,
  BreadCrumb,
  IssuesTab,
} from "@/components";
import {
  DEFAULT_FILE_DATA,
  generateDirectoryData,
  DEFAULT_WIDTH,
  FILE_DATA,
  NAV_BREADCRUMB,
} from "@/utils";

export default function AiAudit() {
  const [currentFile, setCurrentFile] = useState<ICurrentFileType>({
    ...DEFAULT_FILE_DATA,
  });
  const [selectedFiles, setSelectedFiles] = useState<ICurrentFileType[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<IIssueType | null>(null);
  const [breadCrumbItems, setBreadCrumbItems] = useState<IBreadCrumbType[]>([
    {
      name: "Issue Count",
      key: 0,
    },
  ]);
  const [showPanal, setShowPanal] = useState<IShowPanalType>({
    right: true,
    left: true,
  });
  const [issueDetails, setIssueDetails] = useState<IIssueDetails>({
    show: false,
    issue: null,
    key: null,
  });
  const [columnWidth, setColumnWidth] = useState<IColumnStylesTypes>({
    ...DEFAULT_WIDTH,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const handleFileSelection = (file: ICurrentFileType) => {
    const currentFile = { ...file };

    setSelectedFiles((prev) => {
      const paths = prev.map((item) => item.path);
      if (!paths.includes(currentFile.path)) {
        return [...prev, currentFile];
      } else {
        return prev;
      }
    });
  };

  const handleFileClick = (file: ICurrentFileType) => {
    setCurrentFile(file);
    handleFileSelection(file);
  };

  const handleClearSelectedFile = (
    files: ICurrentFileType[],
    selected: ICurrentFileType
  ) => {
    const newItems = files.filter((file) => file.path !== selected.path);
    const currentFile = newItems.at(-1) || { ...DEFAULT_FILE_DATA };
    setSelectedFiles(newItems);
    setCurrentFile(currentFile);
  };

  const handleShowPanal = (panal: string) => {
    if (panal === "left") {
      setShowPanal({ ...showPanal, left: !showPanal.left });
    }
    if (panal === "right") {
      setShowPanal({ ...showPanal, right: !showPanal.right });
    }
  };

  const handleIssuesClick = (issue: IIssueType) => {
    setSelectedIssue(issue);
    setBreadCrumbItems((prev) => [
      prev[0],
      {
        name: issue.issue,
        key: 1,
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

  const handleIssueClick = (issue: IIssuesType, key: number) => {
    setIssueDetails({ show: true, issue: issue, key });
    setBreadCrumbItems((prev) => [
      ...prev,
      {
        name: `Issue #${key + 1}`,
        key: 2,
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

  const handleIssueBreadCrumb = (item: IBreadCrumbType) => {
    if (item.key === 1) {
      setBreadCrumbItems((prev) => [prev[0], prev[1]]);
      setIssueDetails({ show: false, issue: null, key: null });
    } else if (item.key === 0) {
      setBreadCrumbItems((prev) => [prev[0]]);
      setIssueDetails({ show: false, issue: null, key: null });
      setSelectedIssue(null);
    } else {
      return;
    }
  };

  function handleEditorDidMount() {
    setLoading(false);
  }

  const fileDirectoryData: ICurrentFileType = useMemo(() => {
    const data = generateDirectoryData(FILE_DATA);
    return data;
  }, []);

  return (
    <main className="h-full">
      <BreadCrumb list={NAV_BREADCRUMB} />
      <div className="h-[calc(100%-28px)] bg-[#191D23] px-2 py-3 mx-3 rounded-[4px]">
        <EditorHeader />
        <hr className="mb-2 border-[#FFFFFF14]" />
        <div className="flex gap-3 h-[calc(100%-54px)]">
          <FileDirectory
            className={`min-w-[${columnWidth.sm.directoryColumn}px]`}
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
            <OverlayPanal showPanal={showPanal.right}>
              <IssuesTab
                breadCrumbItems={breadCrumbItems}
                handleIssuesClick={handleIssuesClick}
                issueDetails={issueDetails}
                handleBreadCrumb={handleIssueBreadCrumb}
              />
            </OverlayPanal>
          )}

          {selectedIssue && !issueDetails.show && (
            <OverlayPanal showPanal={showPanal.right}>
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
            <OverlayPanal showPanal={showPanal.right}>
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
