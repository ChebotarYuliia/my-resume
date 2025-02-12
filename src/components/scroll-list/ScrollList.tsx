"use client";

import React, { useRef } from "react";
import s from "./ScrollList.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: Array<React.ReactElement<HTMLSpanElement>>;
  heading: string;
};

export const ScrollList = ({ items, heading }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const mainClass = s.scrollList;
  const itemClass = s.scrollList__listItem;

  useGSAP(() => {
    const trigger = headingRef.current;
    const parent = ref.current;
    const list = listRef.current;
    const mq = gsap.matchMedia();

    const desktopBreakpoint = 1024;

    if (!trigger || !parent || !list) {
      return;
    }

    mq.add(
      {
        // the function below will be called when ANY of them match.
        isDesktop: `(min-width: ${desktopBreakpoint}px) and (prefers-reduced-motion: no-preference)`,
        isMobile: `(max-width: ${
          desktopBreakpoint - 1
        }px) and (prefers-reduced-motion: no-preference)`,
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        const { isDesktop } = context.conditions as gsap.Conditions;
        let tl: GSAPTimeline | undefined = undefined;

        if (isDesktop) {
          // initial values
          gsap.set(`.${itemClass} > span`, { transformOrigin: "0 50%" });
          gsap.set(`.${itemClass}:not(:first-of-type) span`, {
            opacity: 0.2,
            scale: 0.8,
          });
          gsap.set(`.${itemClass} > img`, { transformOrigin: "0 50%" });
          gsap.set(`.${itemClass}:not(:first-of-type) > img`, {
            opacity: 0,
            scale: 0.4,
            translateX: "-50%",
          });

          // animation on scoll
          tl = gsap
            .timeline()
            .to(`.${itemClass}:not(:first-of-type) span`, {
              opacity: 1,
              scale: 1,
              stagger: 0.5,
            })
            .to(
              `.${itemClass}:not(:last-of-type) span`,
              { opacity: 0.2, scale: 0.8, stagger: 0.5 },
              0
            )
            .to(
              `.${itemClass}:not(:first-of-type) img`,
              { opacity: 1, scale: 1, stagger: 0.5 },
              0
            )
            .to(
              `.${itemClass}:not(:last-of-type) img`,
              {
                opacity: 0,
                scale: 0.3,
                stagger: 0.5,
                translateX: "50%",
                ease: "power1.inOut",
              },
              0
            );

          const items = gsap.utils.toArray(
            `.${itemClass}`
          ) as Array<HTMLElement>;

          ScrollTrigger.create({
            trigger,
            start: "center center",
            endTrigger: `.${itemClass}:last-of-type`,
            end: "center center",
            pin: true,
            markers: true,
            animation: tl,
            scrub: true,
            pinSpacing: false,
            snap: 1 / (items.length - 1),
            invalidateOnRefresh: true,
          });
        }

        return () => {
          // return a cleanup function that will be called when the media query no longer matches
          tl?.kill();
        };
      }
    );
  }, []);

  return (
    <div className={mainClass} ref={ref}>
      <p className={s.scrollList__heading} ref={headingRef}>
        {heading}
      </p>

      <ul className={s.scrollList__list} ref={listRef}>
        {items.map((item, i) => (
          <li key={i} className={itemClass}>
            {item}
            <Image
              src={`/pictures/${i}.webp`}
              alt="Picture of something really cool"
              loading="lazy"
              width={600}
              height={600}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
