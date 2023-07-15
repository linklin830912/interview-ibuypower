import { useGetProductDetails } from "@/app/apis/product/getProductDetails";
import React, { useContext, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import style from "./styles/productPanelStyle.module.css";
import ApplicationContext from "../contexts/ApplicationContext";

function ProductPanel() {
  const { isMobile } = useContext(ApplicationContext);

  const {
    data: producDetailsData,
    refetch,
    isLoading,
  } = useGetProductDetails({
    start: 0,
    count: isMobile ? 1 : 4,
  });
  useEffect(() => {
    refetch();
  }, [isMobile, refetch]);

  return (
    <div className={style.container_div}>
      {!isLoading &&
        producDetailsData &&
        producDetailsData?.map((x, index) => (
          <ProductGrid key={index} productDetails={x} />
        ))}
    </div>
  );
}

export default ProductPanel;
