"use client";
import React, { useEffect, useState } from "react";
import { CardComponent } from "./card";
const apiUrl = "https://dummyjson.com/product";

const fetchData = (endPoint: string) => {
  return new Promise((resolve, reject) => {
    fetch(endPoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const ProducCardComponent = () => {
  const [productsData, setProductsData] = useState<any>({});
  const fetchProductData = async () => {
    try {
      const data = await fetchData(apiUrl);
      setProductsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  console.log({ productsData });
  return (
    <div className="flex justify-center flex-wrap gap-2 mt-3">
      {(productsData.products || []).map((product: any, ind: number) => {
        const item = { ...product, url: product.thumbnail };
        return <CardComponent key={`${product?.title}${ind}`} item={item} />;
      })}
    </div>
  );
};

export { ProducCardComponent };
