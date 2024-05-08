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
        fadeIn: "show 200ms linear",
        fadeOut: "hide 200ms linear",
        grow: "growUp 500ms ease-out",
        growWall: "growUp 250ms ease-out",
        explore: "growUp explore 500ms linear",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0", "max-height": "0" },
          "100%": { opacity: "100", "max-height": "300px" },
        },
        hide: {
          "0%": { opacity: "100", "max-height": "300px" },
          "100%": { opacity: "0", "max-height": "0" },
        },
        growUp: {
          "0%": { transform: "scale(0)", "border-radius": "20px" },
          "50%": { opacity: "50" },
          "100%": { transform: "scale(1)", "border-radius": "0" },
        },
        explore: {
          "0%": { "background-color": "red" },
          "100%": { " background-color": "blue" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
