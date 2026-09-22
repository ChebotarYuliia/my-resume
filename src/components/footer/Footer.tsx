"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import s from "./Footer.module.scss";
import { Button } from "@/components/Button/Button";
import { useUiState } from "@/hooks/useUiState";
import { useElementHeightVar } from "@/hooks/useElementHeightVar";
import { ContactLinkProps } from "../contacts/ContactLink";

const c = classNames.bind(s);

type Props = {
  socials: Array<ContactLinkProps>;
  email: string;
};

export const Footer = ({ socials, email }: Props) => {
  const t = useTranslations("Client");
  const { uiState } = useUiState();
  const footerRef = useRef<HTMLElement>(null);

  useElementHeightVar(footerRef, "--footer-height");

  return (
    <footer
      ref={footerRef}
      className={c(s.footer, { inView: uiState.footerRevealed })}
    >
      <div className={s.footer__inner}>
        <div className={s.footer__row}>
          <div className={s.footer__actionWrap}>
            <Button
              variant="filled"
              href="/cv/Yuliia_Chebotar_CV_fullstack.pdf"
              target="_blank"
              aria-label={t("hero_cv_button")}
            >
              {t("hero_cv_button")}
            </Button>
          </div>

          <div className={s.footer__column}>
            <p className={s.footer__columnTitle}>{t("footer_socials_title")}</p>
            <ul className={s.footer__linkList}>
              {socials
                .filter((social) => social.platform !== "gmail")
                .map((social) => (
                  <li key={`${social.platform}-${social.link}`}>
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label ? t(social.label) : social.platform}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className={s.footer__column}>
            <p className={s.footer__columnTitle}>{t("section_contact")}</p>
            <Link href={`mailto:${email}`} className={s.footer__email}>
              {email}
            </Link>
          </div>
        </div>

        <div className={s.footer__titleWrapper}>
          <h2 className={s.footer__title}>{t("footer_title")}</h2>
        </div>
      </div>
    </footer>
  );
};
