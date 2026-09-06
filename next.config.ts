import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// for localized routing
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

if (process.env.ANALYZE === "true") {
  module.exports = withBundleAnalyzer({ enabled: true })(
    withNextIntl(nextConfig)
  );
} else {
  module.exports = withNextIntl(nextConfig);
}
