"use client";

import React, { useEffect } from "react";
import s from "./PageTransition.module.scss";
import { ID, usePageAnimationIn } from "@/hooks/usePageAnimation";

type Props = {
  children: React.ReactNode;
};

export const PageTransition = ({ children }: Props) => {
  const animatePageIn = usePageAnimationIn();

  useEffect(() => {
    animatePageIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
