import React from "react";

interface PowerBILogoProps {
  className?: string;
  size?: number;
}

export const PowerBILogo: React.FC<PowerBILogoProps> = ({ className = "w-6 h-6", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Power BI Classic/Modern 4-Bar Stepped Hierarchy */}
      <rect x="4" y="16" width="5" height="12" rx="1.5" fill="#F8DF6D" />
      <rect x="11" y="10" width="5" height="18" rx="1.5" fill="#F2C811" />
      <rect x="18" y="5" width="5" height="23" rx="1.5" fill="#EAA300" />
      <rect x="25" y="12" width="5" height="16" rx="1.5" fill="#D97706" />
    </svg>
  );
};
