"use client";

import classNames from "classnames/bind";
import s from "./MenuToggle.module.scss";
import { useUiState } from "@/hooks/useUiState";

const c = classNames.bind(s);

export const MenuToggle = () => {
  const { uiState } = useUiState();

  return (
    <span className={c(s.menuToggle, { active: uiState.isMenuOpen })}>
      <span />
    </span>
  );
};
