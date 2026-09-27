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
          <span className="text-muted">
            {completed} of {total} Levels Completed
          </span>
          <span className="text-brand-2 font-mono">
            {percentage}%
          </span>
        </div>
      )}
      <div className="h-2.5 w-full bg-surface-2 rounded-full overflow-hidden p-0.5 border border-line shadow-inner">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand to-teal shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
