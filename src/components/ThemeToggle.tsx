import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all border border-slate-700/50 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400/40 ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200 animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
};
