"use client";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductPanel from "./components/product/ProductPanel";
import ApplicationContext from "./components/contexts/ApplicationContext";
import NextButton from "./components/styling/buttons/NextButton";

export default function Home() {
  const applicationLimitWidth = 768;
  const queryClient = new QueryClient();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(
    windowWidth >= applicationLimitWidth ? false : true
  );
  console.log("!!!usestate");
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log("!!!resize");
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
    console.log("!!!setMobil", windowWidth);
  }, [windowWidth]);

  const [productStart, setProductStart] = useState(0);

  return (
    <ApplicationContext.Provider value={{ isMobile: isMobile }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className={style.container_div}>
          <h1>Best Seller Gaming PC</h1>
          <h3>Prebuild & Customer</h3>

          {!isMobile && (
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
          )}

          <div className={style.product_div}>
            <ProductPanel startProductIndex={productStart} />
          </div>
        </div>
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
}
function componentDidMount() {
  throw new Error("Function not implemented.");
}
