import type { MetadataRoute } from "next";

const BASE_URL = "https://idealcredit.md";

type RouteConfig = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: RouteConfig[] = [
    // Homepage
    { path: "/", priority: 1.0, changeFrequency: "weekly" },

    // High-value conversion pages
    { path: "/cerere-de-credit-online", priority: 0.95, changeFrequency: "monthly" },

    // Credit hub
    { path: "/credite", priority: 0.9, changeFrequency: "monthly" },

    // Credit product pages
    { path: "/credite/credit-pentru-nevoi-personale", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credite/credit-pentru-afaceri-mici", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credite/credit-capital-de-lucru", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credite/credit-investitional", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credite/refinantare", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credite/credit-pina-la-salariu", priority: 0.85, changeFrequency: "monthly" },
    { path: "/credite/credit-pentru-bugetari", priority: 0.85, changeFrequency: "monthly" },
    { path: "/credite/credit-pentru-agricultura", priority: 0.85, changeFrequency: "monthly" },
    { path: "/credite/credit-pentru-automobil", priority: 0.85, changeFrequency: "monthly" },
    { path: "/credite/credit-pentru-reparatie", priority: 0.85, changeFrequency: "monthly" },

    // Informational pages
    { path: "/despre-noi", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacte", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

    // Legal pages (low priority, rarely change)
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

type StoryblokStory = {
    slug: string;
    published_at: string | null;
};

async function getBlogStories(): Promise<{ path: string; lastModified: Date }[]> {
    try {
        const token = process.env.STORYBLOK_ACCESS_TOKEN;
        const res = await fetch(
            `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${token}&version=published&per_page=100&page=1`,
            { next: { revalidate: 3600 } },
        );
        if (!res.ok) return [];
        const data = await res.json();
        const stories: StoryblokStory[] = data.stories ?? [];
        return stories.map((s) => ({
            path: `/blog/${s.slug}`,
            lastModified: s.published_at ? new Date(s.published_at) : new Date(),
        }));
    } catch {
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogStories = await getBlogStories();
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogStories.map(({ path, lastModified }) => ({
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticEntries, ...blogEntries];
}
