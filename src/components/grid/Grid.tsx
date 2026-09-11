"use client";

import React, { Children, CSSProperties, useRef } from "react";
import s from "./Grid.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUiState } from "@/hooks/useUiState";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  const rootRef = useRef<HTMLUListElement>(null);
  const { uiState } = useUiState();
  const { prefersReducedMotion } = uiState;

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root || prefersReducedMotion) {
        return;
      }

      const items: Array<HTMLElement> = gsap.utils.toArray(
        `.${s.grid__item}`,
        root
      );

      gsap.set(items, { opacity: 0, scale: 0.85, rotate: -3, y: 40 });

      ScrollTrigger.batch(items, {
        start: "top 85%",
        end: "bottom 15%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.08,
            overwrite: true,
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.08,
            overwrite: true,
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            scale: 0.85,
            rotate: 3,
            y: -40,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.05,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            scale: 0.85,
            rotate: -3,
            y: 40,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.05,
            overwrite: true,
          }),
      });
    },
    { scope: rootRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <ul className={s.grid__list} ref={rootRef}>
      {Children.map(children, (child, i) => {
        return (
          <li
            className={s.grid__item}
            style={{ "--i": i } as CSSProperties}
            key={i}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
