import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, RotateCcw, ArrowRight, Flame, AlertCircle } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { LEVELS } from "../data/levels";

export const ProgressTracker: React.FC = () => {
  const { completedCount, totalLevels, percentage, nextLevelId, resetProgress } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);

  const nextLevel = LEVELS.find(l => l.id === nextLevelId) || LEVELS[0];

  return (
    <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/90 bg-gradient-to-br from-white via-slate-50 to-slate-100/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">
            <Flame className="w-4 h-4 text-amber-500" />
            Your Learning Progress
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {completedCount} of {totalLevels} Levels Completed
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {completedCount === totalLevels
              ? "🎉 Outstanding! You have mastered all 10 Power BI progressive projects."
              : `Current Milestone: Level ${nextLevel.id} – ${nextLevel.title}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {completedCount < totalLevels ? (
            <Link
              to={`/levels/${nextLevel.slug}`}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Continue Level {nextLevel.id}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> All Projects Completed!
            </div>
          )}

          {completedCount > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 border border-slate-300 dark:border-slate-800 transition-all text-xs font-semibold flex items-center gap-1"
              title="Reset progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Animated Bar */}
      <div className="mt-6">
        <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-700/60 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-700 shadow-sm"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mt-2">
          <span>0%</span>
          <span>{percentage}% Completed</span>
          <span>100%</span>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400 mb-3">
              <AlertCircle className="w-6 h-6" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Reset Learning Progress?</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Are you sure you want to reset your local progress? All project completion checkmarks will be cleared.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setShowConfirm(false);
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg shadow-rose-600/20 transition-all"
              >
                Reset All Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
