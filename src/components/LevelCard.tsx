import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, FolderGit2, CheckCircle2 } from "lucide-react";
import { Level } from "../types/level";
import { useProgress } from "../hooks/useProgress";

interface LevelCardProps {
  level: Level;
  featured?: boolean;
}

export const LevelCard: React.FC<LevelCardProps> = ({ level, featured = false }) => {
  const { getLevelStatus } = useProgress();
  const status = getLevelStatus(level.id);

  return (
    <div
      className={`pixel-card group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
        featured ? "border-[#ff3366]/50 bg-[#1c1c22]/90 shadow-xl shadow-[#ff3366]/5" : ""
      }`}
    >
      <div>
        {/* Mock Browser Header in Pixel Code Labs Style */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#23232b]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f2c811]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
          </div>
          <span className="text-[11px] font-mono text-[#9a9aa5] truncate max-w-[170px]">
            {level.folder.toLowerCase()}.pbix
          </span>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#1c1c22] text-[#ff3366] border border-[#23232b]">
            L{String(level.id).padStart(2, "0")}
          </span>
        </div>

        {/* Company & Difficulty */}
        <div className="flex items-center justify-between gap-2 mb-2 font-mono">
          <span className="text-xs text-[#9a9aa5] truncate">
            {level.company}
          </span>
          <div className="flex items-center gap-1.5">
            {status === "completed" && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Done
              </span>
            )}
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#141418] border border-[#23232b] text-[#f5f5f7]">
              {level.difficulty}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-[#ff3366] transition-colors mb-2">
          <Link to={`/levels/${level.slug}`}>{level.title}</Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed mb-5">
          {level.shortDescription}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {level.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#141418] border border-[#23232b] text-[#9a9aa5]"
            >
              {skill}
            </span>
          ))}
          {level.skills.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#141418] text-[#9a9aa5]">
              +{level.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-[#23232b] flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-[#9a9aa5] font-mono">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {level.estimatedHours}
          </span>
          <span className="flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            {level.resources.filter(r => r.isDataset).length} CSVs
          </span>
        </div>

        <Link
          to={`/levels/${level.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1c22] hover:bg-[#ff3366] text-white text-xs font-syne font-bold border border-[#23232b] hover:border-[#ff3366] transition-all"
        >
          <span>View Brief</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
