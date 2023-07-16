import { useContext } from "react";
import { useEffect, useState, useRef } from "react";
import ApplicationContext from "../../contexts/ApplicationContext";
import { mainContentProps } from "../MainContent";

export function useMainContent(props: mainContentProps) {
  const { isMobile } = useContext(ApplicationContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [productStart, setProductStart] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number>();
  const [touchEndX, setTouchEndX] = useState<number>();

  useEffect(() => {
    setIsMobileFromWidth();
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileFromWidth();
    });
  }, []);

  return {
    isMobile,
    containerRef,
    setTouchStartX,
    touchStartX,
    setTouchEndX,
    touchEndX,
    productStart,
    setProductStart,
    handleTouchSucceed,
  };

  function setIsMobileFromWidth() {
    const width = containerRef.current?.getBoundingClientRect().width || 0;
    if (width >= props.applicationLimitWidth) {
      props.onApplicationLoaded(false);
    } else {
      props.onApplicationLoaded(true);
    }
  }
  function handleTouchSucceed(startX: number, endX: number) {
    const dis = startX - endX;
    if (Math.abs(dis) < 20) return;
    if (dis > 0) {
      setProductStart(productStart + 1);
    } else {
      setProductStart(productStart - 1 >= 0 ? productStart - 1 : 0);
    }
  }
}
