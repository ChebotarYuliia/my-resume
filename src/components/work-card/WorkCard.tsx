"use client";

import React, { useState } from "react";
import s from "./WorkCard.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Link from "next/link";
import { WorkCardContentProps } from "./WorkCardContent";

const c = classNames.bind(s);

export type WorkCardProps = {
  link?: string;
  children: React.ReactElement<WorkCardContentProps>;
};

export const WorkCard = ({ link, children }: WorkCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20px 0px",
  });
  const [hover, setHover] = useState(false);
  const { isTablet } = useWindowWidth();

  const clasNames = c(s.workCard, { inView, link, hover: !isTablet && hover });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  if (link) {
    return (
      <Link
        className={clasNames}
        target="_blank"
        href={link}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={clasNames} ref={ref}>
      {children}
    </div>
  );
};
