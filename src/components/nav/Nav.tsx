import React, { Children, cloneElement } from "react";
import s from "./Nav.module.scss";

import { InView } from "@/components/in-view/InView";

type Props = {
  children: React.ReactNode;
};

export const Nav = ({ children }: Props) => {
  const childArray = Children.toArray(children);

  if (!childArray.length) {
    return null;
  }

  return (
    <InView as="nav" className={s.nav} inClassName={s.inView}>
      <div className={s.nav__inner}>
        {childArray.map((item, i) =>
          cloneElement(
            item as React.ReactElement<{ style?: React.CSSProperties }>,
            {
              style: { "--i": i } as React.CSSProperties,
            },
          ),
        )}
      </div>
    </InView>
  );
};
