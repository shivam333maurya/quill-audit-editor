import React from "react";

import { MdOutlineClear } from "react-icons/md";

const ActiveTabsBar = ({ items, selected, onClick, onClear }: any) => {
  return (
    <div className="w-full flex gap-4 items-center overflow-x-auto rounded-t-[4px] h-10 bg-[#1E232B]">
      {items.map((item: any, index: any) => (
        <div
          key={`${item?.path} ${index + 1}`}
          className={`flex justify-between items-center h-full ${
            selected === item?.path ? "activeFile" : ""
          }`}
        >
          <span className="px-2" onClick={() => onClick(item)}>
            {item?.name}
          </span>
          <span className="px-2">
            <MdOutlineClear
              cursor={"pointer"}
              onClick={() => onClear(items, item)}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export { ActiveTabsBar };
