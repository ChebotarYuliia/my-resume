"use client";

import React, { cloneElement, useEffect, useRef, useState } from "react";

import s from "./Hero.module.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useUiState } from "@/hooks/useUiState";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { TextPlugin } from "gsap/all";
import { ImageProps } from "next/image";
import { ButtonProps } from "../Button/Button";

const c = classNames.bind(s);

type Props = {
  subtitle?: string;
  name: string;
  text: string;
  action?: React.ReactElement<ButtonProps>;
  image: React.ReactElement<ImageProps>;
};

export const Hero = ({ name, subtitle, action, text, image }: Props) => {
  const { uiState, setUIState } = useUiState();
  const { isTablet } = useWindowWidth();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const nameRef = useRef<HTMLSpanElement>(null);
  const cursorContainerRef = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(TextPlugin);

  const { openAnimation, heroEnterAnimation } = uiState;

  useEffect(() => {
    if (
      heroEnterAnimation === "completed" ||
      openAnimation !== "completed" ||
      !inView
    ) {
      return;
    }

    const nameEl = nameRef.current;
    const mq = gsap.matchMedia();
    let done = false;
    const complete = () => {
      done = true;
      setUIState({ heroEnterAnimation: "completed" });
    };

    mq.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        if (ctx.conditions?.reduced || !nameEl) {
          complete();
          return;
        }

        gsap.to(nameEl, {
          text: { value: name },
          duration: name.length * 0.15,
          ease: "power2.inOut",
          onComplete: complete,
        });
      },
    );

    return () => {
      // reverting a finished tween would reset the typed name back to empty
      if (done) {
        mq.kill();
      } else {
        mq.revert();
      }
    };
  }, [inView, openAnimation, heroEnterAnimation, name, setUIState]);

  return (
    <div
      className={c(s.hero, {
        animationCompleted: uiState.heroEnterAnimation === "completed",
        inView,
        imageLoaded,
      })}
      ref={ref}
    >
      <div className={s.hero__inner}>
        <div className={s.hero__contentWrap}>
          <div className={s.hero__content}>
            <h1 className={s.hero__nameContainer} ref={cursorContainerRef}>
              <span className={s.hero__name} ref={nameRef}>
                {heroEnterAnimation === "completed" ? name : null}
              </span>
            </h1>

            {subtitle && (
              <div className={s.hero__subtitleWrap}>
                <p className={s.hero__subtitle}>{subtitle}</p>
              </div>
            )}

            {text && (
              <div className={s.hero__textWrap}>
                <p className={s.hero__text}>{text}</p>
              </div>
            )}

            {action && <div className={s.hero__actionWrap}>{action}</div>}
          </div>
        </div>

        <div
          className={s.hero__imageWrap}
          {...(!isTablet && { "data-speed": "0.9" })}
        >
          {cloneElement(image, {
            onLoad: () => setImageLoaded(true),
            className: s.hero__image,
          })}
        </div>
      </div>
    </div>
  );
};
