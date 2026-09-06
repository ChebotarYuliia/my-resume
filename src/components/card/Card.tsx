"use client";

import React, { ReactNode } from "react";
import s from "./Card.module.scss";
import { InView } from "@/components/in-view/InView";
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
    <InView className={s.card} inClassName={s.inView} rootMargin="-50px 0px">
      <div className={s.card__inner}>
        {icon && <div className={s.card__icon}>{icon}</div>}
        <div className={s.card__content}>
          <h3 className={s.card__title}>{t(`${title}`)}</h3>
          {subtitle && <p className={s.card__subtitle}>{t(`${subtitle}`)}</p>}
          {children && <p className={s.card__text}>{children}</p>}
        </div>
      </div>
    </InView>
  );
};
