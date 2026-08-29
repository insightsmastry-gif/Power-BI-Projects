import React, { useState, useMemo } from "react";
import { SearchAndFilters } from "../components/SearchAndFilters";
import { LevelCard } from "../components/LevelCard";
import { SectionHeading } from "../components/SectionHeading";
import { PageTransition } from "../components/PageTransition";
import { LEVELS } from "../data/levels";

export const Projects: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState("All");

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    LEVELS.forEach((l) => l.skills.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, []);

  const filteredLevels = useMemo(() => {
    return LEVELS.filter((level) => {
      const matchesSearch =
        search === "" ||
        level.title.toLowerCase().includes(search.toLowerCase()) ||
        level.description.toLowerCase().includes(search.toLowerCase()) ||
        level.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        level.company.toLowerCase().includes(search.toLowerCase());

      const matchesDiff =
        selectedDifficulty === "All" ||
        level.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      const matchesSkill =
        selectedSkill === "All" ||
        level.skills.includes(selectedSkill);

      return matchesSearch && matchesDiff && matchesSkill;
    });
  }, [search, selectedDifficulty, selectedSkill]);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Explorer"
          title="Explore All 10 Power BI Projects"
          description="Filter by difficulty level, search by specific DAX functions, or browse all datasets across our progressive learning curriculum."
        />

        <SearchAndFilters
          search={search}
          onSearchChange={setSearch}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedSkill={selectedSkill}
          onSkillChange={setSelectedSkill}
          allSkills={allSkills}
        />

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>Showing {filteredLevels.length} of {LEVELS.length} Projects</span>
          {(search || selectedDifficulty !== "All" || selectedSkill !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedDifficulty("All");
                setSelectedSkill("All");
              }}
              className="text-amber-500 hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Cards Grid */}
        {filteredLevels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredLevels.map((level) => (
              <LevelCard key={level.id} level={level} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              No matching projects found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
              We couldn't find any projects matching "{search}". Try searching for terms like "DAX", "Star Schema", or "RLS".
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedDifficulty("All");
                setSelectedSkill("All");
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
