import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import SpecStrip from "@/components/product/SpecStrip";
import OrdinalRows from "@/components/product/OrdinalRows";
import EligibilityRows from "@/components/product/EligibilityRows";
import ProductDescription from "@/components/product/ProductDescription";
import ComparisonRows from "@/components/product/ComparisonRows";
import DocumentRows from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { investitionalSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit Investițional pentru Afaceri în Moldova | Ideal Credit",
    description:
        "Finanțăm echipamente, extinderi și modernizări pentru afaceri din Moldova. Termen până la 60 luni, dobândă fixă, decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-investitional" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit Investițional pentru Afaceri în Moldova | Ideal Credit",
        description:
            "Finanțăm echipamente, extinderi și modernizări pentru afaceri din Moldova. Termen până la 60 luni, dobândă fixă, decizie în 1-2 zile lucrătoare.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const investFaqItems: FaqItem[] = [
    {
        question: "Pot finanța orice tip de echipament sau utilaj?",
        answer: "Da, nu suntem limitați la categorii specifice. Finanțăm mașini industriale, tehnica agricolă, echipamente horeca, sisteme IT, vehicule comerciale și altele.",
    },
    {
        question: "Care este termenul maxim pentru un credit investițional?",
        answer: "Până la 60 luni (5 ani). Termenul mai lung reduce rata lunară și face investiția mai ușor de gestionat din perspectiva fluxului de numerar.",
    },
    {
        question: "Bunul achiziționat devine proprietatea mea imediat?",
        answer: "Da. Spre deosebire de leasing, la credit investițional bunul este al tău din prima zi. Nicio restricție de utilizare, nicio clauză de răscumpărare.",
    },
    {
        question: "Pot rambursa creditul anticipat dacă afacerea merge bine?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată.",
    },
    {
        question: "Ce garanții sunt necesare pentru un credit investițional?",
        answer: "La primul credit, fidejusorul (garant personal) este întotdeauna obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau fluxuri de venituri nestabile.",
    },
    {
        question: "Pot combina creditul investițional cu capital de lucru?",
        answer: "Analizăm situația totală a firmei și structurăm soluția adecvată. În unele cazuri, finanțăm ambele nevoi prin același dosar.",
    },
];

const financingCategories = [
    { title: "Echipamente și utilaje", desc: "Mașini industriale, linii de producție, tehnica agricolă, echipamente de prelucrare." },
    { title: "Vehicule comerciale", desc: "Autoutilitare, camioane, vehicule de lucru, transport marfă." },
    { title: "Renovare spațiu comercial", desc: "Birouri, depozite, magazine, restaurante, hoteluri - modernizare sau extindere." },
    { title: "Tehnologie și IT", desc: "Sisteme informatice, software specializat, echipamente de comunicații." },
    { title: "Mobilier și dotări", desc: "Dotarea completă a spațiilor: hoteluri, restaurante, birouri, saloane." },
];

const comparisonRows = [
    { label: "Proprietatea bunului", ours: "Imediată, din prima zi", other: "La finalul contractului" },
    { label: "Flexibilitate bunuri", ours: "Orice tip de bun", other: "Vehicule și echipamente specifice" },
    { label: "Rambursare anticipată", ours: "Gratuită", other: "Cu penalizări" },
    { label: "Restricții de utilizare", ours: "Nicio restricție", other: "Kilometraj, modificări interzise" },
];

export default function CreditInvestitionalPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(investitionalSchema) }} />

            <ProductHero
                category="Persoane juridice"
                position={2}
                title={
                    <>
                        Credit <Accent>investițional.</Accent>
                    </>
                }
                subtitle="Cumperi echipamente, extinzi spațiul sau modernizezi linia de producție. Termen până la 60 luni, rată fixă, costuri clare."
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

            <EligibilityRows
                marker="Eligibilitate"
                title={
                    <>
                        Condiții de <Accent>eligibilitate</Accent>
                    </>
                }
                items={[
                    "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                    "Activitate economică de cel puțin 6 luni",
                    "Investiția are legătură directă cu activitatea firmei",
                    "Extrase bancare cu rulaj constant",
                ]}
            />

            <Calculator />

            <Section
                align="center"
                title={
                    <>
                        Credit investițional pentru <Accent>afaceri</Accent> din Moldova
                    </>
                }
            >
                <ProductDescription
                    paragraphs={[
                        "Creditul investițional este destinat achizițiilor care ajută firma să crească pe termen mediu și lung - echipamente, utilaje, vehicule comerciale, modernizarea spațiului sau dotări IT. Spre deosebire de leasing, bunul este al tău din prima zi și nu există restricții de utilizare sau clauze de răscumpărare.",
                        "Termenul de rambursare ajunge până la 60 de luni, ceea ce reduce semnificativ rata lunară și face investiția mai ușor de gestionat din perspectiva fluxului de numerar al firmei. Dobânda este fixă pe toată durata contractului - știi exact cât plătești de la prima până la ultima rată.",
                        "Nu cerem plan de afaceri detaliat sau factură finalizată înainte de aprobare. Analizăm firma pe baza extraselor bancare și a activității curente. Dacă investiția are legătură cu activitatea ta economică și ai capacitate de rambursare demonstrabilă, discutăm.",
                    ]}
                />
            </Section>

            <Section
                align="center"
                title={
                    <>
                        Credit investițional <Accent>vs. leasing</Accent>
                    </>
                }
            >
                <ComparisonRows oursLabel="Ideal Credit" otherLabel="Leasing" rows={comparisonRows} />
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
                    { title: "Buletin de identitate al administratorului", note: "Obligatoriu" },
                    { title: "Certificat de înregistrare (SRL/ÎI)", note: "Obligatoriu" },
                    { title: "Extrase bancare - ultimele 3-6 luni", note: "Obligatoriu" },
                    { title: "Ofertă sau factură proformă pentru bun", note: "Dacă există" },
                    { title: "Actele de proprietate", note: "Pentru gaj, dacă e cazul" },
                ]}
                footnote="Bunul achiziționat devine proprietatea ta din prima zi. Spre deosebire de leasing, nu există clauze de răscumpărare."
            />

            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul <Accent>investițional</Accent>
                    </>
                }
                items={investFaqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
