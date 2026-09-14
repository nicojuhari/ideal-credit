import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import Card from "@/components/ds/Card";
import ProductHero from "@/components/product/ProductHero";
import FeatureCards from "@/components/product/FeatureCards";
import type { FeatureCardItem } from "@/components/product/FeatureCards";
import EligibilityCard from "@/components/product/EligibilityCard";
import ProductDescription from "@/components/product/ProductDescription";
import DocumentsBlock from "@/components/product/DocumentsBlock";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { Cog, Leaf, Droplets, Sprout, TrendingUp } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Agricultură în Moldova | Ideal Credit",
    description:
        "Credit agricol pentru fermieri, SRL și ÎI din Moldova. Finanțăm tehnica agricolă, semințe, irigații și capital sezonier. Grafic adaptat recoltei.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Agricultură în Moldova | Ideal Credit",
        description: "Credit agricol pentru fermieri, SRL și ÎI din Moldova. Finanțăm tehnica agricolă, semințe, irigații și capital sezonier. Grafic adaptat recoltei.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const agricFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit agricol dacă activitatea mea este sezonieră?",
        answer: "Da. Înțelegem că veniturile agricole sunt concentrate în anumite perioade ale anului. Structurăm graficul de rambursare în funcție de ciclul tău de producție și recoltare.",
    },
    {
        question: "Există perioadă de grație pentru creditul agricol?",
        answer: "Analizăm posibilitatea unei perioade de grație în funcție de cultură și ciclul de producție. Dacă recolta e în toamnă, discutăm un grafic adaptat - nu o rată fixă lunară care nu ține cont de sezonalitate.",
    },
    {
        question: "Ce documente sunt necesare pentru un credit agricol?",
        answer: "Actele de înregistrare (SRL/ÎI sau gospodărie țărănească), extrase bancare pentru ultimele 3 luni și documentele terenurilor agricole (titlu de proprietate sau contract de arendă). Nu cerem plan de afaceri detaliat.",
    },
    {
        question: "Pot obține credit pentru achiziția de tehnica agricolă?",
        answer: "Da. Tractoare, combine, remorci, sisteme de irigații - finanțăm echipamentele direct prin creditul agricol sau prin creditul investițional, în funcție de suma și termenul dorit.",
    },
    {
        question: "Pot accesa creditul dacă arend terenul, nu îl dețin?",
        answer: "Da, contractul de arendă este suficient ca dovadă a activității. Analizăm capacitatea de producție și istoricul agricol, nu doar proprietatea terenului.",
    },
    {
        question: "Pot refinanța un credit agricol existent la condiții mai bune?",
        answer: "Da. Preluăm credite agricole de la alte instituții financiare. Analizăm dacă refinanțarea are sens financiar și prezentăm calculul înainte de decizie.",
    },
];

const financingCategories: FeatureCardItem[] = [
    {
        icon: Cog,
        title: "Tehnică și utilaje",
        desc: "Tractoare, combine, remorci, pluguri, semănători, echipamente de recoltare.",
        link: { href: "/credite/credit-investitional", label: "Vezi credit investițional" },
    },
    {
        icon: Sprout,
        title: "Semințe și inputuri",
        desc: "Semințe certificate, îngrășăminte, pesticide, fungicide - tot ce ai nevoie pentru sezon.",
    },
    {
        icon: Droplets,
        title: "Irigații",
        desc: "Sisteme de irigații prin picurare, aspersoare, pompe, infrastructură de udare.",
    },
    {
        icon: Leaf,
        title: "Lucrări agricole",
        desc: "Arat, semănat, tratamente fitosanitare, recoltare - acoperi costurile înainte de încasări.",
    },
    {
        icon: TrendingUp,
        title: "Capital de lucru sezonier",
        desc: "Salarii muncitori sezonieri, transport, depozitare, combustibil, costuri operative.",
    },
];

const scheduleItems = [
    "Rate adaptate sezonului de încasări",
    "Posibilitate de perioadă de grație până la recoltă",
    "Termen de până la 60 luni pentru investiții mari",
];

const analysisItems = [
    "Suprafața cultivată și culturile practicate",
    "Istoricul de producție și vânzări din sezonul anterior",
    "Contracte de arendă sau titluri de proprietate",
    "Extrase bancare și fluxul de numerar anual",
];

