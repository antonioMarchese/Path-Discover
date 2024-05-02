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
      animation: {
        fadeIn: "show 150ms linear",
        fadeOut: "hide 150ms linear",
        grow: "growUp 500ms linear",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0", height: "0" },
          "100%": { opacity: "100", height: "130px" },
        },
        hide: {
          "0%": { opacity: "100", height: "130px" },
          "100%": { opacity: "0", height: "0" },
        },
        growUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
