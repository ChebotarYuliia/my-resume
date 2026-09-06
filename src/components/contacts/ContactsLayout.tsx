"use client";

import React, { cloneElement, CSSProperties } from "react";
import { InView } from "@/components/in-view/InView";

import s from "./ContactsLayout.module.scss";
import { useUiState } from "@/hooks/useUiState";
import { ContactLinkProps } from "./ContactLink";

type Props = {
  links: Array<React.ReactElement<ContactLinkProps>>;
  title?: string;
  author?: string;
};

export const ContactsLayout = ({ links, title, author }: Props) => {
  const { uiState } = useUiState();

  return (
    <InView className={s.contactsLayout} inClassName={s.inView}>
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
    </InView>
  );
};
