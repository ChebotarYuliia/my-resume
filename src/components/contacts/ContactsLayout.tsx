"use client";

import React, { cloneElement, CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";

import s from "./ContactsLayout.module.scss";
import { useUiState } from "@/hooks/useUiState";
import { ContactLinkProps } from "./ContactLink";

const c = classNames.bind(s);

type Props = {
  links: Array<React.ReactElement<ContactLinkProps>>;
  title?: string;
  author?: string;
};

export const ContactsLayout = ({ links, title, author }: Props) => {
  const { uiState } = useUiState();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className={c(s.contactsLayout, {
        inView,
      })}
      ref={ref}
    >
      <div className={s.contactsLayout__inner}>
        <div className={s.contactsLayout__titleWrapper}>
          <h2 className={s.contactsLayout__title}>{title}</h2>
        </div>
        <ul className={s.contactsLayout__list}>
          {links.map((link, i) => (
            <li style={{ "--i": i } as CSSProperties} key={link.props.platform}>
              {cloneElement(link, {
                active: uiState.openAnimation === "completed",
                tabIndex: 0,
              })}
            </li>
          ))}
        </ul>
        <p className={s.contactsLayout__author}>{author}</p>
      </div>
    </div>
  );
};
