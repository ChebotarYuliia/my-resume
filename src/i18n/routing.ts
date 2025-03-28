import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { ALL_LOCALES, DEFAULT_LOCALE } from "./i18n";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ALL_LOCALES,
  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false,
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
