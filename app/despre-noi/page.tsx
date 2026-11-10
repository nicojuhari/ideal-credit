import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import ListRow from "@/components/ds/ListRow";
import PageHero, { cardLabel } from "@/components/ds/PageHero";
import SplitSection from "@/components/ds/SplitSection";
import { Situations } from "@/components/product/ServiceSections";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import { yearsSinceFoundation } from "@/lib/utils";

const title = "Despre noi: credite în Moldova din 2010 | Ideal Credit";
const description = "Ideal Credit este o companie de creditare nebancară din 2010, cu oficii în Căușeni și Chișinău. Credite pentru afaceri și persoane fizice.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://idealcredit.md/despre-noi" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/despre-noi",
        title,
        description,
    },
};

const breadcrumb = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Despre noi", url: "https://idealcredit.md/despre-noi" },
];

const proof = [
    { figure: `${yearsSinceFoundation}`, unit: "ani", label: "de activitate, din 2010" },
    { figure: "4 din 10", unit: "", label: "clienți iau din nou credit la noi" },
    { figure: "4,9", unit: "★", label: "nota medie pe Google" },
    { figure: "2", unit: "oficii", label: "Căușeni și Chișinău" },
];

const servicii = [
    {
        title: "Credite pentru afaceri",
        desc: "Pentru SRL, ÎI și gospodării țărănești. Capital de lucru, marfă, echipament.",
        href: "/credite/credit-pentru-afaceri",
    },
    {
        title: "Credite pentru persoane fizice",
        desc: "Reparație, automobil, studii sau sănătate. Rata o știi de la prima discuție.",
        href: "/credite/credit-pentru-nevoi-personale",
    },
    {
        title: "Toate creditele",
        desc: "Investiții, agricultură, automobil și reparație.",
        href: "/credite",
    },
];

const documente = [
    { title: "Regulament privind cadrul de administrare", meta: "PDF", href: "/regulament-cadrul-de-administrare.pdf" },
    { title: "Regulament privind prestarea serviciilor", meta: "PDF", href: "/regulament-prestarea-serviciilor.pdf" },
    { title: "Regulament privind soluționarea pretențiilor", meta: "PDF", href: "/regulament-solutionarea-pretentiilor.pdf" },
    { title: "Raport de audit 2025", meta: "PDF", href: "/raport-audit-2025.pdf" },
    { title: "Raport de audit 2024", meta: "PDF", href: "/raport-audit-2024.pdf" },
    { title: "Raport de audit 2023", meta: "PDF", href: "/raport-audit-2023.pdf" },
    { title: "Raport de audit 2022", meta: "PDF", href: "/raport-audit-2022.pdf" },
    { title: "Certificat de înregistrare", meta: "PDF", href: "/ideal-credit-certificat-de-inregistrare.pdf" },
    {
        title: "Extras din Registrul OCN autorizate",
        meta: "PDF",
        href: "/ideal-credit-extras-registrul-organizatiilor-de-creditare-nebancare-autorizate.pdf",
    },
];

const faqItems: FaqItem[] = [
    {
        question: "Am nevoie de garant sau gaj?",
        answer: "La primul credit cerem un fidejusor (garant). Gaj cerem doar la sume mari sau când veniturile nu sunt constante.",
    },
    {
        question: "Ce se întâmplă dacă creditul nu are sens pentru mine?",
        answer: `Îți spunem direct, din prima discuție. În ${yearsSinceFoundation} ani am văzut multe situații. Îți propunem o sumă mai mică, un termen mai lung sau îți spunem că acum nu e momentul.`,
    },
    {
        question: "Cât de repede primesc banii?",
        answer: "Pentru persoane fizice, decizia vine în 2-3 ore. Pentru afaceri, în 1-2 zile lucrătoare. Timpul se socotește din momentul în care avem toate actele.",
    },
    {
        question: "Cum primesc banii?",
        answer: "Persoanele fizice pot ridica banii în numerar la oficiu sau îi pot primi pe card. Companiile primesc banii doar prin transfer bancar.",
    },
    {
        question: "Pot aplica online?",
        answer: "Da. Completezi cererea online de oriunde din Moldova. La oficiu vii doar ca să semnezi contractul.",
    },
    {
        question: "Ce acte am nevoie?",
        answer: "Persoanele fizice: buletinul și o confirmare a veniturilor. Companiile: extrasul din Registrul de stat și extrasele bancare. Sună-ne și îți spunem exact ce acte îți trebuie.",
    },
];

