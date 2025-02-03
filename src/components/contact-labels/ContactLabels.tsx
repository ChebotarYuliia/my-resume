"use client";

import React, { Children, cloneElement } from "react";
import s from "./ContactLabels.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
const c = classNames.bind(s);

type SocialLabelProps = {
  socials: Array<React.ReactElement>;
};

export const SocialLabel = ({ socials }: SocialLabelProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={c(s.contactLabels, "socials", { inView })} ref={ref}>
      <ul className={s.contactLabels__socialsList}>
        {Children.map(socials, (link, i) => (
          <li key={i}>
            {cloneElement(link, {
              style: { "--i": i },
              tabIndex: 0,
              active: true,
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

type EmailLabelProps = {
  email: string;
};

export const EmailLabel = ({ email }: EmailLabelProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={c(s.contactLabels, "email", { inView })} ref={ref}>
      <div className={s.contactLabels__emailInner}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};
