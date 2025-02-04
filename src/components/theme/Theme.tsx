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
    // default theme
    let color = "var(--color-font)";
    let colorContrast = "var(--color-font-contrast)";
    let accent = "var(--color-teal-500)";
    let bgSecondary = "var(--color-background-secondary)";

    switch (sectionTheme) {
      case "primary":
        color = "var(--color-primary-300)";
        colorContrast = "var(--color-primary-200)";
        accent = "var(--color-primary-500)";
        bgSecondary = "var(--color-primary-600)";
        break;
      case "olive":
        accent = "var(--color-olive-500)";
        color = "var(--color-olive-800)";
        bgSecondary = "var(--color-olive-700)";
        break;
      case "slate":
        accent = "var(--color-slate-500)";
        color = "var(--color-slate-600)";
        bgSecondary = "var(--color-slate-700)";
        break;
    }

    return { color, colorContrast, accent, bgSecondary };
  }, [sectionTheme]);

  useEffect(() => {
    const { color, colorContrast, accent, bgSecondary } = themeColor();
    document.documentElement.style.setProperty("--section-color-font", color);
    document.documentElement.style.setProperty(
      "--section-color-font-contrast",
      colorContrast
    );
    document.documentElement.style.setProperty(
      "--section-color-accent",
      accent
    );
    document.documentElement.style.setProperty(
      "--section-background-secondary",
      bgSecondary
    );

    // clean up
    return () => {
      return (
        document.documentElement.style.setProperty(
          "--section-color-font",
          null
        ),
        document.documentElement.style.setProperty(
          "--section-color-font-contrast",
          null
        ),
        document.documentElement.style.setProperty(
          "--section-color-accent",
          null
        ),
        document.documentElement.style.setProperty(
          "--section-background-secondary",
          null
        )
      );
    };
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
