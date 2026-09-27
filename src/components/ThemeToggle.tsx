import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

/** Sits on the teal header banner, so it is always drawn in white. */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-lg border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 ${className}`}
    >
      {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};
