import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents/partialPrefetching are brand-new experimental flags that
  // create-next-app enabled by default on this Next.js version. This site is
  // static marketing content with no need for them, and they appear to
  // produce a build/output format Vercel's production routing doesn't
  // reliably serve yet (build succeeds, but every route 404s live). Disabled
  // for a plain, reliable static/SSG build.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
