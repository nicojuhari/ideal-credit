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
        dek: "Turcia, Egiptul, dar și Estonia și Letonia - state UE, cu euro, cu economii stabile - au avut, în 2025, dobânzi mai mari sau comparabile la credite pentru companii decât Grecia sau Portugalia. Piața mică, nu bogăția țării, decide prețul creditului.",
        date: "2026-09-16",
    },
    {
        slug: "firme-mici-nu-iau-credit-de-la-banca",
        title: "Nouă din zece firme mici nu iau credit de la bancă.",
        dek: "Băncile finanțează doar 6% din investițiile firmelor mici din Moldova. Surpriza: firmele mijlocii se bazează și mai puțin pe bani proprii (71,7%) decât cele mici (91%) - iar partea nebancară din spate e mai mare decât pare.",
        date: "2026-09-17",
    },
    {
        slug: "dobanda-negativa-danemarca",
        title: "O bancă daneză a plătit oamenii să ia credit ipotecar.",
        dek: "Pe hârtie, dobânda era negativă: în 2019, Jyske Bank oferea credite ipotecare pe 10 ani la minus 0,5%. Aproape nimeni n-a primit, de fapt, bani gratis - iar azi tot mai există 40.000 de credite din acea perioadă cu dobândă sub zero.",
        date: "2026-09-17",
    },
    {
        slug: "bancile-au-devenit-minoritare",
        title: "Băncile au devenit minoritare în finanțele lumii.",
        dek: "În 2013, cele mai mari șase bănci americane aveau sub 10 miliarde de dolari expuși către fonduri de credit privat. Azi au peste 300 de miliarde - iar în 2024, pentru prima dată din 2008, peste jumătate din activele financiare ale lumii stăteau deja în afara sistemului bancar.",
        date: "2026-09-22",
    },
    {
        slug: "ce-este-inflatia",
        title: "Ce este inflația, de ce apare și cum se oprește.",
        dek: "Aceeași plasă de cumpărături, același magazin: dacă în 2015 plăteai 45 de lei, în 2025 dădeai, în medie, 100. Bancnotele n-au dispărut din portofel - doar cumpără tot mai puțin.",
        date: "2026-09-23",
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
