"use client";

import { createContext, useCallback, useEffect, useState } from "react";

export type OpenAnimationState = "active" | "completed";
export type HeroAnimationState = "initial" | "completed";

type UIStateProps = {
  isMenuOpen: boolean;
  openAnimation: OpenAnimationState;
  heroEnterAnimation: HeroAnimationState;
  prefersReducedMotion: boolean;
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
