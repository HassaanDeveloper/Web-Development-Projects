import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#F7F7F7",
        black: "#000000",
        light: "#676767",
        seclight: "#505050",
        background: "#ffffff",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
