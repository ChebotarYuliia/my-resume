import React from "react";
import s from "./Header.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <div className={s.header}>
      <div className={s.header__inner}>{children}</div>
    </div>
  );
};
