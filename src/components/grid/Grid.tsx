"use client";

import React, { Children, CSSProperties } from "react";
import s from "./Grid.module.scss";
import { InView } from "@/components/in-view/InView";

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  return (
    <InView className={s.grid} inClassName={s.inView}>
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
    </InView>
  );
};
