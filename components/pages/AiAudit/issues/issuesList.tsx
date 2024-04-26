import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

import { IIssueType } from "@/utils/interfaces/interfaces";
import { IIssueListPropsType } from "@/utils/interfaces/props-interfaces";
import { getColorByIssueType } from "@/utils";

const IssuesList = ({ issues, onClick }: IIssueListPropsType) => {
  return (
    <div className="h-full overflow-auto">
      {issues.map((issue: IIssueType, index: number) => {
        return (
          <div
            key={`${issue?.issue} ${index + 1}`}
            onClick={() => onClick && onClick(issue)}
            className="flex items-center bg-[#191D23] gap-3 mb-2 rounded-[4px] h-[60px] w-full px-2 cursor-pointer"
          >
            <div className="flex h-full items-center">
              <div className="flex items-center w-[120px] flex-auto">
                <RxDotFilled
                  color={getColorByIssueType(issue?.issue)}
                  fontSize={34}
                />
                <h1 className="text-[28px]">{issue.count}</h1>
              </div>
              <div className="h-[54px] w-[1px] bg-[#FFFFFF14]" />
            </div>
            <div className="flex items-center text-[#CCCCCC] justify-between w-full gap-2">
              <span>{issue.issue}</span>
              <MdArrowForwardIos fontSize={14} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { IssuesList };
