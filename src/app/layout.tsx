import type { Metadata } from "next";
import "./styles/global.scss";
import { geistFont, geistMonoFont } from "./assets/fonts/config";

export const metadata: Metadata = {
  title: "Yuliia Chebotar: Resume",
  description:
    "Yuliia Chebotar -Web developer. React, TypeScript, Next, SCSS, gsap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMonoFont.variable} ${geistFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
