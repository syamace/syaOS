/**
 * Central branding and URL config for syaOS.
 * Override via VITE_APP_BASE_URL and VITE_GITHUB_REPO in .env / Vercel.
 */

export const productName = "syaOS";

/**
 * Base URL of the deployed app (no trailing slash).
 * In browser/Tauri: uses window.location.origin at runtime.
 * At build/SSR: uses VITE_APP_BASE_URL or default.
 */
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return import.meta.env.VITE_APP_BASE_URL || "https://sya-os.vercel.app";
}

/**
 * GitHub repository URL (for "View on GitHub", release links, docs).
 */
export const githubRepo =
  import.meta.env.VITE_GITHUB_REPO || "https://github.com/syamace/syaOS";
