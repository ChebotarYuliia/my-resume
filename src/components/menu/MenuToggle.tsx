"use client";

import classNames from "classnames/bind";
import s from "./MenuToggle.module.scss";

const c = classNames.bind(s);

export const MenuToggle = ({ active = false }: { active: boolean }) => {
  return (
    <span className={c(s.menuToggle, { active })}>
      <span />
    </span>
  );
};
