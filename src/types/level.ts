export type DifficultyLevel = 
  | "Beginner" 
  | "Beginner+" 
  | "Intermediate" 
  | "Advanced" 
  | "Expert Challenge";

export type ProjectStage = 
  | "Foundation" 
  | "Core Intermediate" 
  | "Advanced Intermediate" 
  | "Pre-Capstone";

export type LevelStatus = "not-started" | "in-progress" | "completed";

export interface Resource {
  name: string;
  fileName: string;
  type: "PBIX" | "CSV" | "Excel" | "PDF" | "Markdown" | "Image";
  path: string;
  description?: string;
  size?: string;
  isDataset?: boolean;
  isInstruction?: boolean;
}

export interface DAXFormula {
  name: string;
  formula: string;
  description: string;
  category?: string;
}

export interface Level {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  folder: string;
  difficulty: DifficultyLevel;
  stage: ProjectStage;
  estimatedHours: string;
  shortDescription: string;
  description: string;
  scenario: string;
  skills: string[];
  objectives: string[];
  businessQuestions: string[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  daxMeasures: DAXFormula[];
  resources: Resource[];
  featured?: boolean;
  colorAccent?: string;
  deliverables: string[];
}

export interface UserProgress {
  status: Record<number, LevelStatus>;
  lastUpdated: string;
}
