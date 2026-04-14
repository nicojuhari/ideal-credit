import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { Check, Stethoscope, Shield, BadgeCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Credite pentru Bugetari - Medici, Militari, Polițiști | Ideal Credit",
    description:
        "Credite pentru angajați la stat: medici, militari, polițiști și alți bugetari. Condiții adaptate venitului bugetar, dobândă fixă, aprobare rapidă.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-bugetari" },
};

const bugetariFaqItems: FaqItem[] = [
    {
        question: "Ce documente sunt necesare pentru un credit bugetar?",
        answer: "Buletin de identitate valabil și un document de confirmare a veniturilor - adeverință de salariu, extras din sistemul de salarizare sau verificare BIC. Nu cerem mai mult decât este necesar.",
    },
    {
        question: "Pot obține credit dacă sunt în perioadă de probă?",
        answer: "Analizăm individual. Dacă ai contract de muncă și venit demonstrabil, discutăm. Perioada de probă nu este un refuz automat.",
    },
    {
        question: "Pot lua credit dacă am deja un credit la altă instituție?",
        answer: "Da, dacă capacitatea de rambursare o permite. Analizăm toate obligațiile existente și stabilim suma care poate fi gestionată confortabil din veniturile tale.",
    },
    {
        question: "Este garanția obligatorie pentru bugetari?",
        answer: "Pentru sume mici, nu. Pentru sume mai mari, poate fi necesară garant personal sau gaj imobil. Comunicăm cerința înainte de depunerea dosarului.",
    },
    {
        question: "Cât timp durează aprobarea?",
        answer: "În general 2-3 ore pentru dosarele complete depuse în programul de lucru. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi.",
    },
    {
        question: "Dobânda este fixă pe toată durata creditului?",
        answer: "Da. Rata lunară nu se schimbă de la prima până la ultima plată. Știi exact cât plătești înainte de a semna.",
    },
];

const bugetariLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru angajați bugetari",
    description: "Credite pentru medici, militari, polițiști și alți angajați la stat din Moldova.",
    amount: {
        "@type": "MonetaryAmount",
        currency: "MDL",
        minValue: 10000,
        maxValue: 300000,
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        unitText: "Months",
        minValue: 6,
        maxValue: 60,
    },
};

const categories = [
    {
        icon: Stethoscope,
        title: "Medici și personal medical",
        items: [
            "Medici, asistenți medicali, farmaciști",
            "Angajați ai spitalelor și policlinicilor de stat",
            "Personal auxiliar din sistemul de sănătate",
        ],
    },
    {
        icon: Shield,
        title: "Militari și polițiști",
        items: [
            "Ofițeri și subofițeri ai Armatei Naționale",
            "Angajați ai Ministerului Afacerilor Interne",
            "Personal al Serviciului de Protecție și Pază de Stat",
        ],
    },
    {
        icon: BadgeCheck,
        title: "Alți angajați bugetari",
        items: [
            "Profesori, educatori, personal didactic",
            "Funcționari publici și angajați ai administrației locale",
            "Angajați ai instituțiilor de stat și autorităților publice",
        ],
    },
];

export default function CreditBugetariPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(bugetariLoanSchema),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Credite pentru
                        <br />
                        angajați la stat
                    </>
                }
                subtitle="Condiții adaptate pentru medici, militari, polițiști și alți angajați bugetari. Dobândă fixă, aprobare în 2-3 ore."
            />

            {/* Categorii */}
            <section className="container">
                <h2 className="title text-center">Cine poate aplica</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map(({ icon: Icon, title, items }) => (
                        <div key={title} className="flex flex-col gap-4 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <Icon size={20} />
                                </span>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                            </div>
                            <ul className="space-y-2 flex-1">
                                {items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                                        <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <CreditPageContent
                eligibilityTitle="Condiții generale"
                eligibleIf={[
                    "Vârsta de la 23 de ani",
                    "Contract de muncă activ în sectorul bugetar",
                    "Sursă de venit stabilă demonstrabilă",
                    "Buletin de identitate valabil",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Document de confirmare a veniturilor (adeverință de salariu, extras din sistemul de salarizare, verificare BIC)",
                    "Legitimație de serviciu (dacă există)",
                    "Actele fidejusorului sau bunului gajat (dacă este cazul)",
                ]}
                note="Condițiile exacte (sumă, termen, garanții) se stabilesc în funcție de venit și situația financiară a fiecărui solicitant."
                description={{
                    title: "Credit pentru angajați la stat în Moldova",
                    paragraphs: [
                        "Angajații din sectorul bugetar - medici, militari, polițiști, profesori, funcționari publici - au un avantaj clar în procesul de creditare: venitul stabil și garantat de stat reduce riscul și simplifică analiza dosarului. La Ideal Credit ținăm cont de acest avantaj în analiza fiecărei cereri.",
                        "Creditul pentru bugetari poate fi folosit pentru orice nevoie personală - renovare, cumpărare auto, cheltuieli medicale, un eveniment de familie sau orice situație neprevăzută. Nu cerem justificarea destinației banilor. Termenul poate fi de până la 60 de luni, iar suma se stabilește în funcție de venit și situația financiară a fiecărui solicitant.",
                        "Nu este obligatorie garanția pentru sume mai mici. Documentele necesare: buletin, confirmare de venituri și legitimație de serviciu dacă o ai. Decizia se ia în 2-3 ore, iar banii sunt disponibili în aceeași zi dacă dosarul este complet.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-medici",
                        label: "Credit pentru medici",
                        desc: "Condiții specifice pentru personalul medical.",
                    },
                    {
                        href: "/credite/credit-pentru-militari",
                        label: "Credit pentru militari",
                        desc: "Condiții pentru angajații Ministerului Apărării.",
                    },
                    {
                        href: "/credite/credit-pentru-politisti",
                        label: "Credit pentru polițiști",
                        desc: "Condiții pentru angajații și pensionarii MAI.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={bugetariFaqItems} />

            {/* CTA */}

            <WhyBento />
        </>
    );
}
