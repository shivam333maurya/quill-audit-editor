import React from "react";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";

import { contractSvg } from "@/assets";
import { getColorByIssueType } from "@/utils";

const EditorHeader: React.FC = () => {
  return (
    <div className="flex justify-between mb-3">
      <div className="flex gap-3 items-center">
        <Image
          alt="img"
          width={22}
          height={26}
          src={contractSvg}
          className="w-auto h-auto"
        />
        <span>Sample Project</span>
      </div>
      <div>
        <button className="mr-4 w-[114px] h-[36px] rounded-[3px] bg-[#007AFF]">
          Audit Now
        </button>
        <span className="relative w-[114px] h-[36px]">
          <button className="bg-[#007AFF29] w-[114px] rounded-[3px] h-[36px]">
            Options
          </button>
          <RxDotFilled
            className="absolute top-[-23px] right-[-15px]"
            color={getColorByIssueType("")}
            fontSize={34}
          />
        </span>
      </div>
    </div>
  );
};

export { EditorHeader };
