import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight, Clock, Sparkles } from "lucide-react";
import { LEVELS } from "../data/levels";
import { useProgress } from "../hooks/useProgress";

export const LearningRoadmap: React.FC = () => {
  const { getLevelStatus, isLevelUnlocked } = useProgress();

  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-brand via-brand-2 to-gold opacity-30" />

      <div className="space-y-8 sm:space-y-12">
        {LEVELS.map((level, index) => {
          const status = getLevelStatus(level.id);
          const unlocked = isLevelUnlocked(level.id);
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
              {/* Content Card */}
              <div className="w-full lg:w-[46%]">
                <div
                  className={`im-card group p-6 sm:p-8 ${
                    status === "completed"
                      ? "border-success/50 bg-surface shadow-lg shadow-success/5"
                      : status === "in-progress"
                      ? "border-brand/50 bg-surface-2 shadow-lg shadow-brand/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-surface-2 text-brand-2 border border-line">
                      STAGE: {level.stage.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand" />
                      {level.estimatedHours}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-brand-2 transition-colors mb-1">
                    <Link to={`/levels/${level.slug}`}>{level.title}</Link>
                  </h3>
                  <p className="text-xs text-muted font-mono mb-3">
                    {level.company}
                  </p>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    {level.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                    {level.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-canvas border border-line text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-line pt-4 font-mono">
                    <div className="flex items-center gap-2">
                      {status === "completed" ? (
                        <span className="text-xs font-bold text-success flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Completed
                        </span>
                      ) : status === "in-progress" ? (
                        <span className="text-xs font-bold text-brand flex items-center gap-1">
                          <Sparkles className="w-4 h-4 animate-spin" /> In Progress
                        </span>
                      ) : !unlocked ? (
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" /> Complete L{level.id - 1} to Unlock
                        </span>
                      ) : (
                        <span className="text-xs text-muted">Ready to Start</span>
                      )}
                    </div>

                    <Link
                      to={`/levels/${level.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-2"
                    >
                      <span>View Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Central Milestone Node */}
              <div className="hidden lg:flex items-center justify-center w-[8%]">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-semibold text-sm shadow-xl transition-transform duration-300 group-hover:scale-110 z-10 ${
                    status === "completed"
                      ? "bg-success text-black shadow-success/30"
                      : status === "in-progress"
                      ? "bg-brand text-white shadow-brand/30 ring-4 ring-brand/20 animate-pulse"
                      : "bg-surface text-muted border border-line"
                  }`}
                >
                  {String(level.id).padStart(2, "0")}
                </div>
              </div>

              <div className="hidden lg:block w-[46%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
