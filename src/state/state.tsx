"use client";

import { createContext, useCallback, useState } from "react";

export type OpenAnimationState = "active" | "completed";
export type HeroAnimationState = "initial" | "completed";

type UIStateProps = {
  isMenuOpen: boolean;
  openAnimation: OpenAnimationState;
  heroEnterAnimation: HeroAnimationState;
};

type UIStateContext = {
  uiState: UIStateProps;
  setUIState: (args: Partial<UIStateProps>) => void;
};

const uiStateDefaults = {
  isMenuOpen: false,
  openAnimation: "active" as OpenAnimationState,
  heroEnterAnimation: "initial" as HeroAnimationState,
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
