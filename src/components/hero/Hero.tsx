"use client";

import React, {
  CSSProperties,
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
import Image from "next/image";

const c = classNames.bind(s);

type Props = {
  greeting?: string;
  name: string;
  titles?: Array<string>;
};

// const NameStart = "I'm  ";

export const Hero = ({ greeting, name, titles }: Props) => {
  const { uiState, setUIState } = useUiState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const greetingRef = useRef<HTMLParagraphElement>(null);
  // const nameContainerRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const cursorContainerRef = useRef<HTMLHeadingElement>(null);
  const nameCursorRef = useRef<HTMLSpanElement>(null);

  const firstRender = useRef(true);

  gsap.registerPlugin(TextPlugin);

  const enterAnimation = useCallback(
    (tl: gsap.core.Timeline) => {
      const mq = gsap.matchMedia();

      // const greetingEl = greetingRef.current;
      // const nameContainerEl = nameContainerRef.current;
      const nameEl = nameRef.current;
      const cursorContainerEl = cursorContainerRef.current;
      const nameCursorEl = nameCursorRef.current;

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
          onUpdate: () => {
            if (nameCursorEl) {
              cursorContainerEl?.appendChild(nameCursorEl);
            }
          },
        };
      };

      // tl.set(greetingEl, {
      //   scale: 0,
      //   x: "100%",
      //   opacity: 0,
      //   duration: "1.5s",
      // }).set(nameCursorEl, { opacity: 0 });

      if (inView && uiState.openAnimation === "completed" && firstRender) {
        const cursorTl = gsap.timeline();

        mq.add(`(prefers-reduced-motion: no-preference)`, () => {
          // tl.to(greetingEl, {
          //   scale: 2.5,
          //   opacity: 1,
          //   ease: "power2.inOut",
          //   duration: 1,
          // })
          //   .to(greetingEl, {
          //     scale: 1,
          //     x: 0,
          //     ease: "ease",
          //     onComplite: () => {
          //       cursorTl.to(nameCursorEl, {
          //         autoAlpha: 1,
          //         opacity: 1,
          //         duration: 0.5,
          //         repeat: -1,
          //         ease: SteppedEase.config(1),
          //       });
          //     },
          //   })
          // .to(nameContainerEl, {
          //   ...textTypingOpts(NameStart, 0.5, "power2.inOut"),
          // })
          tl.to(nameEl, {
            ...textTypingOpts(name, name.length * 0.15, "power2.inOut"),
            onComplete: () => {
              setUIState({ heroEnterAnimation: "completed" });
              cursorTl.to(nameCursorEl, { opacity: 0 });
              cursorTl.kill();
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
        inView: inView && uiState.openAnimation === "completed",
        imageLoaded,
      })}
      ref={ref}
    >
      <div className={s.hero__inner}>
        <div className={s.hero__contentWrap}>
          <div className={s.hero__content}>
            <p className={s.hero__greeting} ref={greetingRef}>
              {greeting}
            </p>

            {titles?.length ? (
              <ul className={s.hero__list}>
                {titles.map((title, i) => (
                  <li
                    className={s.hero__listItem}
                    key={i}
                    style={{ "--i": i } as CSSProperties}
                  >
                    <div>{title}</div>
                  </li>
                ))}
              </ul>
            ) : undefined}

            {/* TODO add button */}
          </div>

          <h1 className={s.hero__nameContainer} ref={cursorContainerRef}>
            {/* <span ref={nameContainerRef} /> */}
            {uiState.heroEnterAnimation === "completed" ? (
              <span className={s.hero__name}>{name}</span>
            ) : (
              <span className={s.hero__name} ref={nameRef} />
            )}
            <span ref={nameCursorRef}>|</span>
          </h1>
        </div>

        <div className={s.hero__imageWrap}>
          <Image
            src="/temp-hero-img.jpg"
            width={900}
            height={400}
            alt="Yuliia Chebotar portrait"
            priority={true}
            className={s.hero__image}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};
