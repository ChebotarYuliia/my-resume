"use client";

import React, { CSSProperties, ReactNode } from "react";
import s from "./Card.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { useUiState } from "@/hooks/useUiState";

const c = classNames.bind(s);

export type CardProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children?: string; // main text
  style?: CSSProperties;
};

export const Card = ({ icon, title, subtitle, children }: CardProps) => {
  const { uiState } = useUiState();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      className={c(s.card, {
        inView: inView && uiState.openAnimation === "completed",
      })}
      ref={ref}
    >
      <div className={s.card__inner}>
        {icon && <div className={s.card__icon}>{icon}</div>}
        <div className={s.card__content}>
          <h3 className={s.card__title}>{title}</h3>
          {subtitle && <p className={s.card__subtitle}>{subtitle}</p>}
          {children && <p className={s.card__text}>{children}</p>}
        </div>
      </div>
    </div>
  );
};
