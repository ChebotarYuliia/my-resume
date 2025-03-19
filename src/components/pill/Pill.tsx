"use client";

import React, { CSSProperties } from "react";
import s from "./Pill.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

export type PillProps = {
  children: string;
  style?: CSSProperties;
};

export const Pill = ({ children, style }: PillProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <span className={c(s.pill, { inView })} style={style} ref={ref}>
      {children}
    </span>
  );
};
