import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight, Clock, Sparkles } from "lucide-react";
import { LEVELS } from "../data/levels";
import { useProgress } from "../hooks/useProgress";
import { getDifficultyColor } from "../lib/utils";

export const LearningRoadmap: React.FC = () => {
  const { getLevelStatus, isLevelUnlocked } = useProgress();

  return (
    <div className="relative">
      {/* Center continuous timeline guide (desktop) */}
      <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-amber-500 via-sky-500 to-indigo-500 opacity-30 dark:opacity-40" />

      <div className="space-y-8 sm:space-y-12">
        {LEVELS.map((level, index) => {
          const status = getLevelStatus(level.id);
          const unlocked = isLevelUnlocked(level.id);
          const diffStyle = getDifficultyColor(level.difficulty);
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card Side */}
              <div className="w-full lg:w-[46%]">
                <div
                  className={`group relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                    status === "completed"
                      ? "border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/10 shadow-lg shadow-emerald-500/5"
                      : status === "in-progress"
                      ? "border-amber-500/50 bg-amber-500/5 dark:bg-amber-950/10 shadow-lg shadow-amber-500/5"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-amber-500/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                        STAGE: {level.stage.toUpperCase()}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
                        {level.difficulty}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {level.estimatedHours}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-1">
                    <Link to={`/levels/${level.slug}`}>{level.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                    {level.company}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {level.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {level.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-2">
                      {status === "completed" ? (
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Completed
                        </span>
                      ) : status === "in-progress" ? (
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                          <Sparkles className="w-4 h-4 animate-spin" /> In Progress
                        </span>
                      ) : !unlocked ? (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" /> Complete Level {level.id - 1} to Unlock
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                          Ready to Start
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/levels/${level.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>View Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Central Milestone Node (desktop) */}
              <div className="hidden lg:flex items-center justify-center w-[8%]">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-sm shadow-xl transition-transform duration-300 group-hover:scale-110 z-10 ${
                    status === "completed"
                      ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                      : status === "in-progress"
                      ? "bg-amber-500 text-slate-950 shadow-amber-500/30 ring-4 ring-amber-500/20 animate-pulse"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}
                >
                  {String(level.id).padStart(2, "0")}
                </div>
              </div>

              {/* Empty placeholder for grid balance */}
              <div className="hidden lg:block w-[46%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
