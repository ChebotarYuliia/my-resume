"use client";

import { useUiState } from "@/hooks/useUiState";
import React, { useCallback, useEffect } from "react";
import s from "./Theme.module.scss";
import { SectionTheme } from "@/state/state";
import classNames from "classnames/bind";

const c = classNames.bind(s);

export const Theme = () => {
  const { uiState } = useUiState();
  const { sectionTheme } = uiState;

  const themeColor = useCallback(() => {
    switch (sectionTheme) {
      case "default":
        return "var(--color-font)";
      case "primary":
        return "var(--color-font-contrast)";
      case "colored":
        return "var(--color-font-contrast)";
    }
  }, [sectionTheme]);

  useEffect(() => {
    const color = themeColor();
    document.documentElement.style.setProperty("--section-color-font", color);

    return () =>
      document.documentElement.style.setProperty("--section-color-font", null);
  }, [sectionTheme, themeColor]);

  return (
    <div className={s.theme}>
      {SectionTheme.map((theme) => (
        <span
          key={theme}
          className={c(s.theme__background, theme, {
            active: sectionTheme === theme,
          })}
        />
      ))}
    </div>
  );
};
