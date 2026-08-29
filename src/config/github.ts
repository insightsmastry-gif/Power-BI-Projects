export const GITHUB_CONFIG = {
  username: "insightsmastry-gif",
  repository: "Power-BI-Projects",
  branch: "main",
  siteUrl: "https://insightsmastry-gif.github.io/Power-BI-Projects"
} as const;

/**
 * Utility functions for generating standardized GitHub URLs.
 * Centralized here to avoid scattering raw URLs throughout the codebase.
 */
export const getRepositoryUrl = (): string => {
  return `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}`;
};

export const getFolderUrl = (folder: string): string => {
  return `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/tree/${GITHUB_CONFIG.branch}/${folder}`;
};

export const getFileUrl = (path: string): string => {
  return `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/blob/${GITHUB_CONFIG.branch}/${path}`;
};

export const getRawFileUrl = (path: string): string => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/${GITHUB_CONFIG.branch}/${path}`;
};

export const getDownloadUrl = (path: string): string => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/${GITHUB_CONFIG.branch}/${path}`;
};

export const getZipArchiveUrl = (): string => {
  return `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/archive/refs/heads/${GITHUB_CONFIG.branch}.zip`;
};

export const getReleaseDownloadUrl = (tag = "v1.0.0"): string => {
  return `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repository}/releases/tag/${tag}`;
};
