import { IBreadCrumbType } from "@/utils/interfaces/interfaces";
import { IBreadCrumbPropsType } from "@/utils/interfaces/props-interfaces";

function BreadCrumb({ list, onClick }: IBreadCrumbPropsType) {
  function generateBreadcrumb() {
    return (
      <div className="flex my-3 text-[#7B8191] flex-wrap cursor-pointer">
        {list.map((item: IBreadCrumbType, index) => {
          return (
            <div key={item?.name} className="text-[12px]">
              <span
                className={`mr-1 ${
                  index + 1 === list.length ? "text-white" : ""
                }`}
                onClick={() => onClick && onClick(item)}
              >
                {item?.name}
              </span>
              {index + 1 < list.length && <span className="mr-1">/</span>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="px-2 mx-3 rounded-[4px] my-3">{generateBreadcrumb()}</div>
  );
}
export { BreadCrumb };
