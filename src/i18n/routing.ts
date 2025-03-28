import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { ALL_LOCALES, DEFAULT_LOCALE } from "./i18n";

export const routing = defineRouting({
  locales: ALL_LOCALES, // Possible languages for translation
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false,
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
