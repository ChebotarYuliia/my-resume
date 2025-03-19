"use client";

import React, {
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import s from "./Hero.module.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useUiState } from "@/hooks/useUiState";
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const nameRef = useRef<HTMLSpanElement>(null);
  const cursorContainerRef = useRef<HTMLHeadingElement>(null);

  const firstRender = useRef(true);

  gsap.registerPlugin(TextPlugin);

  const enterAnimation = useCallback(
    (tl: gsap.core.Timeline) => {
      const mq = gsap.matchMedia();

      const nameEl = nameRef.current;

      const textTypingOpts = (
        value: string,
        duration?: number,
        ease?: string
      ) => {
        return {
          text: {
            value,
          },
          duration: duration ?? 1,
          ease: ease ?? "none",
        };
      };

      if (inView && uiState.openAnimation === "completed" && firstRender) {
        mq.add(`(prefers-reduced-motion: no-preference)`, () => {
          tl.to(nameEl, {
            ...textTypingOpts(name, name.length * 0.15, "power2.inOut"),
            onComplete: () => {
              setUIState({ heroEnterAnimation: "completed" });
            },
          });
        });
      }
    },
    [inView, name, uiState, setUIState]
  );

  useEffect(() => {
    if (uiState.heroEnterAnimation !== "completed") {
      const tl = gsap.timeline();
      enterAnimation(tl);
      firstRender.current = false;

      return () => {
        tl.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enterAnimation]);

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
              {uiState.heroEnterAnimation === "completed" ? (
                <span className={s.hero__name}>{name}</span>
              ) : (
                <span className={s.hero__name} ref={nameRef} />
              )}
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

        <div className={s.hero__imageWrap}>
          {cloneElement(image, {
            onLoad: () => setImageLoaded(true),
            className: s.hero__image,
          })}
        </div>
      </div>
    </div>
  );
};
