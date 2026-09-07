import type { MetadataRoute } from "next";

const BASE_URL = "https://idealcredit.md";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Public URLs after the September 2026 rebuild — see brand/site-map.md. */
const STATIC_ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  { path: "/cerere-de-credit-online", priority: 0.95, changeFrequency: "monthly" },
  { path: "/calculator-credit", priority: 0.85, changeFrequency: "monthly" },

  { path: "/credite", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-afaceri-mici", priority: 0.95, changeFrequency: "monthly" },
  { path: "/credite/credit-capital-de-lucru", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-investitional", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-agricultura", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-nevoi-personale", priority: 0.85, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-automobil", priority: 0.85, changeFrequency: "monthly" },

  { path: "/despre-noi", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacte", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

/** Add slugs here only when the new editorial blog publishes its first posts. */
const BLOG_SLUGS: string[] = [];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
