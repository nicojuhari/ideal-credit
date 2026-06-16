export type BlogPost = {
 slug: string;
 title: string;
 description: string;
 date: string;
 category:"afaceri" |"personal" |"ghid";
 readMinutes: number;
};

export const blogPosts: BlogPost[] = [
 {
 slug:"ocn-vs-banca-credit-afaceri-moldova",
 title:"OCN sau bancă: ce să alegi când ai nevoie de credit pentru afacere în Moldova",
 description:
"Comparație clară între credit bancar și credit OCN pentru afaceri în Moldova. Când e mai bun fiecare, de ce diferă dobânzile și cum decizi fără să greșești.",
 date:"2026-06-03",
 category:"ghid",
 readMinutes: 9,
 },
 {
 slug:"documente-necesare-credit-afaceri-moldova",
 title:"Ce documente trebuie pentru un credit de afaceri în Moldova (și ce nu ți se va cere)",
 description:
"Lista completă de acte necesare pentru credit de afaceri la un OCN. SRL, II, capital circulant sau investiție - iată ce pregătești și ce nu ți se cere.",
 date:"2026-06-03",
 category:"ghid",
 readMinutes: 8,
 },
 {
 slug:"ghid-credit-afaceri-ocn-moldova",
 title:"Cum obții credit pentru afacere la un OCN în Moldova: ghid pas cu pas",
 description:
"Exact cum funcționează procesul de obținere a unui credit de afaceri la un OCN - de la prima discuție până la banii în cont. Cu pași concreți și cifre reale.",
 date:"2026-06-03",
 category:"afaceri",
 readMinutes: 11,
 },
 {
 slug:"cum-alegi-credit-nebancar-pentru-afaceri",
 title:"Cum alegi un credit nebancar pentru afacere - ghid practic",
 description:
"Cinci criterii concrete pentru a evalua orice ofertă de credit nebancar pentru afaceri. Cu cifre reale, fără generalități.",
 date:"2026-05-18",
 category:"afaceri",
 readMinutes: 7,
 },
 {
 slug:"credit-cu-buletinul-ce-cere-ideal-credit",
 title:"Credit cu buletinul - ce înseamnă cu adevărat și ce cerem la Ideal Credit",
 description:
'"Credit cu buletinul" e una din cele mai folosite și mai înșelătoare expresii din publicitatea financiară. Iată ce se cere în realitate.',
 date:"2026-05-18",
 category:"personal",
 readMinutes: 6,
 },
 {
 slug:"costul-real-al-unui-credit-nebancar",
 title:"Costul real al unui credit nebancar - ce înseamnă DAE și cum calculezi ce plătești",
 description:
"Dobânda nominală nu îți spune cât costă creditul. DAE da. Cum să citești o ofertă de credit nebancar și ce costuri să ceri transparent înainte să semnezi.",
 date:"2026-05-18",
 category:"ghid",
 readMinutes: 7,
 },
 {
 slug:"credit-rapid-decizie-in-ore",
 title:"Cum funcționează procesul de creditare la Ideal Credit - de la primul apel la bani",
 description:
"Nu aplici și aștepți. Discutăm, verificăm de la distanță, ne întâlnim când avem imaginea completă. Procesul real la Ideal Credit, pas cu pas.",
 date:"2026-05-18",
 category:"ghid",
 readMinutes: 6,
 },
 {
 slug:"istoricul-de-credit-si-sansele-tale",
 title:"Istoricul de credit și șansele la un credit nebancar - ce contează cu adevărat",
 description:
"Un incident în trecut nu înseamnă refuz automat. Cum evaluăm istoricul de credit la Ideal Credit și ce poți face dacă profilul tău nu e perfect.",
 date:"2026-05-18",
 category:"ghid",
 readMinutes: 6,
 },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
 return blogPosts.find((p) => p.slug === slug);
}
