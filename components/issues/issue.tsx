import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

import { HrDivider } from "@/components";
import { getColorByIssueType } from "@/utils";

const Issue = ({ selectedIssue, onClick }: any) => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex items-center bg-[#191D23] gap-3 mb-2 rounded-[4px] h-[60px] w-full px-2">
        <div className="flex h-full w-[50%] items-center">
          <div className="flex items-center w-[120px] flex-auto">
            <RxDotFilled
              color={getColorByIssueType(selectedIssue?.issue)}
              fontSize={34}
            />
            <h1 className="text-[28px]">{selectedIssue?.count}</h1>
          </div>
          <div className="h-[54px] w-[1px] bg-[#FFFFFF14]" />
        </div>
        <div className="flex w-[50%] text-[#AAAAAA] text-[14px] items-center justify-between gap-2">
          <span>{selectedIssue?.issue}</span>
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2 text-[#EEEEEE] text-[14px]">List of Issues</p>
        <HrDivider />
      </div>
      {selectedIssue?.issues?.map((item: any, index: number) => {
        return (
          <div
            key={item?.issue}
            onClick={() =>
              onClick({ ...item, issueType: selectedIssue?.issue }, index + 1)
            }
            className="flex items-center bg-[#191D23] gap-3 mb-2 rounded-[4px] text-[#CCCCCC] text-[14px] h-[46px] w-full px-2 cursor-pointer"
          >
            <div className="flex h-full w-full items-center">
              <div className="flex items-center w-[120px] flex-auto">
                <p className="">
                  #{index + 1}. {item?.issue}
                </p>
              </div>
            </div>
            <div className="flex flex-1 w-[100px] items-center justify-center gap-2">
              <div className="h-[42px] w-[1px] bg-[#FFFFFF14]" />
              <MdArrowForwardIos fontSize={14} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Issue };
