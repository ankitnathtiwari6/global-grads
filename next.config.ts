import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/global-grads", // Your repository name
  assetPrefix: "https://ankitnathtiwari6.github.io/global-grad/",
  images: {
    unoptimized: true,
  },
};

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath: "", // Your repository name
//   images: {
//     unoptimized: true,
//   },
// };
export default nextConfig;
