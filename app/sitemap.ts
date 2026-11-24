import type { MetadataRoute } from "next";
import { SITE_URL, SERVICES, PHASE_1_CITIES, PHASE_1_BRANDS } from "@/data/constants";
import { BLOG_POSTS } from "./blog/_posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/service-area", priority: 0.9 },
    { path: "/brands", priority: 0.9 },
    { path: "/pricing-faq", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityRoutes = PHASE_1_CITIES.map((c) => ({
    url: `${SITE_URL}/service-area/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const brandRoutes = PHASE_1_BRANDS.map((b) => ({
    url: `${SITE_URL}/brands/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.publishDate,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...brandRoutes, ...blogRoutes];
}
