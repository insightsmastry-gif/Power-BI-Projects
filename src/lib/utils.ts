import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function getDifficultyColor(difficulty: string): {
  bg: string;
  text: string;
  border: string;
  dot: string;
} {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
        text: "text-emerald-700 dark:text-emerald-400",
        border: "border-emerald-500/30",
        dot: "bg-emerald-500",
      };
    case "beginner+":
      return {
        bg: "bg-teal-500/10 dark:bg-teal-500/15",
        text: "text-teal-700 dark:text-teal-400",
        border: "border-teal-500/30",
        dot: "bg-teal-500",
      };
    case "intermediate":
      return {
        bg: "bg-sky-500/10 dark:bg-sky-500/15",
        text: "text-sky-700 dark:text-sky-400",
        border: "border-sky-500/30",
        dot: "bg-sky-500",
      };
    case "advanced":
      return {
        bg: "bg-amber-500/10 dark:bg-amber-500/15",
        text: "text-amber-700 dark:text-amber-400",
        border: "border-amber-500/30",
        dot: "bg-amber-500",
      };
    case "expert challenge":
      return {
        bg: "bg-rose-500/10 dark:bg-rose-500/15",
        text: "text-rose-700 dark:text-rose-400",
        border: "border-rose-500/30",
        dot: "bg-rose-500",
      };
    default:
      return {
        bg: "bg-slate-500/10",
        text: "text-slate-700 dark:text-slate-300",
        border: "border-slate-500/30",
        dot: "bg-slate-500",
      };
  }
}
