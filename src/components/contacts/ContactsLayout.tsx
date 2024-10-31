"use client";

import React, { cloneElement, CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import { Section } from "../section/Section";
import classNames from "classnames/bind";

import s from "./ContactsLayout.module.scss";
import { useUiState } from "@/hooks/useUiState";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode; // media
  links: Array<React.ReactElement>;
  title: string;
};

export const ContactsLayout = ({ children, links, title }: Props) => {
  const { uiState } = useUiState();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className={c(s.contactsLayout, {
        inView: inView && uiState.openAnimation === "completed",
      })}
      ref={ref}
    >
      <Section>
        <div className={s.contactsLayout__inner}>
          <div className={s.contactsLayout__titleWrapper}>
            <h2 className={s.contactsLayout__title}>{title}</h2>
          </div>
          <ul className={s.contactsLayout__list}>
            {links.map((link, i) => (
              <li style={{ "--i": i } as CSSProperties} key={i}>
                {cloneElement(link, {
                  active: uiState.openAnimation === "completed",
                  tabIndex: 0,
                })}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <div className={s.contactsLayout__media}>{children}</div>
      <div className={s.contactsLayout__mediaSecond}>{children}</div>
    </div>
  );
};
