import React, { Children, CSSProperties } from "react";
import s from "./WorkCard.module.scss";
import { Icon } from "../icon/Icon";

export type WorkCardContentProps = {
  period: string;
  children?: string; // description
  title: string;
  company: string;
  pills?: Array<React.ReactElement>;
  link?: string;
};

export const WorkCardContent = ({
  period,
  children,
  title,
  company,
  pills,
  link,
}: WorkCardContentProps) => {
  return (
    <div className={s.workCard__inner}>
      <p className={s.workCard__period}>{period}</p>

      <div className={s.workCard__content}>
        <h5 className={s.workCard__title}>
          {title} · {company}
          {link && <Icon name="external-link" />}
        </h5>

        <p className={s.workCard__text}>{children}</p>

        {pills?.length && (
          <ul className={s.workCard__pillsList}>
            {Children.map(pills, (child, i) => {
              return (
                <li
                  className={s.workCard__pill}
                  style={{ "--i": i } as CSSProperties}
                  key={i}
                >
                  {child}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
