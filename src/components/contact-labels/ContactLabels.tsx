"use client";

import React, { Children, cloneElement, CSSProperties, useState } from "react";
import s from "./ContactLabels.module.scss";
import classNames from "classnames/bind";
import { InView } from "@/components/in-view/InView";
import Link from "next/link";
import { ContactLinkProps } from "../contacts/ContactLink";
import { useTranslations } from "next-intl";
import { useUiState } from "@/hooks/useUiState";
const c = classNames.bind(s);

type SocialLabelProps = {
  socials: Array<React.ReactElement<ContactLinkProps>>;
};

export const SocialLabel = ({ socials }: SocialLabelProps) => {
  const { uiState } = useUiState();
  const heroReady = uiState.heroEnterAnimation === "completed";

  return (
    <InView
      className={c(s.contactLabels, "socials")}
      inClassName={s.inView}
      active={heroReady}
    >
      <ul className={s.contactLabels__socialsList}>
        {Children.map(socials, (link, i) => (
          <li key={`social-${link.props.platform}-${link.props.link}`}>
            {cloneElement(link, {
              style: { "--i": i } as CSSProperties,
              tabIndex: 0,
              active: heroReady,
            })}
          </li>
        ))}
      </ul>
    </InView>
  );
};

type EmailLabelProps = {
  email: string;
};

export const EmailLabel = ({ email }: EmailLabelProps) => {
  const [copySuccess, setCopySuccess] = useState<string>();
  const t = useTranslations("Client");
  const tooltipId = "copied-tootlip";
  const { uiState } = useUiState();
  const heroReady = uiState.heroEnterAnimation === "completed";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopySuccess(t("copied"));

    setTimeout(() => {
      setCopySuccess(undefined);
    }, 1000);
  };

  return (
    <InView
      className={c(s.contactLabels, "email")}
      inClassName={s.inView}
      active={heroReady}
    >
      <div className={s.contactLabels__emailInner}>
        <Link
          href={`mailto:${email}`}
          onClick={copyToClipboard}
          aria-label={"gmail"}
          aria-describedby={tooltipId}
        >
          {email}
        </Link>
      </div>

      <span
        className={c(s.contactLabelsCopy, { active: copySuccess })}
        role="tooltip"
        id={tooltipId}
      >
        {copySuccess ?? ""}
      </span>
    </InView>
  );
};
