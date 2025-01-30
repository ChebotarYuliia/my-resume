"use client";

import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { MenuToggle } from "../menu/MenuToggle";
import { Menu } from "../menu/Menu";
import { useUiState } from "@/hooks/useUiState";

type Props = {
  children: React.ReactNode;
  nav: React.ReactNode;
  socials: Array<React.ReactElement>;
};

export const Header = ({ children, nav, socials }: Props) => {
  const { uiState, setUIState } = useUiState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.setProperty(
        "overflow-y",
        uiState.isMenuOpen ? "hidden" : ""
      );
    }
  }, [uiState.isMenuOpen]);

  return (
    <div className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__nav}>{children}</div>
        {/* <ThemeSwitcher className={s.header__switcher} /> */}
        <button
          className={s.header__menuButton}
          onClick={() => {
            setUIState({ isMenuOpen: !uiState.isMenuOpen });
          }}
          type="button"
          aria-label="menu"
        >
          <MenuToggle />
        </button>
      </div>

      <Menu socials={socials}>{nav}</Menu>
    </div>
  );
};
