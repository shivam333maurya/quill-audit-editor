function BreadCrumb({ list = [], onClick = () => {} }: any) {
  function generateBreadcrumb() {
    return (
      <div className="flex my-3 text-[#7B8191] flex-wrap cursor-pointer">
        {list.map((item: any, index: number) => {
          return (
            <div key={item?.name} className="text-[12px]">
              <span
                className={`mr-1 ${
                  index + 1 === list.length ? "text-white" : ""
                }`}
                onClick={() => onClick(item, index)}
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
