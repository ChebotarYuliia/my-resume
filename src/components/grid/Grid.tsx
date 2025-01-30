"use client";

import React, { Children, CSSProperties } from "react";
import s from "./Grid.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className={c(s.grid, { inView })} ref={ref}>
      <ul className={s.grid__list}>
        {Children.map(children, (child, i) => {
          return (
            <li
              className={s.grid__item}
              style={{ "--i": i } as CSSProperties}
              key={i}
            >
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
