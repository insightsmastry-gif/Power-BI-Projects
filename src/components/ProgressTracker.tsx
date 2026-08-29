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
    <div className="pixel-card p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff3366] mb-1.5">
            <Flame className="w-4 h-4" />
            Your Learning Progress
          </div>
          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
            {completedCount} of {totalLevels} Levels Completed
          </h3>
          <p className="text-xs sm:text-sm text-[#9a9aa5] mt-1 font-mono">
            {completedCount === totalLevels
              ? "🎉 Outstanding! You have completed all 10 Power BI learning projects."
              : `Current Milestone: Level ${nextLevel.id} – ${nextLevel.title}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {completedCount < totalLevels ? (
            <Link
              to={`/levels/${nextLevel.slug}`}
              className="px-5 py-2.5 rounded-full bg-[#ff3366] hover:bg-[#ff5c85] text-white font-syne font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#ff3366]/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Continue Level {nextLevel.id}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="px-4 py-2 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> All Projects Completed!
            </div>
          )}

          {completedCount > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              className="p-2.5 rounded-full text-[#9a9aa5] hover:text-[#ff3366] hover:bg-[#1c1c22] border border-[#23232b] transition-all"
              title="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar in Pixel Code Labs Style */}
      <div className="mt-6">
        <div className="h-2.5 w-full bg-[#141418] rounded-full overflow-hidden p-0.5 border border-[#23232b]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#ff3366] via-[#ff5c85] to-[#f2c811] transition-all duration-700 shadow-sm"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#9a9aa5] font-mono mt-2">
          <span>0%</span>
          <span className="text-white font-bold">{percentage}% Completed</span>
          <span>100%</span>
        </div>
      </div>

      {/* Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141418] rounded-2xl max-w-md w-full p-6 border border-[#23232b] shadow-2xl">
            <div className="flex items-center gap-3 text-[#ff3366] mb-3">
              <AlertCircle className="w-6 h-6" />
              <h4 className="font-syne font-bold text-lg text-white">Reset Learning Progress?</h4>
            </div>
            <p className="text-xs text-[#9a9aa5] mb-6 leading-relaxed">
              Are you sure you want to reset your local progress? All project completion marks will be cleared.
            </p>
            <div className="flex items-center justify-end gap-3 font-mono">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-xl bg-[#1c1c22] text-[#9a9aa5] hover:text-white text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setShowConfirm(false);
                }}
                className="px-4 py-2 rounded-xl bg-[#ff3366] text-white text-xs font-bold shadow-lg shadow-[#ff3366]/20"
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
