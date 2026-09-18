"use client";

import { RefObject, useEffect } from "react";

export const useElementHeightVar = (
  ref: RefObject<HTMLElement | null>,
  varName: string
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const setVar = (height: number) => {
      document.documentElement.style.setProperty(varName, `${height}px`);
    };

    const observer = new ResizeObserver(([entry]) => {
      setVar(entry.contentRect.height);
    });

    observer.observe(element);
    setVar(element.getBoundingClientRect().height);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty(varName);
    };
  }, [ref, varName]);
};
