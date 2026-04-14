import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru reparație - casă sau apartament | Ideal Credit",
    description:
        "Credit pentru reparația casei sau apartament. Obține banii rapid și renovează-ți locuința acum. Dobândă fixă și sume flexibile. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-reparatie" },
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
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru reparație"}
                subtitle="Obține un credit pentru reparația casei sau apartamentului tău. Renovează-ți locuința acum cu rate fixe și costuri clare."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta între 23 și 55 de ani",
                    "Venit confirmat și stabil",
                    "Buletin de identitate valabil",
                    "Locuință în proprietate sau în arendă (pentru lucrările planificate)",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Document de confirmare a veniturilor (adeverință, extras de card, verificare BIC etc.)",
                    "Actele imobilului (dacă se solicită gaj)",
                    "Deviz estimativ de lucrări (opțional, ajută la determinarea sumei)",
                ]}
                note="Banii pot fi ridicați numerar la birou sau transferați la card/cont bancar. Îi folosești cum ai nevoie - materiale, meșteri, echipamente."
                description={{
                    title: "Credit pentru reparație casă sau apartament",
                    paragraphs: [
                        "Creditul pentru reparație de la Ideal Credit îți oferă banii necesari pentru a renova locuința fără să aștepți ani să strângi economii. Poți finanța orice fel de lucrare - instalații electrice sau sanitare, zugrăveli și finisaje, schimb de ferestre și uși, parchet, mobilier sau dotări pentru spațiul renovat.",
                        "Nu cerem devize sau facturi obligatorii înainte de aprobare. Banii pot fi ridicați numerar la birou sau transferați la card/cont bancar, și îi folosești cum și când ai nevoie - plătești materiale, meșteri sau ambele. Dobânda este fixă, rata lunară nu se schimbă pe toată durata contractului.",
                        "Garanția nu este obligatorie pentru sume mai mici. Dacă ai venit stabil și capacitate de rambursare demonstrabilă, aprobăm în 2-3 ore. Nu trebuie să fii proprietar al imobilului pentru a aplica - analizăm situația ta reală, nu doar documentele de proprietate.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-nevoi-personale",
                        label: "Credit pentru nevoi personale",
                        desc: "Credit flexibil pentru orice cheltuială.",
                    },
                    {
                        href: "/credite/credit-pentru-automobil",
                        label: "Credit pentru automobil",
                        desc: "Finanțezi cumpărarea sau repararea mașinii.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
