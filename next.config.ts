import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: process.env.NEXT_PUBLIC_SHOW_DEV_INDICATOR === "false"
    ? false
    : undefined,
  transpilePackages: ["ln"],
  async redirects() {
    return [
      {
        source: "/icons",
        destination: "/foundation/icons",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/project/about",
        permanent: true,
      },
      {
        source: "/changelog",
        destination: "/project/changelog",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/project/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
