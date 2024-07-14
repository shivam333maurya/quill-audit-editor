"use client";
import Image from "next/image";
import React from "react";

const CardComponent = (props: any) => {
  const { item } = props;
  console.log({ item });
  return (
    <div className="w-[300px] border-2 border-[#7e797f] bg-gray-800">
      <div>
        <Image src={item.url} alt={item.title} width={300} height={200} />
      </div>
      <div className="px-2">
        <p className="text-xl">
          <b>{item.title}</b>
        </p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export { CardComponent };
