"use client";

import React, { useRef } from "react";
import s from "./Section.module.scss";
import { useUiState } from "@/hooks/useUiState";
import { TSectionTheme } from "@/state/state";
import classNames from "classnames/bind";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

const c = classNames.bind(s);

type Props = {
  children?: React.ReactNode;
  id?: string;
  theme?: TSectionTheme;
  fullHeight?: boolean;
};

export const Section = ({
  children,
  id,
  theme = "default",
  fullHeight = false,
}: Props) => {
  const { uiState, setUIState } = useUiState();
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = triggerRef.current;
    const parent = ref.current;

    if (!trigger || !parent) {
      return;
    }

    const tl = gsap.timeline();
    tl.add(() => {
      const prevTheme =
        parent.previousElementSibling?.getAttribute("data-theme");

      ScrollTrigger.create({
        trigger,
        start: "top 75%",
        onEnter: () => {
          setUIState({ sectionTheme: theme });
        },
        onLeaveBack: () => {
          if (uiState.sectionTheme !== prevTheme && prevTheme) {
            setUIState({ sectionTheme: prevTheme as TSectionTheme });
          } else {
            setUIState({ sectionTheme: "default" });
          }
        },
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <div
      className={c(s.section, theme, { fullHeight })}
      data-theme={theme}
      id={id}
      ref={ref}
    >
      <div className={s.section__trigger} ref={triggerRef} />
      <div className={s.section__inner}>{children}</div>
    </div>
  );
};
