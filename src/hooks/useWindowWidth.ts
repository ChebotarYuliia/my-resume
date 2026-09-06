import { useSyncExternalStore } from "react";
import { BREAKPOINTS } from "@/styles/breakpoints";

const subscribeToResize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getWidthSnapshot = () => window.innerWidth;
const getWidthServerSnapshot = () => undefined;

export const useWindowWidth = () => {
  const width = useSyncExternalStore(
    subscribeToResize,
    getWidthSnapshot,
    getWidthServerSnapshot,
  );

  return {
    isTablet: width !== undefined && width < BREAKPOINTS.desktop,
    width,
  };
};
