"use client";

import React from "react";
import s from "./Text.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });

  return (
    <div className={c(s.text, { inView })} ref={ref}>
      {children}
    </div>
  );
};
