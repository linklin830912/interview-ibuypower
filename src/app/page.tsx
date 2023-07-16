"use client";
import style from "./page.module.css";
import { useEffect, useState, useRef, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductPanel from "./components/product/ProductPanel";
import ApplicationContext from "./components/contexts/ApplicationContext";
import NextButton from "./components/styling/buttons/NextButton";

export default function Home() {
  const applicationLimitWidth = 768;
  const queryClient = new QueryClient();
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobileFromWidth();
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileFromWidth();
    });
  }, []);

  function setIsMobileFromWidth() {
    const width = containerRef.current?.getBoundingClientRect().width || 0;
    if (width >= applicationLimitWidth) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  const [productStart, setProductStart] = useState(0);

  return (
    <ApplicationContext.Provider value={{ isMobile: isMobile }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className={style.container_div} ref={containerRef}>
          <h1>Best Seller Gaming PC</h1>
          <h3>Prebuild & Customer</h3>
          <div className={style.paginate_div}>
            <NextButton
              onClick={() =>
                setProductStart(productStart - 1 > 0 ? productStart : 0)
              }
            />
            <NextButton
              onClick={() => setProductStart(productStart + 1)}
              isFlip={true}
            />
          </div>

          {containerRef.current?.getBoundingClientRect().width != undefined && (
            <div className={style.product_div}>
              <ProductPanel startProductIndex={productStart} />
            </div>
          )}
        </div>
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
}
