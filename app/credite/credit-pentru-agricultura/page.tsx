import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import SpecStrip from "@/components/product/SpecStrip";
import OrdinalRows from "@/components/product/OrdinalRows";
import EligibilityRows from "@/components/product/EligibilityRows";
import ProductDescription from "@/components/product/ProductDescription";
import DocumentRows from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { agriculturalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Agricultură în Moldova | Ideal Credit",
    description:
        "Credit pentru agricultură în Moldova - finanțăm tehnică agricolă, semințe, irigații și capital sezonier pentru fermieri, SRL și ÎI.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Agricultură în Moldova | Ideal Credit",
        description:
            "Credit pentru agricultură în Moldova - finanțăm tehnică agricolă, semințe, irigații și capital sezonier pentru fermieri, SRL și ÎI.",
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
        question: "Pot accesa creditul dacă arendez terenul, nu îl dețin?",
        answer: "Da, contractul de arendă este suficient ca dovadă a activității. Analizăm capacitatea de producție și istoricul agricol, nu doar proprietatea terenului.",
    },
    {
        question: "Pot refinanța un credit agricol existent la condiții mai bune?",
        answer: "Da. Preluăm credite agricole de la alte instituții financiare. Analizăm dacă refinanțarea are sens financiar și prezentăm calculul înainte de decizie.",
    },
];

const financingCategories = [
    { title: "Tehnică și utilaje", desc: "Tractoare, combine, remorci, pluguri, semănători, echipamente de recoltare." },
    { title: "Semințe și inputuri", desc: "Semințe certificate, îngrășăminte, pesticide, fungicide - tot ce ai nevoie pentru sezon." },
    { title: "Irigații", desc: "Sisteme de irigații prin picurare, aspersoare, pompe, infrastructură de udare." },
    { title: "Lucrări agricole", desc: "Arat, semănat, tratamente fitosanitare, recoltare - acoperi costurile înainte de încasări." },
    { title: "Capital de lucru sezonier", desc: "Salarii muncitori sezonieri, transport, depozitare, combustibil, costuri operative." },
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agriculturalLoanSchema) }} />

            <ProductHero
                category="Persoane juridice"
                position={3}
                title={
                    <>
                        Credit pentru <Accent>agricultură.</Accent>
                    </>
                }
                subtitle="Finanțare pentru fermieri, SRL-uri și gospodării individuale din Moldova. Grafic adaptat sezonalității."
                primaryCta={{ label: "Depune cererea", href: "/cerere-de-credit-online" }}
                secondaryCta={{ label: "Calculează rata", href: "#calculator" }}
            />
            <SpecStrip
                specs={[
                    { value: "50 000", label: "MDL sumă minimă" },
                    { value: "12–60", label: "luni termen" },
                    { value: "1–2 zile", label: "până la decizie", proof: true },
                    { value: "4 %", label: "dobândă fixă / lună" },
                ]}
            />

            <OrdinalRows
                marker="Destinații"
                title={
                    <>
                        Ce poți <Accent>finanța</Accent>
                    </>
                }
                items={financingCategories}
            />

            <Section
                marker="Sezonalitate"
                title={
                    <>
                        Adaptat la ritmul <Accent>agriculturii</Accent>
                    </>
                }
            >
                <div className="flex flex-col gap-px border border-dc-line bg-dc-line md:grid md:grid-cols-2">
                    <div className="bg-dc-bg p-8">
                        <h3 className="text-xl tracking-[-.025em] text-dc-text">Grafic de rambursare sezonier</h3>
                        <p className="mt-3 text-[15px] leading-[1.55] text-dc-text-muted">
                            Agricultura nu produce venituri uniform pe parcursul anului. Structurăm graficul de rambursare în funcție de
                            ciclul tău de producție - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare și vânzare.
                        </p>
                        <ul className="mt-5 flex flex-col gap-3">
                            {scheduleItems.map((item, i) => (
                                <li key={item} className="flex items-baseline gap-3.5 text-[15px] leading-[1.5] text-dc-text-muted">
                                    <span className="shrink-0 font-dc-mono text-xs text-dc-text-muted">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-dc-bg p-8">
                        <h3 className="text-xl tracking-[-.025em] text-dc-text">Cum analizăm activitatea agricolă</h3>
                        <p className="mt-3 text-[15px] leading-[1.55] text-dc-text-muted">
                            Nu ne limităm la un salariu lunar fix. Analizăm imaginea completă a activității tale agricole.
                        </p>
                        <ul className="mt-5 flex flex-col gap-3">
                            {analysisItems.map((item, i) => (
                                <li key={item} className="flex items-baseline gap-3.5 text-[15px] leading-[1.5] text-dc-text-muted">
                                    <span className="shrink-0 font-dc-mono text-xs text-dc-text-muted">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <EligibilityRows
                marker="Eligibilitate"
                title={
                    <>
                        Condiții de <Accent>eligibilitate</Accent>
                    </>
                }
                items={[
                    "Activitate agricolă înregistrată (SRL, ÎI sau gospodărie țărănească)",
                    "Activitate demonstrabilă în ultimul sezon",
                    "Teren agricol în proprietate sau în arendă",
                    "Extrase bancare sau dovezi de vânzări agricole",
                ]}
            />

            <Calculator />

            <Section
                marker="Detalii"
                title={
                    <>
                        Credit agricol pentru <Accent>fermieri</Accent> din Moldova
                    </>
                }
            >
                <ProductDescription
                    items={[
                        {
                            title: "Pentru cine e",
                            text: "Fermieri, gospodării țărănești, SRL-uri și ÎI cu activitate agricolă. Finanțăm tehnica agricolă, semințe, îngrășăminte, irigații, forța de muncă sezonieră și alte costuri de producție.",
                        },
                        {
                            title: "Grafic adaptat sezonului",
                            text: "Încasările agricole vin după recoltare, nu lunar. Structurăm ratele în funcție de ciclul tău de producție, cu posibilitate de perioadă de grație în lunile cu cheltuieli mari.",
                        },
                        {
                            title: "Ce evaluăm",
                            text: "Suprafața cultivată, contractele de arendă, istoricul de producție și extrasele bancare - nu un plan de afaceri formal sau profit deja demonstrat.",
                        },
                    ]}
                />
            </Section>

            <Process />

            <DocumentRows
                id="documente"
                marker="Dosar"
                title={
                    <>
                        Documente <Accent>necesare</Accent>
                    </>
                }
                items={[
                    { title: "Buletin de identitate", note: "Obligatoriu" },
                    { title: "Certificat de înregistrare sau legitimație gospodărie", note: "SRL / ÎI" },
                    { title: "Documente teren agricol", note: "Proprietate sau arendă" },
                    { title: "Extrase bancare sau acte de vânzare a producției", note: "Obligatoriu" },
                    { title: "Actele bunului gajat", note: "Dacă e cazul" },
                ]}
                footnote="Graficul de rambursare este adaptat sezonului agricol - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare."
            />

            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul <Accent>agricol</Accent>
                    </>
                }
                items={agricFaqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
