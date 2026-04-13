import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import ShortAboutUs from "@/components/ShortAboutUs";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { Check, X, Cog, Leaf, Droplets, Sprout, TrendingUp, ArrowRight } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credit pentru Agricultură în Moldova | Ideal Credit",
    description:
        "Credit agricol pentru fermieri, SRL și ÎI din Moldova. Finanțăm tehnica agricolă, semințe, irigații și capital de lucru sezonier. Până la 400.000 lei, decizie în 1-3 ore.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
};

const agricFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit agricol dacă activitatea mea este sezonieră?",
        answer: "Da. Înțelegem că veniturile agricole sunt concentrate în anumite perioade ale anului. Structurăm graficul de rambursare în funcție de ciclul tău de producție și recoltare.",
    },
    {
        question: "Există perioadă de grație pentru creditul agricol?",
        answer: "Evaluăm posibilitatea unei perioade de grație în funcție de cultura și ciclul de producție. Dacă recolta e în toamnă, discutăm un grafic adaptat - nu o rată fixă lunară care nu ține cont de sezonalitate.",
    },
    {
        question: "Ce documente sunt necesare pentru un credit agricol?",
        answer: "Actele de înregistrare (SRL/ÎI sau gospodărie țărănească), extrase bancare pentru ultimele 3 luni și documentele terenurilor agricole (titlu de proprietate sau contract de arendă). Nu cerem plan de afaceri detaliat.",
    },
    {
        question: "Pot obține credit pentru achiziția de tehnica agricolă?",
        answer: "Da. Tractoare, combine, remorci, sisteme de irigații - finanțăm echipamentele direct prin creditul agricol sau prin creditul investițional, în funcție de suma și termenul dorit.",
    },
    {
        question: "Pot accesa creditul dacă arend terenul, nu îl dețin?",
        answer: "Da, contractul de arendă este suficient ca dovadă a activității. Evaluăm capacitatea de producție și istoricul agricol, nu doar proprietatea terenului.",
    },
    {
        question: "Pot refinanța un credit agricol existent la condiții mai bune?",
        answer: "Da. Preluăm credite agricole de la alte instituții. Evaluăm dacă refinanțarea are sens financiar și prezentăm calculul înainte de decizie.",
    },
];

const agricFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agricFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const financingCategories = [
    {
        icon: Cog,
        title: "Tehnică și utilaje",
        desc: "Tractoare, combine, remorci, pluguri, semănători, echipamente de recoltare.",
        link: { href: "/credite/credit-investitional", label: "Vezi credit investițional" },
    },
    {
        icon: Sprout,
        title: "Semințe și inputuri",
        desc: "Semințe certificate, îngrășăminte, pesticide, fungicide - tot ce ai nevoie pentru sezon.",
        link: null,
    },
    {
        icon: Droplets,
        title: "Irigații",
        desc: "Sisteme de irigații prin picurare, aspersoare, pompe, infrastructură de udare.",
        link: null,
    },
    {
        icon: Leaf,
        title: "Lucrări agricole",
        desc: "Arat, semănat, tratamente fitosanitare, recoltare - acoperi costurile înainte de încasări.",
        link: null,
    },
    {
        icon: TrendingUp,
        title: "Capital de lucru sezonier",
        desc: "Salarii muncitori sezonieri, transport, depozitare, combustibil, costuri operative.",
        link: null,
    },
];

export default function CreditAgriculturaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([businessCreditSchema, agricFaqSchema]),
                }}
            />

            {/* Hero */}
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1
                        className="font-semibold text-center text-5xl md:text-8xl"
                        dangerouslySetInnerHTML={{ __html: "Credit pentru<br />agricultură" }}
                    />
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Finanțare pentru fermieri, SRL-uri și gospodării individuale din Moldova.
                        Grafic adaptat sezonalității, până la 400.000 lei.
                    </p>
                    <MainCTA className="my-18 md:mb-24" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>

            {/* 1. Ce finanțezi */}
            <section className="container">
                <h2 className="title text-center">Ce poți finanța</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {financingCategories.map(({ icon: Icon, title, desc, link }) => (
                        <div key={title} className="flex flex-col gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                    <Icon size={20} />
                                </span>
                                <h3 className="text-base font-semibold text-white/90">{title}</h3>
                            </div>
                            <p className="text-sm text-white/55 leading-relaxed flex-1">{desc}</p>
                            {link && (
                                <Link
                                    href={link.href}
                                    className="inline-flex items-center gap-1.5 text-xs text-brand-500 hover:text-brand-400 transition-colors font-medium"
                                >
                                    {link.label} <ArrowRight size={12} />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Specificul creditului agricol */}
            <section className="container">
                <h2 className="title text-center">Adaptat la ritmul agriculturii</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white/90">Grafic de rambursare sezonier</h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Agricultura nu produce venituri uniform pe parcursul anului. Știm asta. Structurăm graficul de rambursare în funcție de ciclul tău de producție - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare și vânzare.
                        </p>
                        <ul className="space-y-2 mt-1">
                            {[
                                "Rate adaptate sezonului de încasări",
                                "Posibilitate de perioadă de grație până la recoltă",
                                "Termen de până la 60 luni pentru investiții mari",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                                    <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white/90">Cum evaluăm activitatea agricolă</h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Nu evaluăm doar un salariu lunar fix. Analizăm imaginea completă a activității tale agricole.
                        </p>
                        <ul className="space-y-2 mt-1">
                            {[
                                "Suprafața cultivată și culturile practicate",
                                "Istoricul de producție și vânzări din sezonul anterior",
                                "Contracte de arendă sau titluri de proprietate",
                                "Extrase bancare și fluxul de numerar anual",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                                    <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Eligibilitate */}
            <section className="container">
                <h2 className="title text-center">Condiții de eligibilitate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white/90">Eligibil dacă</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Activitate agricolă înregistrată (SRL, ÎI, GT, gospodărie țărănească)",
                                "Activitate demonstrabilă în ultimul sezon",
                                "Teren agricol în proprietate sau în arendă",
                                "Extrase bancare sau alte dovezi de vânzări agricole",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white/90">Nu este necesar</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Plan de afaceri detaliat",
                                "Proprietate obligatorie asupra terenului (arenda e suficientă)",
                                "Venit lunar fix și uniform",
                                "Garanție imobiliară obligatorie (depinde de sumă)",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                                    <X className="w-4 h-4 shrink-0 text-red-400/80 mt-0.5" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Info className="mt-6">
                    În funcție de suma solicitată și evaluarea riscului, pot fi necesare garanții suplimentare: fidejusiune sau gaj imobil.
                </Info>
            </section>

            {/* 4. HowItWorks */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 5. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={agricFaqItems} />
            </section>

            {/* 6. CTA */}
            <section className="container">
                <div className="rounded-2xl border border-white/5 bg-black-600/50 p-8 md:p-10 text-center flex flex-col items-center gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Pregătit pentru sezon?</h2>
                        <p className="text-white/55 text-sm md:text-base max-w-md mx-auto">
                            Aplică înainte de sezon pentru a fi pregătit cu inputurile și utilajele necesare.
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
                            href="/credite/credit-investitional"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Credit pentru utilaje agricole
                        </Link>
                    </div>
                </div>
            </section>

            <ShortAboutUs />
        </>
    );
}
