"use client";

import React, { CSSProperties } from "react";
import s from "./ProgressBar.module.scss";
import classNames from "classnames/bind";
import { InView } from "@/components/in-view/InView";

const c = classNames.bind(s);

const SKILL_LEVEL_ADVANCED_THRESHOLD = 80;
const SKILL_LEVEL_FUNDAMENTAL_THRESHOLD = 40;

const getSkillLevel = (percentage: number) => {
  if (percentage > SKILL_LEVEL_ADVANCED_THRESHOLD) return "advanced";
  if (percentage < SKILL_LEVEL_FUNDAMENTAL_THRESHOLD) return "fundamental";
  return "intermediate";
};

export type ProgressBarProps = {
  percentage: number;
  title: string;
  style?: CSSProperties;
};

export const ProgressBar = ({ percentage, title, style }: ProgressBarProps) => {
  return (
    <InView
      className={c(s.progressBar, getSkillLevel(percentage))}
      inClassName={s.inView}
      rootMargin="-15% 0px"
      style={
        {
          "--progress-inline-size": `${percentage}%`,
          ...style,
        } as CSSProperties
      }
    >
      <h3 className={s.progressBar__title}>{title}</h3>
      <div className={s.progressBar__progress} />
    </InView>
  );
};
