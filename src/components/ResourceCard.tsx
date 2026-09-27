import React from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Resource } from "../types/level";
import { getRawFileUrl, getFileUrl } from "../config/github";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="p-3.5 rounded-xl bg-surface border border-line hover:border-brand/50 transition-all flex items-center justify-between gap-3 group">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="p-2 rounded-lg bg-surface-2 text-brand-2 shrink-0 border border-line">
          <FileText className="w-4 h-4" />
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs font-mono font-bold text-ink group-hover:text-brand-2 transition-colors truncate">
            {resource.name}
          </h4>
          <p className="text-[10px] text-muted font-mono truncate">{resource.fileName}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {resource.isDataset && (
          <a
            href={getRawFileUrl(resource.path)}
            download={resource.fileName}
            className="p-1.5 rounded-lg bg-surface-2 hover:bg-brand text-muted hover:text-ink transition-colors"
            title="Download Raw CSV"
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        )}
        <a
          href={getFileUrl(resource.path)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-surface-2 hover:bg-brand text-muted hover:text-ink transition-colors"
          title="View on GitHub"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
