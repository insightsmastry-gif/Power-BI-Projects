import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowRight } from "lucide-react";
import { GITHUB_CONFIG, getRepositoryUrl } from "../config/github";
import { PowerBILogo } from "./PowerBILogo";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Learning Path", path: "/learning-path" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <nav className="rounded-full bg-[#0F172A]/85 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/40 transition-all">
          
          {/* Brand Logo with Power BI Stepped Icon */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-xl bg-[#1E293B] border border-white/10 group-hover:border-[#F2C811]/50 transition-colors flex items-center justify-center shadow-inner">
              <PowerBILogo className="w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
              Power BI <span className="text-[#635BFF] font-semibold">Labs</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive(link.path)
                    ? "bg-[#1E293B] text-white border border-white/10 shadow-sm"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action: GitHub + Stripe-style CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getRepositoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors"
              title="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <Link
              to="/levels/coffee-shop"
              className="stripe-btn-primary px-5 py-2 rounded-full text-white font-display font-bold text-xs flex items-center gap-1.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? "bg-[#1E293B] text-white"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={getRepositoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#94A3B8] hover:text-white font-mono"
              >
                <Github className="w-4 h-4" />
                <span>{GITHUB_CONFIG.repository}</span>
              </a>

              <Link
                to="/levels/coffee-shop"
                onClick={() => setIsOpen(false)}
                className="stripe-btn-primary px-4 py-2 rounded-full text-white font-display font-bold text-xs"
              >
                Start Level 1 →
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
