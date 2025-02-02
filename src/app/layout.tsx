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
      <body id="body">
        <UIStateProvider>
          {/* TODO add fixed socials on desktop */}
          <Header
            nav={<NavContainer isMenu />}
            socials={socials.map((link, i) => (
              <ContactLink
                key={i}
                platform={link.platform as TSocialIcon}
                link={link.link}
              />
            ))}
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

          {children}
        </UIStateProvider>
      </body>
    </html>
  );
}
