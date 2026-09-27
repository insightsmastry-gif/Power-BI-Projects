import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Layers, Cpu, ChevronRight } from "lucide-react";
import { PowerBILogo } from "./PowerBILogo";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schema" | "dax" | "metrics">("schema");

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden im-mesh-gradient">
      
      {/* Stripe Angled Background Light Planes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-brand/20 via-brand-2/15 to-rose/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Stripe Headline & Pitch */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Top Stripe Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-line text-ink text-xs font-semibold mb-6 shadow-sm"
            >
              <PowerBILogo className="w-3.5 h-3.5 shrink-0" />
              <span className="text-muted">The Complete Hands-On Curriculum</span>
              <ChevronRight className="w-3 h-3 text-brand" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.12] mb-6"
            >
              Master Power BI by <br />
              <span className="im-gradient-text">
                building real projects.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              Progress step-by-step through 10 authentic corporate projects. Build Kimball star schemas, write production DAX, handle dirty data, and deploy dynamic security.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                to="/levels/coffee-shop"
                className="im-btn-primary px-7 py-3.5 rounded-lg text-white font-display font-bold text-sm flex items-center gap-2"
              >
                <span>Start Building (Level 1)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/learning-path"
                className="px-6 py-3.5 rounded-full bg-surface/80 hover:bg-surface-2 text-ink font-display font-semibold text-sm border border-line hover:border-line transition-all flex items-center gap-2"
              >
                <span>Explore 10-Level Roadmap</span>
              </Link>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-line max-w-md mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="font-display text-2xl font-semibold text-ink">10</div>
                <div className="text-xs text-muted">Real Projects</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-brand-2">45+</div>
                <div className="text-xs text-muted">CSV Datasets</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-gold">100%</div>
                <div className="text-xs text-muted">Free & Open</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Stripe Interactive Product UI Mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-6 sm:p-7 bg-surface/90 border border-line shadow-2xl shadow-slate-900/10 backdrop-blur-2xl"
            >
              
              {/* Mockup Header: Window Buttons & Interactive Tabs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-line">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="text-xs font-mono text-muted ml-2">
                    VoltEdge_Enterprise.pbix
                  </span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1 bg-surface-2 p-1 rounded-xl border border-line text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("schema")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "schema"
                        ? "bg-brand text-white font-bold shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Star Schema
                  </button>
                  <button
                    onClick={() => setActiveTab("dax")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "dax"
                        ? "bg-brand text-white font-bold shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    DAX Engine
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "metrics"
                        ? "bg-brand text-white font-bold shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    KPI Scorecard
                  </button>
                </div>
              </div>

              {/* Tab 1: Star Schema Architecture */}
              {activeTab === "schema" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-surface-2/70 border border-line">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-ink flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-brand-2" /> 4-Fact Dimensional Star Schema
                      </span>
                      <span className="font-mono text-gold text-[10px] bg-gold/10 px-2 py-0.5 rounded">
                        1:Many Single Direction
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-canvas border border-line text-muted">
                        <span className="text-[10px] text-brand block">DIM</span> DimDate
                      </div>
                      <div className="p-2.5 rounded-xl bg-brand/20 border border-brand/50 text-ink font-bold shadow-lg shadow-brand/20">
                        <span className="text-[10px] text-brand-2 block">FACT</span> FactSales
                      </div>
                      <div className="p-2.5 rounded-xl bg-canvas border border-line text-muted">
                        <span className="text-[10px] text-brand block">DIM</span> DimProduct
                      </div>
                      <div className="p-2.5 rounded-xl bg-canvas border border-line text-muted">
                        <span className="text-[10px] text-brand block">DIM</span> DimCustomer
                      </div>
                      <div className="p-2.5 rounded-xl bg-rose/20 border border-rose/40 text-ink font-bold">
                        <span className="text-[10px] text-rose block">FACT</span> FactReturns
                      </div>
                      <div className="p-2.5 rounded-xl bg-canvas border border-line text-muted">
                        <span className="text-[10px] text-brand block">DIM</span> DimStore
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-2/40 border border-line flex items-center justify-between text-xs text-muted font-mono">
                    <span>⚡ 5 Conformed Dimensions</span>
                    <span className="text-brand-2">0 Bi-Directional Traps</span>
                  </div>
                </div>
              )}

              {/* Tab 2: DAX Engine */}
              {activeTab === "dax" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-canvas border border-line font-mono text-xs text-ink">
                    <div className="text-gold font-bold mb-1">// Time Intelligence YTD & PY Growth</div>
                    <span className="text-brand font-bold">Sales YoY Growth %</span> = <br />
                    <span className="text-brand-2">VAR</span> CurrentSales = <span className="text-rose">[Total Sales]</span><br />
                    <span className="text-brand-2">VAR</span> PriorYear = <span className="text-brand-2">CALCULATE</span>([Total Sales], <span className="text-brand-2">SAMEPERIODLASTYEAR</span>(DimDate[Date]))<br />
                    <span className="text-brand-2">RETURN</span> <span className="text-brand-2">DIVIDE</span>(CurrentSales - PriorYear, PriorYear, 0)
                  </div>
                  <div className="p-3 rounded-xl bg-surface-2/60 border border-line flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-brand" /> Formula Engine Optimized</span>
                    <span className="text-brand-2 font-mono">Evaluation: &lt;12ms</span>
                  </div>
                </div>
              )}

              {/* Tab 3: KPI Scorecard */}
              {activeTab === "metrics" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-surface-2/70 border border-line">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-muted">Net Retained Revenue</span>
                      <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                        <TrendingUp className="w-3 h-3" /> +24.6% YoY
                      </span>
                    </div>
                    <div className="text-3xl font-semibold text-ink font-mono">$1,842,500</div>
                    <div className="text-xs text-muted mt-2 flex items-center gap-2">
                      <span>Target: $1.65M</span> • <span className="text-gold font-semibold">111.6% Quota Attainment</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-canvas border border-line text-xs">
                      <span className="text-muted block">Stock Turnover</span>
                      <span className="text-base font-bold text-ink font-mono">8.4x / year</span>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-line text-xs">
                      <span className="text-muted block">Return Rate</span>
                      <span className="text-base font-bold text-success font-mono">2.1% (Low)</span>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
