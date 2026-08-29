import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center"
}) => {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#635BFF] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
