import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru medici | Rapid și Avantajos | Ideal Credit",
    description:
        "Credit pentru medici - condiții speciale, dobânzi avantajoase și aprobare rapidă. Soluții transparente pentru medicii din Republica Moldova. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-medici" },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot aplica dacă lucrez la o clinică privată, nu la un spital de stat?",
        answer: "Evaluăm individual. Dacă ai contract de muncă activ și venit stabil demonstrabil, discutăm - indiferent dacă angajatorul este public sau privat.",
    },
    {
        question: "Este obligatorie legitimația de medic?",
        answer: "Legitimația ajută la procesare mai rapidă, dar dacă nu o ai la îndemână, adeverința de salariu emisă de angajator este suficientă pentru a demonstra calitatea de angajat medical.",
    },
    {
        question: "Pot obține credit fără garant?",
        answer: "Pentru sume mai mici, garanția nu este necesară. Pentru sume mai mari, poate fi cerută fidejusiune sau gaj imobil. Comunicăm cerința înainte de depunerea dosarului.",
    },
    {
        question: "Pot folosi banii pentru orice nevoie sau trebuie să justific destinația?",
        answer: "Banii sunt ai tăi să-i folosești cum ai nevoie - cheltuieli personale, renovare, tratament, eveniment de familie sau orice altceva. Nu trebuie să justifici destinația.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Decizia se ia în 2-3 ore pentru dosarele complete. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi lucrătoare.",
    },
    {
        question: "Dobânda este fixă pe toată durata creditului?",
        answer: "Da. Rata lunară nu se schimbă de la prima până la ultima plată. Știi exact cât plătești înainte de a semna contractul.",
    },
];

export default function CreditMediciPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru medici"}
                subtitle="Credit pentru medici - finanțare personală cu rată fixă și aprobare rapidă pentru personalul medical din Moldova."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta între 23 și 55 de ani",
                    "Angajat oficial în domeniul medical, minim 24 de luni",
                    "Buletin de identitate valabil",
                    "Fără restanțe la alte credite",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Legitimație de medic sau angajat medical",
                    "Adeverință de salariu",
                    "Carnet de muncă (opțional)",
                ]}
                note="Condițiile sunt adaptate profilului profesional al medicilor cu angajare stabilă în sistemul de sănătate."
                description={{
                    title: "Credit pentru medici și personal medical din Moldova",
                    paragraphs: [
                        "Creditul pentru medici este destinat personalului medical angajat oficial - medici, asistenți medicali, farmaciști și alt personal din sistemul de sănătate. Angajarea stabilă în medicină reprezintă un avantaj semnificativ în procesul de evaluare a creditului, reducând cerințele documentare și accelerând aprobarea.",
                        "Finanțarea poate fi folosită pentru orice nevoie personală - de la renovarea locuinței sau un tratament stomatologic, la educație continuă, cursuri de specializare sau cheltuieli pentru familie. Dobânda este fixă, rata lunară nu se modifică pe toată durata contractului. Aprobăm în 2-3 ore dacă dosarul este complet.",
                    ],
                }}
                relatedLinks={[
                    { href: "/credite/credit-pentru-bugetari", label: "Credit pentru angajați la stat", desc: "Toate categoriile de angajați bugetari." },
                    { href: "/credite/credit-pentru-nevoi-personale", label: "Credit personal", desc: "Credit flexibil pentru orice nevoie." },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
