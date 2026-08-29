import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-36 pb-24 text-center max-w-md mx-auto px-4">
        <div className="font-mono text-6xl font-extrabold text-amber-500 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Page Not Found</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The page or level you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </PageTransition>
  );
};
