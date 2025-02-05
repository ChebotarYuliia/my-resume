"use client";

import React from "react";
import s from "./About.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  features?: React.ReactElement;
};

export const About = ({ children, features }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20px 0px",
  });

  return (
    <div className={c(s.about, { inView })} ref={ref}>
      {children}
      <div className={s.about__features}>{features}</div>
    </div>
  );
};
