"use client";

import React, { useRef } from "react";
import s from "./Text.module.scss";
import { InView } from "@/components/in-view/InView";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

type Props = {
  children: React.ReactNode;
  featured?: boolean;
};

export const Text = ({ children, featured }: Props) => {
  const textFeaturedContainerRef = useRef(null);
  const textFeaturedRef = useRef(null);

  useGSAP(
    () => {
      const container = textFeaturedContainerRef.current;
      const text = textFeaturedRef.current;

      if (!featured || !children || !container || !text) {
        return;
      }

      const split = SplitText.create(text, {
        type: "words,chars",
        autoSplit: true,
        mask: "chars", // <-- this can be "lines" or "words" or "chars"
      });

      gsap.from(split.chars, {
        duration: 0.5,
        opacity: 0,
        ease: "circ.out",
        stagger: 0.01,
        scrollTrigger: {
          trigger: textFeaturedContainerRef.current,
          //markers:true,
          start: "top 85%",
          end: "bottom center",
          scrub: 1,
        },
        // onComplete: () => {
        //   split.revert();
        // },
      });
    },
    { scope: textFeaturedContainerRef, dependencies: [featured, children] },
  );

  return featured ? (
    <div className={s.textFeatured} ref={textFeaturedContainerRef}>
      <div className={s.textFeatured__split} ref={textFeaturedRef}>
        {children}
      </div>
    </div>
  ) : (
    <InView className={s.text} inClassName={s.inView} rootMargin="-15% 0px">
      {children}
    </InView>
  );
};