export default function CreditAgriculturaPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />

            <ProductHero
                title={<>Credit pentru agricultură</>}
                subtitle="Finanțare pentru fermieri, SRL-uri și gospodării individuale din Moldova. Grafic adaptat sezonalității."
            />

            <Section title={<>Ce poți <Accent>finanța</Accent></>}>
                <FeatureCards items={financingCategories} cols={3} />
            </Section>

            <Section title={<>Adaptat la ritmul <Accent>agriculturii</Accent></>}>
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    <Card className="gap-4">
                        <h3 className="text-[17px] font-bold text-dc-text">Grafic de rambursare sezonier</h3>
                        <p className="text-sm leading-relaxed text-dc-text-muted">
                            Agricultura nu produce venituri uniform pe parcursul anului. Știm asta. Structurăm graficul de rambursare în
                            funcție de ciclul tău de producție - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare și vânzare.
                        </p>
                        <ul className="flex flex-col gap-2.5">
                            {scheduleItems.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-dc-text-muted">
                                    <Check size={15} className="mt-0.5 shrink-0 text-dc-accent" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card className="gap-4">
                        <h3 className="text-[17px] font-bold text-dc-text">Cum analizăm activitatea agricolă</h3>
                        <p className="text-sm leading-relaxed text-dc-text-muted">
                            Nu ne limităm la un salariu lunar fix. Analizăm imaginea completă a activității tale agricole.
                        </p>
                        <ul className="flex flex-col gap-2.5">
                            {analysisItems.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-dc-text-muted">
                                    <Check size={15} className="mt-0.5 shrink-0 text-dc-accent" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </Section>

            <Section align="center" title={<>Condiții de <Accent>eligibilitate</Accent></>}>
                <EligibilityCard
                    items={[
                        "Activitate agricolă înregistrată (SRL, ÎI, GȚ)",
                        "Activitate demonstrabilă în ultimul sezon",
                        "Teren agricol în proprietate sau în arendă",
                        "Extrase bancare sau dovezi de vânzări agricole",
                    ]}
                />
            </Section>

            <Process />

            <Section align="center" title={<>Credit agricol pentru <Accent>fermieri</Accent> din Moldova</>}>
                <ProductDescription
                    paragraphs={[
                        "Creditul agricol de la Ideal Credit este conceput pentru fermieri, gospodării țărănești, SRL-uri și ÎI cu activitate în agricultură. Finanțăm tehnica agricolă, semințele, îngrășămintele, irigațiile, forța de muncă sezonieră și orice alt cost legat de producția agricolă.",
                        "Cel mai important avantaj față de un credit standard este graficul de rambursare adaptat sezonului. Știm că încasările agricole vin în valuri - după recoltare și vânzare - nu lunar uniform. De aceea structurăm ratele în funcție de ciclul tău de producție, cu posibilitate de perioadă de grație în lunile de cheltuieli mari.",
                        "Nu cerem plan de afaceri formal sau profit demonstrat. Evaluăm activitatea reală - suprafața cultivată, contractele de arendă, istoricul de producție și extrasele bancare. Dacă ai activitate agricolă demonstrabilă, indiferent de forma juridică, putem discuta despre finanțare.",
                    ]}
                />
            </Section>

            <Section align="center" title={<>Documente <Accent>necesare</Accent></>} id="documente">
                <DocumentsBlock
                    documents={[
                        "Buletin de identitate",
                        "Certificat de înregistrare (SRL/ÎI) sau legitimație gospodărie",
                        "Documente teren agricol (proprietate sau arendă)",
                        "Extrase bancare sau acte de vânzare a producției",
                        "Actele bunului gajat (dacă este cazul)",
                    ]}
                    note="Graficul de rambursare este adaptat sezonului agricol - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare."
                    relatedLinks={[
                        { href: "/credite/credit-pentru-afaceri-mici", label: "Credit pentru afaceri mici", desc: "Finanțare generală pentru orice activitate economică înregistrată." },
                        { href: "/credite/credit-investitional", label: "Credit investițional", desc: "Tehnica agricolă și echipamente pe termen lung." },
                        { href: "/credite/credit-pentru-afaceri-mici#capital-de-lucru", label: "Capital de lucru", desc: "Lichiditate sezonieră pentru semințe, îngrășăminte și forță de muncă." },
                    ]}
                />
            </Section>

            <ProductFaq items={agricFaqItems} />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
