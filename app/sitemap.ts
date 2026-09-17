import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://idealcredit.md";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  { path: "/cerere-de-credit-online", priority: 0.95, changeFrequency: "monthly" },
  { path: "/calculator-credit", priority: 0.85, changeFrequency: "monthly" },

  { path: "/credite", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-nevoi-personale", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-afaceri", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-investitional", priority: 0.9, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-agricultura", priority: 0.85, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-automobil", priority: 0.85, changeFrequency: "monthly" },
  { path: "/credite/credit-pentru-reparatie", priority: 0.85, changeFrequency: "monthly" },

  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

  { path: "/despre-noi", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacte", priority: 0.7, changeFrequency: "monthly" },
  { path: "/dictionar-financiar", priority: 0.5, changeFrequency: "yearly" },

  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/autoritatea-de-supraveghere", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries = blogPosts.map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
