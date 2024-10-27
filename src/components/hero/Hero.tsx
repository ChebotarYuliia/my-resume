import React from "react";

import s from "./Hero.module.scss";

type Props = {
  greeting?: string;
  name: string;
  titles?: Array<string>;
};

// TODO finish styles + add transitions
export const Hero = ({ greeting, name, titles }: Props) => {
  return (
    <div className={s.hero}>
      <div className={s.hero__inner}>
        <div className={s.hero__content}>
          <p className={s.hero__greeting}>{greeting}</p>
          <h1 className={s.hero__name}>
            I am <span>{name}</span>
          </h1>
          {titles?.length ? (
            // TODO add slide animation to items
            <ul className={s.hero__list}>
              {titles.map((title, i) => (
                <li className={s.hero__listItem} key={i}>
                  {title}
                </li>
              ))}
            </ul>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
