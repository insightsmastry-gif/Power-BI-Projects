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
    <div className="stripe-card p-6 sm:p-8 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#635BFF]/15 via-[#00D4FF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#635BFF] mb-1.5">
            <Flame className="w-4 h-4 text-[#F2C811]" />
            Your Learning Dashboard
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            {completedCount} of {totalLevels} Levels Completed
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
            {completedCount === totalLevels
              ? "🎉 Outstanding! You have mastered all 10 Power BI learning projects."
              : `Current Milestone: Level ${nextLevel.id} – ${nextLevel.title}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {completedCount < totalLevels ? (
            <Link
              to={`/levels/${nextLevel.slug}`}
              className="stripe-btn-primary px-5 py-2.5 rounded-full text-white font-display font-bold text-xs flex items-center gap-2 shadow-lg"
            >
              <span>Continue Level {nextLevel.id}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="px-4 py-2 rounded-full bg-[#00D924]/10 text-[#00D924] border border-[#00D924]/30 text-xs font-mono font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> All Projects Completed!
            </div>
          )}

          {completedCount > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              className="p-2.5 rounded-full text-[#94A3B8] hover:text-[#FF70A6] hover:bg-[#1E293B] border border-white/10 transition-all"
              title="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Stripe Multi-Stop Gradient Progress Bar */}
      <div className="mt-6 relative z-10">
        <div className="h-2.5 w-full bg-[#1E293B] rounded-full overflow-hidden p-0.5 border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#635BFF] via-[#00D4FF] to-[#F2C811] transition-all duration-700 shadow-md shadow-[#635BFF]/30"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-mono mt-2">
          <span>0% (Level 1)</span>
          <span className="text-white font-bold">{percentage}% Completed</span>
          <span>100% (Pre-Capstone)</span>
        </div>
      </div>

      {/* Reset Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0F172A] rounded-2xl max-w-md w-full p-6 border border-white/15 shadow-2xl">
            <div className="flex items-center gap-3 text-[#FF70A6] mb-3">
              <AlertCircle className="w-6 h-6" />
              <h4 className="font-display font-bold text-lg text-white">Reset Learning Progress?</h4>
            </div>
            <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
              Are you sure you want to reset your local progress? All completed checkmarks will be cleared.
            </p>
            <div className="flex items-center justify-end gap-3 font-display">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full bg-[#1E293B] text-[#94A3B8] hover:text-white text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setShowConfirm(false);
                }}
                className="px-4 py-2 rounded-full bg-[#FF70A6] text-white text-xs font-bold shadow-lg"
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
