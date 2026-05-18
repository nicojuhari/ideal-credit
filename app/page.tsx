import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Briefcase, User, Check, ArrowRight, Clock } from "lucide-react";

import HeroHome from "@/components/home/HeroHome";
import StatsBar from "@/components/home/StatsBar";
import Info from "@/components/ui/Info";
import { blogPosts } from "@/lib/blog-posts";

const WhyBento = dynamic(() => import("@/components/WhyBento"));
const ServiciiList = dynamic(() => import("@/components/ServiciiList"));
const RecenziiClient = dynamic(() => import("@/components/RecenziiClient"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const PaymentMethods = dynamic(() => import("@/components/PaymentMethods"));

import { financialServiceSchema, localBusinessChisinauSchema, localBusinessCauseniSchema, howToSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credite Nebancare în Moldova | Ideal Credit",
    description:
        "Credite nebancare de la 10.000 la 300.000 lei pentru afaceri și persoane fizice din Moldova. Dobândă fixă, fără comisioane ascunse. Decizie în 1-3 ore.",
    alternates: { canonical: "https://idealcredit.md/" },
};


const businessItems = [
    "SRL, ÎI, GȚ — toate formele juridice acceptate",
    "Fără plan de afaceri obligatoriu",
    "Extrase bancare minim 3 luni",
    "Decizie în 1–2 zile lucrătoare",
];

const personalItems = [
    "Vârsta de la 23 de ani, venit stabil",
    "Buletin de identitate valabil",
    "Fără comisioane ascunse sau penalități",
    "Decizie în 2–3 ore",
];

export default function HomePage() {
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* 1. Hero cu calculator */}
            <HeroHome />

            {/* 2. Bandă cu cifre cheie */}
            <StatsBar />

            {/* 3. Segmentare afaceri / personal */}
            <section className="container">
                <h2 className="title text-center">Alege soluția potrivită pentru tine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

                    {/* Card afaceri */}
                    <div className="relative flex flex-col gap-6 rounded-2xl border border-brand-500/20 bg-black-600/60 p-7 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-brand-500/70 via-brand-500/20 to-transparent" />

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                                <Briefcase size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">Credit pentru afaceri</h3>
                                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                                    Capital de lucru, investiții, refinanțare — fără plan de afaceri obligatoriu.
                                </p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/5 px-4 py-2 w-fit">
                            <span className="text-sm font-medium text-brand-500">Până la 300.000 MDL</span>
                            <span className="text-white/15">·</span>
                            <span className="text-xs text-gray-500">Decizie în 1–2 zile</span>
                        </div>

                        <ul className="space-y-2.5 flex-1">
                            {businessItems.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                                    <Check className="w-4 h-4 shrink-0 text-brand-500 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/credite/credit-pentru-afaceri-mici"
                            className="inline-flex items-center gap-2 rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-500 hover:bg-brand-500/20 transition-colors px-5 py-2.5 text-sm font-medium w-fit"
                        >
                            Condiții pentru afaceri <ArrowRight size={15} />
                        </Link>
                    </div>

                    {/* Card personal */}
                    <div className="relative flex flex-col gap-6 rounded-2xl border border-green-500/20 bg-black-600/60 p-7 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-green-500/60 via-green-500/15 to-transparent" />

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                                <User size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">Credit personal</h3>
                                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                                    Pentru orice nevoie urgentă sau planificată — cu condiții clare de la prima discuție.
                                </p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/5 px-4 py-2 w-fit">
                            <span className="text-sm font-medium text-green-400">Până la 300.000 MDL</span>
                            <span className="text-white/15">·</span>
                            <span className="text-xs text-gray-500">Decizie în 2–3 ore</span>
                        </div>

                        <ul className="space-y-2.5 flex-1">
                            {personalItems.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                                    <Check className="w-4 h-4 shrink-0 text-green-500 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/credite/credit-pentru-nevoi-personale"
                            className="inline-flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors px-5 py-2.5 text-sm font-medium w-fit"
                        >
                            Condiții credit personal <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                <Info className="mt-5">
                    La primul credit este obligatoriu un fidejusor (garant personal). Clienții cu istoric bun pot beneficia ulterior de condiții
                    fără fidejusor. Toate costurile sunt prezentate înainte de semnarea contractului.
                </Info>
            </section>

            {/* 4. De ce Ideal Credit */}
            <WhyBento />

            {/* 5. Toate produsele */}
            <ServiciiList />

            {/* 6. Recenzii clienți */}
            <section className="container" id="recenzii">
                <RecenziiClient />
            </section>

            {/* 7. Cum funcționează */}
            <HowItWorks />

            {/* 8. Blog */}
            {latestPosts.length > 0 && (
                <section className="container">
                    <h2 className="title text-center">Ghiduri practice</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
                        {latestPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-black-600/60 p-6 hover:border-white/15 hover:bg-black-600 transition-colors duration-200"
                            >
                                <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                                    <Clock size={11} />
                                    {post.readMinutes} min
                                </span>
                                <h3 className="text-sm font-medium text-white leading-snug group-hover:text-brand-500 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{post.description}</p>
                                <span className="text-xs text-brand-500 font-medium">Citește →</span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors px-5 py-2 rounded-md text-sm"
                        >
                            Toate ghidurile →
                        </Link>
                    </div>
                </section>
            )}

            {/* 9. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ />
            </section>

            {/* 10. Metode de achitare */}
            <section className="container">
                <h2 className="title text-center">Metode de achitare a creditului</h2>
                <PaymentMethods />
            </section>
        </>
    );
}
