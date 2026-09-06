import React, { Children, CSSProperties } from "react";
import s from "./WorkCard.module.scss";
import { Icon } from "../icon/Icon";
import { getMessages } from "next-intl/server";
import { Locale } from "@/i18n/i18n";

export type WorkCardContentProps = {
  period: string;
  children?: string; // description
  title: string;
  company: string;
  pills?: Array<React.ReactElement>;
  link?: string;
  locale?: Locale;
};

export const WorkCardContent = async ({
  period,
  children,
  title,
  company,
  pills,
  link,
  locale,
}: WorkCardContentProps) => {
  const { Client } = await getMessages({ locale });
  return (
    <div className={s.workCard__inner}>
      <p className={s.workCard__period}>{Client[period]}</p>

      <div className={s.workCard__content}>
        <h5 className={s.workCard__title}>
          {Client[title]} · {Client[company]}
          {link && <Icon name="external-link" />}
        </h5>

        <p className={s.workCard__text}>{Client[`${children}`]}</p>

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
