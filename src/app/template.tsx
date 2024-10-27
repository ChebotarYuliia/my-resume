"use client";

import { PageTransition } from "@/components/page-transition/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
