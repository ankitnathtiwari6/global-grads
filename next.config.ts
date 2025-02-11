import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/global-grads", // Your repository name
  assetPrefix: "https://ankitnathtiwari6.github.io",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
