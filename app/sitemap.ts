import type { MetadataRoute } from "next";

const BASE_URL = "https://idealcredit.md";

const STATIC_ROUTES = [
  "/",
  "/credite",
  "/credite/credit-pentru-nevoi-personale",
  "/credite/credit-pentru-afaceri-mici",
  "/credite/credit-pina-la-salariu",
  "/credite/credit-pentru-medici",
  "/credite/credit-pentru-politisti",
  "/credite/credit-pentru-militari",
  "/credite/credit-pentru-reparatie",
  "/credite/credit-pentru-agricultura",
  "/credite/credit-pentru-automobil",
  "/cerere-de-credit-online",
  "/contacte",
  "/despre-noi",
  "/blog",
  "/privacy",
  "/cookies",
  "/terms",
];

async function getBlogSlugs(): Promise<string[]> {
  try {
    const token = process.env.STORYBLOK_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${token}&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.stories ?? []).map(
      (s: { slug: string }) => `/blog/${s.slug}`
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await getBlogSlugs();

  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
