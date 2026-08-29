import { useState, useEffect, useCallback } from "react";
import { LevelStatus } from "../types/level";
import { LEVELS } from "../data/levels";

const STORAGE_KEY = "powerbi_learning_progress_v1";

interface ProgressStore {
  levels: Record<number, LevelStatus>;
  lastUpdated: string;
}

const DEFAULT_PROGRESS: ProgressStore = {
  levels: {
    1: "not-started"
  },
  lastUpdated: new Date().toISOString()
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressStore>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed to load progress from localStorage", e);
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn("Failed to save progress to localStorage", e);
    }
  }, [progress]);

  const getLevelStatus = useCallback((levelId: number): LevelStatus => {
    return progress.levels[levelId] || "not-started";
  }, [progress.levels]);

  const isLevelUnlocked = useCallback((levelId: number): boolean => {
    if (levelId === 1) return true;
    const prevStatus = progress.levels[levelId - 1];
    return prevStatus === "completed";
  }, [progress.levels]);

  const setLevelStatus = useCallback((levelId: number, status: LevelStatus) => {
    setProgress((prev) => {
      const newLevels = { ...prev.levels, [levelId]: status };
      return {
        levels: newLevels,
        lastUpdated: new Date().toISOString()
      };
    });
  }, []);

  const markCompleted = useCallback((levelId: number) => {
    setLevelStatus(levelId, "completed");
  }, [setLevelStatus]);

  const startProject = useCallback((levelId: number) => {
    if (getLevelStatus(levelId) === "not-started") {
      setLevelStatus(levelId, "in-progress");
    }
  }, [getLevelStatus, setLevelStatus]);

  const resetProgress = useCallback(() => {
    setProgress({
      levels: { 1: "not-started" },
      lastUpdated: new Date().toISOString()
    });
  }, []);

  const completedCount = Object.values(progress.levels).filter((s) => s === "completed").length;
  const inProgressCount = Object.values(progress.levels).filter((s) => s === "in-progress").length;
  const totalLevels = LEVELS.length;
  const percentage = Math.round((completedCount / totalLevels) * 100);

  // Find next recommended challenge
  let nextLevelId = 1;
  for (let i = 1; i <= totalLevels; i++) {
    if (progress.levels[i] !== "completed") {
      nextLevelId = i;
      break;
    }
  }

  return {
    progress: progress.levels,
    getLevelStatus,
    isLevelUnlocked,
    setLevelStatus,
    markCompleted,
    startProject,
    resetProgress,
    completedCount,
    inProgressCount,
    totalLevels,
    percentage,
    nextLevelId
  };
}
