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

    return () => {
      smoother.kill();
    };
  }, [prefersReducedMotion]);
};
