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
        syne: ["Syne", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        canvas: "#0a0a0c",
        surface: {
          DEFAULT: "#141418",
          2: "#1c1c22",
          3: "#24242c",
        },
        border: {
          DEFAULT: "#23232b",
          subtle: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#ff3366",
          hover: "#ff5c85",
          gold: "#F2C811",
          emerald: "#10b981",
          cyan: "#06b6d4"
        },
        muted: "#9a9aa5"
      }
    },
  },
  plugins: [],
}
