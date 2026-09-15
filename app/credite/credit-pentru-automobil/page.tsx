import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import SpecStrip from "@/components/product/SpecStrip";
import EligibilityRows from "@/components/product/EligibilityRows";
import ProductDescription from "@/components/product/ProductDescription";
import DocumentRows from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { autoLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Automobil în Moldova | Ideal Credit",
    description:
        "Credit pentru cumpărarea sau repararea automobilului în Moldova. Dobândă fixă, fără restricții pe tipul mașinii. Decizie în 2-3 ore. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-automobil" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Automobil în Moldova | Ideal Credit",
        description: "Credit pentru cumpărarea sau repararea automobilului în Moldova. Dobândă fixă, fără restricții pe tipul mașinii. Decizie în 2-3 ore.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot cumpăra o mașină second-hand cu acest credit?",
        answer: "Da. Finanțăm atât mașini noi cât și second-hand, de la persoane fizice sau dealeri. Nu există restricții pe vârsta sau tipul vehiculului - analizăm capacitatea ta de rambursare, nu mașina.",
    },
    {
        question: "Mașina devine proprietatea mea din prima zi?",
        answer: "Da. Spre deosebire de leasing, la credit auto mașina este a ta imediat. Nicio restricție de kilometraj, nicio clauză de răscumpărare la final.",
    },
    {
        question: "Pot obține credit și pentru reparații majore la mașina existentă?",
        answer: "Da. Finanțăm reparații tehnice majore - motor, cutie de viteze, suspensie, caroserie - nu doar achiziții. Nu cerem ofertă de la service înainte de aprobare.",
    },
    {
        question: "Este obligatorie garanția cu mașina sau un imobil?",
        answer: "La primul credit, fidejusorul (garant personal) este obligatoriu, indiferent de sumă. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile.",
    },
    {
        question: "Cât timp durează aprobarea?",
        answer: "Decizia se ia în 2-3 ore pentru dosarele complete. Banii pot fi disponibili în aceeași zi lucrătoare după semnarea contractului.",
    },
    {
        question: "Pot rambursa anticipat dacă vreau să închid creditul mai repede?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată, fără nicio penalitate.",
    },
];

export default function CreditAutomobilPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoLoanSchema) }} />

            <ProductHero
                category="Persoane fizice"
                position={5}
                title={
                    <>
                        Credit pentru <Accent>automobil.</Accent>
                    </>
                }
                subtitle="Cumpără sau repară mașina fără complicații. Finanțare rapidă, condiții clare și dobândă fixă."
                primaryCta={{ label: "Depune cererea", href: "/cerere-de-credit-online" }}
                secondaryCta={{ label: "Calculează rata", href: "#calculator" }}
            />
            <SpecStrip
                specs={[
                    { value: "10 000", label: "MDL sumă minimă" },
                    { value: "12–48", label: "luni termen" },
                    { value: "2–3 ore", label: "până la decizie", proof: true },
                    { value: "4 %", label: "dobândă fixă / lună" },
                ]}
            />

            <EligibilityRows
                marker="Eligibilitate"
                title={
                    <>
                        Condiții de <Accent>creditare</Accent>
                    </>
                }
                items={["Vârsta între 23 și 55 de ani", "Venit confirmat și stabil", "Buletin de identitate valabil", "Fără restanțe mari la credite active"]}
            />

            <Calculator />

            <Section marker="Detalii" title={<>Credit auto în Moldova - cumpărare sau <Accent>reparație</Accent></>}>
                <ProductDescription
                    items={[
                        {
                            title: "Cumpărare sau reparație",
                            text: "Mașină nouă, second-hand sau reparații majore la mașina ta. Fără restricții pe tipul vehiculului - de la persoane fizice sau dealeri.",
                        },
                        {
                            title: "Mașina e a ta din prima zi",
                            text: "Spre deosebire de leasing, fără clauze de răscumpărare, fără restricții de kilometraj sau modificări interzise. Iei banii, cumperi sau repari, plătești rate fixe.",
                        },
                        {
                            title: "Cât durează",
                            text: "Aprobăm în 2-3 ore, fără ofertă de la dealer sau deviz de la service în avans. Ai nevoie de venit stabil și fără restanțe mari la alte credite.",
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
                    { title: "Confirmare a veniturilor", note: "Adeverință / extras / BIC" },
                    { title: "Actul tehnic al autovehiculului", note: "Dacă există" },
                    { title: "Actele proprietarului vânzător", note: "Pentru second-hand" },
                ]}
                footnote="Spre deosebire de leasing, mașina este a ta din prima zi. Nicio restricție de utilizare sau clauze de răscumpărare."
            />

            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul <Accent>auto</Accent>
                    </>
                }
                items={faqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
