"use client";

import React, { Children, cloneElement, CSSProperties, useState } from "react";
import s from "./ContactLabels.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ContactLinkProps } from "../contacts/ContactLink";
const c = classNames.bind(s);

type SocialLabelProps = {
  socials: Array<React.ReactElement<ContactLinkProps>>;
};

export const SocialLabel = ({ socials }: SocialLabelProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={c(s.contactLabels, "socials", { inView })} ref={ref}>
      <ul className={s.contactLabels__socialsList}>
        {Children.map(socials, (link, i) => (
          <li key={`social-${link.props.platform}`}>
            {cloneElement(link, {
              style: { "--i": i } as CSSProperties,
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
  const [copySuccess, setCopySuccess] = useState<string>();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopySuccess("Copied!");

    setTimeout(() => {
      setCopySuccess(undefined);
    }, 1000);
  };

  return (
    <>
      <div className={c(s.contactLabels, "email", { inView })} ref={ref}>
        <div className={s.contactLabels__emailInner}>
          <Link
            href={`mailto:${email}`}
            onClick={copyToClipboard}
            area-label={"gmail"}
          >
            {email}
          </Link>
        </div>

        <span
          className={c(s.contactLabelsCopy, { active: copySuccess })}
          role="tooltip"
        >
          {copySuccess ?? ""}
        </span>
      </div>
    </>
  );
};
