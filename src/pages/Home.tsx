import React from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Download, 
  Award 
} from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { LearningRoadmap } from "../components/LearningRoadmap";
import { ProgressTracker } from "../components/ProgressTracker";
import { PageTransition } from "../components/PageTransition";
import { LEVELS } from "../data/levels";
import { getZipArchiveUrl } from "../config/github";

export const Home: React.FC = () => {
  const level1 = LEVELS[0];

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Core Benefits Section */}
      <section className="py-16 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Real Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Build 10 realistic business analytics solutions from coffee shops to enterprise models.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Real Datasets
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Practice with 45+ curated CSV files featuring realistic transactional grains and anomalies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500 border border-sky-500/20 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Hands-On Learning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Write production DAX, build star schemas, and solve actual corporate BI challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Beginner to Advanced
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Progress step-by-step through a carefully paced curriculum designed for rapid mastery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Learning Journey Progression Visual */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Learning Journey"
          title={
            <>
              10 Levels. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                One Complete Power BI Journey.
              </span>
            </>
          }
          description="Start with single-table dashboards and gradually advance toward complex multi-fact models, ranking patterns, dynamic RLS, and an enterprise pre-capstone."
        />

        {/* Milestone Steps Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3 mb-16">
          {LEVELS.map((lvl) => (
            <Link
              key={lvl.id}
              to={`/levels/${lvl.slug}`}
              className="group p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-amber-500/50 transition-all text-center flex flex-col items-center justify-between min-h-[96px] shadow-sm hover:shadow-md"
            >
              <span className="font-mono font-extrabold text-xs text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                L{lvl.id}
              </span>
              <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-1 leading-tight mt-1">
                {lvl.title.split(" ")[0]}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase mt-auto">
                {lvl.difficulty.split(" ")[0]}
              </span>
            </Link>
          ))}
        </div>

        {/* 4. Featured Start: Level 1 Highlight */}
        <div className="mb-20">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 text-center sm:text-left">
            RECOMMENDED STARTING POINT
          </div>
          <div className="rounded-3xl p-8 sm:p-10 border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-950 shadow-2xl shadow-amber-500/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-black px-3 py-1 rounded-full bg-amber-500 text-slate-950">
                    LEVEL 01
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Beginner
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-auto sm:ml-2">
                    ⏱️ 2–4 hours
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {level1.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {level1.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {level1.skills.map((skill, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center gap-4 bg-white/70 dark:bg-slate-950/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Ready to build your first dashboard?
                </div>
                <Link
                  to={`/levels/${level1.slug}`}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-center text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Level 1 Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getZipArchiveUrl()}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-center text-xs border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-amber-500" />
                  <span>Download Starter Data</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Progress Tracker Banner */}
        <div className="mb-20">
          <ProgressTracker />
        </div>

        {/* 6. Connected Learning Roadmap */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="10-Level Roadmap"
            title="Step-by-Step Curriculum Timeline"
            description="Each project builds directly on prior skills. Complete each level to systematically expand your modeling, DAX, and visualization capabilities."
          />
          <LearningRoadmap />
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free & Open Source
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Ready to Become a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300">
              Power BI Project Builder?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Download the datasets, follow the project briefs, write production DAX, and build a world-class portfolio of 10 real-world business intelligence dashboards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/levels/coffee-shop"
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Begin Level 1 – Coffee Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getZipArchiveUrl()}
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Full Repository</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
