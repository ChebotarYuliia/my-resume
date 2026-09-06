"use client";

import React from "react";
import s from "./Text.module.scss";
import { InView } from "@/components/in-view/InView";

type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return (
    <InView className={s.text} inClassName={s.inView} rootMargin="-15% 0px">
      {children}
    </InView>
  );
};