export default function DespreNoiPage() {
    return (
        <div className="dc bg-dc-bg">
            <PageHero
                breadcrumb={breadcrumb}
                eyebrow="OCN „Ideal Credit” SRL · supravegheată de BNM și CNPF"
                title={
                    <>
                        Dăm credite în Moldova <Accent>din 2010.</Accent>
                    </>
                }
                subtitle="Suntem o companie de creditare nebancară. Sediul e în Căușeni, sucursala în Chișinău. Lucrăm cu afaceri și oameni din toată Moldova."
                aside={
                    <figure className="border border-dc-line bg-dc-surface p-6 sm:p-9">
                        <p className={cardLabel}>Promisiunea noastră</p>
                        <blockquote className="mt-5 text-[26px] font-semibold leading-[1.2] tracking-[-.02em] text-dc-text sm:text-3xl">
                            Facem ce spunem și spunem <Accent>ce facem.</Accent>
                        </blockquote>
                        <figcaption className="mt-6 border-t border-dc-line pt-4 text-[15px] text-dc-text-muted">
                            Echipa Ideal Credit
                        </figcaption>
                    </figure>
                }
            >
                <dl className="mt-16 grid grid-cols-2 gap-px border-y border-dc-line bg-dc-line lg:mt-24 lg:grid-cols-4">
                    {proof.map((p) => (
                        <div key={p.label} className="flex flex-col-reverse bg-dc-bg py-6 pr-4 even:pl-5 sm:py-8 lg:pl-8 lg:first:pl-0">
                            <dt className="mt-2 text-[14px] leading-snug text-dc-text-muted sm:text-[15px]">{p.label}</dt>
                            <dd className="flex items-baseline gap-2">
                                <span className="dc-num text-[34px] tracking-[-.03em] text-dc-text sm:text-[48px]">{p.figure}</span>
                                {p.unit && (
                                    <span className={p.unit === "★" ? "text-lg text-dc-accent" : "text-base text-dc-text-muted sm:text-lg"}>
                                        {p.unit}
                                    </span>
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </PageHero>

            <SplitSection
                title={
                    <>
                        Pe cine <Accent>finanțăm.</Accent>
                    </>
                }
                description="Finanțăm mai ales afaceri mici și mijlocii. Finanțăm și oameni care au un plan clar pentru bani. Discuția despre credit este gratuită și nu te obligă la nimic."
            >
                <div className="border-t border-dc-line">
                    {servicii.map((s) => (
                        <ListRow key={s.href} href={s.href} title={s.title} description={s.desc} className="px-0 sm:px-5" />
                    ))}
                </div>
            </SplitSection>

            <Situations
                title={
                    <>
                        Cum <Accent>lucrăm.</Accent>
                    </>
                }
                intro="Patru reguli pe care le respectăm cu fiecare client."
                items={[
                    { label: "Un singur cost", text: "Plătești doar dobânda. Costul întreg îl vezi în graficul de plăți." },
                    { label: "Scopul contează", text: "Întâi vedem ce vrei să faci cu banii. Uneori îți propunem să iei mai puțin." },
                    { label: "Răspuns clar", text: "Dacă răspunsul e nu, îl afli la fel de repede. Îți explicăm și de ce." },
                    { label: "Pe termen lung", text: "4 din 10 clienți revin. La al doilea credit, condițiile pot fi mai bune." },
                ]}
            />

            <Process />

            <SplitSection
                id="documente"
                title={
                    <>
                        Documente <Accent>publice.</Accent>
                    </>
                }
                description="Regulamentele după care lucrăm, rapoartele de audit și actele companiei."
            >
                <ul className="border-b border-dc-line">
                    {documente.map((d) => (
                        <li key={d.href} className="border-t border-dc-line">
                            <a
                                href={d.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-white"
                            >
                                <span className="text-lg font-semibold text-dc-text">{d.title}</span>
                                <span className="shrink-0 font-dc-mono text-[13px] text-dc-text-muted group-hover:text-dc-text">
                                    {d.meta} →
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </SplitSection>

            <ProductFaq items={faqItems} />
            <ClosingCta />
        </div>
    );
}
