import React from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Download 
} from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { LevelCard } from "../components/LevelCard";
import { ProgressTracker } from "../components/ProgressTracker";
import { PageTransition } from "../components/PageTransition";
import { LEVELS } from "../data/levels";
import { getZipArchiveUrl } from "../config/github";

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What's Included (Feature Grid in Pixel Code Labs Style) */}
      <section className="py-20 border-t border-[#23232b] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything You Need to Master Power BI"
            description="No fluff, no toy single-column tables. Everything is engineered to simulate realistic enterprise business intelligence work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#ff3366] mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">45+ Real Datasets</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Transactional logs, target quotas, warehouse inventory snapshots, customer profiles, and user security tables.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#f2c811] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Star Schema Modeling</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Kimball architectural principles, conforming dimensions, surrogate keys, and handling grain mismatches across multiple facts.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#06b6d4] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Production DAX Library</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Time intelligence (YTD, MoM), dynamic RANKX, customer spend tiers with SWITCH, 30-day moving averages, and USERELATIONSHIP.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#10b981] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Dynamic Security (RLS)</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Role-based data security using USERNAME() and USERPRINCIPALNAME() to restrict territory access dynamically.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#ff3366] mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Executive UI/UX Design</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Multi-page navigation, drill-through accounts, report page tooltips, and interactive Field Parameters.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-[#23232b] flex items-center justify-center text-[#f2c811] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Pre-Capstone Mastery</h3>
              <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                Solve an enterprise case study (VoltEdge Solutions) combining 4 concurrent facts, messy raw data, and manager hierarchies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Progress Tracker Section */}
      <section className="py-12 border-t border-[#23232b] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressTracker />
        </div>
      </section>

      {/* 4. Sample Project Catalog */}
      <section className="py-20 border-t border-[#23232b] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141418] border border-[#23232b] text-[#ff3366] text-xs font-mono uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
                Project Catalog
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                10 Real-World Power BI Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-display font-bold text-[#ff3366] hover:text-[#ff5c85] flex items-center gap-1"
            >
              <span>View full catalog →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEVELS.map((lvl) => (
              <LevelCard key={lvl.id} level={lvl} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-20 border-t border-[#23232b] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="How It Works"
            description="Follow a streamlined, professional process for each project level."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-card p-6 sm:p-8 relative">
              <div className="text-3xl font-display font-black text-[#ff3366] mb-3">01</div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Read Brief & Ingest Data</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed">
                Review the company scenario, understand the commercial objectives, and import raw CSV datasets into Power Query.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8 relative">
              <div className="text-3xl font-display font-black text-[#f2c811] mb-3">02</div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Model & Author DAX</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed">
                Establish star schema relationships, resolve grain mismatches, and author required DAX measures from the brief.
              </p>
            </div>

            <div className="pixel-card p-6 sm:p-8 relative">
              <div className="text-3xl font-display font-black text-[#06b6d4] mb-3">03</div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Design & Track Progress</h3>
              <p className="text-xs text-[#9a9aa5] leading-relaxed">
                Build polished interactive dashboards, mark the level as completed, and unlock the next milestone on your roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="py-24 border-t border-[#23232b] bg-gradient-to-b from-[#141418] to-[#0a0a0c] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1c22] border border-[#23232b] text-[#ff3366] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
            Ready to Build?
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-5 leading-tight">
            Start Building Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#f2c811]">
              Power BI Portfolio Today.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9a9aa5] max-w-xl mx-auto mb-10 leading-relaxed font-mono">
            Download the datasets, open Power BI Desktop, follow the briefs, and master enterprise business intelligence hands-on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/levels/coffee-shop"
              className="px-8 py-3.5 rounded-full bg-[#ff3366] hover:bg-[#ff5c85] text-white font-display font-bold text-sm shadow-xl shadow-[#ff3366]/20 transition-all flex items-center gap-2"
            >
              <span>Begin Level 1 (Coffee Shop)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getZipArchiveUrl()}
              className="px-6 py-3.5 rounded-full bg-[#141418] hover:bg-[#1c1c22] text-white font-display font-bold text-sm border border-[#23232b] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#ff3366]" />
              <span>Download All Datasets (.zip)</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
