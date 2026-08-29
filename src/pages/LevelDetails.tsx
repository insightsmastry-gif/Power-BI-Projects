import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Clock, 
  FolderGit2, 
  ArrowLeft, 
  ArrowRight, 
  Github, 
  Sparkles, 
  HelpCircle, 
  Check, 
  Layers,
  Award
} from "lucide-react";
import { getLevelBySlug, LEVELS } from "../data/levels";
import { useProgress } from "../hooks/useProgress";
import { ResourceCard } from "../components/ResourceCard";
import { DAXSnippet } from "../components/DAXSnippet";
import { PageTransition } from "../components/PageTransition";
import { getFolderUrl } from "../config/github";
import { getDifficultyColor } from "../lib/utils";

export const LevelDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const level = getLevelBySlug(slug || "");
  const { getLevelStatus, markCompleted, setLevelStatus, startProject } = useProgress();

  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    if (level) {
      document.title = `${level.title} (Level ${level.id}) | Power BI Learning Path`;
      startProject(level.id);
    }
  }, [level, startProject]);

  if (!level) {
    return (
      <div className="pt-32 pb-20 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Level Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The requested Power BI learning level does not exist.</p>
        <Link to="/projects" className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs">
          Back to Projects
        </Link>
      </div>
    );
  }

  const status = getLevelStatus(level.id);
  const diffStyle = getDifficultyColor(level.difficulty);

  const prevLevel = level.id > 1 ? LEVELS.find(l => l.id === level.id - 1) : null;
  const nextLevel = level.id < LEVELS.length ? LEVELS.find(l => l.id === level.id + 1) : null;

  const handleToggleCompleted = () => {
    if (status === "completed") {
      setLevelStatus(level.id, "in-progress");
      setJustCompleted(false);
    } else {
      markCompleted(level.id);
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 4000);
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        
        {/* Top Breadcrumb & Navigation */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Level {level.id} of {LEVELS.length}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Level Header Banner */}
          <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50 to-slate-100/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 shadow-xl mb-12 relative overflow-hidden">
            
            {justCompleted && (
              <div className="absolute top-0 left-0 right-0 py-2.5 bg-emerald-500 text-slate-950 font-bold text-center text-xs animate-in slide-in-from-top flex items-center justify-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Congratulations! Level {level.id} marked as completed. Next level unlocked!</span>
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-2">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2.5 flex-wrap mb-4">
                  <span className="font-mono text-xs font-black px-3 py-1 rounded-md bg-slate-900 text-white dark:bg-slate-800 dark:text-amber-400 border border-slate-700">
                    LEVEL {String(level.id).padStart(2, "0")}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
                    {level.difficulty}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {level.estimatedHours}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> Stage: {level.stage}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
                  {level.title}
                </h1>
                <p className="text-sm font-mono text-amber-600 dark:text-amber-400 font-semibold mb-4">
                  Company Scenario: {level.company}
                </p>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {level.description}
                </p>
              </div>

              {/* Progress & Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
                <button
                  onClick={handleToggleCompleted}
                  className={`w-full px-6 py-3.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 ${
                    status === "completed"
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20"
                      : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{status === "completed" ? "Completed (Click to undo)" : "Mark as Completed"}</span>
                </button>

                <a
                  href={getFolderUrl(level.folder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Folder on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Layout: Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Scenario & Business Context */}
              <section className="rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span>🏢 Business Scenario & Goal</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {level.scenario}
                </p>
              </section>

              {/* What You Will Learn */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🎯 Key Learning Objectives</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {level.objectives.map((obj, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Business Questions to Answer */}
              {level.businessQuestions.length > 0 && (
                <section className="rounded-2xl p-6 sm:p-8 border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/10">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span>Business Questions Your Dashboard Must Answer</span>
                  </h2>
                  <ol className="space-y-2.5 list-decimal list-inside text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {level.businessQuestions.map((q, i) => (
                      <li key={i} className="leading-relaxed pl-1">{q}</li>
                    ))}
                  </ol>
                </section>
              )}

              {/* DAX Measures Reference */}
              {level.daxMeasures.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span>⚡ Key DAX Measures & Logic</span>
                  </h2>
                  <div className="space-y-4">
                    {level.daxMeasures.map((dax, i) => (
                      <DAXSnippet
                        key={i}
                        name={dax.name}
                        formula={dax.formula}
                        description={dax.description}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Step-by-Step Learning Workflow */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>📋 Recommended Project Workflow</span>
                </h2>
                <div className="space-y-4">
                  {level.workflow.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-extrabold text-xs flex items-center justify-center shrink-0 border border-amber-500/20">
                        {w.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          {w.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {w.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Deliverables Section */}
              <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  📦 Project Deliverables
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {level.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2 font-mono">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Right Sidebar Area (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Resources Card */}
              <div className="rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-amber-500" />
                    <span>Project Resources ({level.resources.length})</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {level.resources.map((res, i) => (
                    <ResourceCard key={i} resource={res} />
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                  <a
                    href={getFolderUrl(level.folder)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs text-center border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Open {level.folder} Folder</span>
                  </a>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Skills In This Project
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {level.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Prev / Next Navigation Bar */}
          <div className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevLevel ? (
              <Link
                to={`/levels/${prevLevel.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 bg-white dark:bg-slate-900 transition-all flex items-center gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Previous Level</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">L{prevLevel.id}: {prevLevel.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextLevel ? (
              <Link
                to={`/levels/${nextLevel.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 bg-white dark:bg-slate-900 transition-all flex items-center justify-end gap-3 text-right"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Next Level</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">L{nextLevel.id}: {nextLevel.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-500" />
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-2">
                <Award className="w-4 h-4" /> You have reached the final Capstone project!
              </div>
            )}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
