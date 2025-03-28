import type { Metadata } from "next";
import "../../styles/global.scss";
import { geistFont, geistMonoFont } from "../../assets/fonts/config";
import { NavContainer } from "@/containers/Nav/Nav";
import { Header } from "@/components/header/Header";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import { socials } from "../data/data";
import { Button } from "@/components/Button/Button";
import {
  EmailLabel,
  SocialLabel,
} from "@/components/contact-labels/ContactLabels";
import { Menu } from "@/components/menu/Menu";
import { Locale } from "@/i18n/i18n";
import { Providers } from "../providers";
import { getMessages, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Yuliia Chebotar: Resume",
  description:
    "Yuliia Chebotar -Web developer. React, TypeScript, Next, SCSS, gsap",
  authors: { name: "Yuliia Chebotar" },
  keywords: ["Web developer", "Frontend developer", "React", "Nextjs"],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  console.log("locale", locale);
  const { Client } = await getMessages({ locale });

  const socialEls = socials.map((link) => (
    <ContactLink
      key={link.platform}
      platform={link.platform as TSocialIcon}
      link={link.link}
    />
  ));

  // Here static rendering enables
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistMonoFont.variable} ${geistFont.variable}`}
      suppressHydrationWarning
    >
      <body id="body">
        <Providers locale={locale} messages={{ Client }}>
          <Header
            action={
              <Button
                variant="outlined"
                href="/cv/Yuliia_Chebotar_CV_web-dev.pdf"
                target="_blank"
                area-label={Client.download_cv}
              >
                {Client.resume}
              </Button>
            }
            menu={
              <Menu socials={socialEls}>
                <NavContainer isMenu />
              </Menu>
            }
          >
            <NavContainer />
          </Header>
          <SocialLabel socials={socialEls} />
          <EmailLabel email={"chebotar609@gmail.com"} />

          {children}
        </Providers>
      </body>
    </html>
  );
}
