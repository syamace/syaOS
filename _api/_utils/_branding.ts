/**
 * Branding and URL config for API/server-side (Vercel, Node).
 * Override via APP_BASE_URL and GITHUB_REPO in .env / Vercel.
 */

export const PRODUCT_NAME = "syaOS";

export const APP_BASE_URL =
  process.env.APP_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://sya-os.vercel.app");

export const GITHUB_REPO =
  process.env.GITHUB_REPO || "https://github.com/syamace/syaOS";
