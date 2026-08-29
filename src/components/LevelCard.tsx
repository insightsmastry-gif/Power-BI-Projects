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
      className={`stripe-card group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
        featured ? "border-[#635BFF]/50 bg-[#1E293B]/90 shadow-xl shadow-[#635BFF]/10" : ""
      }`}
    >
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#635BFF] via-[#00D4FF] to-[#F2C811] opacity-80" />

      <div>
        {/* Top Header: Badge, Level ID, and Status */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-[#1E293B] border border-white/10 flex items-center justify-center">
              <PowerBILogo className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-xs font-bold text-white">
              LEVEL {String(level.id).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {status === "completed" ? (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#00D924]/10 text-[#00D924] border border-[#00D924]/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Done
              </span>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1E293B] border border-white/10 text-[#94A3B8]">
                {level.difficulty}
              </span>
            )}
          </div>
        </div>

        {/* Title and Company */}
        <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00D4FF] transition-colors mb-1.5">
          <Link to={`/levels/${level.slug}`}>{level.title}</Link>
        </h3>
        <p className="text-xs text-[#94A3B8] font-mono mb-3.5">
          {level.company}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
          {level.shortDescription}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {level.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#1E293B]/80 border border-white/5 text-[#94A3B8]"
            >
              {skill}
            </span>
          ))}
          {level.skills.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1E293B]/40 text-[#94A3B8]">
              +{level.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Action Arrow */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-[#94A3B8] font-mono">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#635BFF]" />
            {level.estimatedHours}
          </span>
          <span className="flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            {level.resources.filter(r => r.isDataset).length} CSVs
          </span>
        </div>

        <Link
          to={`/levels/${level.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#635BFF] text-white text-xs font-display font-bold border border-white/10 hover:border-[#635BFF] transition-all"
        >
          <span>View Brief</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
