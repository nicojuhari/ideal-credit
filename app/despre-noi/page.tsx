import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import SpecStrip from "@/components/product/SpecStrip";
import OrdinalRows from "@/components/product/OrdinalRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import ClosingCta from "@/components/home/ClosingCta";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Despre noi | Ideal Credit - Companie de creditare",
    description:
        "Ideal Credit - instituție financiară nebancară cu peste 16 ani în Moldova. Credite pentru persoane fizice și afaceri, dobândă fixă, fără comisioane ascunse.",
    alternates: { canonical: "https://idealcredit.md/despre-noi" },
};

const ceFacem = [
    {
        title: "Antreprenori și proprietari de afaceri",
        desc: "Capital de lucru, utilaje, stoc sau extindere - fără plan de afaceri obligatoriu.",
    },
    { title: "Persoane fizice", desc: "Renovări, cumpărături mari, sănătate sau educație, cu rate fixe de la prima discuție." },
    { title: "Clienți refuzați de bănci", desc: "Analiză flexibilă, adaptată situației reale, nu unui scor automat." },
];

const servicii = [
    {
        title: "Credite pentru persoane fizice",
        desc: "Finanțare pentru renovări, electrocasnice, mașini, cheltuieli medicale sau orice altă nevoie urgentă.",
        items: ["Aprobare rapidă", "Fără costuri ascunse", "Suma și rata adaptate la venitul tău"],
        href: "/credite/credit-pentru-nevoi-personale",
    },
    {
        title: "Credite pentru afaceri",
        desc: "Finanțare pentru antreprenori și firme mici care vor să crească fără să aștepte proceduri bancare lungi.",
        items: ["Bani pentru stoc, utilaje sau modernizare", "Analiză rapidă a dosarului", "Soluții cu sau fără gaj, în funcție de sumă"],
        href: "/credite/credit-pentru-afaceri-mici",
    },
    {
        title: "Refinanțare",
        desc: "Ai credite scumpe la alte instituții? Le putem închide și le înlocuim cu o singură rată fixă și mai mică.",
        items: ["O singură plată lunară", "Rată mai mică", "Mai mult confort financiar"],
    },
    {
        title: "Consultanță financiară gratuită",
        desc: "Nu știi ce produs ți se potrivește? Venim cu o analiză gratuită a situației tale, fără obligații.",
        items: ["Analizăm capacitatea ta de plată", "Îți propunem soluția potrivită", "Fără obligații"],
    },
];

const principii = [
    { title: "Transparență totală", desc: "Îți arătăm toate costurile de la început. Nu există surprize la semnătură sau pe parcurs." },
    { title: "Aprobare rapidă", desc: "Nu pierzi săptămâni în așteptare. Analizăm dosarul tău și îți dăm un răspuns clar." },
    {
        title: "Flexibilitate reală",
        desc: "Analizăm situația ta individual, nu după un algoritm rigid. Dacă ai venituri stabile și capacitate de rambursare, găsim o soluție.",
    },
    {
        title: `${yearsSinceFoundation} ani de încredere`,
        desc: "Mii de clienți au obținut finanțare prin noi. Facem ce spunem și spunem ce facem.",
    },
    {
        title: "Acoperire națională",
        desc: "Birouri în Căușeni și Chișinău, dar lucrăm cu clienți din toată Moldova prin platforma noastră online.",
    },
];

const proces = [
    { title: "Completezi cererea", desc: "Online sau la birou, în câteva minute." },
    { title: "Analizăm dosarul", desc: "Rapid, fără birocrație inutilă." },
    { title: "Primești răspunsul", desc: "Clar și transparent." },
    { title: "Semnezi contractul", desc: "Cu toate costurile vizibile." },
    { title: "Primești banii", desc: "Și îți continui planurile." },
];

const documente = [
    {
        label: "Regulament privind cadrul de administrare",
        group: "Regulamente",
        meta: "PDF",
        href: "/regulament-cadrul-de-administrare.pdf",
    },
    { label: "Regulament privind prestarea serviciilor", group: "Regulamente", meta: "PDF", href: "/regulament-prestarea-serviciilor.pdf" },
    {
        label: "Regulament privind soluționarea pretențiilor",
        group: "Regulamente",
        meta: "PDF",
        href: "/regulament-solutionarea-pretentiilor.pdf",
    },
    { label: "Raport de audit 2025", group: "Rapoarte", meta: "2025", href: "/raport-audit-2025.pdf" },
    { label: "Raport de audit 2024", group: "Rapoarte", meta: "2024", href: "/raport-audit-2024.pdf" },
    { label: "Raport de audit 2023", group: "Rapoarte", meta: "2023", href: "/raport-audit-2023.pdf" },
    { label: "Raport de audit 2022", group: "Rapoarte", meta: "2022", href: "/raport-audit-2022.pdf" },
    { label: "Certificat de înregistrare", group: "Constituire", meta: "PDF", href: "/ideal-credit-certificat-de-inregistrare.pdf" },
    {
        label: "Extras din Registrul OCN autorizate",
        group: "Constituire",
        meta: "PDF",
        href: "/ideal-credit-extras-registrul-organizatiilor-de-creditare-nebancare-autorizate.pdf",
    },
];

