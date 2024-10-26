import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
};

export default nextConfig;
