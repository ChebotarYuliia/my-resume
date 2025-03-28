"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { MenuToggle } from "../menu/MenuToggle";
import { useUiState } from "@/hooks/useUiState";
import classNames from "classnames/bind";
import { ButtonProps } from "../Button/Button";
import { useTranslations } from "use-intl";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  action?: React.ReactElement<ButtonProps>;
  menu: React.ReactElement;
};

export const Header = ({ children, action, menu }: Props) => {
  const t = useTranslations("Client");
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

  const handleButtonClick = () => {
    setUIState({ isMenuOpen: !uiState.isMenuOpen });
  };

  return (
    <div
      className={c(s.header, {
        scrollingDown: scrollDirection === "down",
        isMenuOpen: uiState.isMenuOpen,
      })}
    >
      <div className={s.header__inner}>
        <div className={s.header__nav}>{children}</div>
        <div className={s.header__action}>{action}</div>
        <button
          className={s.header__menuButton}
          onClick={handleButtonClick}
          type="button"
          aria-label={t("menu")}
        >
          <MenuToggle />
        </button>
      </div>

      {menu}
    </div>
  );
};
