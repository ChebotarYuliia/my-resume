export type Locale = "en" | "ua";
export const ALL_LOCALES: Array<Locale> = ["en", "ua"];

export const DEFAULT_LOCALE = (process.env.DEFAULT_LOCALE || "en") as Locale;
