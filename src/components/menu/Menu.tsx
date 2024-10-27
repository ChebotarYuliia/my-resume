import React, { Children, cloneElement } from "react";
import s from "./Menu.module.scss";
import classNames from "classnames/bind";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  active: boolean;
};

export const Menu = ({ active, children }: Props) => {
  return (
    // TODO exit animation
    <nav className={c(s.menu, { active })} aria-label="menu">
      <div className={s.menu__inner}>
        <div className={s.menu__content}>
          <ul className={s.menu__list}>
            {Children.map(children, (child, i) => (
              // TODO add enter animation
              <li className={s.menu__item} key={i}>
                {cloneElement(child as React.ReactElement, {
                  tabIndex: 0,
                  style: { "--i": i },
                })}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
