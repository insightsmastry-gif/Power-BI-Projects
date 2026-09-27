import React from "react";
import { Search, X, SlidersHorizontal, Layers } from "lucide-react";

interface SearchAndFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (value: string) => void;
  selectedSkill: string;
  onSkillChange: (value: string) => void;
  allSkills: string[];
}

const DIFFICULTIES = [
  "All",
  "Beginner",
  "Beginner+",
  "Intermediate",
  "Advanced",
  "Expert Challenge"
];

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  search,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedSkill,
  onSkillChange,
  allSkills
}) => {
  return (
    <div className="space-y-4 mb-10">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects, topics, skills (e.g. Star Schema, RANKX, RLS)..."
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-surface border border-line text-ink placeholder-muted text-sm focus:outline-none focus:border-brand transition-all font-mono"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-ink"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Rows: Difficulty & Skills */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Difficulty Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <span className="text-xs font-mono text-muted flex items-center gap-1 shrink-0 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Difficulty:
          </span>
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              onClick={() => onDifficultyChange(diff)}
              className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-xl shrink-0 transition-all ${
                selectedDifficulty === diff
                  ? "bg-brand text-white shadow-md shadow-brand/30 font-bold"
                  : "bg-surface text-muted hover:text-ink border border-line"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Skill Selector Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <span className="text-xs font-mono text-muted flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Skill:
          </span>
          <select
            value={selectedSkill}
            onChange={(e) => onSkillChange(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-xs font-mono bg-surface border border-line text-ink focus:outline-none focus:border-brand"
          >
            <option value="All">All Skills</option>
            {allSkills.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};
