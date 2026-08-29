import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { PageTransition } from "../components/PageTransition";
import { SKILL_CATEGORIES } from "../data/skills";

export const Skills: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Competency Framework"
          title="Skills Taxonomy Across 10 Levels"
          description="Explore the technical competencies and business intelligence skills taught throughout the curriculum."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
