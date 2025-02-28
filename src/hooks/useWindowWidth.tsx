"use client";

import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setIsTablet(window.innerWidth < 1024);
  }
  useEffect(() => {
    if (document && window && typeof window !== "undefined") {
      handleWindowSizeChange();
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { isTablet, width };
};
