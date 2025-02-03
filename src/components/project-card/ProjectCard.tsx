"use client";

import React from "react";
import s from "./ProjectCard.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

type Props = {
  children: React.ReactElement;
  media?: React.ReactElement;
};

export const ProjectCard = ({ children, media }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20% 0px",
  });
  return (
    <div className={c(s.projectCard, { inView })} ref={ref}>
      <div className={s.projectCard__mediaWrap}>
        <div className={s.projectCard__mediaInner}>{media}</div>
      </div>
      <div className={s.projectCard__content}>{children}</div>
    </div>
  );
};
