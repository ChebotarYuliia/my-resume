"use client";

import React, { useRef } from "react";
import s from "./Section.module.scss";
import { useUiState } from "@/hooks/useUiState";
import { TSectionTheme } from "@/state/state";
import classNames from "classnames/bind";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

const c = classNames.bind(s);

type Props = {
  children?: React.ReactNode;
  id?: string;
  theme?: TSectionTheme;
  fullHeight?: boolean;
  noSpacing?: boolean;
};

export const Section = ({
  children,
  id,
  theme = "default",
  fullHeight = false,
  noSpacing = false,
}: Props) => {
  const { setUIState } = useUiState();
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = triggerRef.current;
      const parent = ref.current;

      if (!trigger || !parent) {
        return;
      }

      const isFirstSection =
        !parent.previousElementSibling?.hasAttribute("data-theme");

      ScrollTrigger.create({
        trigger,
        start: "top 50%",
        endTrigger: parent,
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) {
            setUIState({ sectionTheme: theme });
          }
        },
        // above the first section (hero) falls back to the default theme
        onLeaveBack: () => {
          if (isFirstSection) {
            setUIState({ sectionTheme: "default" });
          }
        },
        invalidateOnRefresh: true,
      });
    },
    { scope: ref, dependencies: [theme, setUIState] },
  );

  return (
    <section
      className={c(s.section, theme, { fullHeight, noSpacing })}
      data-theme={theme}
      id={id}
      ref={ref}
    >
      <div className={s.section__trigger} ref={triggerRef} />
      <div className={s.section__inner}>{children}</div>
    </section>
  );
};
