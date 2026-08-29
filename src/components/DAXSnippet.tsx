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
    <div className="pixel-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-[#23232b]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff3366]" />
          <span className="font-mono text-xs font-bold text-white">{name}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1c1c22] hover:bg-[#ff3366] text-[#9a9aa5] hover:text-white transition-colors text-[11px] font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-[#10b981]" />
              <span className="text-[#10b981]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy DAX</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 bg-[#0a0a0c]">
        <pre className="font-mono text-xs text-[#f5f5f7] overflow-x-auto whitespace-pre-wrap leading-relaxed">
          <code>{formula}</code>
        </pre>
      </div>

      <div className="px-4 py-2.5 bg-[#141418] border-t border-[#23232b] text-[11px] text-[#9a9aa5]">
        {description}
      </div>
    </div>
  );
};
