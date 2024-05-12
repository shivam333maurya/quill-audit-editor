"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { capitalCase } from "change-case";
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const DynamicBreadcrumb: React.FC = () => {
  const pathName = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const pathSegments = pathName
      .split("/")
      .filter((segment) => segment !== "");
    let currentPath = "/";
    const breadcrumbItems: BreadcrumbItem[] = pathSegments.map((segment) => {
      currentPath += `${segment}/`;
      return { name: segment, path: currentPath };
    });
    setBreadcrumbs(breadcrumbItems);
  }, [pathName]);

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="breadcrumb flex gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            {index > 0 && <li>/</li>} {/* Add separator */}
            <li className="breadcrumb-item">
              {index === breadcrumbs.length - 1 ? (
                <span className="text-blue-500">
                  {capitalCase(breadcrumb.name)}
                </span>
              ) : (
                <Link href={breadcrumb.path}>
                  <span className="text-gray-500">
                    {capitalCase(breadcrumb.name)}
                  </span>
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export { DynamicBreadcrumb };
