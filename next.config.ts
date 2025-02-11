// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/global-grads", // Tells Next that our app is served from /global-grads
  images: {
    unoptimized: true, // For static exports
  },
  // assetPrefix: undefined,            // Typically omit if you have basePath
};

export default nextConfig;
