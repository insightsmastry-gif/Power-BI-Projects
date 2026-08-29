import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  completed: number;
  total: number;
  showLabels?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
  showLabels = true,
  className = ""
}) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabels && (
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-slate-600 dark:text-slate-400">
            {completed} of {total} Levels Completed
          </span>
          <span className="text-amber-600 dark:text-amber-400 font-mono">
            {percentage}%
          </span>
        </div>
      )}
      <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-700/60 shadow-inner">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
