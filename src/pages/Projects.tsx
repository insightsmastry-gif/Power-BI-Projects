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
    const skillsSet = new Set<string>();
    LEVELS.forEach(level => {
      level.skills.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet).sort();
  }, []);

  const filteredLevels = useMemo(() => {
    return LEVELS.filter(level => {
      const matchesSearch =
        level.title.toLowerCase().includes(search.toLowerCase()) ||
        level.company.toLowerCase().includes(search.toLowerCase()) ||
        level.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        level.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));

      const matchesDifficulty =
        selectedDifficulty === "All" || level.difficulty === selectedDifficulty;

      const matchesSkill =
        selectedSkill === "All" || level.skills.includes(selectedSkill);

      return matchesSearch && matchesDifficulty && matchesSkill;
    });
  }, [search, selectedDifficulty, selectedSkill]);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sample Catalog"
          title="Explore All 10 Power BI Projects"
          description="Filter by difficulty, search by topic or DAX function, and jump into any project brief."
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

        {filteredLevels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLevels.map(level => (
              <LevelCard key={level.id} level={level} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 pixel-card max-w-lg mx-auto">
            <h3 className="font-syne font-bold text-xl text-white mb-2">No Projects Match Your Search</h3>
            <p className="text-xs text-[#9a9aa5] mb-6">
              Try adjusting your search terms or clearing the difficulty filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedDifficulty("All");
                setSelectedSkill("All");
              }}
              className="px-5 py-2 rounded-full bg-[#ff3366] text-white text-xs font-syne font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
