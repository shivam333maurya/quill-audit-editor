"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

import { profileDefault, quillLogo } from "@/assets";
import { CONSTANTS } from "@/utils";

const Layout = () => {
  const { LAYOUT_CONFIG } = CONSTANTS;
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="pt-4">
      <header>
        <div className="flex items-center justify-between px-3 mx-3 rounded-[4px] bg-[#1E232B] h-[52px]">
          <div className="flex items-center">
            <span className="flex gap-2">
              <Image
                alt="logo"
                width={20}
                height={20}
                src={quillLogo}
                className="w-auto h-auto"
              />
              <Link href={"."}>QuillShield</Link>
            </span>
            <hr className="w-[51px] border-[#FFFFFF14] rotate-90" />
          </div>
          <div className="flex items-center gap-3">
            <nav className="py-2 px-4">
              <ul className="flex gap-4 justify-end text-[#5D677D] nav-links">
                {LAYOUT_CONFIG.map((key) => (
                  <li
                    className={`${
                      pathname.trim() === key?.path.trim()
                        ? "active-nav-link"
                        : ""
                    }`}
                    key={`${key.title}}`}
                  >
                    <Link href={key.path}>{key.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <hr className="w-[51px] border-[#FFFFFF14] rotate-90" />
            <div className="flex gap-3 items-center flex-row-reverse">
              <IoIosArrowDown className="text-[#5D677D]" fontSize={20} />
              <span>Profile</span>
              <Image
                alt="profile"
                height={28}
                width={28}
                src={profileDefault}
                className="bg-[#4FA274] w-[28px] h-[28px] p-[5px] rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Layout };
