import React from "react";
import { RxDotFilled } from "react-icons/rx";

import { HrDivider } from "@/components";
import { getColorByIssueType } from "@/utils";

const IssuesDetails = ({ issueDetails }: any) => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex items-center bg-[#191D23] gap-2 mb-3 rounded-[4px] h-[60px] w-full px-2">
        <RxDotFilled
          color={getColorByIssueType(issueDetails?.issue?.issueType)}
          fontSize={34}
        />
        <p className="text-[#CCCCCC] text-[14px]">
          #{issueDetails?.index}. {issueDetails?.issue?.issue}
        </p>
      </div>
      <div className="mb-3">
        <p className="text-[#007AFFE5]">Description:</p>
        <p className="text-[#CCCCCC] text-[14px]">
          {issueDetails?.issue?.description}
        </p>
      </div>
      <div className="mb-3">
        <p className="text-[#007AFFE5]">Remediation:</p>
        <p className="text-[#CCCCCC] text-[14px]">
          {issueDetails?.issue?.remediation}
        </p>
      </div>
      <HrDivider />
    </div>
  );
};

export { IssuesDetails };
