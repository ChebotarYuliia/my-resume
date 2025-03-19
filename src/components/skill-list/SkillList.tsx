"use client";

import React, { Children, CSSProperties } from "react";
import s from "./SkillList.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { ProgressBarProps } from "../progress-bar/ProgressBar";

const c = classNames.bind(s);

export const SkillListVariant = ["default", "compact"] as const;
export type TSkillListVariant = (typeof SkillListVariant)[number];

export type SkillListProps = {
  children: Array<React.ReactElement<ProgressBarProps | HTMLSpanElement>>;
  variant?: TSkillListVariant;
};

export const SkillList = ({ children, variant }: SkillListProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });

  return (
    <div
      className={c(s.skillList, `variant-${variant}`, {
        inView,
      })}
      ref={ref}
    >
      <div className={s.skillList__inner}>
        <ul className={s.skillList__list}>
          {Children.map(children, (child, i) => (
            <li
              className={variant === "compact" ? s.skillList__listItem : ""}
              style={{ "--i": i } as CSSProperties}
              key={child.props.title}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
