"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUiState } from "@/hooks/useUiState";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const useScrollSmoother = () => {
  const { uiState } = useUiState();
  const { prefersReducedMotion } = uiState;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // remounted after a locale switch: start at the top and recompute
    // trigger positions once the new content's fonts and images settle
    smoother.scrollTop(0);
    ScrollTrigger.refresh();

    let cancelled = false;
    const refresh = () => !cancelled && ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      cancelled = true;
      window.removeEventListener("load", refresh);
      smoother.kill();
    };
  }, [prefersReducedMotion]);
};
