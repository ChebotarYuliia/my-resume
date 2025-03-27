"use client";

import React, { Children, cloneElement, useRef } from "react";
import { ImageProps } from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./ScrollBlocks.module.scss";

type Props = {
  list: Array<string>;
  images: Array<React.ReactElement<ImageProps>>;
};

export const ScrollBlocks = ({ list, images }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const textClassName = s.scrollBlocks__text;
  const imgClassName = s.scrollBlocks__img;
  const DURATION = 0.1; // sec

  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const trigger = ref.current;
    const texts: Array<HTMLLIElement> = gsap.utils.toArray(`.${textClassName}`);
    const imgs: Array<HTMLImageElement> = gsap.utils.toArray(
      `.${imgClassName}`
    );

    if (!trigger || !texts.length || !imgs.length) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
        // markers: true,
        snap: 1 / (texts.length - 1),
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    imgs.forEach((img, i) => {
      if (imgs[i + 1]) {
        tl.to(trigger, { duration: DURATION });
        tl.to(img, { opacity: 0 })
          .to(imgs[i + 1], { opacity: 1 }, "<")
          .to(texts, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
      }
    });

    tl.to(trigger, { duration: DURATION });
  });

  if (!list.length) {
    return null;
  }

  return (
    <div className={s.scrollBlocks}>
      <div className={s.scrollBlocks__inner} ref={ref}>
        <div className={s.scrollBlocks__rightContent}>
          <div className={s.scrollBlocks__imgList}>
            {Children.map(images, (image) =>
              cloneElement(image, {
                className: imgClassName,
              })
            )}
          </div>
        </div>

        <div className={s.scrollBlocks__leftContent}>
          <ul className={s.scrollBlocks__textList}>
            {list.map((text, i) => {
              return (
                <li className={textClassName} key={`scroll-block-${i}`}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
