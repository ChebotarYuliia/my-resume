import React from "react";
import s from "./About.module.scss";
import { InView } from "@/components/in-view/InView";

type Props = {
  children: React.ReactNode;
  features?: React.ReactElement;
};

export const About = ({ children, features }: Props) => {
  return (
    <InView className={s.about} inClassName={s.inView} rootMargin="-20px 0px">
      {children}
      <div className={s.about__features}>{features}</div>
    </InView>
  );
};
