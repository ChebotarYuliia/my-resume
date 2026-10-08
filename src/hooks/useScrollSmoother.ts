"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUiState } from "@/hooks/useUiState";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const useScrollSmoother = () => {
  const { uiState } = useUiState();
  const { prefersReducedMotion } = uiState;

  // layout effect, not passive: on a locale switch the old smoother must be
  // killed (resetting ScrollTrigger's default scroller to window) before the
  // new sections create their triggers in their own layout effects; otherwise
  // they bind to the old, detached #smooth-wrapper and never fire
  useLayoutEffect(() => {
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
