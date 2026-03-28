import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;