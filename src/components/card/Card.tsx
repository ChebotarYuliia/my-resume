"use client";

import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import s from "./Card.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import { useUiState } from "@/hooks/useUiState";

const c = classNames.bind(s);

export type CardProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children?: string; // main text
  style?: CSSProperties;
};

const THRESHOLD = 15;

export const Card = ({ icon, title, subtitle, children, style }: CardProps) => {
  const { uiState } = useUiState();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px -50px",
  });
  const [hover, setHover] = useState(false);
  const [motionMatchMedia, setMotionMatchMedia] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // animation transform properties
  const [perspective, setPerspective] = useState("0");
  const [rotateX, setRotateX] = useState("0");
  const [rotateY, setRotateY] = useState("0");
  const [scale3d, setScale3d] = useState<string | undefined>(undefined);

  useEffect(() => {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const isDesktop = window.innerWidth > 1024;
    setMotionMatchMedia(motionMatchMedia.matches);
    setIsDesktop(isDesktop);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleHover(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!motionMatchMedia && isDesktop) {
      setHover(true);
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } =
        currentTarget;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      setPerspective(`${clientWidth}px`);
      setRotateX(`${rotateY}deg`);
      setRotateY(`${rotateX}deg`);
      setScale3d("1, 1, 1");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function resetStyles(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setHover(false);
    setPerspective(`${e.currentTarget.clientWidth}px`);
    setRotateX("0deg");
    setRotateY("0deg");
    setScale3d(undefined);
  }

  return (
    <div
      className={c(s.card, {
        inView: inView && uiState.openAnimation === "completed",
        hover,
      })}
      // onMouseOver={handleHover}
      // onMouseLeave={resetStyles}
      ref={ref}
      style={
        {
          "--perspective": perspective,
          "--rotateX": rotateX,
          "--rotateY": rotateY,
          "--scale3d": scale3d,
          ...style,
        } as CSSProperties
      }
    >
      <div className={s.card__inner}>
        {icon && <div className={s.card__icon}>{icon}</div>}
        <div className={s.card__content}>
          <h3 className={s.card__title}>{title}</h3>
          {subtitle && <p className={s.card__subtitle}>{subtitle}</p>}
          {children && <p className={s.card__text}>{children}</p>}
        </div>
      </div>
    </div>
  );
};
