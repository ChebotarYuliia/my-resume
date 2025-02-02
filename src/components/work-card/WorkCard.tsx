"use client";

import React, { Children, CSSProperties } from "react";
import s from "./WorkCard.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

export type WorkCardProps = {
  period: string;
  children?: string; // description
  title: string;
  company: string;
  pills?: Array<React.ReactElement>;
  link?: string;
};

export const WorkCard = ({
  period,
  children,
  title,
  company,
  pills,
  link,
}: WorkCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20px 0px",
  });

  const clasNames = c(s.workCard, { inView, link });

  const content = (
    <div className={s.workCard__inner}>
      <p className={s.workCard__period}>{period}</p>

      <div className={s.workCard__content}>
        <h5 className={s.workCard__title}>
          {title} · {company}
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

  if (link) {
    return (
      <a className={clasNames} target="_blank" href={link} ref={ref}>
        {content}
      </a>
    );
  }

  return (
    <div className={clasNames} ref={ref}>
      {content}
    </div>
  );
};
