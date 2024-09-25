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
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border-color)",
        textPrimary: "var(--text-primary-color)",
        textSecondary: "var(--text-secondary-color)",
        bgHighlight: "var(--bg-highlight)",
      },
      backgroundImage: () => ({
        "gradient-primary": `linear-gradient(to right, #F1C090 0%, 39.69258666038513%, #C07FB3 79.38517332077026%, 89.69258666038513%, #AB4199 100%)`,
      }),
    },
  },
  plugins: [],
};
export default config;
