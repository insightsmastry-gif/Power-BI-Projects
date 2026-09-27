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
    <div className="im-card p-6 sm:p-8 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand/15 via-brand-2/10 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand mb-1.5">
            <Flame className="w-4 h-4 text-gold" />
            Your Learning Dashboard
          </div>
          <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            {completedCount} of {totalLevels} Levels Completed
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-1 font-mono">
            {completedCount === totalLevels
              ? "🎉 Outstanding! You have mastered all 10 Power BI learning projects."
              : `Current Milestone: Level ${nextLevel.id} – ${nextLevel.title}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {completedCount < totalLevels ? (
            <Link
              to={`/levels/${nextLevel.slug}`}
              className="im-btn-primary px-5 py-2.5 rounded-lg text-white font-display font-bold text-xs flex items-center gap-2 shadow-lg"
            >
              <span>Continue Level {nextLevel.id}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="px-4 py-2 rounded-full bg-success/10 text-success border border-success/30 text-xs font-mono font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> All Projects Completed!
            </div>
          )}

          {completedCount > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              className="p-2.5 rounded-full text-muted hover:text-rose hover:bg-surface-2 border border-line transition-all"
              title="Reset progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Stripe Multi-Stop Gradient Progress Bar */}
      <div className="mt-6 relative z-10">
        <div className="h-2.5 w-full bg-surface-2 rounded-full overflow-hidden p-0.5 border border-line">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand via-brand-2 to-gold transition-all duration-700 shadow-md shadow-brand/30"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-muted font-mono mt-2">
          <span>0% (Level 1)</span>
          <span className="text-ink font-bold">{percentage}% Completed</span>
          <span>100% (Pre-Capstone)</span>
        </div>
      </div>

      {/* Reset Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
          <div className="bg-surface rounded-2xl max-w-md w-full p-6 border border-line shadow-2xl">
            <div className="flex items-center gap-3 text-rose mb-3">
              <AlertCircle className="w-6 h-6" />
              <h4 className="font-display font-bold text-lg text-ink">Reset Learning Progress?</h4>
            </div>
            <p className="text-xs text-muted mb-6 leading-relaxed">
              Are you sure you want to reset your local progress? All completed checkmarks will be cleared.
            </p>
            <div className="flex items-center justify-end gap-3 font-display">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full bg-surface-2 text-muted hover:text-ink text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setShowConfirm(false);
                }}
                className="px-4 py-2 rounded-lg bg-rose text-white text-xs font-bold shadow-lg"
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
