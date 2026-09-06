"use client";

// import { PageTransition } from "@/components/page-transition/PageTransition";
import { useCursor } from "@/hooks/useCursor";
import { useUiState } from "@/hooks/useUiState";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // Temp decision
  const { setUIState } = useUiState();
  useEffect(() => {
    setUIState({ openAnimation: "completed" });
  }, [setUIState]);
  // end

  useCursor();
  // return <PageTransition>{children}</PageTransition>;
  return children;
}
