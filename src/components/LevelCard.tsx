import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, FolderGit2, CheckCircle2 } from "lucide-react";
import { Level } from "../types/level";
import { useProgress } from "../hooks/useProgress";
import { PowerBILogo } from "./PowerBILogo";

interface LevelCardProps {
  level: Level;
  featured?: boolean;
}

export const LevelCard: React.FC<LevelCardProps> = ({ level, featured = false }) => {
  const { getLevelStatus } = useProgress();
  const status = getLevelStatus(level.id);

  return (
    <div
      className={`im-card group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
        featured ? "border-brand/50 bg-surface-2/90 shadow-xl shadow-brand/10" : ""
      }`}
    >
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-brand-2 to-gold opacity-80" />

      <div>
        {/* Top Header: Badge, Level ID, and Status */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-surface-2 border border-line flex items-center justify-center">
              <PowerBILogo className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-xs font-bold text-ink">
              LEVEL {String(level.id).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {status === "completed" ? (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-success/10 text-success border border-success/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Done
              </span>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-surface-2 border border-line text-muted">
                {level.difficulty}
              </span>
            )}
          </div>
        </div>

        {/* Title and Company */}
        <h3 className="font-display font-bold text-xl text-ink group-hover:text-brand-2 transition-colors mb-1.5">
          <Link to={`/levels/${level.slug}`}>{level.title}</Link>
        </h3>
        <p className="text-xs text-muted font-mono mb-3.5">
          {level.company}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
          {level.shortDescription}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {level.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-2/80 border border-line text-muted"
            >
              {skill}
            </span>
          ))}
          {level.skills.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-2/40 text-muted">
              +{level.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Action Arrow */}
      <div className="pt-4 border-t border-line flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-muted font-mono">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand" />
            {level.estimatedHours}
          </span>
          <span className="flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            {level.resources.filter(r => r.isDataset).length} CSVs
          </span>
        </div>

        <Link
          to={`/levels/${level.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-2 text-ink hover:bg-brand hover:text-white text-xs font-display font-bold border border-line hover:border-brand transition-all"
        >
          <span>View Brief</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
