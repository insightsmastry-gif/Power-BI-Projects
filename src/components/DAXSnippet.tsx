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
    <div className="im-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-line">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="font-mono text-xs font-bold text-ink">{name}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 hover:bg-brand text-muted hover:text-ink transition-colors text-[11px] font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-success" />
              <span className="text-success">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy DAX</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 bg-canvas">
        <pre className="font-mono text-xs text-ink overflow-x-auto whitespace-pre-wrap leading-relaxed">
          <code>{formula}</code>
        </pre>
      </div>

      <div className="px-4 py-2.5 bg-surface border-t border-line text-[11px] text-muted">
        {description}
      </div>
    </div>
  );
};
