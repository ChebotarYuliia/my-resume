import type { Metadata } from "next";
import "../styles/global.scss";
import { geistFont, geistMonoFont } from "../assets/fonts/config";
import { NavContainer } from "@/containers/Nav/Nav";
import { Header } from "@/components/header/Header";
import { UIStateProvider } from "@/state/state";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import { socials } from "./data/data";

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
          <Header
            nav={<NavContainer isMenu />}
            socials={socials.map((link, i) => (
              <ContactLink
                key={i}
                platform={link.platform as TSocialIcon}
                link={link.link}
              />
            ))}
          >
            <NavContainer />
          </Header>

          {children}
        </UIStateProvider>
      </body>
    </html>
  );
}
