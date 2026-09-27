import React from "react";

/**
 * The www.insightsmastry.in lock-up: logo mark, "InsightsMastery" wordmark and a
 * ruled caption. `light` sits on the teal banner; `dark` on white surfaces.
 */
export const BrandMark: React.FC<{ tone: "light" | "dark"; caption?: string }> = ({
  tone,
  caption = "Power BI Projects",
}) => {
  const onBanner = tone === "light";
  return (
    <span className="flex flex-col items-start">
      <span className="flex items-center gap-2 font-display text-xl tracking-tight">
        <span className="w-11 h-11 rounded-lg overflow-hidden shrink-0">
          <img src="/logo-mark.svg" alt="" width={44} height={44} className="w-full h-full object-contain" />
        </span>
        <span className="font-semibold">
          <span className={onBanner ? "text-white" : "text-brand-2"}>Insights</span>
          <span className={onBanner ? "text-white" : "text-ink"}>Mastery</span>
        </span>
      </span>
      <span className="flex items-center w-full mt-0.5 pl-[3.25rem]">
        <span className={`h-px flex-1 bg-gradient-to-r from-transparent ${onBanner ? "to-white/60" : "to-brand/60"}`} />
        <span className={`px-2 uppercase font-medium text-[9px] tracking-[0.3em] ${onBanner ? "text-white/70" : "text-muted"}`}>
          {caption}
        </span>
        <span className={`h-px w-4 ${onBanner ? "bg-white/60" : "bg-brand/60"}`} />
      </span>
    </span>
  );
};
