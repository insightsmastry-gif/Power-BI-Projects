import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface DAXSnippetProps {
  name: string;
  formula: string;
  description?: string;
  className?: string;
}

export const DAXSnippet: React.FC<DAXSnippetProps> = ({
  name,
  formula,
  description,
  className = ""
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${name} = \n${formula}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy DAX", e);
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-800 bg-slate-950/90 font-mono text-xs shadow-xl ${className}`}>
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold text-slate-200">{name}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-400/90 border border-amber-400/20 uppercase font-bold">DAX</span>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy DAX measure"
          className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-[11px] text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-slate-400" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed">
        <pre className="text-amber-300/90 font-bold">{name} = </pre>
        <pre className="text-slate-100 whitespace-pre-wrap pl-4 border-l-2 border-amber-500/30 mt-1">{formula}</pre>
      </div>

      {description && (
        <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800/50 text-[11px] text-slate-400 font-sans">
          💡 {description}
        </div>
      )}
    </div>
  );
};
