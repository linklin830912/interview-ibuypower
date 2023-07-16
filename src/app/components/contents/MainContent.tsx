import React from "react";
import style from "./styles/mainContentStyle.module.css";
import ProductPanel from "../product/ProductPanel";
import NextButton from "../styling/buttons/NextButton";
import LoadingSpinner from "../styling/loadings/LoadingSpinner";
import { useMainContent } from "./hooks/useMainContent";

export type mainContentProps = {
  applicationLimitWidth: number;
  onApplicationLoaded: (x: boolean) => void;
};
function MainContent(props: mainContentProps) {
  const {
    isMobile,
    containerRef,
    setTouchStartX,
    touchStartX,
    setTouchEndX,
    touchEndX,
    productStart,
    setProductStart,
    handleTouchSucceed,
  } = useMainContent(props);

  return (
    <div
      className={style.container_div}
      ref={containerRef}
      onTouchStart={(e) => {
        setTouchStartX(e.touches[0]?.clientX);
      }}
      onTouchMove={(e) => {
        if (touchStartX) {
          setTouchEndX(e.touches[0]?.clientX);
        }
      }}
      onTouchEnd={() => {
        if (touchStartX && touchEndX) {
          handleTouchSucceed(touchStartX, touchEndX);
        }
      }}
    >
      <div>{productStart}</div>
      {!isMobile && (
        <>
          <h1>Best Seller Gaming PC</h1>
          <h3>Prebuild & Customer</h3>
          <div className={style.paginate_div}>
            <NextButton
              onClick={() =>
                setProductStart(productStart - 1 >= 0 ? productStart - 1 : 0)
              }
            />
            <NextButton
              onClick={() => setProductStart(productStart + 1)}
              isFlip={true}
            />
          </div>
        </>
      )}

      <div className={style.product_div}>
        {containerRef.current?.getBoundingClientRect().width === undefined && (
          <LoadingSpinner />
        )}
        {containerRef.current?.getBoundingClientRect().width !== undefined && (
          <ProductPanel startProductIndex={productStart} />
        )}
      </div>
    </div>
  );
}

export default MainContent;
