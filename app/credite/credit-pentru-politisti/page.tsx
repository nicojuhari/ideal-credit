import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru polițiști și pensionari MAI | Ideal Credit",
    description:
        "Credit pentru polițiști și pensionari MAI din Moldova - condiții adaptate, dobândă fixă, aprobare în 2-3 ore. Sume până la 300.000 lei. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-politisti" },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot aplica dacă sunt pensionar MAI cu pensie stabilă?",
        answer: "Da. Evaluăm cererile de la pensionari MAI cu pensie demonstrabilă. Pensia din sistemul MAI este considerată venit stabil în procesul de analiză.",
    },
    {
        question: "Ce documente aduc de la angajator?",
        answer: "Legitimația de polițist sau talon de pensie MAI și o adeverință de salariu sau pensie. Nu cerem documente suplimentare dacă dosarul de bază este complet.",
    },
    {
        question: "Este obligatorie garanția?",
        answer: "Nu întotdeauna. Pentru sume mai mici nu cerem garanție. Pentru sume mai mari poate fi necesară garant personal sau gaj imobil. Comunicăm cerința înainte de depunerea dosarului.",
    },
    {
        question: "Pot lua credit dacă am deja un credit activ la altă instituție?",
        answer: "Da, dacă capacitatea de rambursare o permite. Evaluăm toate obligațiile existente și stabilim suma care poate fi gestionată din veniturile tale lunare.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Decizia se ia în 2-3 ore pentru dosarele complete. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi lucrătoare.",
    },
    {
        question: "Pot rambursa creditul mai devreme fără penalități?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată - fără nicio penalitate de rambursare timpurie.",
    },
];

export default function CreditPolitistiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru polițiști"}
                subtitle="Credit pentru angajații și pensionarii MAI din Moldova - condiții clare, decizie în 2-3 ore, dobândă fixă."
            />

            <CreditPageContent
                eligibilityTitle="Condiții de creditare"
                eligibleIf={[
                    "Vârsta între 23 și 65 de ani",
                    "Angajat (minim 12 luni) sau pensionar MAI",
                    "Buletin de identitate valabil",
                    "Fără datorii la alte credite",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Legitimație de polițist sau pensionar MAI",
                    "Adeverință de salariu sau talon de pensie",
                    "Carnet de muncă (opțional)",
                ]}
                note="Evaluăm și cererile de la pensionarii MAI cu pensie stabilă și demonstrabilă."
                description={{
                    title: "Credit pentru polițiști și pensionari MAI din Moldova",
                    paragraphs: [
                        "Creditul pentru polițiști este destinat personalului activ și pensionarilor Ministerului Afacerilor Interne din Moldova. Statutul de angajat sau pensionar MAI cu venit garantat de stat simplifică procesul de evaluare - dosarul este mai simplu, iar decizia vine mai rapid față de un client fără venit fix.",
                        "Banii pot fi folosiți pentru orice nevoie personală - renovare, tratament medical, cheltuieli de familie, achiziție auto sau orice altă situație. Dobânda este fixă pe toată durata contractului. Aprobăm în 2-3 ore, iar fondurile sunt disponibile în aceeași zi dacă dosarul este complet.",
                    ],
                }}
                relatedLinks={[
                    { href: "/credite/credit-pentru-bugetari", label: "Credit pentru angajați la stat", desc: "Toate categoriile de angajați bugetari." },
                    { href: "/credite/credit-pentru-militari", label: "Credit pentru militari", desc: "Condiții similare pentru personalul Ministerului Apărării." },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={faqItems} />

            <WhyBento />
        </>
    );
}
