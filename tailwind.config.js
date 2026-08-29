/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        pbi: {
          yellow: "#F2C811",
          gold: "#D97706",
          dark: "#0F172A",
          card: "#1E293B",
        }
      }
    },
  },
  plugins: [],
}
