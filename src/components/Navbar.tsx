import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import { getRepositoryUrl, PARENT_SITE } from "../config/github";
import { BrandMark } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";

/** Sub-site header: the parent site's banner, logo and wordmark, plus this site's nav. */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Learning Path", path: "/learning-path" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-banner shadow-sm">
      <nav className="max-w-6xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" aria-label="InsightsMastery Power BI Projects — home" onClick={() => setIsOpen(false)}>
          <BrandMark tone="light" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path ? "bg-white/20 text-white" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={PARENT_SITE.url}
            rel="noopener"
            className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1"
          >
            Main site <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={getRepositoryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-lg border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="View the GitHub repository"
            aria-label="View the GitHub repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PARENT_SITE.programsUrl}
            rel="noopener"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-white text-cyan-800 hover:bg-slate-100 text-sm font-medium shadow-sm transition-colors"
          >
            Explore programs
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-lg border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-line bg-surface shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "bg-brand/10 text-brand-2" : "text-muted hover:text-ink hover:bg-surface-2"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={PARENT_SITE.url}
              rel="noopener"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-surface-2 inline-flex items-center gap-1"
            >
              Main site <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PARENT_SITE.programsUrl}
              rel="noopener"
              className="im-btn-primary mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center"
            >
              Explore programs
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
