"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./ScrollBlocks.module.scss";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

type Props = {
  list: Array<string>;
};

export const ScrollBlocks = ({ list }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const textClassName = s.scrollBlocks__text;
  const imgClassName = s.scrollBlocks__img;

  useGSAP(() => {
    const trigger = ref.current;
    let texts: Array<HTMLLIElement> = gsap.utils.toArray(`.${textClassName}`);
    let imgs: Array<HTMLImageElement> = gsap.utils.toArray(`.${imgClassName}`);

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
        markers: true,
        snap: 1 / (texts.length - 1),
        invalidateOnRefresh: true,
      },
    });

    imgs.forEach((img, i) => {
      if (imgs[i + 1]) {
        tl.to(img, { opacity: 0 })
          .to(imgs[i + 1], { opacity: 1 }, "<")
          .to(texts, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
      }
    });
  });

  if (!list.length) {
    return null;
  }

  return (
    <div className={s.scrollBlocks}>
      <div className={s.scrollBlocks__inner} ref={ref}>
        <div className={s.scrollBlocks__rightContent}>
          <div className={s.scrollBlocks__imgList}>
            {list.map((_, i) => {
              return (
                <Image
                  className={imgClassName}
                  src={`/pictures/${i}.webp`}
                  alt="Picture of something really cool"
                  loading="lazy"
                  width={600}
                  height={600}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <div className={s.scrollBlocks__leftContent}>
          <ul className={s.scrollBlocks__textList}>
            {list.map((text, i) => {
              return (
                <li className={textClassName} key={i}>
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
