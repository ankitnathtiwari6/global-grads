// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // For static exports
  },
  // assetPrefix: undefined,            // Typically omit if you have basePath
};

export default nextConfig;
