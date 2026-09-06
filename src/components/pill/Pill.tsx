"use client";

import React, { CSSProperties } from "react";
import s from "./Pill.module.scss";
import { InView } from "@/components/in-view/InView";

export type PillProps = {
  children: string;
  style?: CSSProperties;
};

export const Pill = ({ children, style }: PillProps) => {
  return (
    <InView as="span" className={s.pill} inClassName={s.inView} style={style}>
      {children}
    </InView>
  );
};
