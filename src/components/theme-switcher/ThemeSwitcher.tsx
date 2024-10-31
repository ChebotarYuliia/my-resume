"use client";

import React, { useEffect, useState } from "react";
import s from "./ThemeSwitcher.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { Icon } from "../icon/Icon";

const c = classNames.bind(s);

export type Themes = "light" | "dark";

export const ThemeSwitcher = ({ className }: { className: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [theme, setTheme] = useState<Themes>("light");

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      className={c(s.themeSwitcher, `theme-${theme}`, className, { inView })}
      ref={ref}
      onClick={handleThemeChange}
      tabIndex={0}
      aria-label="Change site theme"
    >
      <div className={s.themeSwitcher__inner}>
        <div className={s.themeSwitcher__sun}>
          <Icon name="sun" />
        </div>
        <div className={s.themeSwitcher__moon}>
          <Icon name="moon" />
        </div>
      </div>
    </button>
  );
};
