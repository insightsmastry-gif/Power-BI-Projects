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
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        stripe: {
          canvas: "#080B1A",
          surface: "#0F172A",
          surface2: "#1E293B",
          surface3: "#283548",
          indigo: "#635BFF",
          indigoLight: "#7A73FF",
          cyan: "#00D4FF",
          rose: "#FF70A6",
          gold: "#F2C811",
          emerald: "#00D924",
          muted: "#94A3B8",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(99, 91, 255, 0.4)"
        }
      }
    },
  },
  plugins: [],
}
