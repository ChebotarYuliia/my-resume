import React, { Children, cloneElement } from "react";
import s from "./Nav.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Nav = ({ children }: Props) => {
  const childArray = Children.toArray(children);

  if (!childArray.length) {
    return null;
  }

  return (
    <div className={s.nav}>
      <div className={s.nav__inner}>
        {childArray.map((item, i) =>
          cloneElement(item as React.ReactElement, {
            style: { "--i": i },
          })
        )}
      </div>
    </div>
  );
};
