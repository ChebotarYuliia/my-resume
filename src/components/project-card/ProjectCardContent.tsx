import React, { Children, cloneElement } from "react";
import s from "./ProjectCardContent.module.scss";
import { PillProps } from "../pill/Pill";

type Props = {
  title: string;
  children: string;
  pills?: Array<React.ReactElement<PillProps>>;
};

export const ProjectCardContent = ({ title, children, pills }: Props) => {
  return (
    <div className={s.projectCardContent}>
      <div className={s.projectCardContent__inner}>
        <h5 className={s.projectCardContent__title}>{title}</h5>
        <div className={s.projectCardContent__textWrap}>
          <p className={s.projectCardContent__text}>{children}</p>
        </div>
        <div className={s.projectCardContent__pills}>
          {Children.map(pills, (pill, i) =>
            cloneElement(pill as React.ReactElement, {
              style: { "--i": i },
              key: pill?.props.children,
            })
          )}
        </div>
      </div>
    </div>
  );
};
