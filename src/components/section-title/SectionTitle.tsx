"use client";

import React from "react";
import s from "./SectionTitle.module.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";

const c = classNames.bind(s);

type Props = {
  children: string;
};

export const SectionTitle = ({ children }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });

  return (
    <div className={c(s.sectionTitle, { inView })} ref={ref}>
      <h2 className={s.sectionTitle__title}>{children}</h2>
    </div>
  );
};
