"use client";

import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { MenuToggle } from "../menu/MenuToggle";
import { Menu } from "../menu/Menu";

type Props = {
  children: React.ReactNode;
  nav: React.ReactNode;
};

export const Header = ({ children, nav }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.setProperty("overflow-y", isMenuOpen ? "hidden" : "");
    }
  }, [isMenuOpen]);

  return (
    <div className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__nav}>{children}</div>
        <button
          className={s.header__menuButton}
          onClick={() => {
            setMenuOpen((state) => !state);
          }}
          type="button"
          aria-label="menu"
        >
          <MenuToggle active={isMenuOpen} />
        </button>
      </div>

      <Menu active={isMenuOpen}>{nav}</Menu>
    </div>
  );
};
