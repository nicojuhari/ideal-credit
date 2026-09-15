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
import { repairLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru reparație - casă sau apartament | Ideal Credit",
    description:
        "Credit pentru reparația casei sau apartament. Obține banii rapid și renovează-ți locuința acum. Dobândă fixă și sume flexibile. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-reparatie" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru reparație - casă sau apartament | Ideal Credit",
        description: "Credit pentru reparația casei sau apartamentului. Obține banii rapid și renovează-ți locuința. Dobândă fixă și sume flexibile.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const faqItems: FaqItem[] = [
    {
        question: "Trebuie să prezint facturi de la constructor sau devize înainte de aprobare?",
        answer: "Nu. Nu cerem devize sau facturi obligatorii pentru a aproba creditul. Dacă le ai, pot ajuta la stabilirea sumei, dar nu sunt o condiție. Banii pot fi ridicați numerar la birou sau transferați la card/cont bancar.",
    },
    {
        question: "Pot folosi banii pentru orice lucrare de renovare?",
        answer: "Da. Materiale de construcție, plata meșterilor, mobilare, instalații, ferestre, finisaje - nu există restricții pe destinația banilor odată aprobat creditul.",
    },
    {
        question: "Este obligatorie garanția cu imobilul?",
        answer: "Pentru primul credit, fidejusorul (garant personal) este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile.",
    },
    {
        question: "Pot obține credit pentru reparație dacă stau în chirie?",
        answer: "Da. Nu este obligatorie proprietatea imobilului. Dacă ai venit stabil și capacitate de rambursare, discutăm despre finanțare indiferent de statutul locuinței.",
    },
    {
        question: "Cât timp durează aprobarea?",
        answer: "În general 2-3 ore pentru dosarele complete. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi lucrătoare.",
    },
    {
        question: "Dobânda se modifică dacă renovarea durează mai mult?",
        answer: "Nu. Dobânda este fixă pe toată durata contractului, indiferent de câte luni durează lucrările. Rata lunară pe care o semnezi rămâne aceeași până la ultima plată.",
    },
];

export default function CreditReparatiePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(repairLoanSchema) }} />

            <ProductHero
                category="Persoane fizice"
                position={6}
                title={
                    <>
                        Credit pentru <Accent>reparație.</Accent>
                    </>
                }
                subtitle="Obține un credit pentru reparația casei sau apartamentului tău. Renovează-ți locuința acum cu rate fixe și costuri clare."
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
                items={["Vârsta între 23 și 55 de ani", "Venit confirmat și stabil", "Buletin de identitate valabil"]}
            />

            <Calculator />

            <Section marker="Detalii" title={<>Credit pentru reparație casă sau <Accent>apartament</Accent></>}>
                <ProductDescription
                    items={[
                        {
                            title: "Orice lucrare de renovare",
                            text: "Instalații electrice sau sanitare, zugrăveli și finisaje, ferestre și uși, parchet, mobilier sau dotări. Fără să aștepți ani să strângi banii.",
                        },
                        {
                            title: "Fără devize obligatorii",
                            text: "Banii vin numerar la birou sau în cont, îi folosești cum ai nevoie - materiale, meșteri sau ambele. Dobânda e fixă, rata nu se schimbă.",
                        },
                        {
                            title: "Nu trebuie să fii proprietar",
                            text: "La primul credit, fidejusorul e obligatoriu; gajul imobiliar doar pentru sume mari sau venituri nestabile. Analizăm situația ta reală, nu actele de proprietate.",
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
                    { title: "Actele imobilului", note: "Dacă se solicită gaj" },
                    { title: "Deviz estimativ de lucrări", note: "Opțional" },
                ]}
                footnote="Banii pot fi ridicați numerar la birou sau transferați la card/cont bancar. Îi folosești cum ai nevoie - materiale, meșteri, echipamente."
            />

            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul de <Accent>reparație</Accent>
                    </>
                }
                items={faqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
