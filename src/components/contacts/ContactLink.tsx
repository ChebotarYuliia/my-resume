"use client";

import React, { CSSProperties, HTMLAttributes, useRef } from "react";
import Link from "next/link";
import { TSocialIcon, Icon } from "../icon/Icon";
import { InView } from "@/components/in-view/InView";
import { useMagnetic } from "@/hooks/useMagnetic";

import s from "./ContactLink.module.scss";

export type ContactLinkProps = {
  platform: TSocialIcon;
  link: string;
  style?: CSSProperties;
  active?: boolean;
  label?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export const ContactLink = ({
  platform,
  link,
  style,
  active = false,
}: ContactLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useMagnetic(linkRef);

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
      elementRef={linkRef}
    >
      <Icon name={platform} />
    </InView>
  );
};
