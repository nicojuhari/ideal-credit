import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import SpecStrip from "@/components/product/SpecStrip";
import OrdinalRows from "@/components/product/OrdinalRows";
import DocumentRows from "@/components/product/DocumentRows";
import type { DocumentItem } from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import ClosingCta from "@/components/home/ClosingCta";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Despre noi | Ideal Credit - Companie de creditare",
    description:
        "Despre noi: instituție financiară nebancară cu peste 16 ani în Moldova. Credite pentru persoane fizice și afaceri, dobândă fixă, fără comisioane ascunse.",
    alternates: { canonical: "https://idealcredit.md/despre-noi" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/despre-noi",
        title: "Despre noi | Ideal Credit - Companie de creditare",
        description:
            "Despre noi: instituție financiară nebancară cu peste 16 ani în Moldova. Credite pentru persoane fizice și afaceri, dobândă fixă, fără comisioane ascunse.",
    },
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
        href: "/credite/credit-pentru-afaceri",
    },
    {
        title: "Consultanță financiară gratuită",
        desc: "Nu știi ce soluție ți se potrivește, sau ai mai multe credite de simplificat? Venim cu o analiză gratuită a situației tale, fără obligații.",
        items: ["Analizăm scopul și capacitatea ta de plată", "Îți propunem soluția potrivită", "Fără obligații"],
    },
];

const principii = [
    { title: "Transparență totală", desc: "Îți arătăm toate costurile de la început. Nu există surprize la semnătură sau pe parcurs." },
    {
        title: "Scopul contează cel mai mult",
        desc: "Înainte de acte, vrem să înțelegem pentru ce ai nevoie de bani și dacă planul tău are logică.",
    },
    { title: "Aprobare rapidă", desc: "Nu pierzi săptămâni în așteptare. Analizăm dosarul tău și îți dăm un răspuns clar." },
    {
        title: "Flexibilitate reală",
        desc: "Analizăm situația ta individual, nu după un algoritm rigid. Dacă ai venituri stabile și capacitate de rambursare, găsim o soluție.",
    },
    {
        title: "Un parteneriat, nu doar un credit",
        desc: "Lucrăm cu clienți serioși, care își gestionează banii cu grijă sau vor să învețe. Găsim împreună soluția potrivită scopului tău.",
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
    { title: "Completezi cererea", desc: "Online, la telefon, WhatsApp sau email - fără drum la birou." },
    { title: "Analizăm dosarul", desc: "Ne uităm la scopul creditului și la logica planului tău, nu doar la actele depuse." },
    { title: "Primești răspunsul", desc: "Clar și transparent." },
    { title: "Semnezi contractul", desc: "La birou, prin programare - doar când răspunsul e deja „da”." },
    { title: "Primești banii", desc: "Și îți continui planurile." },
];

const documente: DocumentItem[] = [
    {
        title: "Regulament privind cadrul de administrare",
        group: "Regulamente",
        meta: "PDF",
        href: "/regulament-cadrul-de-administrare.pdf",
    },
    { title: "Regulament privind prestarea serviciilor", group: "Regulamente", meta: "PDF", href: "/regulament-prestarea-serviciilor.pdf" },
    {
        title: "Regulament privind soluționarea pretențiilor",
        group: "Regulamente",
        meta: "PDF",
        href: "/regulament-solutionarea-pretentiilor.pdf",
    },
    { title: "Raport de audit 2025", group: "Rapoarte", meta: "2025", href: "/raport-audit-2025.pdf" },
    { title: "Raport de audit 2024", group: "Rapoarte", meta: "2024", href: "/raport-audit-2024.pdf" },
    { title: "Raport de audit 2023", group: "Rapoarte", meta: "2023", href: "/raport-audit-2023.pdf" },
    { title: "Raport de audit 2022", group: "Rapoarte", meta: "2022", href: "/raport-audit-2022.pdf" },
    { title: "Certificat de înregistrare", group: "Constituire", meta: "PDF", href: "/ideal-credit-certificat-de-inregistrare.pdf" },
    {
        title: "Extras din Registrul OCN autorizate",
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

            <DocumentRows
                marker="Registru public"
                title={
                    <>
                        Regulamente și <Accent>documente</Accent>
                    </>
                }
                items={documente}
            />

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
