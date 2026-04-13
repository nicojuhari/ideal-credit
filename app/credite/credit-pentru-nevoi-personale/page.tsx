import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import ShortAboutUs from "@/components/ShortAboutUs";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { Check, X, Home, Tv, Activity, Cake, Plane, Zap, Hammer, Wallet, ArrowRight } from "lucide-react";
import { personalLoanSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credit pentru Nevoi Personale în Moldova | Ideal Credit",
    description:
        "Credit personal rapid în Moldova - dobândă fixă, fără comisioane ascunse. Aprobare în 1-3 ore. Până la 300.000 lei pentru orice nevoie personală.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
};

const personalFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit dacă am istoricul de credit negativ?",
        answer: "Evaluăm individual. Un incident din trecut nu înseamnă refuz automat. Contează situația actuală - venit stabil, capacitate de rambursare și comportamentul recent.",
    },
    {
        question: "Cât pot împrumuta fără garanții?",
        answer: "Depinde de venitul tău și profilul de risc. Comunicăm limita clară înainte de cererea formală - nu îți pierzi timpul cu un dosar complet dacă suma nu e accesibilă fără garanții.",
    },
    {
        question: "Trebuie neapărat adeverință de salariu?",
        answer: "Un document de venit este recomandat, dar evaluăm și alte surse: pensie, activitate independentă, venituri din chirie. Discutăm ce ai disponibil înainte de a cere documente.",
    },
    {
        question: "Pot lua un nou credit dacă am deja unul activ?",
        answer: "Da, dacă capacitatea de rambursare o permite. Evaluăm toate obligațiile existente și suma totală care poate fi gestionată confortabil.",
    },
    {
        question: "Cum primesc banii după aprobare?",
        answer: "Virement bancar sau numerar la birou - alegem împreună ce e mai convenabil pentru tine.",
    },
    {
        question: "Pot rambursa creditul mai devreme?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată - nicio penalitate.",
    },
];

const personalFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: personalFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const useCases = [
    {
        icon: Home,
        label: "Renovare acasă",
        href: "/credite/credit-pentru-reparatie",
    },
    {
        icon: Tv,
        label: "Electrocasnice, mobilă",
        href: null,
    },
    {
        icon: Activity,
        label: "Tratament medical",
        href: null,
    },
    {
        icon: Cake,
        label: "Nuntă, botez, eveniment",
        href: null,
    },
    {
        icon: Plane,
        label: "Vacanță planificată",
        href: null,
    },
    {
        icon: Zap,
        label: "Urgențe financiare",
        href: "/credite/credit-pina-la-salariu",
    },
];

const relatedProducts = [
    {
        href: "/credite/credit-pentru-reparatie",
        label: "Credit reparație",
        desc: "Renovezi cu rate fixe și costuri clare.",
        icon: Hammer,
    },
    {
        href: "/credite/credit-pina-la-salariu",
        label: "Până la salariu",
        desc: "Sumă mică acoperită rapid, rambursare la următorul salariu.",
        icon: Wallet,
    },
    {
        href: "/credite/refinantare",
        label: "Refinanțare",
        desc: "Consolidezi creditele existente, reduci rata lunară.",
        icon: ArrowRight,
    },
];

export default function CreditNevoiPersonalePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([personalLoanSchema, personalFaqSchema]),
                }}
            />

            {/* Hero */}
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1 className="font-semibold text-center text-4xl md:text-8xl">
                        Credit pentru nevoi personale
                    </h1>
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Bani pentru orice nevoie, fără destinație impusă.
                        Dobândă fixă, costuri clare, decizie în 1-3 ore.
                    </p>
                    <MainCTA className="my-18 md:mb-24" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>

            {/* 1. Când folosești un credit personal */}
            <section className="container">
                <h2 className="title text-center">Când folosești un credit personal</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {useCases.map(({ icon: Icon, label, href }) => {
                        const content = (
                            <>
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                                    <Icon size={22} />
                                </span>
                                <span className="text-sm font-medium text-white/80 text-center leading-snug">{label}</span>
                            </>
                        );
                        return href ? (
                            <Link
                                key={label}
                                href={href}
                                className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50 hover:border-white/15 hover:bg-black-600 transition-colors"
                            >
                                {content}
                            </Link>
                        ) : (
                            <div
                                key={label}
                                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50"
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 2. Ce nu ți se cere */}
            <section className="container">
                <div className="max-w-2xl mx-auto card flex flex-col gap-5">
                    <h2 className="text-xl font-semibold text-white/90">Ce nu ți se cere</h2>
                    <ul className="space-y-3">
                        {[
                            "Garant obligatoriu pentru sume mici",
                            "Destinație specifică a banilor - folosești cum ai nevoie",
                            "Verificare exclusivă la biroul de credit - evaluăm situația reală",
                            "Comisioane de analiză sau de deschidere a dosarului",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                                <X className="w-4 h-4 shrink-0 text-red-400/80 mt-0.5" strokeWidth={2.5} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Condiții */}
            <section className="container">
                <h2 className="title text-center">Condiții de bază</h2>
                <div className="max-w-lg mx-auto card flex flex-col gap-4">
                    {[
                        "Vârsta de la 23 de ani",
                        "Sursă de venit stabilă (angajat, pensionar, antreprenor)",
                        "Buletin de identitate valabil",
                        "Posibil garant sau gaj în funcție de suma solicitată",
                    ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                            <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                            {item}
                        </div>
                    ))}
                </div>
                <Info className="mt-6">
                    Garanțiile depind de suma solicitată și profilul de risc. Comunicăm asta clar înainte de semnare - fără surprize.
                </Info>
            </section>

            {/* 4. Cum funcționează */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 5. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={personalFaqItems} />
            </section>

            {/* 6. Produse înrudite */}
            <section className="container">
                <h2 className="title text-center">Produse înrudite</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedProducts.map(({ href, label, desc, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-black-600/50 hover:border-white/15 hover:bg-black-600 transition-colors duration-200"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                                <Icon size={20} />
                            </span>
                            <span className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{label}</span>
                                <span className="mt-0.5 text-xs text-white/50 leading-snug">{desc}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 7. ShortAboutUs */}
            <ShortAboutUs />
        </>
    );
}
