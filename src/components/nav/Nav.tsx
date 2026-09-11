import React, { Children, cloneElement } from "react";
import s from "./Nav.module.scss";
import classNames from "classnames/bind";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
  heroReady?: boolean;
};

export const Nav = ({ children, heroReady }: Props) => {
  const childArray = Children.toArray(children);

  if (!childArray.length) {
    return null;
  }

  return (
    <nav className={c(s.nav, { heroReady })}>
      <div className={s.nav__inner}>
        {childArray.map((item, i) =>
          cloneElement(
            item as React.ReactElement<{ style?: React.CSSProperties }>,
            {
              style: { "--i": i } as React.CSSProperties,
            }
          )
        )}
      </div>
    </nav>
  );
};
