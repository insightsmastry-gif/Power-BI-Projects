import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface DAXSnippetProps {
  name: string;
  formula: string;
  description: string;
}

export const DAXSnippet: React.FC<DAXSnippetProps> = ({ name, formula, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="stripe-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
          <span className="font-mono text-xs font-bold text-white">{name}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] hover:bg-[#635BFF] text-[#94A3B8] hover:text-white transition-colors text-[11px] font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-[#00D924]" />
              <span className="text-[#00D924]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy DAX</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 bg-[#080B1A]">
        <pre className="font-mono text-xs text-[#F8FAFC] overflow-x-auto whitespace-pre-wrap leading-relaxed">
          <code>{formula}</code>
        </pre>
      </div>

      <div className="px-4 py-2.5 bg-[#0F172A] border-t border-white/10 text-[11px] text-[#94A3B8]">
        {description}
      </div>
    </div>
  );
};
