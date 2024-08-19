import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "r-green" : "#4F6827",
      "r-red": "#A51108",
      "r-blue": "#2C407C",
      "r-black": "#151515",
      "r-yellow": "#FFCE47",
      "r-white": "#E4DFDA",
      "r-footer-white": "#DDD6D0"
    }
  },
  plugins: [],
};
export default config;
