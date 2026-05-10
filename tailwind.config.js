/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#100b24",
        surface: "#1c1a2e",
        border: "#2d2b47",
        primary: "#a855f7",
        secondary: "#06b6d4",
        success: "#22c55e",
        warning: "#f59e0b",
        text: "#fafafa",
        muted: "#8b8a9a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
