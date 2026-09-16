export type BlogPost = {
    slug: string;
    title: string;
    dek: string;
    date: string; // ISO date
};

// Manually maintained - one entry per published article. No taxonomy, no CMS:
// see brand/blog-editorial-strategy.md ("Dincolo de Cifre"). Volume stays low
// by design, so a hand-maintained list beats a generated one.
export const blogPosts: BlogPost[] = [
    {
        slug: "dobanzi-mari-nu-doar-moldova",
        title: "Nu doar Moldova are dobânzi mari la credite.",
        dek: "Turcia, Egiptul și chiar statele baltice din zona euro au dobânzi mai mari sau comparabile. Piața mică, nu bogăția țării, decide prețul creditului.",
        date: "2026-09-16",
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
