import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ArrowRight, Lock, FolderGit2 } from "lucide-react";
import { Level } from "../types/level";
import { useProgress } from "../hooks/useProgress";
import { getDifficultyColor } from "../lib/utils";

interface LevelCardProps {
  level: Level;
  featured?: boolean;
}

export const LevelCard: React.FC<LevelCardProps> = ({ level, featured = false }) => {
  const { getLevelStatus, isLevelUnlocked } = useProgress();
  const status = getLevelStatus(level.id);
  const unlocked = isLevelUnlocked(level.id);
  const diffStyle = getDifficultyColor(level.difficulty);

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col justify-between ${
        featured
          ? "border-2 border-amber-500/50 bg-gradient-to-br from-white via-slate-50 to-amber-50/20 dark:from-slate-900 dark:via-slate-900/90 dark:to-amber-950/20 shadow-xl shadow-amber-500/5 hover:border-amber-500"
          : "border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 hover:border-amber-500/40 dark:hover:border-amber-400/40 shadow-sm hover:shadow-xl"
      } p-6 sm:p-7`}
    >
      <div>
        {/* Top Header: Badge, Level ID, and Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
              LEVEL {String(level.id).padStart(2, "0")}
            </span>
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${diffStyle.dot}`} />
              {level.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {status === "completed" ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Done
              </span>
            ) : status === "in-progress" ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20 animate-pulse">
                In Progress
              </span>
            ) : !unlocked ? (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                <Lock className="w-3 h-3" />
                Locked
              </span>
            ) : (
              <span className="text-xs text-slate-400 font-medium">
                Ready
              </span>
            )}
          </div>
        </div>

        {/* Title and Company */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-1">
          <Link to={`/levels/${level.slug}`}>{level.title}</Link>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3.5">
          {level.company}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {level.shortDescription}
        </p>

        {/* Skills Tag Cloud */}
        <div className="mb-6">
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Skills Mastered:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {level.skills.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50 font-medium"
              >
                {skill}
              </span>
            ))}
            {level.skills.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-400">
                +{level.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Details: Time, Datasets & Action Button */}
      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" />
            {level.estimatedHours}
          </span>
          <span className="flex items-center gap-1 font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            {level.resources.filter(r => r.isDataset).length} Tables
          </span>
        </div>

        <Link
          to={`/levels/${level.slug}`}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
            featured
              ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
              : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100"
          }`}
        >
          <span>Explore Level</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
