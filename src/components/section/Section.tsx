import React from "react";
import s from "./Section.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const Section = ({ children }: Props) => {
  return (
    <div className={s.section}>
      <div className={s.section__inner}>{children}</div>
    </div>
  );
};
