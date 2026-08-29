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
      <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-[#635BFF] via-[#00D4FF] to-[#F2C811] opacity-30" />

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
                  className={`stripe-card group p-6 sm:p-8 ${
                    status === "completed"
                      ? "border-[#00D924]/50 bg-[#0F172A] shadow-lg shadow-[#00D924]/5"
                      : status === "in-progress"
                      ? "border-[#635BFF]/50 bg-[#1E293B] shadow-lg shadow-[#635BFF]/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#1E293B] text-[#00D4FF] border border-white/10">
                      STAGE: {level.stage.toUpperCase()}
                    </span>
                    <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#635BFF]" />
                      {level.estimatedHours}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#00D4FF] transition-colors mb-1">
                    <Link to={`/levels/${level.slug}`}>{level.title}</Link>
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-mono mb-3">
                    {level.company}
                  </p>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {level.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                    {level.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#080B1A] border border-white/5 text-[#94A3B8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono">
                    <div className="flex items-center gap-2">
                      {status === "completed" ? (
                        <span className="text-xs font-bold text-[#00D924] flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Completed
                        </span>
                      ) : status === "in-progress" ? (
                        <span className="text-xs font-bold text-[#635BFF] flex items-center gap-1">
                          <Sparkles className="w-4 h-4 animate-spin" /> In Progress
                        </span>
                      ) : !unlocked ? (
                        <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" /> Complete L{level.id - 1} to Unlock
                        </span>
                      ) : (
                        <span className="text-xs text-[#94A3B8]">Ready to Start</span>
                      )}
                    </div>

                    <Link
                      to={`/levels/${level.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#635BFF] hover:text-[#00D4FF]"
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
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-sm shadow-xl transition-transform duration-300 group-hover:scale-110 z-10 ${
                    status === "completed"
                      ? "bg-[#00D924] text-black shadow-[#00D924]/30"
                      : status === "in-progress"
                      ? "bg-[#635BFF] text-white shadow-[#635BFF]/30 ring-4 ring-[#635BFF]/20 animate-pulse"
                      : "bg-[#0F172A] text-[#94A3B8] border border-white/10"
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
