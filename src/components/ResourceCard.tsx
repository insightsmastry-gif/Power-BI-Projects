import React from "react";
import { FileSpreadsheet, FileCode, FileText, Download, ExternalLink, Database } from "lucide-react";
import { Resource } from "../types/level";
import { getDownloadUrl, getFileUrl } from "../config/github";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getFileIcon = (type: Resource["type"]) => {
    switch (type) {
      case "PBIX":
        return <FileCode className="w-5 h-5 text-amber-500" />;
      case "CSV":
      case "Excel":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
      case "Markdown":
      case "PDF":
        return <FileText className="w-5 h-5 text-sky-500" />;
      default:
        return <Database className="w-5 h-5 text-indigo-500" />;
    }
  };

  const downloadUrl = getDownloadUrl(resource.path);
  const githubFileUrl = getFileUrl(resource.path);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-amber-500/40 dark:hover:border-amber-400/40 transition-all gap-4 shadow-sm hover:shadow-md">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 shrink-0 mt-0.5">
          {getFileIcon(resource.type)}
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {resource.name}
            </h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
              {resource.type}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
            {resource.fileName}
          </p>
          {resource.description && (
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-2">
              {resource.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
        <a
          href={downloadUrl}
          download={resource.fileName}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </a>
        <a
          href={githubFileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
