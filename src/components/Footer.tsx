import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Github, ExternalLink } from "lucide-react";
import { GITHUB_CONFIG, getRepositoryUrl, getZipArchiveUrl } from "../config/github";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                <BarChart3 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Power BI <span className="text-amber-500">Learning Path</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              An open-source, progressive 10-level Power BI curriculum designed to help aspiring data analysts and BI engineers master real-world business intelligence by actually building.
            </p>
            <div className="pt-2">
              <a
                href={getRepositoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{GITHUB_CONFIG.username}/{GITHUB_CONFIG.repository}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/learning-path" className="hover:text-amber-500 transition-colors">10-Level Roadmap</Link></li>
              <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Project Explorer</Link></li>
              <li><Link to="/skills" className="hover:text-amber-500 transition-colors">Skills Taxonomy</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Curriculum Philosophy</Link></li>
            </ul>
          </div>

          {/* Levels Jump */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Stages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/levels/coffee-shop" className="hover:text-amber-500 transition-colors">Stage 1: Foundation (L1–L3)</Link></li>
              <li><Link to="/levels/retail-chain" className="hover:text-amber-500 transition-colors">Stage 2: Core Modeling (L4–L5)</Link></li>
              <li><Link to="/levels/sales-performance" className="hover:text-amber-500 transition-colors">Stage 3: Advanced DAX (L6–L9)</Link></li>
              <li><Link to="/levels/pre-capstone" className="hover:text-amber-500 transition-colors">Stage 4: Pre-Capstone (L10)</Link></li>
            </ul>
          </div>

          {/* Resources & GitHub */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={getZipArchiveUrl()} className="hover:text-amber-500 transition-colors flex items-center gap-1">
                  <span>Download All Data (.zip)</span>
                </a>
              </li>
              <li>
                <a href={getRepositoryUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center gap-1">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={`${getRepositoryUrl()}/blob/main/00_LEARNING_PATH_OVERVIEW.md`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center gap-1">
                  <span>Learning Path Overview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Power BI Learning Path. All projects & datasets open source.</p>
          <p className="flex items-center gap-1">
            Built for passionate data students worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
