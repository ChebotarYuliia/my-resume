import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ua|en)/:path*"], // At this line, define into the matcher all the availables language you have defined into routing.ts
};
