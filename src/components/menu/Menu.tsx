"use client";
import React, { Children, cloneElement } from "react";
import s from "./Menu.module.scss";
import classNames from "classnames/bind";
import { useUiState } from "@/hooks/useUiState";
import { ContactLinkProps } from "../contacts/ContactLink";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  socials: Array<React.ReactElement<ContactLinkProps>>;
  onClose?: () => void;
};

export const Menu = ({ children, socials }: Props) => {
  const { uiState } = useUiState();

  const childArray = Children.toArray(children);

  return (
    <nav
      className={c(s.menu, { active: uiState.isMenuOpen })}
      aria-label="menu"
    >
      <div className={s.menu__inner}>
        <div className={s.menu__content}>
          <div className={s.menu__list}>{childArray}</div>
          {socials && (
            <div className={s.menu__socials}>
              {socials.map((social) =>
                cloneElement(social, {
                  active: uiState.isMenuOpen,
                  tabIndex: 0,
                  key: social.props.platform,
                })
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
