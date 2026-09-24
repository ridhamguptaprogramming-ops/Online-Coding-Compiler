import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./frontend/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080b12",
        surface: "#101621",
        card: "#101621",
        border: "#243044",
        primary: "#7c8cff",
        accent: "#45d483",
        success: "#45d483",
        danger: "#ff6b7a",
        warning: "#f3b45b",
        muted: "#8d9ab3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
