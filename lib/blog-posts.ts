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
        dek: "Turcia și Egiptul au dobânzi mari, dar nu sunt singurele. În 2025, Estonia și Letonia, state UE cu euro și economii stabile, aveau dobânzi la credite pentru companii mai mari sau apropiate de cele din Grecia și Portugalia. Prețul creditului îl decide piața mică, nu bogăția țării.",
        date: "2026-09-16",
    },
    {
        slug: "firme-mici-nu-iau-credit-de-la-banca",
        title: "Nouă din zece firme mici nu iau credit de la bancă.",
        dek: "Băncile finanțează doar 6% din investițiile firmelor mici din Moldova. Surprinzător, firmele mijlocii folosesc mai puțini bani proprii decât cele mici: 71,7% față de 91%. Iar creditarea nebancară e mai mare decât pare.",
        date: "2026-09-17",
    },
    {
        slug: "dobanda-negativa-danemarca",
        title: "O bancă daneză a plătit oamenii să ia credit ipotecar.",
        dek: "În 2019, Jyske Bank oferea credite ipotecare pe 10 ani cu dobândă de minus 0,5%. Totuși, aproape nimeni n-a primit bani gratis. Iar azi încă există circa 40.000 de credite din acea perioadă cu dobândă sub zero.",
        date: "2026-09-17",
    },
    {
        slug: "bancile-au-devenit-minoritare",
        title: "Băncile au devenit minoritare în finanțele lumii.",
        dek: "În 2013, cele mai mari șase bănci americane împrumutaseră fondurilor de credit privat sub 10 miliarde de dolari. Azi suma trece de 300 de miliarde. Iar în 2024, pentru prima dată din 2008, peste jumătate din activele financiare ale lumii erau în afara băncilor.",
        date: "2026-09-22",
    },
    {
        slug: "ce-este-inflatia",
        title: "Ce este inflația, de ce apare și cum se oprește.",
        dek: "Aceeași plasă de cumpărături, în același magazin. În 2015 plăteai pe ea 45 de lei. În 2025 plăteai, în medie, 100 de lei. Banii din portofel arată la fel, dar cumpără tot mai puțin.",
        date: "2026-09-23",
    },
    {
        slug: "cumpara-imprumuta-mori",
        title: "„Cumpără, împrumută, mori” - dar miliardarii aproape nu se împrumută.",
        dek: "Între 2014 și 2018, cei mai bogați 25 de americani s-au îmbogățit cu 401 miliarde de dolari. Au plătit doar 13,6 miliarde impozit pe venit, adică 3,4%. Explicația populară are trei cuvinte: cumpără, împrumută, mori. Datele noi arată că „împrumută” contează cel mai puțin.",
        date: "2026-09-29",
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
