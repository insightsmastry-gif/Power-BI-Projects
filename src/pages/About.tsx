import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { PageTransition } from "../components/PageTransition";

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Philosophy"
          title="Why Project-Based Learning?"
          description="The most effective way to become a high-earning Power BI developer is by building real projects, not passively following generic tutorials."
        />

        <div className="space-y-8 text-[#9a9aa5] text-sm leading-relaxed font-mono">
          
          <div className="pixel-card p-6 sm:p-8">
            <h3 className="font-syne font-bold text-xl text-white mb-3 flex items-center gap-2">
              <span>💡 The Tutorial Trap</span>
            </h3>
            <p className="mb-4">
              Most students get stuck in the "tutorial trap" — following along with pre-cleaned single-table demo datasets where everything just works. In real companies, data is messy, models have multiple fact tables at different granularities, targets need complex variance logic, and executives demand strict security.
            </p>
            <p>
              This curriculum was designed to bridge that exact gap: 10 structured, progressive real-world projects that systematically build up your confidence and engineering skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pixel-card p-6">
              <h4 className="font-syne font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Progressive Complexity</span>
              </h4>
              <p className="text-xs text-[#9a9aa5]">
                Start with a basic coffee shop sales dashboard in Level 1, then step-by-step master relationships, date tables, star schemas, multi-fact modeling, ranking DAX, RLS, and enterprise pre-capstone challenges.
              </p>
            </div>

            <div className="pixel-card p-6">
              <h4 className="font-syne font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff3366]" />
                <span>Real Business Scenarios</span>
              </h4>
              <p className="text-xs text-[#9a9aa5]">
                Every project represents an authentic business problem with a real company brief, required DAX measures, and specific commercial questions to answer.
              </p>
            </div>
          </div>

          <div className="pixel-card p-6 sm:p-8 border-[#ff3366]/30">
            <h3 className="font-syne font-bold text-xl text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff3366]" />
              <span>Next Step: Voltora Electronics Enterprise Capstone</span>
            </h3>
            <p className="text-xs text-[#9a9aa5] leading-relaxed mb-6">
              Completing Level 10 (VoltEdge Solutions) qualifies you for the full-scale Voltora Electronics Capstone — an enterprise portfolio centerpiece demonstrating mastery of Power BI modeling, performance optimization, and governance.
            </p>
            <Link
              to="/levels/coffee-shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff3366] text-white font-syne font-bold text-xs shadow-md shadow-[#ff3366]/20"
            >
              <span>Start from Level 1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
