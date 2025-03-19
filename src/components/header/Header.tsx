"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { MenuToggle } from "../menu/MenuToggle";
import { Menu } from "../menu/Menu";
import { useUiState } from "@/hooks/useUiState";
import classNames from "classnames/bind";
import { ButtonProps } from "../Button/Button";
import { ContactLinkProps } from "../contacts/ContactLink";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  nav: React.ReactNode;
  socials: Array<React.ReactElement<ContactLinkProps>>;
  action?: React.ReactElement<ButtonProps>;
};

export const Header = ({ children, nav, socials, action }: Props) => {
  const { uiState, setUIState } = useUiState();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const storedScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.setProperty(
        "overflow-y",
        uiState.isMenuOpen ? "hidden" : ""
      );
    }
  }, [uiState.isMenuOpen]);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;

    if (position <= 100) {
      setScrollDirection(null);
    } else {
      setScrollDirection(storedScrollY.current >= position ? "up" : "down");
    }

    storedScrollY.current = position;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={c(s.header, {
        scrollingDown: scrollDirection === "down",
        isMenuOpen: uiState.isMenuOpen,
      })}
    >
      <div className={s.header__inner}>
        <div className={s.header__nav}>{children}</div>
        {/* <ThemeSwitcher className={s.header__switcher} /> */}
        <div className={s.header__action}>{action}</div>
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
