"use client";

import React, { Children, CSSProperties, useState } from "react";
import s from "./WorkCard.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { Icon } from "../icon/Icon";
import { useWindowWidth } from "@/hooks/useWindowWidth";

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
  const [hover, setHover] = useState(false);
  const { isTablet } = useWindowWidth();

  const clasNames = c(s.workCard, { inView, link, hover: !isTablet && hover });

  const content = (
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

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  if (link) {
    return (
      <a
        className={clasNames}
        target="_blank"
        href={link}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
