import localFont from "next/font/local";

export const geistMonoFont = localFont({
  src: [
    {
      path: "./GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-family-geist-mono",
});

export const geistFont = localFont({
  src: [
    {
      path: "./GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-family-geist-sans",
});
