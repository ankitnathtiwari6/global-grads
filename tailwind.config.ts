// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffdf9",
        content: "#2b2b2b",
        primary: "#723bcf",
      },
      fontFamily: {
        "tt-norms": ["TT Norms", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
