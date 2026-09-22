import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://idealcredit.md";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  // Date this route's content last materially changed. Bump it when you edit the page -
  // it must reflect real content changes, not "whenever the site was last built".
  lastModified: string;
};

const STATIC_ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-09-22" },

  { path: "/cerere-de-credit-online", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/calculator-credit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-15" },

  { path: "/credite", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-pentru-nevoi-personale", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-pentru-afaceri", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-investitional", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-pentru-agricultura", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-pentru-automobil", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/credite/credit-pentru-reparatie", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-22" },

  { path: "/despre-noi", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/contacte", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-16" },
  { path: "/dictionar-financiar", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-09-15" },

  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-09-15" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-09-15" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-09-15" },
  { path: "/autoritatea-de-supraveghere", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-09-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));

  // The blog index changes whenever a new post is published - track that from the data
  // itself instead of a manually maintained date.
  const latestPostDate = blogPosts.reduce((latest, post) => (post.date > latest ? post.date : latest), blogPosts[0].date);
  const blogIndexEntry = {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(latestPostDate),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  };

  const blogEntries = blogPosts.map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, blogIndexEntry, ...blogEntries];
}
