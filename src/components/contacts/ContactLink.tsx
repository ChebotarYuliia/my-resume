"use client";

import React, { CSSProperties, HTMLAttributes } from "react";
import Link from "next/link";
import { TSocialIcon, Icon } from "../icon/Icon";
import { InView } from "@/components/in-view/InView";

import s from "./ContactLink.module.scss";

export type ContactLinkProps = {
  platform: TSocialIcon;
  link: string;
  style?: CSSProperties;
  active?: boolean;
} & HTMLAttributes<HTMLAnchorElement>;

export const ContactLink = ({
  platform,
  link,
  style,
  active = false,
}: ContactLinkProps) => {
  return (
    <InView
      as={Link}
      className={s.contactLink}
      inClassName={s.inView}
      active={active}
      href={link}
      style={style}
      target="_blank"
      aria-label={platform}
      title={platform}
      data-cursor-hover=""
    >
      <Icon name={platform} />
    </InView>
  );
};
