"use client";

import React, { CSSProperties } from "react";
import Link from "next/link";
import { TSocialIcon, Icon } from "../icon/Icon";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";

import s from "./ContactLink.module.scss";

const c = classNames.bind(s);

type Props = {
  platform: TSocialIcon;
  link: string;
  style?: CSSProperties;
  active?: boolean;
};

export const ContactLink = ({
  platform,
  link,
  style,
  active = false,
}: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Link
      href={link}
      className={c(s.contactLink, {
        inView: inView && active,
      })}
      style={style}
      ref={ref}
      target="_blank"
    >
      <Icon name={platform} />
    </Link>
  );
};
