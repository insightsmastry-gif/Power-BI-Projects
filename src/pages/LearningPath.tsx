import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { LearningRoadmap } from "../components/LearningRoadmap";
import { ProgressTracker } from "../components/ProgressTracker";
import { PageTransition } from "../components/PageTransition";

export const LearningPath: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Curriculum Architecture"
          title="The 10-Level Progressive Learning Path"
          description="A structured, zero-fluff trajectory designed to take you from absolute beginner to enterprise pre-capstone proficiency."
        />

        <div className="mb-16">
          <ProgressTracker />
        </div>

        {/* 4 Evolutionary Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="pixel-card p-6 border-l-2 border-l-[#10b981] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#10b981] uppercase">Stage 1 • Levels 1–3</span>
              <h3 className="font-syne font-bold text-xl text-white mt-1 mb-2">Foundation</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed mb-4">
                Single-table dashboards, basic data cleaning, star relationships, and introductory Time Intelligence.
              </p>
            </div>
            <div className="text-xs font-mono text-[#9a9aa5] pt-3 border-t border-[#23232b] flex justify-between">
              <span>⏱️ 11–18 hrs</span>
              <span className="text-[#10b981] font-bold">Beginner</span>
            </div>
          </div>

          <div className="pixel-card p-6 border-l-2 border-l-[#06b6d4] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#06b6d4] uppercase">Stage 2 • Levels 4–5</span>
              <h3 className="font-syne font-bold text-xl text-white mt-1 mb-2">Core Intermediate</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed mb-4">
                Full Kimball star schema, target vs actual variances, return rates, multi-page structured reporting.
              </p>
            </div>
            <div className="text-xs font-mono text-[#9a9aa5] pt-3 border-t border-[#23232b] flex justify-between">
              <span>⏱️ 20–30 hrs</span>
              <span className="text-[#06b6d4] font-bold">Intermediate</span>
            </div>
          </div>

          <div className="pixel-card p-6 border-l-2 border-l-[#f2c811] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#f2c811] uppercase">Stage 3 • Levels 6–9</span>
              <h3 className="font-syne font-bold text-xl text-white mt-1 mb-2">Advanced Intermediate</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed mb-4">
                Dynamic RANKX, customer spend tiers, snapshot inventory models, dynamic RLS, and complex DAX.
              </p>
            </div>
            <div className="text-xs font-mono text-[#9a9aa5] pt-3 border-t border-[#23232b] flex justify-between">
              <span>⏱️ 52–70 hrs</span>
              <span className="text-[#f2c811] font-bold">Advanced</span>
            </div>
          </div>

          <div className="pixel-card p-6 border-l-2 border-l-[#ff3366] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#ff3366] uppercase">Stage 4 • Level 10</span>
              <h3 className="font-syne font-bold text-xl text-white mt-1 mb-2">Pre-Capstone</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed mb-4">
                VoltEdge Solutions enterprise scenario with 4 facts, dirty raw data, employee hierarchies, and RLS.
              </p>
            </div>
            <div className="text-xs font-mono text-[#9a9aa5] pt-3 border-t border-[#23232b] flex justify-between">
              <span>⏱️ 20–30 hrs</span>
              <span className="text-[#ff3366] font-bold">Expert</span>
            </div>
          </div>

        </div>

        <div className="mb-20">
          <LearningRoadmap />
        </div>

      </div>
    </PageTransition>
  );
};
