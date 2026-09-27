import React from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  Layers, 
  Cpu, 
  ShieldCheck, 
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
      {/* 1. Stripe Hero Section */}
      <Hero />

      {/* 2. Stripe Bento Feature Grid ("Enterprise-Grade Power BI Capabilities") */}
      <section className="py-24 border-t border-line bg-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Architecture"
            title={
              <>
                Engineered for real enterprise <br />
                <span className="im-gradient-text">business intelligence.</span>
              </>
            }
            description="Every level is crafted around realistic relational schemas, real-world data hygiene issues, and production DAX formulas."
          />

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento 1: Large Span (7 Cols) */}
            <div className="md:col-span-7 im-card p-8 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center text-brand mb-5">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-2">45+ Curated CSV Datasets</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Transactional logs with dates, products, stores, returns, target quotas, warehouse inventory snapshots, and security users. Experience real data with deliberate anomalies to clean in Power Query.
              </p>
              <div className="grid grid-cols-3 gap-3 font-mono text-xs text-muted">
                <div className="p-3 rounded-xl bg-surface-2/70 border border-line">FactSales</div>
                <div className="p-3 rounded-xl bg-surface-2/70 border border-line">FactInventory</div>
                <div className="p-3 rounded-xl bg-surface-2/70 border border-line">FactReturns</div>
              </div>
            </div>

            {/* Bento 2: Span (5 Cols) */}
            <div className="md:col-span-5 im-card p-8 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-brand-2/15 border border-brand-2/30 flex items-center justify-center text-brand-2 mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Star Schema Architecture</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Kimball dimensional modeling: 1-to-many relationships, surrogate keys, conformed dimensions, and zero bi-directional filter traps.
              </p>
              <div className="text-xs font-mono text-brand-2 bg-brand-2/10 px-3 py-1.5 rounded-lg inline-block">
                Verified 1:Many Filter Propagation
              </div>
            </div>

            {/* Bento 3: Span (4 Cols) */}
            <div className="md:col-span-4 im-card p-8">
              <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Production DAX Library</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-mono">
                TOTALYTD, SAMEPERIODLASTYEAR, dynamic RANKX, customer spend tiers with SWITCH, and 30-day moving averages.
              </p>
            </div>

            {/* Bento 4: Span (4 Cols) */}
            <div className="md:col-span-4 im-card p-8">
              <div className="w-10 h-10 rounded-xl bg-success/15 border border-success/30 flex items-center justify-center text-success mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Dynamic Security (RLS)</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-mono">
                Deploy multi-tier Row-Level Security using USERNAME() and USERPRINCIPALNAME() mapped to corporate user matrices.
              </p>
            </div>

            {/* Bento 5: Span (4 Cols) */}
            <div className="md:col-span-4 im-card p-8">
              <div className="w-10 h-10 rounded-xl bg-rose/15 border border-rose/30 flex items-center justify-center text-rose mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Pre-Capstone Mastery</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-mono">
                VoltEdge Solutions enterprise challenge: 4 concurrent facts, employee hierarchies, and an executive C-suite dashboard.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Progress Tracker Section */}
      <section className="py-14 border-t border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressTracker />
        </div>
      </section>

      {/* 4. Sample Project Catalog (10 Projects) */}
      <section className="py-24 border-t border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface border border-line text-brand text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Project Catalog
              </div>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
                10 Real-World Power BI Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-display font-bold text-brand-2 hover:text-ink flex items-center gap-1"
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

      {/* 5. How It Works (3-Step Roadmap) */}
      <section className="py-24 border-t border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="How It Works"
            description="Follow a streamlined, production-grade process for every project level."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="im-card p-8 relative">
              <div className="text-4xl font-display font-semibold text-brand mb-3">01</div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">Read Brief & Ingest Data</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Review the company scenario, understand commercial objectives, and import raw CSV datasets into Power Query.
              </p>
            </div>

            <div className="im-card p-8 relative">
              <div className="text-4xl font-display font-semibold text-brand-2 mb-3">02</div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">Model & Author DAX</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Establish star schema relationships, resolve grain mismatches, and author required DAX measures from the brief.
              </p>
            </div>

            <div className="im-card p-8 relative">
              <div className="text-4xl font-display font-semibold text-gold mb-3">03</div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">Design & Track Progress</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Build polished interactive dashboards, mark the level as completed, and unlock the next milestone on your roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action in Stripe Style */}
      <section className="py-24 border-t border-line bg-gradient-to-b from-surface to-canvas text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-2 border border-line text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Ready to Build?
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink mb-6">
            Start Building Your <br />
            <span className="im-gradient-text">
              Power BI Portfolio Today.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed font-mono">
            Download the datasets, open Power BI Desktop, follow the briefs, and master enterprise business intelligence hands-on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/levels/coffee-shop"
              className="im-btn-primary px-8 py-4 rounded-lg text-white font-display font-bold text-sm flex items-center gap-2"
            >
              <span>Begin Level 1 (Coffee Shop)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getZipArchiveUrl()}
              className="px-7 py-4 rounded-full bg-surface hover:bg-surface-2 text-ink font-display font-bold text-sm border border-line transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-2" />
              <span>Download All Datasets (.zip)</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
