"use client";

import { useUiState } from "@/hooks/useUiState";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const { setUIState } = useUiState();

  useEffect(() => {
    setUIState({ openAnimation: "completed" });
  }, [setUIState]);

  useScrollSmoother();

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
