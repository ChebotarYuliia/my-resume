"use client";

import React from "react";
import s from "./ProjectCard.module.scss";
import { InView } from "@/components/in-view/InView";

type Props = {
  children: React.ReactElement;
  media?: React.ReactElement;
};

export const ProjectCard = ({ children, media }: Props) => {
  return (
    <InView className={s.projectCard} inClassName={s.inView} rootMargin="-20% 0px">
      <div className={s.projectCard__mediaWrap}>
        <div className={s.projectCard__mediaInner}>{media}</div>
      </div>
      <div className={s.projectCard__content}>{children}</div>
    </InView>
  );
};
