import React from "react";
import s from "./SkillListLayout.module.scss";
import { Section } from "../section/Section";
import { SkillListProps } from "./SkillList";

type Props = {
  title?: string;
  children: React.ReactElement<SkillListProps>;
  id?: string;
};

export const SkillListLayout = ({ title, children, id }: Props) => {
  return (
    <div className={s.skillListLayout} id={id}>
      <Section>
        <div className={s.skillListLayout__inner}>
          <h2 className={s.skillListLayout__title}>{title}</h2>
          {children}
        </div>
      </Section>
    </div>
  );
};
