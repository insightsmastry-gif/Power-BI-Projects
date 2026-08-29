import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-yellow-400/5 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Editorial Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
              Power BI Project-Based Learning
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
            >
              Learn Power BI by <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400">
                Actually Building.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              Stop watching endless passive tutorials. Build 10 production-ready Power BI projects with real business scenarios, write real DAX, design star schemas, and progress from beginner to pre-capstone mastery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                to="/levels/coffee-shop"
                className="px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25 flex items-center gap-2.5"
              >
                <span>Start Learning (Level 1)</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/learning-path"
                className="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base border border-slate-200 dark:border-slate-700/80 transition-all flex items-center gap-2"
              >
                <span>Explore 10-Level Roadmap</span>
              </Link>
            </motion.div>

            {/* Micro Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">10</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Real Projects</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">45+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">CSV Datasets</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">100–150h</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Hands-On Practice</div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Abstract Interactive Analytics Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 text-slate-100 shadow-2xl backdrop-blur-xl"
            >
              {/* Top Bar with mock macOS window buttons */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  VoltEdge_Enterprise_Model.pbix
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  LIVE DAX
                </span>
              </div>

              {/* Composition Card 1: Revenue Metric */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gross Sales Revenue</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3 h-3" /> +18.4% YoY
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">$1,482,900</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                  <span>Target: $1.35M</span> • <span className="text-amber-400">109.8% Quota Attainment</span>
                </div>
              </div>

              {/* Composition Card 2: Interactive Star Schema Diagram */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800 mb-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Star Schema Architecture</span>
                  <span className="text-[10px] font-mono text-amber-400">1 Fact • 4 Dims</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300">DimDate</div>
                  <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold shadow-md shadow-amber-500/10">FactSales</div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300">DimProduct</div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300">DimCustomer</div>
                  <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold">FactReturns</div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300">DimStore</div>
                </div>
              </div>

              {/* Composition Card 3: Syntax Highlighted DAX */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                <span className="text-amber-400 font-bold">Sales YTD</span> = <br />
                <span className="text-sky-400">TOTALYTD</span>(
                  <span className="text-emerald-400">[Total Sales]</span>, 
                  <span className="text-slate-400">DimDate[Date]</span>
                )
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
