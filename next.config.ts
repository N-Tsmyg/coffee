import type { NextConfig } from "next";

// Downgraded to Next.js 15.5.x (stable, long-proven on Vercel) after 16.4.6
// deployed successfully but served a 404 on every route in production —
// likely a platform-compatibility gap with such a new Next.js release.
// Tailwind v4 is wired via postcss.config.mjs (@tailwindcss/postcss), which
// works the same under webpack and Turbopack, so no bundler-specific config
// is needed here.
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