const faqItems: FaqItem[] = [
    {
        question: "Am nevoie de garant sau gaj?",
        answer: "La primul credit, fidejusorul (garant personal) este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile.",
    },
    {
        question: "Cât de repede primesc banii?",
        answer: "Decizie în 2-3 ore pentru persoane fizice, 1-2 zile lucrătoare pentru afaceri.",
    },
    {
        question: "Cum primesc banii?",
        answer: "Persoanele fizice pot ridica numerar la birou sau primi transferul la card/cont bancar. Pentru afaceri, fondurile se virează întotdeauna prin transfer bancar.",
    },
    {
        question: "Pot aplica online?",
        answer: "Da. Platforma noastră online îți permite să completezi cererea de oriunde din Moldova.",
    },
    {
        question: "Ce acte am nevoie?",
        answer: "Pentru persoane fizice: buletin și un document de confirmare a veniturilor (adeverință, extras de card sau verificare BIC). Pentru firme: certificat de înregistrare și extrase bancare. Contactează-ne și îți spunem exact ce ai nevoie.",
    },
];

export default function DespreNoiPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />

            <div className="dc-section dc-section--hero">
                <Container>
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        OCN „Ideal Credit” SRL · autorizată CNPF
                    </p>
                    <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Despre <Accent>noi.</Accent>
                    </h1>
                    <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Organizație de creditare nebancară cu sediul în Căușeni și sucursală în Chișinău. De {yearsSinceFoundation} ani
                        finanțăm oameni și afaceri din toată Moldova.
                    </p>
                </Container>
            </div>
            <SpecStrip
                specs={[
                    { value: "2010", label: "anul fondării", proof: true },
                    { value: String(yearsSinceFoundation), label: "ani pe piață", proof: true },
                    { value: "2", label: "oficii · toată Moldova", proof: true },
                    { value: "4,9", label: "rating clienți", proof: true },
                ]}
            />

            <div className="dc-section">
                <Container>
                    <figure className="max-w-[900px]">
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            Promisiunea
                        </p>
                        <p className="mt-7 text-[clamp(34px,4vw,50px)] font-semibold leading-[1.16] tracking-[-.03em] text-dc-text">
                            Facem ce spunem și spunem ce facem. Dacă finanțarea nu are sens pentru tine, o spunem înainte să depui dosarul.
                        </p>
                        <figcaption className="mt-6 text-xs tracking-[.06em] text-dc-text-muted">- ECHIPA IDEAL CREDIT</figcaption>
                    </figure>
                </Container>
            </div>

            <OrdinalRows
                marker="Pentru cine"
                title={
                    <>
                        Ce <Accent>facem</Accent>
                    </>
                }
                items={ceFacem}
            />

            <Section
                marker="Servicii"
                title={
                    <>
                        Serviciile <Accent>noastre</Accent>
                    </>
                }
            >
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {servicii.map((s, i) => (
                        <div key={s.title} className="dc-cell flex flex-col p-8">
                            <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">{s.title}</h3>
                            <p className="mt-2.5 text-[15px] leading-[1.55] text-dc-text-muted">{s.desc}</p>
                            <ul className="mt-5 flex flex-col gap-2">
                                {s.items.map((item) => (
                                    <li key={item} className="text-[15px] leading-[1.5] text-dc-text-muted">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {s.href && (
                                <Link
                                    href={s.href}
                                    className="mt-6 text-[15px] uppercase tracking-[.04em] text-dc-accent underline underline-offset-4"
                                >
                                    Vezi condițiile →
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            <OrdinalRows
                marker="Principii"
                title={
                    <>
                        De ce <Accent>Ideal Credit</Accent>
                    </>
                }
                items={principii}
            />

            <OrdinalRows
                marker="Procesul"
                title={
                    <>
                        Cinci pași până la <Accent>bani</Accent>
                    </>
                }
                items={proces}
            />

            <div className="dc-section">
                <Container>
                    <div className="flex flex-wrap items-end justify-between gap-8">
                        <div>
                            <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                                Registru public
                            </p>
                            <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                                Regulamente și <Accent>documente</Accent>
                            </h2>
                        </div>
                    </div>
                    <div className="mt-14 border-t border-dc-line">
                        {documente.map((doc, i) => (
                            <a
                                key={doc.href}
                                href={doc.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="grid items-baseline gap-7 border-b border-dc-line px-8 py-6 transition-colors duration-[120ms] hover:bg-dc-surface"
                                style={{ gridTemplateColumns: "44px minmax(0,1.6fr) minmax(0,.7fr) auto" }}
                            >
                                <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-[17px] font-medium leading-[1.5] text-dc-text">{doc.label}</span>
                                <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{doc.group}</span>
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {doc.meta} →
                                </Figure>
                            </a>
                        ))}
                    </div>
                </Container>
            </div>

            <ProductFaq
                title={
                    <>
                        Întrebări <Accent>frecvente</Accent>
                    </>
                }
                items={faqItems}
            />
            <ClosingCta />
        </div>
    );
}
