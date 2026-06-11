import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portal.customscape.ai",
      },
    ],
  },
};

export default nextConfig;
