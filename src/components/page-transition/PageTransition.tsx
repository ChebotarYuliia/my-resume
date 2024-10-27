"use client";

import React, { useEffect } from "react";
import s from "./PageTransition.module.scss";
import { animatePageIn, ID } from "@/utils/pageAnimation";

type Props = {
  children: React.ReactNode;
};

export const PageTransition = ({ children }: Props) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className={s.pageTransition}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div className={s.pageTransition__curtain} key={i} id={`${ID}${i}`} />
      ))}
      {children}
    </div>
  );
};
