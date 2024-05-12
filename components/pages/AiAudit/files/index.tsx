"use client";
import React from "react";
import { FILES } from "@/utils";
import Link from "next/link";

const AiAuditFiles = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex px-3 py-4 gap-4 justify-center">
        {FILES.map((file) => {
          return (
            <div
              key={file.name}
              className="px-3 py-2 rounded-sm border-gray-400 text-center w-[100px] border-[1px]"
            >
              <Link href={`ai-audit/${file.name}`}>{file.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AiAuditFiles };
