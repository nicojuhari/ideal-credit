import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pînă la salariu | Credit urgent | Ideal Credit",
    description:
        "Credit pînă la salariu pentru persoanele angajate oficial și cu venit constant. Aprobare rapidă, dobânzi avantajoase și transparență totală. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pina-la-salariu" },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot obține credit până la salariu fără adeverință de salariu?",
        answer: "Adeverința de salariu este documentul standard, dar acceptăm și extrasul de card salarial sau contractul de muncă. Dacă ai o altă dovadă de venit, discutăm înainte de a refuza cererea.",
    },
    {
        question: "Care este suma maximă pe care o pot obține?",
        answer: "Suma maximă depinde de venitul net lunar - în general până la un salariu net. Comunicăm limita exactă după ce analizăm venitul tău, fără să pierzi timp cu un dosar complet.",
    },
    {
        question: "Când trebuie să returnez banii?",
        answer: "La data primirii salariului - de obicei în 15-30 de zile. Dacă ai nevoie de mai mult timp, putem structura rambursarea în 2-3 rate mici pe lunile următoare.",
    },
    {
        question: "Ce se întâmplă dacă nu pot plăti la timp?",
        answer: "Contactează-ne înainte de scadență. Discutăm o soluție - restructurare sau prelungire a termenului. Penalitățile pentru întârziere sunt prezentate clar în contract înainte de semnare.",
    },
    {
        question: "Pot rambursa creditul mai devreme?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru zilele efectiv utilizate - nicio penalitate de rambursare timpurie.",
    },
    {
        question: "Cât de repede primesc banii după aprobare?",
        answer: "Dacă documentele sunt complete, decizia se ia în câteva ore. Banii pot fi disponibili în aceeași zi lucrătoare - transfer bancar sau numerar la biroul nostru.",
    },
];

export default function CreditPinaLaSalariuPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pînă la salariu"}
                subtitle="Oferim credit pînă la salariu pentru persoanele angajate oficial. Soluția rapidă pentru cheltuieli neprevăzute."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta de la 23 de ani",
                    "Angajat oficial cu salariu stabil",
                    "Buletin de identitate valabil",
                    "Fără restanțe la credite active",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Adeverință de salariu sau extras de card salarial",
                    "Carnet de muncă sau contract de muncă (opțional)",
                ]}
                note="Suma maximă depinde de venitul net lunar. Rambursarea se face la data următorului salariu sau în rate mici pe 2-3 luni."
                description={{
                    title: "Credit până la salariu - soluție rapidă pentru urgențe",
                    paragraphs: [
                        "Creditul până la salariu este o finanțare pe termen scurt pentru angajații cu venit stabil care au nevoie de bani rapizi pentru o cheltuială neprevăzută - o reparație urgentă, o factură medicală, o situație de familie. Suma este mică, termenul este scurt, procesul este simplu.",
                        "Aprobăm în câteva ore. Nu ai nevoie de garant, nu ai nevoie de destinație justificată. Banii sunt ai tăi să-i folosești cum ai nevoie. Dacă lucrezi la același angajator de mai mult timp, procesul este și mai rapid. Rambursezi la salariu sau în 2-3 rate mici - alegem împreună varianta care se potrivește situației tale.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-nevoi-personale",
                        label: "Credit pentru nevoi personale",
                        desc: "Sume mai mari pentru orice nevoie, cu termen mai lung.",
                    },
                    {
                        href: "/credite/credit-pentru-reparatie",
                        label: "Credit pentru reparație",
                        desc: "Finanțezi renovarea locuinței cu rate fixe.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
