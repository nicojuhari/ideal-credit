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
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit investițional", url: "https://idealcredit.md/credite/credit-investitional" },
];

export const metadata: Metadata = {
    title: "Credit Investițional pentru Afaceri Moldova | Ideal Credit",
    description:
        "Credit investițional pentru afaceri din Moldova - echipamente, extinderi și modernizări. Termen până la 60 luni, dobândă fixă, decizie în 1-2 zile.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-investitional" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-investitional",
        title: "Credit Investițional pentru Afaceri Moldova | Ideal Credit",
        description:
            "Credit investițional pentru afaceri din Moldova - echipamente, extinderi și modernizări. Termen până la 60 luni, dobândă fixă, decizie în 1-2 zile.",
    },
};

const investFaqItems: FaqItem[] = [
    {
        question: "Pot finanța orice tip de echipament sau utilaj?",
        answer: "Da, nu suntem limitați la categorii specifice. Finanțăm mașini industriale, tehnica agricolă, echipamente horeca, sisteme IT, vehicule comerciale și altele.",
    },
    {
        question: "Ce se întâmplă dacă investiția nu are sens financiar acum?",
        answer: `Îți spunem direct, înainte de dosar. Cu ${yearsSinceFoundation} ani analizând ce funcționează pentru afaceri din Moldova, recunoaștem când o investiție e prematură - și recomandăm fie o sumă mai mică, fie să aștepți un sezon mai potrivit.`,
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
        answer: "Da, de multe ori. Analizăm suma totală de care ai nevoie pentru echipament și pentru capital de lucru, și dacă are sens financiar, finanțăm ambele prin același dosar, cu o singură rată lunară.",
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
                breadcrumb={breadcrumbItems}
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
                    { value: "12-60", label: "luni termen" },
                    { value: "1-2 zile", label: "până la decizie", proof: true },
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
                    "Firmă înregistrată în Moldova (SRL, ÎI sau gospodărie țărănească)",
                    "Activitate economică de cel puțin 6 luni",
                    "Investiția are legătură directă cu activitatea firmei",
                    "Extrase bancare cu mișcare de bani constantă",
                ]}
            />

            <Calculator />

            <Section
                marker="Detalii"
                title={
                    <>
                        Credit investițional pentru <Accent>afaceri</Accent> din Moldova
                    </>
                }
            >
                <ProductDescription
                    items={[
                        {
                            title: "Bunul e al tău din prima zi",
                            text: "Echipamente, utilaje, vehicule comerciale, modernizarea spațiului sau dotări IT. Spre deosebire de leasing, nu există restricții de utilizare sau clauze de răscumpărare.",
                        },
                        {
                            title: "Termen până la 60 de luni",
                            text: "Reduce rata lunară și e mai ușor de gestionat pentru bugetul firmei. Dobânda e fixă pe toată durata contractului - știi exact cât plătești de la prima până la ultima rată.",
                        },
                        {
                            title: "Ce analizăm",
                            text: "Extrasele bancare și activitatea curentă a firmei - nu un plan de afaceri detaliat sau o factură finalizată. Analizăm scopul investiției și situația firmei, ca să luăm decizia corectă - chiar dacă asta înseamnă o sumă mai mică sau un refuz.",
                        },
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
                    { title: "Ofertă sau factură preliminară pentru bun", note: "Dacă există" },
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
