"use client";

import { createContext, useCallback, useEffect, useState } from "react";

export type OpenAnimationState = "active" | "completed";
export type HeroAnimationState = "initial" | "completed";
export const SectionTheme = ["default", "primary", "colored"] as const;
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
export const UIStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [uiState, updateUiState] = useState<UIStateProps>(uiStateDefaults);

  const setUIState = useCallback((state: Partial<UIStateProps>) => {
    updateUiState((prevState) => ({
      ...prevState,
      ...state,
    }));
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setUIState({ prefersReducedMotion: reducedMotion });
  }, [setUIState]);

  const preventScroll = useCallback((prevent: boolean) => {
    const htmlClassName = "scroll-disabled";
    document.documentElement.classList[prevent ? "add" : "remove"](
      htmlClassName
    );
  }, []);

  useEffect(() => {
    preventScroll(uiState.isMenuOpen);
  }, [uiState.isMenuOpen, preventScroll]);

  return (
    <UIStateContext.Provider
      value={{
        uiState,
        setUIState,
      }}
    >
      {children}
    </UIStateContext.Provider>
  );
};
