import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import { Check, Briefcase, User, ArrowRight, ShieldAlert } from "lucide-react";
import { refinantareSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Refinanțare Credit în Moldova - Reduci Rata Lunară | Ideal Credit",
    description:
        "Refinanțare credite nebancare și bancare în Moldova. Consolidează datoriile, reduci rata lunară. Evaluăm și cu istoric negativ. Decizie în 2-3 ore.",
    alternates: { canonical: "https://idealcredit.md/credite/refinantare" },
};

const refinantareFaqItems: FaqItem[] = [
    {
        question: "Pot refinanța un credit de la altă IFN, nu doar de la bancă?",
        answer: "Da. Preluăm credite de la orice instituție financiară - nebancară sau bancară. Nu contează de unde ai creditul actual.",
    },
    {
        question: "Îmi scade neapărat rata dacă refinanțez?",
        answer: "Depinde de condițiile contractului tău actual. Calculăm împreună și îți prezentăm numerele concrete înainte de orice decizie - dacă refinanțarea nu are sens financiar pentru tine, îți spunem direct.",
    },
    {
        question: "Pot refinanța dacă am întârzieri la plată?",
        answer: "Evaluăm individual. Istoricul negativ nu este refuz automat. Analizăm vechimea incidentului, cauza și situația actuală de venit.",
    },
    {
        question: "Ce documente sunt necesare pentru refinanțare?",
        answer: "Contractul de credit actual, extrasul de cont, actul de identitate. Pentru credit de afaceri - și actele firmei (SRL/ÎI). Nu cerem mai mult decât este necesar.",
    },
    {
        question: "Pot refinanța mai multe credite într-unul singur?",
        answer: "Da. Consolidarea mai multor credite într-unul singur este unul dintre cele mai frecvente motive de refinanțare - o singură rată, un singur termen, mai puțin stres.",
    },
    {
        question: "Există penalitate de rambursare anticipată la creditul actual?",
        answer: "Asta depinde de contractul tău actual, nu de noi. Verificăm împreună această clauză înainte de a lua orice decizie - nu vrem să refinanțezi dacă costul total e mai mare.",
    },
];

const refinantareFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: refinantareFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const worthRefinancingItems = [
    "Plătești rate la 2 sau mai multe credite și vrei să simplifici",
    "Rata actuală consumă prea mult din venitul sau profitul lunar",
    "Ai întârzieri și vrei să restartezi cu condiții mai clare",
    "Dobânda actuală este mai mare decât ce poți obține acum",
    "Vrei să eliberezi un garant de pe contractul actual",
];

const businessProducts = ["Credite IFN pentru SRL și ÎI", "Credite bancare pentru firme", "Linii de credit și overdraft"];

const personalProducts = ["Credite de consum nebancare", "Credite bancare personale", "Credite până la salariu"];

export default function RefinantarePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([refinantareSchema, refinantareFaqSchema]),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Refinanțare credit -<br />o singură rată, condiții mai bune
                    </>
                }
                subtitle="Preluăm credite de la alte IFN-uri sau bănci. Evaluăm și cu istoric negativ în biroul de credit."
            />

            {/* 1. Când merită refinanțarea? */}
            <section className="container">
                <h2 className="title text-center">Când merită refinanțarea?</h2>
                <div className="max-w-2xl mx-auto card flex flex-col gap-5">
                    <p className="text-sm text-gray-500">Merită dacă cel puțin unul din punctele de mai jos se aplică situației tale:</p>
                    <ul className="space-y-3">
                        {worthRefinancingItems.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 2. Ce preluăm */}
            <section className="container">
                <h2 className="title text-center">Ce credite preluăm</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                <Briefcase size={18} />
                            </span>
                            <h3 className="text-base font-semibold text-white">Pentru afaceri</h3>
                        </div>
                        <ul className="space-y-2.5">
                            {businessProducts.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                <User size={18} />
                            </span>
                            <h3 className="text-base font-semibold text-white">Pentru persoane fizice</h3>
                        </div>
                        <ul className="space-y-2.5">
                            {personalProducts.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Istoric negativ */}
            <section className="container">
                <div className="max-w-2xl mx-auto rounded-xl border border-white/8 bg-black-600/50 p-6 md:p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                            <ShieldAlert size={20} />
                        </span>
                        <h2 className="text-lg font-semibold text-white">Ce se întâmplă cu istoricul negativ?</h2>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Nu refuzăm automat cererile de refinanțare cu incident în biroul de credit.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Evaluăm trei lucruri: vechimea incidentului, cauza lui și situația curentă de venit. Un incident vechi, cu o
                        explicație clară și venituri stabile azi, nu blochează automat aprobarea.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Mulți clienți ai noștri au refinanțat după un refuz bancar. Dacă banca a spus nu, nu înseamnă că răspunsul e același
                        și la noi.
                    </p>
                </div>
            </section>

            {/* 4. Cum funcționează */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 5. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={refinantareFaqItems} />
            </section>

            {/* 6. CTA */}
            <section className="container">
                <div className="rounded-2xl border border-white/5 bg-black-600/50 p-8 md:p-10 text-center flex flex-col items-center gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Calculăm împreună dacă merită</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                            Trimite o cerere sau sună-ne. Îți prezentăm un calcul comparativ concret înainte de orice semnătură.
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
                            href="/credite/credit-pentru-afaceri-mici"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Credite pentru afaceri
                        </Link>
                        <Link
                            href="/credite/credit-pentru-nevoi-personale"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Credite personale
                        </Link>
                    </div>
                </div>
            </section>

            <WhyBento />
        </>
    );
}
