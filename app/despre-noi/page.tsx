import type { Metadata } from "next";
import { Briefcase, User, HeartHandshake, RefreshCw, MessageCircle } from "lucide-react";
import Container from "@/components/ds/Container";
import Section from "@/components/ds/Section";
import Card from "@/components/ds/Card";
import Accent from "@/components/ds/Accent";
import FeatureCards from "@/components/product/FeatureCards";
import type { FeatureCardItem } from "@/components/product/FeatureCards";
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

const ceFacem: FeatureCardItem[] = [
    {
        icon: Briefcase,
        title: "Antreprenori și proprietari de afaceri",
        desc: "Capital de lucru, utilaje, stoc sau extindere.",
    },
    {
        icon: User,
        title: "Persoane fizice",
        desc: "Renovări, cumpărături mari, sănătate sau educație.",
    },
    {
        icon: HeartHandshake,
        title: "Clienți refuzați de bănci",
        desc: "Oferim o analiză flexibilă, adaptată situației tale reale.",
    },
];

const servicii: FeatureCardItem[] = [
    {
        icon: User,
        title: "Credite pentru persoane fizice",
        desc: "Finanțare pentru renovări, electrocasnice, mașini, cheltuieli medicale sau orice altă nevoie urgentă.",
        items: ["Aprobare rapidă", "Fără costuri ascunse", "Suma și rata adaptate la venitul tău"],
        link: { href: "/credite/credit-pentru-nevoi-personale" },
    },
    {
        icon: Briefcase,
        title: "Credite pentru afaceri",
        desc: "Finanțare pentru antreprenori și firme mici care vor să crească fără să aștepte proceduri bancare lungi.",
        items: ["Bani pentru stoc, utilaje sau modernizare", "Analiză rapidă a dosarului", "Soluții cu sau fără gaj, în funcție de sumă"],
        link: { href: "/credite/credit-pentru-afaceri-mici" },
    },
    {
        icon: RefreshCw,
        title: "Refinanțare",
        desc: "Ai credite scumpe la alte instituții? Le putem închide și le înlocuim cu o singură rată fixă și mai mică.",
        items: ["O singură plată lunară", "Rată mai mică", "Mai mult confort financiar"],
    },
    {
        icon: MessageCircle,
        title: "Consultanță financiară gratuită",
        desc: "Nu știi ce produs ți se potrivește? Venim cu o analiză gratuită a situației tale, fără obligații.",
        items: ["Analizăm capacitatea ta de plată", "Îți propunem soluția potrivită", "Fără obligații"],
    },
];

const deCe = [
    {
        title: "Transparență totală",
        body: "Îți arătăm toate costurile de la început. Nu există surprize la semnătură sau pe parcurs.",
    },
    {
        title: "Aprobare rapidă",
        body: "Nu pierzi săptămâni în așteptare. Analizăm dosarul tău și îți dăm un răspuns clar.",
    },
    {
        title: "Flexibilitate reală",
        body: "Analizăm situația ta individual, nu după un algoritm rigid. Dacă ai venituri stabile și capacitate de rambursare, găsim o soluție.",
    },
    {
        title: `${yearsSinceFoundation} ani de încredere`,
        body: "Mii de clienți au obținut finanțare prin noi. Facem ce spunem și spunem ce facem.",
    },
    {
        title: "Acoperire națională",
        body: "Birouri în Căușeni și Chișinău, dar lucrăm cu clienți din toată Moldova prin platforma noastră online.",
    },
];

