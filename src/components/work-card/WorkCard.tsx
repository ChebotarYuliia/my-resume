"use client";

import React, { useState } from "react";
import s from "./WorkCard.module.scss";
import classNames from "classnames/bind";
import { InView } from "@/components/in-view/InView";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Link from "next/link";
import { WorkCardContentProps } from "./WorkCardContent";

const c = classNames.bind(s);

export type WorkCardProps = {
  link?: string;
  children: React.ReactElement<WorkCardContentProps>;
};

export const WorkCard = ({ link, children }: WorkCardProps) => {
  const [hover, setHover] = useState(false);
  const { isTablet } = useWindowWidth();

  const rootClassName = c(s.workCard, { link, hover: !isTablet && hover });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  if (link) {
    return (
      <InView
        as={Link}
        className={rootClassName}
        inClassName={s.inView}
        rootMargin="-20px 0px"
        target="_blank"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </InView>
    );
  }

  return (
    <InView className={rootClassName} inClassName={s.inView} rootMargin="-20px 0px">
      {children}
    </InView>
  );
};
