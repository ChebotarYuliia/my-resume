import React, { Children } from "react";
import s from "./ProjectList.module.scss";

type Props = {
  children: React.ReactNode;
};

export const ProjectList = ({ children }: Props) => {
  const childCount = Children.count(children);
  if (!childCount) {
    return null;
  }

  return <ul className={s.projectList}>{children}</ul>;
};
