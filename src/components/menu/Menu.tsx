import React, { Children, cloneElement, CSSProperties } from "react";
import s from "./Menu.module.scss";
import classNames from "classnames/bind";
import { useUiState } from "@/hooks/useUiState";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  socials: Array<React.ReactElement>;
  onClose?: () => void;
};

export const Menu = ({ children, socials }: Props) => {
  const { uiState } = useUiState();

  return (
    <nav
      className={c(s.menu, { active: uiState.isMenuOpen })}
      aria-label="menu"
    >
      <div className={s.menu__inner}>
        <div className={s.menu__content}>
          <ul className={s.menu__list}>
            {Children.map(children, (child, i) => (
              <li
                className={s.menu__item}
                key={i}
                style={{ "--i": i } as CSSProperties}
              >
                {cloneElement(child as React.ReactElement, {
                  tabIndex: 0,
                })}
              </li>
            ))}
          </ul>
          {socials && (
            <div className={s.menu__socials}>
              {socials.map((social) =>
                cloneElement(social, {
                  active: uiState.isMenuOpen,
                  tabIndex: 0,
                })
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
