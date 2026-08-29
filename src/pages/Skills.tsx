import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { PageTransition } from "../components/PageTransition";
import { SKILL_CATEGORIES } from "../data/skills";

export const Skills: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Power BI Competencies"
          title="Skills Taxonomy & Matrix"
          description="Master every essential pillar of modern Power BI development: from data cleansing and Kimball modeling to advanced analytical DAX and enterprise security."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
