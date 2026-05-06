import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "#922024",
        gold: "#4f573b",
        "light-navy": "#2C3A5A",
        "off-white": "#F8F9FA",
        "medium-gray": "#6C757D",
        white: "#FFFFFF",
        "light-red": "#D46062",
        navy: "#1E2A4A",
      },
      fontFamily: {
        sans: ["Bookantiqua", "ui-sans-serif", "system-ui"],
        heading: ["Bookantiqua", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config
