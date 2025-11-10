import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hue: {
          midnight: '#061628',
          gold: '#fba919',
          lime: '#67bd45',
          blue: '#3955a5',
          fuchsia: '#ed1e6a',
        }
      },
    },
  },
  plugins: [],
};
export default config;
