import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/constants";

// Explicitly allows AI answer-engine crawlers (per workflows/01-seo-geo-strategy.md,
// Section 2 — AI SEO) in addition to standard search engines, since being
// citable by AI assistants is part of the site's discovery strategy.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "CCBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
