import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Pixel Code Labs Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ff3366]/15 via-[#f2c811]/10 to-[#06b6d4]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141418] border border-[#23232b] text-[#9a9aa5] text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" />
          <span>Power BI Project-Based Learning · 10 Structured Levels</span>
        </motion.div>

        {/* Big Editorial Syne Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] max-w-4xl mx-auto mb-6"
        >
          We don't do boring tutorials. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] via-[#ff5c85] to-[#f2c811]">
            We build real Power BI projects.
          </span>
        </motion.h1>

        {/* Crisp Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#9a9aa5] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Master business intelligence by solving 10 authentic commercial scenarios. Build star schemas, author complex DAX, clean messy data, and deploy dynamic security.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/levels/coffee-shop"
            className="px-8 py-4 rounded-full bg-[#ff3366] hover:bg-[#ff5c85] text-white font-syne font-extrabold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#ff3366]/25 flex items-center gap-2"
          >
            <span>Start Building (Level 1)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="px-7 py-4 rounded-full bg-[#141418] hover:bg-[#1c1c22] text-[#f5f5f7] font-syne font-bold text-sm sm:text-base border border-[#23232b] hover:border-[#ff3366]/40 transition-all flex items-center gap-2"
          >
            <span>Browse Project Catalog</span>
          </Link>
        </motion.div>

        {/* Pixel Code Labs Style Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#141418]/80 border border-[#23232b] backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="font-syne text-3xl sm:text-4xl font-black text-white">10+</div>
            <div className="text-xs text-[#9a9aa5] font-medium mt-1 font-mono">Real Projects</div>
          </div>
          <div>
            <div className="font-syne text-3xl sm:text-4xl font-black text-[#ff3366]">45+</div>
            <div className="text-xs text-[#9a9aa5] font-medium mt-1 font-mono">Curated CSV Datasets</div>
          </div>
          <div>
            <div className="font-syne text-3xl sm:text-4xl font-black text-[#f2c811]">100h+</div>
            <div className="text-xs text-[#9a9aa5] font-medium mt-1 font-mono">Hands-On Practice</div>
          </div>
          <div>
            <div className="font-syne text-3xl sm:text-4xl font-black text-white">100%</div>
            <div className="text-xs text-[#9a9aa5] font-medium mt-1 font-mono">Free & Open Source</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
