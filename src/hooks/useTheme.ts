import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "pbi_hub_theme";

/** Light is the brand default (www.insightsmastry.in); dark only when the reader picks it. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return { theme, toggleTheme, isDark: theme === "dark" };
}
