"use client";
import React from "react";

import { ITabDataProps, ITabsProps } from "@/utils/interfaces/props-interfaces";
import classes from "./styles.module.css";

const defaultTabs = [
  {
    name: "Tab-1",
    component: <>Tab-1</>,
  },
  {
    name: "Tab-2",
    component: <>Tab-2</>,
  },
];

const Tabs = (props: ITabsProps) => {
  const { onClick, selectedTab = 0, data = [...defaultTabs] } = props;

  const tabs = () => {
    const tabList = data.map((tab: ITabDataProps, index: number) => {
      return (
        <div
          key={tab.name}
          className={`${classes.tab} ${
            selectedTab === index ? classes.activeTab : ""
          } text-center flex-1 h-[32px]`}
        >
          <button
            className={`${classes.tabBtn} ${
              selectedTab === index ? classes.activeTabBtn : ""
            } text-center h-full`}
            onClick={() => (onClick ? onClick(index, tab) : () => {})}
          >
            {tab.name}
          </button>
        </div>
      );
    });
    return (
      <div className="flex bg-[#1E232B] p-1 mt-2 rounded-[3px] items-center gap-2">
        {tabList}
      </div>
    );
  };

  const tabPanal = () => {
    return (
      <div className="mt-2 h-[calc(100%-40px)]">
        {data[selectedTab]?.component}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex-1 bg-[#13161A] relative rounded-[4px]">
      {tabs()}
      {tabPanal()}
    </div>
  );
};

export { Tabs };
