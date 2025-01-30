import React from "react";
import s from "./SkillListLayout.module.scss";
import { SkillListProps } from "./SkillList";

type Props = {
  title?: string;
  children: React.ReactElement<SkillListProps>;
};

export const SkillListLayout = ({ title, children }: Props) => {
  return (
    <div className={s.skillListLayout}>
      <div className={s.skillListLayout__inner}>
        <h2 className={s.skillListLayout__title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
