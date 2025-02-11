import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/global-grads/", // Should match basePath with trailing slash
  basePath: "/global-grads", // Your repository name

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
