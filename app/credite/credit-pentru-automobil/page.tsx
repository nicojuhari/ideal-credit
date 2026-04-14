import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Automobil în Moldova | Ideal Credit",
    description:
        "Credit pentru cumpărarea sau repararea automobilului în Moldova. Dobândă fixă, fără restricții pe tipul mașinii. Decizie în 2-3 ore. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-automobil" },
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
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru automobil"}
                subtitle="Cumpără sau repară mașina fără complicații. Finanțare rapidă, condiții clare și dobândă fixă."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta între 23 și 55 de ani",
                    "Venit confirmat și stabil",
                    "Buletin de identitate valabil",
                    "Fără restanțe mari la credite active",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Document de confirmare a veniturilor (adeverință, extras de card, verificare BIC etc.)",
                    "Actul tehnic al autovehiculului (dacă există)",
                    "Actele proprietarului vânzător (pentru mașini second-hand)",
                ]}
                note="Spre deosebire de leasing, mașina este a ta din prima zi. Nicio restricție de utilizare sau clauze de răscumpărare."
                description={{
                    title: "Credit auto în Moldova - cumpărare sau reparație",
                    paragraphs: [
                        "Creditul pentru automobil de la Ideal Credit acoperă atât achiziția unei mașini noi sau second-hand, cât și reparațiile tehnice majore la mașina pe care o ai deja. Nu există restricții pe tipul vehiculului - finanțăm autoturisme, autoutilitare sau vehicule de lucru, de la persoane fizice sau dealeri.",
                        "Spre deosebire de leasing, mașina îți aparține din prima zi. Nu există clauze de răscumpărare la final de contract, nu există restricții de kilometraj sau modificări interzise. Este un credit simplu - iei banii, cumperi sau repari mașina, plătești rate fixe lunare.",
                        "Aprobăm în 2-3 ore fără să cerem ofertă de la dealer sau deviz de la service înainte de analiză. Dacă ai venit stabil și fără restanțe mari la alte credite, analizăm cererea ta direct. Dobânda este fixă pe toată durata contractului.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-nevoi-personale",
                        label: "Credit pentru nevoi personale",
                        desc: "Credit flexibil pentru orice cheltuială personală.",
                    },
                    {
                        href: "/credite/credit-pentru-reparatie",
                        label: "Credit pentru reparație",
                        desc: "Finanțezi renovarea casei cu rate fixe.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
