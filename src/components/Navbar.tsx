import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowRight } from "lucide-react";
import { GITHUB_CONFIG, getRepositoryUrl } from "../config/github";

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
        <nav className="rounded-full bg-[#141418]/90 backdrop-blur-md border border-[#23232b] px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl transition-all">
          
          {/* Logo Badge in Pixel Code Labs style */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xs font-mono font-bold px-2 py-1 rounded-md bg-[#1c1c22] border border-[#23232b] text-[#ff3366] group-hover:border-[#ff3366]/40 transition-colors">
              &lt;/&gt;
            </span>
            <span className="font-syne font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
              Power BI <span className="text-[#ff3366]">Labs</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-[#1c1c22] text-[#ff3366] font-semibold border border-[#23232b]"
                    : "text-[#9a9aa5] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action: GitHub link + Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getRepositoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#9a9aa5] hover:text-white hover:bg-[#1c1c22] transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <Link
              to="/levels/coffee-shop"
              className="px-4 py-2 rounded-full bg-[#ff3366] hover:bg-[#ff5c85] text-white font-syne font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#ff3366]/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-[#9a9aa5] hover:text-white hover:bg-[#1c1c22] transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#141418] border border-[#23232b] shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-[#1c1c22] text-[#ff3366] font-bold"
                      : "text-[#9a9aa5] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#23232b] flex items-center justify-between">
              <a
                href={getRepositoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#9a9aa5] hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>{GITHUB_CONFIG.repository}</span>
              </a>

              <Link
                to="/levels/coffee-shop"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full bg-[#ff3366] text-white font-syne font-bold text-xs"
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
