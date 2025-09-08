import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E2A",
        text: "#E8EBFF",
        accent: "#00D1FF",
        accent2: "#FF4FD8"
      },
      container: {
        center: true,
        padding: "1rem"
      },
      boxShadow: {
        neon: "0 0 42px rgba(255,79,216,.35), 0 0 42px rgba(0,209,255,.35)"
      }
    },
  },
  plugins: [],
} satisfies Config;
