import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { GITHUB_CONFIG, getRepositoryUrl, getZipArchiveUrl } from "../config/github";
import { PowerBILogo } from "./PowerBILogo";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080B1A] text-[#94A3B8] pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-[#1E293B] border border-white/10 flex items-center justify-center">
                <PowerBILogo className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white">
                Power BI <span className="text-[#635BFF]">Labs</span>
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              An open-source, progressive 10-level Power BI curriculum designed to help aspiring data analysts and BI engineers master real-world business intelligence by building.
            </p>
            <div className="pt-2">
              <a
                href={getRepositoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#00D4FF] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{GITHUB_CONFIG.username}/{GITHUB_CONFIG.repository}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/learning-path" className="hover:text-white transition-colors">10-Level Roadmap</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Project Catalog</Link></li>
              <li><Link to="/skills" className="hover:text-white transition-colors">Skills Taxonomy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
            </ul>
          </div>

          {/* Evolutionary Stages */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Stages
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link to="/levels/coffee-shop" className="hover:text-white transition-colors">Stage 1: Foundation</Link></li>
              <li><Link to="/levels/retail-chain" className="hover:text-white transition-colors">Stage 2: Core Modeling</Link></li>
              <li><Link to="/levels/sales-performance" className="hover:text-white transition-colors">Stage 3: Advanced DAX</Link></li>
              <li><Link to="/levels/pre-capstone" className="hover:text-white transition-colors">Stage 4: Pre-Capstone</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href={getZipArchiveUrl()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Download All Data (.zip)</span>
                </a>
              </li>
              <li>
                <a href={getRepositoryUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Power BI Learning Labs. All projects & datasets open source.</p>
          <p className="font-mono text-xs text-[#94A3B8]">
            Managed by InsightsMastery Academy · Built for data analysts and Business Analysts.
          </p>
        </div>
      </div>
    </footer>
  );
};
