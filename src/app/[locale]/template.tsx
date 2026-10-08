"use client";

import { useUiState } from "@/hooks/useUiState";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Template({ children }: { children: React.ReactNode }) {
  const { setUIState } = useUiState();
  const { ref: footerSpacerRef, inView: footerSpacerInView } = useInView();
  const { ref: footerEndRef, inView: footerEndInView } = useInView();

  useEffect(() => {
    setUIState({ openAnimation: "completed" });
  }, [setUIState]);

  useEffect(() => {
    setUIState({
      footerReveal: footerEndInView
        ? "full"
        : footerSpacerInView
          ? "partial"
          : "hidden",
    });
  }, [footerSpacerInView, footerEndInView, setUIState]);

  useScrollSmoother();

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
        <div ref={footerSpacerRef} className="footer-spacer" aria-hidden />
        <div ref={footerEndRef} aria-hidden />
      </div>
    </div>
  );
}
