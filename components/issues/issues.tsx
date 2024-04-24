"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

import { info } from "@/assets";
import {
  BreadCrumb,
  HrDivider,
  Issue,
  IssuesDetails,
  IssuesList,
  Tabs,
} from "@/components";
import { issues } from "@/utils";

const IssuesTab = ({
  handleIssuesClick,
  selectedIssue,
  breadCrumbItems = [],
  issueDetails,
  handleIssueClick,
  handleBreadCrumb,
}: any) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabData = useMemo(() => {
    return [
      {
        name: "Current Project",
        component: <IssuesList onClick={handleIssuesClick} issues={issues} />,
      },
      {
        name: "Full Project",
        component: <IssuesList onClick={handleIssuesClick} issues={issues} />,
      },
    ];
  }, [handleIssuesClick]);

  const handleTabChange = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex-1 bg-[#13161A] h-[calc(100%-10px)] relative rounded-[4px]">
      <div className="px-3">
        <BreadCrumb list={breadCrumbItems} onClick={handleBreadCrumb} />
        <HrDivider />
      </div>
      <div className="px-3 h-[calc(100%-98px)]">
        {!selectedIssue && !issueDetails?.show && (
          <Tabs
            data={tabData}
            selectedTab={selectedTab}
            onClick={handleTabChange}
          />
        )}
        {selectedIssue && !issueDetails?.show && (
          <Issue selectedIssue={selectedIssue} onClick={handleIssueClick} />
        )}
        {selectedIssue && issueDetails?.show && (
          <IssuesDetails issueDetails={issueDetails} />
        )}
      </div>
      {!issueDetails?.show ? (
        <div className="w-full px-3 absolute bottom-[12px] text-[12px]">
          <HrDivider />
          <div className="flex items-center gap-2">
            <input type="checkbox" defaultChecked id="checkbox" />
            <label htmlFor="checkbox">Exclude Dependencies</label>
          </div>
        </div>
      ) : (
        <div className="w-full px-3 absolute bottom-[12px] text-[12px]">
          <div className="flex items-center gap-2">
            <Image alt="logo" width={16} height={16} src={info} />
            <span className="text-[#EEEEEE] text-[12px]">
              Changes done in the code can be undone.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export { IssuesTab };
