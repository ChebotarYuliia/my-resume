import type { Metadata } from "next";
import "../styles/global.scss";
import { geistFont, geistMonoFont } from "../assets/fonts/config";
import { NavContainer } from "@/containers/Nav/Nav";
import { Header } from "@/components/header/Header";

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
    <html
      lang="en"
      className={`${geistMonoFont.variable} ${geistFont.variable}`}
    >
      <body>
        <Header nav={<NavContainer isMenu />}>
          <NavContainer />
        </Header>

        {children}
      </body>
    </html>
  );
}