const proces = [
    { title: "Completezi cererea", body: "Online sau la birou, în câteva minute." },
    { title: "Analizăm dosarul", body: "Rapid, fără birocrație inutilă." },
    { title: "Primești răspunsul", body: "Clar și transparent." },
    { title: "Semnezi contractul", body: "Cu toate costurile vizibile." },
    { title: "Primești banii", body: "Și îți continui planurile." },
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

const regulamente = [
    { href: "/regulament-cadrul-de-administrare.pdf", label: "Regulament privind cadrul de administrare" },
    { href: "/regulament-prestarea-serviciilor.pdf", label: "Regulament privind prestarea serviciilor în cardul OCN Ideal Credit SRL" },
    {
        href: "/regulament-solutionarea-pretentiilor.pdf",
        label: "Regulament privind mecanismele de soluționare a pretențiilor clienților în cardul OCN Ideal Credit SRL",
    },
];

const rapoarte = [
    { href: "/raport-audit-2025.pdf", label: "Raport de Audit 2025" },
    { href: "/raport-audit-2024.pdf", label: "Raport de Audit 2024" },
    { href: "/raport-audit-2023.pdf", label: "Raport de Audit 2023" },
    { href: "/raport-audit-2022.pdf", label: "Raport de Audit 2022" },
];

const documenteConstituire = [
    { href: "/ideal-credit-certificat-de-inregistrare.pdf", label: "Certificat de înregistrare" },
    {
        href: "/ideal-credit-extras-registrul-organizatiilor-de-creditare-nebancare-autorizate.pdf",
        label: "Extras din Registrul organizațiilor de creditare nebancară autorizate",
    },
];

function DocsCard({ title, links }: { title: string; links: { href: string; label: string }[] }) {
    return (
        <Card className="gap-4">
            <h3 className="text-[17px] font-bold text-dc-text">{title}</h3>
            <div className="flex flex-col gap-3">
                {links.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-dc-text-muted underline underline-offset-[3px] hover:text-dc-text"
                    >
                        {l.label}
                    </a>
                ))}
            </div>
        </Card>
    );
}

export default function DespreNoiPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />

            <div className="relative isolate dc-section dc-section--hero">
                <div className="dc-bg-squares" aria-hidden />
                <Container>
                    <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
                        <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.05] tracking-[-.03em] text-dc-text">
                            Despre <Accent>noi</Accent>
                        </h1>
                        <p className="text-[19px] leading-relaxed text-dc-text-muted">
                            Ideal Credit este o instituție financiară nebancară cu sediul central în Căușeni și sucursală în Chișinău. De
                            peste {yearsSinceFoundation} de ani ajutăm oameni și afaceri din Moldova să acceseze credite clare, corecte și
                            rapide. Suntem o organizație de creditare nebancară autorizată și supravegheată de CNPF.
                        </p>
                        <p className="font-dc-serif italic text-xl text-dc-accent">&quot;Credite pentru succes!&quot;</p>
                    </div>
                </Container>
            </div>

            <Section title={<>Ce <Accent>facem</Accent></>} description="Oferim finanțare pentru cei care au nevoie de bani - fără birocrație inutilă și fără costuri ascunse.">
                <FeatureCards items={ceFacem} cols={3} />
            </Section>

            <Section title={<>Serviciile <Accent>noastre</Accent></>}>
                <FeatureCards items={servicii} cols={2} />
            </Section>

            <Section title={<>De ce <Accent>Ideal Credit</Accent></>}>
                <div>
                    {deCe.map((row, i) => (
                        <div
                            key={row.title}
                            className="grid gap-4 border-t border-dc-line py-7 last:border-b"
                            style={{ gridTemplateColumns: "40px 1fr" }}
                        >
                            <span className="text-[13px] font-semibold text-dc-text-dim">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="text-[19px] font-bold text-dc-text">{row.title}</h3>
                                <p className="mt-1 text-dc-text-muted leading-relaxed">{row.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={<>Cum funcționează <Accent>procesul</Accent></>}>
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                    {proces.map((step, i) => (
                        <Card key={step.title} className="gap-6">
                            <span className="text-[13px] font-semibold text-dc-text-dim">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="mb-1.5 text-base font-bold text-dc-text">{step.title}</h3>
                                <p className="text-sm text-dc-text-muted leading-relaxed">{step.body}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <ProductFaq items={faqItems} />
            <ClosingCta />

            <Section title={<>Regulamente și <Accent>documente</Accent></>}>
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <DocsCard title="Regulamente interne" links={regulamente} />
                    <DocsCard title="Rapoarte" links={rapoarte} />
                    <DocsCard title="Documente de constituire" links={documenteConstituire} />
                </div>
            </Section>
        </div>
    );
}
