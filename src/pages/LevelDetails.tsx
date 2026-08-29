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

export const LevelDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const level = getLevelBySlug(slug || "");
  const { getLevelStatus, markCompleted, setLevelStatus, startProject } = useProgress();

  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    if (level) {
      document.title = `${level.title} (Level ${level.id}) | Power BI Labs`;
      startProject(level.id);
    }
  }, [level, startProject]);

  if (!level) {
    return (
      <div className="pt-40 pb-20 text-center max-w-md mx-auto px-4">
        <h2 className="font-syne text-2xl font-bold text-white mb-4">Level Not Found</h2>
        <p className="text-xs text-[#9a9aa5] mb-6">The requested Power BI level does not exist.</p>
        <Link to="/projects" className="px-5 py-2.5 bg-[#ff3366] text-white font-syne font-bold rounded-full text-xs">
          Back to Projects
        </Link>
      </div>
    );
  }

  const status = getLevelStatus(level.id);
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
      <div className="pt-28 pb-20">
        
        {/* Top Breadcrumb */}
        <div className="border-b border-[#23232b] bg-[#0a0a0c] py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9a9aa5] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-[#9a9aa5]">
              <span>Level {level.id} of {LEVELS.length}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Level Header in Pixel Code Labs Style */}
          <div className="pixel-card p-6 sm:p-10 mb-12 relative overflow-hidden">
            {justCompleted && (
              <div className="absolute top-0 left-0 right-0 py-2.5 bg-[#10b981] text-black font-bold text-center text-xs flex items-center justify-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Level {level.id} marked as completed!</span>
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-2">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2.5 flex-wrap mb-4 font-mono text-xs">
                  <span className="font-bold px-3 py-1 rounded-md bg-[#1c1c22] text-[#ff3366] border border-[#23232b]">
                    LEVEL {String(level.id).padStart(2, "0")}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#141418] border border-[#23232b] text-white">
                    {level.difficulty}
                  </span>
                  <span className="text-[#9a9aa5] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {level.estimatedHours}
                  </span>
                  <span className="text-[#9a9aa5] flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> {level.stage}
                  </span>
                </div>

                <h1 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-2">
                  {level.title}
                </h1>
                <p className="text-xs font-mono text-[#ff3366] font-bold mb-4">
                  Scenario: {level.company}
                </p>
                <p className="text-sm sm:text-base text-[#9a9aa5] leading-relaxed">
                  {level.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto font-syne">
                <button
                  onClick={handleToggleCompleted}
                  className={`w-full px-6 py-3.5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    status === "completed"
                      ? "bg-[#10b981] text-black shadow-lg shadow-[#10b981]/20"
                      : "bg-[#ff3366] hover:bg-[#ff5c85] text-white shadow-lg shadow-[#ff3366]/20"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{status === "completed" ? "Completed (Click to undo)" : "Mark as Completed"}</span>
                </button>

                <a
                  href={getFolderUrl(level.folder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3 rounded-full bg-[#141418] hover:bg-[#1c1c22] text-white font-semibold text-xs border border-[#23232b] transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Layout: Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Business Scenario */}
              <section className="pixel-card p-6 sm:p-8">
                <h2 className="font-syne font-bold text-xl text-white mb-3 flex items-center gap-2">
                  <span>🏢 Business Scenario & Goal</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#9a9aa5] leading-relaxed">
                  {level.scenario}
                </p>
              </section>

              {/* Objectives */}
              <section>
                <h2 className="font-syne font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <span>🎯 Key Learning Objectives</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {level.objectives.map((obj, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-[#23232b] bg-[#141418] flex items-start gap-3 text-xs text-[#f5f5f7]"
                    >
                      <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Business Questions */}
              {level.businessQuestions.length > 0 && (
                <section className="pixel-card p-6 sm:p-8 border-[#ff3366]/30">
                  <h2 className="font-syne font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#ff3366]" />
                    <span>Business Questions Your Dashboard Must Answer</span>
                  </h2>
                  <ol className="space-y-2.5 list-decimal list-inside text-xs text-[#9a9aa5] font-mono">
                    {level.businessQuestions.map((q, i) => (
                      <li key={i} className="leading-relaxed pl-1">{q}</li>
                    ))}
                  </ol>
                </section>
              )}

              {/* DAX Measures */}
              {level.daxMeasures.length > 0 && (
                <section>
                  <h2 className="font-syne font-bold text-xl text-white mb-4 flex items-center gap-2">
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

              {/* Workflow */}
              <section>
                <h2 className="font-syne font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <span>📋 Recommended Project Workflow</span>
                </h2>
                <div className="space-y-4">
                  {level.workflow.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-[#23232b] bg-[#141418]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1c1c22] text-[#ff3366] font-mono font-extrabold text-xs flex items-center justify-center shrink-0 border border-[#23232b]">
                        {w.step}
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-sm text-white mb-1">
                          {w.title}
                        </h4>
                        <p className="text-xs text-[#9a9aa5] leading-relaxed">
                          {w.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Deliverables */}
              <section className="pixel-card p-6">
                <h3 className="font-syne font-bold text-base text-white mb-3">
                  📦 Project Deliverables
                </h3>
                <ul className="space-y-2 text-xs font-mono text-[#9a9aa5]">
                  {level.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#ff3366] font-bold">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Resources Card */}
              <div className="pixel-card p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-syne font-bold text-white text-base flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#ff3366]" />
                    <span>Project Resources ({level.resources.length})</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {level.resources.map((res, i) => (
                    <ResourceCard key={i} resource={res} />
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="pixel-card p-6">
                <h4 className="font-syne font-bold text-xs text-white uppercase tracking-wider mb-3">
                  Skills In This Project
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {level.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#141418] border border-[#23232b] text-[#9a9aa5]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Prev / Next Navigation */}
          <div className="border-t border-[#23232b] mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevLevel ? (
              <Link
                to={`/levels/${prevLevel.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-[#23232b] bg-[#141418] hover:border-[#ff3366]/40 transition-all flex items-center gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-[#9a9aa5]" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-[#9a9aa5] uppercase">Previous Level</div>
                  <div className="font-syne text-sm font-bold text-white">L{prevLevel.id}: {prevLevel.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextLevel ? (
              <Link
                to={`/levels/${nextLevel.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-[#23232b] bg-[#141418] hover:border-[#ff3366]/40 transition-all flex items-center justify-end gap-3 text-right"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#9a9aa5] uppercase">Next Level</div>
                  <div className="font-syne text-sm font-bold text-white">L{nextLevel.id}: {nextLevel.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#ff3366]" />
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-[#141418] border border-[#ff3366]/30 text-[#ff3366] text-xs font-mono font-bold flex items-center gap-2">
                <Award className="w-4 h-4" /> You reached the final Capstone!
              </div>
            )}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
