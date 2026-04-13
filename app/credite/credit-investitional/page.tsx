import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import Info from "@/components/ui/Info";
import { Check, X, Cog, Truck, Store, Monitor, Armchair, ArrowRight } from "lucide-react";
import { investitionalSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credit Investițional pentru Afaceri în Moldova | Ideal Credit",
    description:
        "Finanțăm echipamente, extinderi și modernizări pentru afaceri din Moldova. Până la 400.000 lei, termen până la 60 luni, decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-investitional" },
};

const investFaqItems: FaqItem[] = [
    {
        question: "Pot finanța orice tip de echipament sau utilaj?",
        answer: "Da, nu suntem limitați la categorii specifice. Finanțăm mașini industriale, tehnica agricolă, echipamente horeca, sisteme IT, vehicule comerciale și altele.",
    },
    {
        question: "Care este termenul maxim pentru un credit investițional?",
        answer: "Până la 60 luni (5 ani). Termenul mai lung reduce rata lunară și face investiția mai ușor de gestionat din perspectiva fluxului de numerar.",
    },
    {
        question: "Bunul achiziționat devine proprietatea mea imediat?",
        answer: "Da. Spre deosebire de leasing, la credit investițional bunul este al tău din prima zi. Nicio restricție de utilizare, nicio clauză de răscumpărare.",
    },
    {
        question: "Pot rambursa creditul anticipat dacă afacerea merge bine?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată.",
    },
    {
        question: "Ce garanții sunt necesare pentru un credit investițional?",
        answer: "Depinde de sumă. Pentru sume mai mari, cerem fidejusiune sau gaj imobil. Comunicăm cerința de garanție înainte de depunerea dosarului.",
    },
    {
        question: "Pot combina creditul investițional cu capital de lucru?",
        answer: "Evaluăm situația totală a firmei și structurăm soluția adecvată. În unele cazuri, finanțăm ambele nevoi prin același dosar.",
    },
];

const investFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: investFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const financingCategories = [
    {
        icon: Cog,
        title: "Echipamente și utilaje",
        desc: "Mașini industriale, linii de producție, tehnica agricolă, echipamente de prelucrare.",
    },
    {
        icon: Truck,
        title: "Vehicule comerciale",
        desc: "Autoutilitare, camioane, vehicule de lucru, transport marfă.",
    },
    {
        icon: Store,
        title: "Renovare spațiu comercial",
        desc: "Birouri, depozite, magazine, restaurante, hoteluri - modernizare sau extindere.",
    },
    {
        icon: Monitor,
        title: "Tehnologie și IT",
        desc: "Sisteme informatice, software specializat, echipamente de comunicații.",
    },
    {
        icon: Armchair,
        title: "Mobilier și dotări",
        desc: "Dotarea completă a spațiilor: hoteluri, restaurante, birouri, saloane.",
    },
];

const comparisonRows = [
    { label: "Proprietatea bunului", ifn: "Imediată, din prima zi", leasing: "La finalul contractului" },
    { label: "Flexibilitate bunuri", ifn: "Orice tip de bun", leasing: "Vehicule și echipamente specifice" },
    { label: "Sumă disponibilă", ifn: "Până la 400.000 lei", leasing: "Variabilă, limitată de furnizor" },
    { label: "Rambursare anticipată", ifn: "Gratuită", leasing: "Cu penalizări" },
    { label: "Restricții de utilizare", ifn: "Nicio restricție", leasing: "Kilometraj, modificări interzise" },
];

export default function CreditInvestitionalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([investitionalSchema, investFaqSchema]),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Credit
                        <br />
                        investițional
                    </>
                }
                subtitle="Cumperi echipamente, extinzi spațiul sau modernizezi linia de producție. Termen până la 60 luni, rată fixă, costuri clare."
            />

            {/* 1. Ce finanțezi */}
            <section className="container">
                <h2 className="title text-center">Ce poți finanța</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {financingCategories.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 mt-0.5">
                                <Icon size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Info className="mt-6">
                    Nu ești sigur că bunul tău se califică? Contactează-ne înainte de a depune dosarul - evaluăm în câteva minute.
                </Info>
            </section>

            {/* 2. Eligibilitate */}
            <section className="container">
                <h2 className="title text-center">Condiții de eligibilitate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Eligibil dacă</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                                "Activitate economică de cel puțin 6 luni",
                                "Investiția are legătură directă cu activitatea firmei",
                                "Extrase bancare care arată rulaj constant",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Nu este necesar</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Plan de afaceri detaliat",
                                "Activitate de 2+ ani",
                                "Garanție imobiliară obligatorie (depinde de sumă)",
                                "Proforma sau factură de la furnizor pentru aprobare",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <X className="w-4 h-4 shrink-0 text-red-400/80 mt-0.5" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. HowItWorks */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 4. Credit investițional vs. leasing */}
            <section className="container">
                <h2 className="title text-center">Credit investițional vs. leasing</h2>
                <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5 bg-black-600/80">
                                <th className="text-left px-5 py-3.5 text-gray-500 font-medium w-2/5"></th>
                                <th className="px-5 py-3.5 text-brand-500 font-semibold text-center">Ideal Credit</th>
                                <th className="px-5 py-3.5 text-gray-500 font-medium text-center">Leasing</th>
                            </tr>
                        </thead>
                        <tbody className="bg-black-600/40">
                            {comparisonRows.map((row, i) => (
                                <tr key={row.label} className={i < comparisonRows.length - 1 ? "border-b border-white/5" : ""}>
                                    <td className="px-5 py-4 text-gray-500">{row.label}</td>
                                    <td className="px-5 py-4 text-green-400 text-center font-medium">{row.ifn}</td>
                                    <td className="px-5 py-4 text-gray-500 text-center">{row.leasing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={investFaqItems} />
            </section>

            {/* 6. CTA */}
            <section className="container">
                <div className="rounded-2xl border border-white/5 bg-black-600/50 p-8 md:p-10 text-center flex flex-col items-center gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Investiția ta, rata ta lunară</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                            Calculează cu calculatorul de mai sus sau trimite o cerere - te contactăm în câteva ore cu o ofertă concretă.
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
                            Toate creditele pentru afaceri
                        </Link>
                    </div>
                </div>
            </section>

            <WhyBento />
        </>
    );
}
