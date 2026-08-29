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
        return <Database className="w-6 h-6 text-emerald-500" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-sky-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-500" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-6 h-6 text-indigo-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-500" />;
      default:
        return <Cpu className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-amber-500/40 dark:hover:border-amber-400/40 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3.5 mb-4">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
            {getIcon(category.icon)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {category.title}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {category.skills.length} Key Competencies
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          {category.description}
        </p>

        <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-5">
          {category.skills.map((skill) => (
            <div key={skill.id} className="group">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h4>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                  skill.importance === "Core"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : skill.importance === "Advanced"
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                }`}>
                  {skill.importance}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                {skill.description}
              </p>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Taught in:</span>
                {skill.levels.map((lvl) => (
                  <span
                    key={lvl}
                    className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
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
