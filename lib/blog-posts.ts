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
    {
        slug: "firme-mici-nu-iau-credit-de-la-banca",
        title: "Nouă din zece firme mici nu iau credit de la bancă.",
        dek: "Băncile finanțează doar 6% din investițiile firmelor mici din Moldova. Restul vine din altă parte - iar partea nebancară din spate e mai mare decât pare.",
        date: "2026-09-17",
    },
    {
        slug: "dobanda-negativa-danemarca",
        title: "O bancă daneză a plătit oamenii să ia credit ipotecar.",
        dek: "În 2019, Jyske Bank oferea credite pe 10 ani cu dobândă de minus 0,5%. Aproape nimeni n-a primit bani gratis - iar azi tot mai există 40.000 de credite din acea perioadă cu dobândă negativă.",
        date: "2026-09-17",
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
