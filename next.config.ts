import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
