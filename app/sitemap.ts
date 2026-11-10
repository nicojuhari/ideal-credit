import type { MetadataRoute } from "next";

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
  { path: "/", priority: 1.0, changeFrequency: "monthly", lastModified: "2026-11-10" },

  { path: "/cerere-de-credit-online", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/calculator-credit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-10" },

  { path: "/credite", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-pentru-nevoi-personale", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-pentru-afaceri", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-investitional", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-pentru-agricultura", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-pentru-automobil", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/credite/credit-pentru-reparatie", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-10" },

  { path: "/despre-noi", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/contacte", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-11-10" },
  { path: "/dictionar-financiar", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-11-10" },

  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-11-10" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-11-10" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-11-10" },
  { path: "/autoritatea-de-supraveghere", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-11-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));

  return staticEntries;
}
