export interface SkillItem {
  id: string;
  name: string;
  category: "DATA_PREPARATION" | "DATA_MODELING" | "DAX" | "VISUALIZATION" | "ADVANCED_POWER_BI";
  description: string;
  levels: number[];
  importance: "Core" | "Advanced" | "Specialized";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}
