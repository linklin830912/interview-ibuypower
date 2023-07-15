"use client";
import Image from "next/image";
import style from "./page.module.css";
import Panel from "./components/styling/panels/Panel";
import {
  getProductDetails,
  useGetProductDetails,
} from "./apis/product/getProductDetails";
import { useEffect, useState } from "react";
import { productDetails } from "./models/product/productDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductPanel from "./components/product/ProductPanel";
import ApplicationContext from "./components/contexts/ApplicationContext";

export default function Home() {
  const applicationLimitWidth = 768;
  const queryClient = new QueryClient();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth >= applicationLimitWidth ? false : true
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    if (windowWidth >= applicationLimitWidth) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]);
  return (
    <ApplicationContext.Provider value={{ isMobile: isMobile }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className={style.container_div}>
          <h1>Best Seller Gaming PC</h1>
          <h3>Prebuild & Customer</h3>
          <div className={style.product_div}>
            <ProductPanel />
          </div>
        </div>
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
}
