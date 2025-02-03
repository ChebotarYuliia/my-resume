"use client";

import React, { Children, CSSProperties } from "react";
import s from "./SkillList.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { useUiState } from "@/hooks/useUiState";
import { ProgressBarProps } from "../progress-bar/ProgressBar";

const c = classNames.bind(s);

export type SkillListProps = {
  children: Array<React.ReactElement<ProgressBarProps | HTMLSpanElement>>;
  variant?: "default" | "compact";
};

export const SkillList = ({ children, variant }: SkillListProps) => {
  const { uiState } = useUiState();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });

  return (
    <div
      className={c(s.skillList, `variant-${variant}`, {
        inView: inView && uiState.openAnimation === "completed",
      })}
      ref={ref}
    >
      <div className={s.skillList__inner}>
        <ul className={s.skillList__list}>
          {Children.map(children, (child, i) => (
            <li
              className={variant === "compact" ? s.skillList__listItem : ""}
              style={{ "--i": i } as CSSProperties}
              key={i}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
