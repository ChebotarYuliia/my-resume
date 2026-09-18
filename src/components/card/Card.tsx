"use client";

import React, { ReactNode } from "react";
import s from "./Card.module.scss";
import { useTranslations } from "next-intl";

export type CardProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children?: string; // main text
};

export const Card = ({ icon, title, subtitle, children }: CardProps) => {
  const t = useTranslations("Client");

  return (
    <div className={s.card}>
      <div className={s.card__inner}>
        {icon && <div className={s.card__icon}>{icon}</div>}
        <div className={s.card__content}>
          <h3 className={s.card__title}>{t(`${title}`)}</h3>
          {subtitle && <p className={s.card__subtitle}>{t(`${subtitle}`)}</p>}
          {children && <p className={s.card__text}>{children}</p>}
        </div>
      </div>
    </div>
  );
};
