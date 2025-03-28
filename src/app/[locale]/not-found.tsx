import { Button } from "@/components/Button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NotFound() {
  return (
    <html lang="en">
      <body>
        <h2>Oops... Nothing found</h2>
        <Button>Maybe go Home?</Button>
      </body>
    </html>
  );
}
