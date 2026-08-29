import React from "react";
import { Database, Layers, Cpu, LayoutDashboard, ShieldCheck } from "lucide-react";
import { SkillCategory } from "../types/skill";

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Database":
        return <Database className="w-5 h-5 text-[#10b981]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#06b6d4]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#ff3366]" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-5 h-5 text-[#f2c811]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#ff5c85]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#ff3366]" />;
    }
  };

  return (
    <div className="pixel-card p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3.5 mb-4">
          <div className="p-3 rounded-xl bg-[#1c1c22] border border-[#23232b]">
            {getIcon(category.icon)}
          </div>
          <div>
            <h3 className="font-syne font-bold text-xl text-white">
              {category.title}
            </h3>
            <span className="text-xs text-[#9a9aa5] font-mono">
              {category.skills.length} Key Competencies
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#9a9aa5] mb-6 leading-relaxed">
          {category.description}
        </p>

        <div className="space-y-4 border-t border-[#23232b] pt-5">
          {category.skills.map((skill) => (
            <div key={skill.id} className="group">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-mono font-bold text-white group-hover:text-[#ff3366] transition-colors">
                  {skill.name}
                </h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#1c1c22] border border-[#23232b] text-[#f5f5f7]">
                  {skill.importance}
                </span>
              </div>
              <p className="text-xs text-[#9a9aa5] mb-2">
                {skill.description}
              </p>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-[#9a9aa5]">Taught in:</span>
                {skill.levels.map((lvl) => (
                  <span
                    key={lvl}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c22] text-[#ff3366] border border-[#23232b]"
                  >
                    L{lvl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
