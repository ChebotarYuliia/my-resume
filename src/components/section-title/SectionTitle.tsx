"use client";

import React from "react";
import s from "./SectionTitle.module.scss";
import { InView } from "@/components/in-view/InView";

type Props = {
  children: string;
};

export const SectionTitle = ({ children }: Props) => {
  return (
    <InView className={s.sectionTitle} inClassName={s.inView} rootMargin="-15% 0px">
      <h2 className={s.sectionTitle__title}>{children}</h2>
    </InView>
  );
};
