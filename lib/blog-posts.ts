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
        dek: "Firmele din Turcia și Egipt plătesc dobânzi mult mai mari decât în Moldova. Dar și firmele din Estonia și Letonia, țări UE cu euro, au plătit în 2025 dobânzi mai mari decât în Grecia sau Portugalia. Dobânda nu depinde doar de cât de bogată e țara.",
        date: "2026-09-16",
    },
    {
        slug: "firme-mici-nu-iau-credit-de-la-banca",
        title: "Firmele mici din Moldova primesc de la bancă doar 6% din banii pentru investiții.",
        dek: "Din fiecare 100 de lei pe care îi investește o firmă mică din Moldova, 91 sunt bani proprii. Băncile dau doar 6. Surprinzător, cei mai puțini bani proprii îi investesc firmele medii: circa 72 din 100.",
        date: "2026-09-17",
    },
    {
        slug: "dobanda-negativa-danemarca",
        title: "O bancă daneză a dat credite ipotecare cu dobândă negativă.",
        dek: "În 2019, Jyske Bank dădea credite ipotecare pe 10 ani cu dobândă de minus 0,5%. Totuși, oamenii tot plăteau băncii un comision anual. Iar azi circa 40.000 de credite din acea perioadă au încă dobândă sub zero.",
        date: "2026-09-17",
    },
    {
        slug: "bancile-au-devenit-minoritare",
        title: "Firmele nebancare administrează acum peste jumătate din banii investiți în lume.",
        dek: "În 2013, cele mai mari șase bănci americane împrumutaseră sub 10 miliarde de dolari fondurilor care dau credite firmelor. Azi le-au împrumutat peste 300 de miliarde. Iar în 2024, pentru prima dată de la criza din 2008, firmele nebancare administrau peste jumătate din banii investiți în lume.",
        date: "2026-09-22",
    },
    {
        slug: "ce-este-inflatia",
        title: "Ce este inflația, de ce cresc prețurile și ce face BNM.",
        dek: "Pe aceleași cumpărături, în 2015 plăteai 45 de lei. În 2025 plăteai, în medie, 100 de lei. Banii din portofel arată la fel, dar cumpără tot mai puțin.",
        date: "2026-09-23",
    },
    {
        slug: "cumpara-imprumuta-mori",
        title: "„Cumpără, împrumută, mori” - dar miliardarii aproape nu se împrumută.",
        dek: "Între 2014 și 2018, cei mai bogați 25 de americani s-au îmbogățit cu 401 miliarde de dolari. Au plătit doar 13,6 miliarde impozit pe venit, adică 3,4%. Explicația populară are trei cuvinte: cumpără, împrumută, mori. Un studiu din 2026 arată că miliardarii aproape nu se împrumută.",
        date: "2026-09-29",
    },
    {
        slug: "sepa-transfer-euro-moldova",
        title: "Cu SEPA, un transfer de 20 de euro costă acum 1 euro. Cine a câștigat?",
        dek: "Din octombrie 2025, Moldova e în SEPA. Un transfer în euro costa cel puțin 20 de euro. Acum costă, în medie, 1,09 euro. Dar plățile mari merg încă prin SWIFT.",
        date: "2026-10-02",
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
