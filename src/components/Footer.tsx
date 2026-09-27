import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { getRepositoryUrl, getZipArchiveUrl, PARENT_SITE } from "../config/github";
import { BrandMark } from "./BrandMark";

const linkClass = "text-muted hover:text-brand-2 transition-colors";

/** Sub-site footer, laid out like www.insightsmastry.in's. */
export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-line bg-surface text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" aria-label="InsightsMastery Power BI Projects — home" className="inline-block">
              <BrandMark tone="dark" />
            </Link>
            <p className="text-muted leading-relaxed max-w-sm">
              A progressive 10-level Power BI curriculum with real datasets — build your way from first dashboard to pre-capstone.
            </p>
            <a
              href={getRepositoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${linkClass}`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub repository</span>
            </a>
          </div>

          <div>
            <h4 className="font-medium text-ink mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/learning-path" className={linkClass}>10-level roadmap</Link></li>
              <li><Link to="/projects" className={linkClass}>Project catalog</Link></li>
              <li><Link to="/skills" className={linkClass}>Skills taxonomy</Link></li>
              <li><Link to="/about" className={linkClass}>Philosophy</Link></li>
              <li><a href={getZipArchiveUrl()} className={linkClass}>Download all data (.zip)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-ink mb-4">InsightsMastery</h4>
            <ul className="space-y-3">
              <li><a href={PARENT_SITE.programsUrl} rel="noopener" className={linkClass}>Programs</a></li>
              <li><a href={PARENT_SITE.notesUrl} rel="noopener" className={linkClass}>Notes &amp; handbooks</a></li>
              <li><a href={PARENT_SITE.blogUrl} rel="noopener" className={linkClass}>Blog</a></li>
              <li><a href={PARENT_SITE.admissionUrl} rel="noopener" className={linkClass}>Apply for admission</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-ink mb-4">Stages</h4>
            <ul className="space-y-3">
              <li><Link to="/levels/coffee-shop" className={linkClass}>Stage 1: Foundation</Link></li>
              <li><Link to="/levels/retail-chain" className={linkClass}>Stage 2: Core modeling</Link></li>
              <li><Link to="/levels/sales-performance" className={linkClass}>Stage 3: Advanced DAX</Link></li>
              <li><Link to="/levels/pre-capstone" className={linkClass}>Stage 4: Pre-capstone</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-muted">
          <p>© {new Date().getFullYear()} InsightsMastery. All rights reserved.</p>
          <p className="flex gap-6">
            <a href={PARENT_SITE.privacyUrl} rel="noopener" className={linkClass}>Privacy Policy</a>
            <a href={PARENT_SITE.termsUrl} rel="noopener" className={linkClass}>Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
