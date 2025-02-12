import type { Metadata } from "next";
import "../styles/global.scss";
import { geistFont, geistMonoFont } from "../assets/fonts/config";
import { NavContainer } from "@/containers/Nav/Nav";
import { Header } from "@/components/header/Header";
import { UIStateProvider } from "@/state/state";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import { socials } from "./data/data";
import { Button } from "@/components/Button/Button";
import {
  EmailLabel,
  SocialLabel,
} from "@/components/contact-labels/ContactLabels";

export const metadata: Metadata = {
  title: "Yuliia Chebotar: Resume",
  description:
    "Yuliia Chebotar -Web developer. React, TypeScript, Next, SCSS, gsap",
  authors: { name: "Yuliia Chebotar" },
  keywords: ["Web developer", "Frontend developer", "React", "Nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialEls = socials.map((link, i) => (
    <ContactLink
      key={i}
      platform={link.platform as TSocialIcon}
      link={link.link}
    />
  ));
  return (
    <html
      lang="en"
      className={`${geistMonoFont.variable} ${geistFont.variable}`}
    >
      <body id="body">
        <UIStateProvider>
          <Header
            nav={<NavContainer isMenu />}
            socials={socialEls}
            action={
              <Button
                variant="outlined"
                href="/cv/Yuliia_Chebotar_CV_web-dev.pdf"
                target="_blank"
              >
                Resume
              </Button>
            }
          >
            <NavContainer />
          </Header>

          <SocialLabel socials={socialEls} />
          <EmailLabel email={"chebotar609@gmail.com"} />

          {children}
        </UIStateProvider>
      </body>
    </html>
  );
}
