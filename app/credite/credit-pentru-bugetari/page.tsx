import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import Info from "@/components/ui/Info";
import { Check, Stethoscope, Shield, BadgeCheck, ArrowRight } from "lucide-react";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credite pentru Bugetari - Medici, Militari, Polițiști | Ideal Credit",
    description:
        "Credite pentru angajați la stat: medici, militari, polițiști și alți bugetari. Condiții adaptate venitului bugetar, dobândă fixă, aprobare rapidă.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-bugetari" },
};

const bugetariFaqItems: FaqItem[] = [
    {
        question: "Ce documente sunt necesare pentru un credit bugetar?",
        answer: "Buletin de identitate valabil, adeverință de salariu sau extras din sistemul de salarizare și, în unele cazuri, un document care confirmă angajarea la stat. Nu cerem mai mult decât este necesar.",
    },
    {
        question: "Pot obține credit dacă sunt în perioadă de probă?",
        answer: "Evaluăm individual. Dacă ai contract de muncă și venit demonstrabil, discutăm. Perioada de probă nu este un refuz automat.",
    },
    {
        question: "Pot lua credit dacă am deja un credit la altă instituție?",
        answer: "Da, dacă capacitatea de rambursare o permite. Evaluăm toate obligațiile existente și stabilim suma care poate fi gestionată confortabil din veniturile tale.",
    },
    {
        question: "Este garanția obligatorie pentru bugetari?",
        answer: "Pentru sume mici, nu. Pentru sume mai mari, poate fi necesară fidejusiune sau gaj imobil. Comunicăm cerința înainte de depunerea dosarului.",
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

const bugetariFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bugetariFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

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
        note: "Venit stabil și previzibil - condiții adaptate salariului din sistemul public.",
    },
    {
        icon: Shield,
        title: "Militari și polițiști",
        items: [
            "Ofițeri și subofițeri ai Armatei Naționale",
            "Angajați ai Ministerului Afacerilor Interne",
            "Personal al Serviciului de Protecție și Pază de Stat",
        ],
        note: "Statut profesional stabil și venit garantat de stat.",
    },
    {
        icon: BadgeCheck,
        title: "Alți angajați bugetari",
        items: [
            "Profesori, educatori, personal didactic",
            "Funcționari publici și angajați ai administrației locale",
            "Angajați ai instituțiilor de stat și autorităților publice",
        ],
        note: "Orice angajat cu contract de muncă în sectorul bugetar poate aplica.",
    },
];

const commonConditions = [
    "Vârsta de la 23 de ani",
    "Contract de muncă activ în sectorul bugetar",
    "Sursă de venit stabilă demonstrabilă",
    "Buletin de identitate valabil",
];

export default function CreditBugetariPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([bugetariLoanSchema, bugetariFaqSchema]),
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

            {/* 1. Categorii */}
            <section className="container">
                <h2 className="title text-center">Cine poate aplica</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map(({ icon: Icon, title, items, note }) => (
                        <div key={title} className="flex flex-col gap-4 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
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
                            <p className="text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-3">{note}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Condiții comune */}
            <section className="container">
                <h2 className="title text-center">Condiții de bază</h2>
                <div className="max-w-lg mx-auto card flex flex-col gap-4">
                    {commonConditions.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                            <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                            {item}
                        </div>
                    ))}
                </div>
                <Info className="mt-6">
                    Suma maximă este până la 300.000 lei. Garanțiile depind de suma solicitată - comunicăm cerința înainte de depunerea
                    dosarului.
                </Info>
            </section>

            {/* 3. Cum funcționează */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 4. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={bugetariFaqItems} />
            </section>

            {/* 5. CTA */}
            <section className="container">
                <div className="rounded-2xl border border-white/5 bg-black-600/50 p-8 md:p-10 text-center flex flex-col items-center gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Aplică online în 5 minute</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                            Decizie în 2-3 ore. Dacă documentele sunt complete, banii pot fi disponibili în aceeași zi.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/cerere-de-credit-online"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-gradient text-black font-semibold text-sm shadow-glow-sm hover:brightness-110 transition-all"
                        >
                            Cerere online <ArrowRight size={15} />
                        </Link>
                        <Link
                            href="/credite/credit-pentru-nevoi-personale"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Toate creditele personale
                        </Link>
                    </div>
                </div>
            </section>

            <WhyBento />
        </>
    );
}
