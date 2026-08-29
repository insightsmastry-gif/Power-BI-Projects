import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { LearningRoadmap } from "../components/LearningRoadmap";
import { ProgressTracker } from "../components/ProgressTracker";
import { PageTransition } from "../components/PageTransition";

export const LearningPath: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Curriculum Architecture"
          title="The 10-Level Progressive Learning Path"
          description="A structured, zero-fluff trajectory designed to take students from absolute beginner to enterprise pre-capstone proficiency across 4 distinct evolutionary stages."
        />

        {/* Progress Tracker */}
        <div className="mb-16">
          <ProgressTracker />
        </div>

        {/* 4 Stages Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="p-6 rounded-2xl border-l-4 border-l-emerald-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Stage 1 • Levels 1–3</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Foundation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Single-table dashboards, basic data cleaning, star relationships, and introductory Time Intelligence (YTD, Prior Month, MoM%).
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <span>⏱️ 11–18 hrs</span>
              <span className="text-emerald-500 font-bold">Beginner</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-l-sky-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">Stage 2 • Levels 4–5</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Core Intermediate</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Full Kimball star schema, target vs actual variances, return rates, multi-page structured reporting, and handling data quality.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <span>⏱️ 20–30 hrs</span>
              <span className="text-sky-500 font-bold">Intermediate</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-l-indigo-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">Stage 3 • Levels 6–9</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Advanced Intermediate</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Dynamic RANKX, customer spend segmentation, periodic snapshot inventory models, dynamic RLS, Field Parameters, and deep DAX.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <span>⏱️ 52–70 hrs</span>
              <span className="text-indigo-500 font-bold">Adv. Intermediate</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-l-amber-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">Stage 4 • Level 10</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">Pre-Capstone</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                VoltEdge Solutions enterprise scenario with 4 fact tables, dirty raw data, employee hierarchies, dynamic RLS, and executive KPI suites.
              </p>
            </div>
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <span>⏱️ 20–30 hrs</span>
              <span className="text-amber-500 font-bold">Expert Challenge</span>
            </div>
          </div>

        </div>

        {/* Roadmap Visual */}
        <div className="mb-20">
          <LearningRoadmap />
        </div>

      </div>
    </PageTransition>
  );
};
