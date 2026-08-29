import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Layers, Cpu, ChevronRight } from "lucide-react";
import { PowerBILogo } from "./PowerBILogo";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schema" | "dax" | "metrics">("schema");

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden stripe-mesh-gradient">
      
      {/* Stripe Angled Background Light Planes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#635BFF]/20 via-[#00D4FF]/15 to-[#FF70A6]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Stripe Headline & Pitch */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Top Stripe Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 text-white text-xs font-semibold mb-6 shadow-sm"
            >
              <PowerBILogo className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#94A3B8]">The Complete Hands-On Curriculum</span>
              <ChevronRight className="w-3 h-3 text-[#635BFF]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6"
            >
              Master Power BI by <br />
              <span className="stripe-gradient-text">
                building real projects.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
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
                className="stripe-btn-primary px-7 py-3.5 rounded-full text-white font-display font-bold text-sm flex items-center gap-2"
              >
                <span>Start Building (Level 1)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/learning-path"
                className="px-6 py-3.5 rounded-full bg-[#0F172A]/80 hover:bg-[#1E293B] text-white font-display font-semibold text-sm border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <span>Explore 10-Level Roadmap</span>
              </Link>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="font-display text-2xl font-extrabold text-white">10</div>
                <div className="text-xs text-[#94A3B8]">Real Projects</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#00D4FF]">45+</div>
                <div className="text-xs text-[#94A3B8]">CSV Datasets</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#F2C811]">100%</div>
                <div className="text-xs text-[#94A3B8]">Free & Open</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Stripe Interactive Product UI Mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-6 sm:p-7 bg-[#0F172A]/90 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl"
            >
              
              {/* Mockup Header: Window Buttons & Interactive Tabs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="text-xs font-mono text-[#94A3B8] ml-2">
                    VoltEdge_Enterprise.pbix
                  </span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1 bg-[#1E293B] p-1 rounded-xl border border-white/5 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("schema")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "schema"
                        ? "bg-[#635BFF] text-white font-bold shadow-sm"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Star Schema
                  </button>
                  <button
                    onClick={() => setActiveTab("dax")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "dax"
                        ? "bg-[#635BFF] text-white font-bold shadow-sm"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    DAX Engine
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "metrics"
                        ? "bg-[#635BFF] text-white font-bold shadow-sm"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    KPI Scorecard
                  </button>
                </div>
              </div>

              {/* Tab 1: Star Schema Architecture */}
              {activeTab === "schema" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-[#1E293B]/70 border border-white/5">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#00D4FF]" /> 4-Fact Dimensional Star Schema
                      </span>
                      <span className="font-mono text-[#F2C811] text-[10px] bg-[#F2C811]/10 px-2 py-0.5 rounded">
                        1:Many Single Direction
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-[#080B1A] border border-white/10 text-[#94A3B8]">
                        <span className="text-[10px] text-[#635BFF] block">DIM</span> DimDate
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#635BFF]/20 border border-[#635BFF]/50 text-white font-bold shadow-lg shadow-[#635BFF]/20">
                        <span className="text-[10px] text-[#00D4FF] block">FACT</span> FactSales
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#080B1A] border border-white/10 text-[#94A3B8]">
                        <span className="text-[10px] text-[#635BFF] block">DIM</span> DimProduct
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#080B1A] border border-white/10 text-[#94A3B8]">
                        <span className="text-[10px] text-[#635BFF] block">DIM</span> DimCustomer
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FF70A6]/20 border border-[#FF70A6]/40 text-white font-bold">
                        <span className="text-[10px] text-[#FF70A6] block">FACT</span> FactReturns
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#080B1A] border border-white/10 text-[#94A3B8]">
                        <span className="text-[10px] text-[#635BFF] block">DIM</span> DimStore
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1E293B]/40 border border-white/5 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                    <span>⚡ 5 Conformed Dimensions</span>
                    <span className="text-[#00D4FF]">0 Bi-Directional Traps</span>
                  </div>
                </div>
              )}

              {/* Tab 2: DAX Engine */}
              {activeTab === "dax" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-[#080B1A] border border-white/10 font-mono text-xs text-[#F8FAFC]">
                    <div className="text-[#F2C811] font-bold mb-1">// Time Intelligence YTD & PY Growth</div>
                    <span className="text-[#635BFF] font-bold">Sales YoY Growth %</span> = <br />
                    <span className="text-[#00D4FF]">VAR</span> CurrentSales = <span className="text-[#FF70A6]">[Total Sales]</span><br />
                    <span className="text-[#00D4FF]">VAR</span> PriorYear = <span className="text-[#00D4FF]">CALCULATE</span>([Total Sales], <span className="text-[#00D4FF]">SAMEPERIODLASTYEAR</span>(DimDate[Date]))<br />
                    <span className="text-[#00D4FF]">RETURN</span> <span className="text-[#00D4FF]">DIVIDE</span>(CurrentSales - PriorYear, PriorYear, 0)
                  </div>
                  <div className="p-3 rounded-xl bg-[#1E293B]/60 border border-white/5 flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-[#635BFF]" /> Formula Engine Optimized</span>
                    <span className="text-[#00D4FF] font-mono">Evaluation: &lt;12ms</span>
                  </div>
                </div>
              )}

              {/* Tab 3: KPI Scorecard */}
              {activeTab === "metrics" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-[#1E293B]/70 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#94A3B8]">Net Retained Revenue</span>
                      <span className="text-xs font-bold text-[#00D924] bg-[#00D924]/10 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                        <TrendingUp className="w-3 h-3" /> +24.6% YoY
                      </span>
                    </div>
                    <div className="text-3xl font-extrabold text-white font-mono">$1,842,500</div>
                    <div className="text-xs text-[#94A3B8] mt-2 flex items-center gap-2">
                      <span>Target: $1.65M</span> • <span className="text-[#F2C811] font-semibold">111.6% Quota Attainment</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#080B1A] border border-white/5 text-xs">
                      <span className="text-[#94A3B8] block">Stock Turnover</span>
                      <span className="text-base font-bold text-white font-mono">8.4x / year</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#080B1A] border border-white/5 text-xs">
                      <span className="text-[#94A3B8] block">Return Rate</span>
                      <span className="text-base font-bold text-[#00D924] font-mono">2.1% (Low)</span>
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
