/** @type {import('tailwindcss').Config} */

/** Semantic colour driven by a CSS variable of "r g b" channels, so `/opacity` modifiers work. */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit Variable", "Outfit", "Inter Variable", "sans-serif"],
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "JetBrains Mono", "monospace"],
      },
      colors: {
        // Surfaces and text (www.insightsmastry.in: slate neutrals).
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        // Brand (parent site: cyan-600 actions, cyan-700 accents, deep teal banner).
        brand: token("brand"),
        "brand-2": token("brand-2"),
        teal: token("teal"),
        // Supporting accents kept from the Power BI identity.
        gold: token("gold"),
        rose: token("rose"),
        success: token("success"),
        danger: token("danger"),
      },
      backgroundImage: {
        banner: "linear-gradient(89.43deg, #5b9bb9 0.84%, #70acc8 30.78%, #599ab8 65.8%, #166387 85.55%)",
      },
    },
  },
  plugins: [],
};
