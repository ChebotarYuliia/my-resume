"use client";

import React, { CSSProperties } from "react";
import s from "./ProgressBar.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

export type ProgressBarProps = {
  percentage: number;
  title: string;
  style?: CSSProperties;
};

export const ProgressBar = ({ percentage, title, style }: ProgressBarProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });

  return (
    <div
      className={c(
        s.progressBar,
        `${
          percentage > 80
            ? "advanced"
            : percentage < 40
            ? "fundamental"
            : "intermediate"
        }`,
        {
          inView,
        }
      )}
      style={
        {
          "--progress-inline-size": `${percentage}%`,
          ...style,
        } as CSSProperties
      }
      ref={ref}
    >
      <h3 className={s.progressBar__title}>{title}</h3>
      <div className={s.progressBar__progress} />
    </div>
  );
};
