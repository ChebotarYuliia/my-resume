import React from "react";
import s from "./SkillListLayout.module.scss";
import { Section } from "../section/Section";
import { SkillListProps } from "./SkillList";

type Props = {
  title?: string;
  children: React.ReactElement<SkillListProps>;
};

export const SkillListLayout = ({ title, children }: Props) => {
  return (
    <div className={s.skillListLayout}>
      <Section>
        <div className={s.skillListLayout__inner}>
          <h2 className={s.skillListLayout__title}>{title}</h2>
          {children}
        </div>
      </Section>
    </div>
  );
};
