"use client";

import { PageTransition } from "@/components/page-transition/PageTransition";
import { useCursor } from "@/hooks/useCursor";

export default function Template({ children }: { children: React.ReactNode }) {
  useCursor();
  return <PageTransition>{children}</PageTransition>;
}
