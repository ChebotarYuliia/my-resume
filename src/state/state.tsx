"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export type OpenAnimationState = "active" | "completed";
export type HeroAnimationState = "initial" | "completed";
export const SectionTheme = [
  "default",
  "primary",
  "slate",
  "olive",
  "teal",
  "clay",
] as const;
export type TSectionTheme = (typeof SectionTheme)[number];

type UIStateProps = {
  isMenuOpen: boolean;
  openAnimation: OpenAnimationState;
  heroEnterAnimation: HeroAnimationState;
  prefersReducedMotion: boolean;
  sectionTheme: TSectionTheme;
};

type UIStateContext = {
  uiState: UIStateProps;
  setUIState: (args: Partial<UIStateProps>) => void;
};

const uiStateDefaults = {
  isMenuOpen: false,
  openAnimation: "active" as OpenAnimationState,
  heroEnterAnimation: "initial" as HeroAnimationState,
  prefersReducedMotion: false,
  sectionTheme: "default" as TSectionTheme,
};

export const UIStateContext = createContext<UIStateContext>({
  uiState: uiStateDefaults,

  setUIState: () => null,
});

const subscribeToReducedMotionChange = (callback: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getReducedMotionServerSnapshot = () => false;

export const UIStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [uiState, updateUiState] = useState<UIStateProps>(uiStateDefaults);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotionChange,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const setUIState = useCallback((state: Partial<UIStateProps>) => {
    updateUiState((prevState) => ({
      ...prevState,
      ...state,
    }));
  }, []);

  const preventScroll = useCallback((prevent: boolean) => {
    const htmlClassName = "scroll-disabled";
    document.documentElement.classList[prevent ? "add" : "remove"](
      htmlClassName
    );
    ScrollSmoother.get()?.paused(prevent);
  }, []);

  useEffect(() => {
    preventScroll(uiState.isMenuOpen);
  }, [uiState.isMenuOpen, preventScroll]);

  const state = useMemo(() => {
    return { uiState: { ...uiState, prefersReducedMotion }, setUIState };
  }, [uiState, prefersReducedMotion, setUIState]);

  return (
    <UIStateContext.Provider value={state}>{children}</UIStateContext.Provider>
  );
};
