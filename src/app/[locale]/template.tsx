"use client";

import { useUiState } from "@/hooks/useUiState";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Template({ children }: { children: React.ReactNode }) {
  const { setUIState } = useUiState();
  const { ref: footerRevealRef, inView: footerRevealed } = useInView();

  useEffect(() => {
    setUIState({ openAnimation: "completed" });
  }, [setUIState]);

  useEffect(() => {
    setUIState({ footerRevealed });
  }, [footerRevealed, setUIState]);

  useScrollSmoother();

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
        <div ref={footerRevealRef} aria-hidden />
      </div>
    </div>
  );
}
