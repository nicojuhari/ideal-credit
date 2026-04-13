import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru militari în Moldova | Ideal Credit",
    description:
        "Credit pentru militari în Moldova - condiții clare, decizie rapidă și dobândă transparentă. Sume flexibile până la 300.000 lei. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-militari" },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot aplica dacă sunt pensionar al Ministerului Apărării?",
        answer: "Da. Evaluăm cererile de la pensionari MAp cu pensie stabilă și demonstrabilă. Pensia militară este considerată venit stabil pentru scopul analizei creditului.",
    },
    {
        question: "Ce documente trebuie să aduc de la unitatea militară?",
        answer: "O adeverință de salariu emisă de unitatea militară și legitimația militară. Nu cerem documente suplimentare dacă dosarul de bază este complet.",
    },
    {
        question: "Pot obține credit fără garant?",
        answer: "Pentru sume mai mici, garanția nu este necesară. Pentru sume mai mari, poate fi cerută garant personal sau gaj imobil. Comunicăm cerința clar înainte de depunerea dosarului.",
    },
    {
        question: "Pot lua credit dacă am deja un credit activ?",
        answer: "Da, dacă capacitatea de rambursare o permite. Evaluăm toate obligațiile existente și stabilim suma care poate fi gestionată confortabil din veniturile tale.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Decizia se ia în 2-3 ore pentru dosarele complete depuse în programul de lucru. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi.",
    },
    {
        question: "Dobânda se schimbă pe parcursul contractului?",
        answer: "Nu. Dobânda este fixă de la prima până la ultima rată. Suma lunară pe care o semnezi nu se modifică pe toată durata creditului.",
    },
];

export default function CreditMilitariPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru militari"}
                subtitle="Credit pentru militarii din Republica Moldova - condiții clare, decizie în 2-3 ore și dobândă fixă."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta între 23 și 65 de ani",
                    "Angajat al Ministerului Apărării, de minim 12 luni",
                    "Buletin de identitate valabil",
                    "Fără restanțe la alte credite",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Legitimație militară",
                    "Adeverință de salariu emisă de unitatea militară",
                    "Carnet de muncă (opțional)",
                ]}
                note="Oferim condiții adaptate pentru personalul militar activ și pensionarii din sistem."
                description={{
                    title: "Credit pentru militari din Republica Moldova",
                    paragraphs: [
                        "Creditul pentru militari este destinat personalului activ și pensionarilor Ministerului Apărării din Moldova. Angajarea la stat cu venit garantat și stabil permite o evaluare mai rapidă și mai simplă - nu cerem documente suplimentare față de dosarul de bază.",
                        "Aprobăm în 2-3 ore. Banii pot fi folosiți pentru orice nevoie personală - renovarea locuinței, un tratament medical, un eveniment de familie sau orice situație neprevăzută. Dobânda este fixă, rata lunară nu se schimbă pe toată durata contractului.",
                    ],
                }}
                relatedLinks={[
                    { href: "/credite/credit-pentru-bugetari", label: "Credit pentru angajați la stat", desc: "Condiții similare pentru toți angajații din sectorul bugetar." },
                    { href: "/credite/credit-pentru-nevoi-personale", label: "Credit pentru nevoi personale", desc: "Credit flexibil pentru orice cheltuială personală." },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
