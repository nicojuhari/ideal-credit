import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroHome from "@/components/home/HeroHome";
import { faqSchema } from "@/components/FAQ";
import Info from "@/components/ui/Info";
import { Check } from "lucide-react";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const PaymentMethods = dynamic(() => import("@/components/PaymentMethods"));
const WhyBento = dynamic(() => import("@/components/WhyBento"));
const RecenziiClient = dynamic(() => import("@/components/RecenziiClient"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BlogCards = dynamic(() => import("@/components/BlogCards"));
const ServiciiList = dynamic(() => import("@/components/ServiciiList"));

import { financialServiceSchema, localBusinessChisinauSchema, localBusinessCauseniSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credite Nebancare în Moldova | Ideal Credit",
    description:
        "Credite nebancare pentru afaceri și consum în Moldova. Dobândă fixă, fără comisioane ascunse. Decizie rapidă. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/" },
};

async function getLatestBlogs() {
    try {
        const token = process.env.STORYBLOK_ACCESS_TOKEN;
        const res = await fetch(
            `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${token}&version=published&per_page=3&page=1`,
            { next: { revalidate: 3600 } },
        );
        if (!res.ok) return [];
        const data = await res.json();
        return data.stories ?? [];
    } catch {
        return [];
    }
}

export default async function HomePage() {
    const stories = await getLatestBlogs();

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* 1. Hero cu calculator */}
            <HeroHome />

            {/* 2. Ce oferim - segmentare afaceri / personal */}
            <section className="container">
                <h2 className="title text-center">Ce oferim</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Card afaceri */}
                    <div className="card flex flex-col gap-5">
                        <div>
                            <h3 className="text-2xl font-medium mb-1">Credit pentru afaceri mici</h3>
                            <p className="text-sm text-gray-500">Capital de lucru, investiții sau refinanțare.</p>
                        </div>
                        <ul className="space-y-2 flex-1">
                            {[
                                "Activitate economică înregistrată (SRL, ÎI, GȚ)",
                                "Fără plan de afaceri obligatoriu",
                                "Extrase bancare - minim 3 luni",
                                "Decizie în 1-2 zile lucrătoare",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/credite/credit-pentru-afaceri-mici"
                            className="inline-flex items-center text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium"
                        >
                            Află mai mult →
                        </Link>
                    </div>

                    {/* Card personal */}
                    <div className="card flex flex-col gap-5">
                        <div>
                            <h3 className="text-2xl font-medium mb-1">Credit personal rapid</h3>
                            <p className="text-sm text-gray-500">Pentru orice nevoie urgentă sau planificată.</p>
                        </div>
                        <ul className="space-y-2 flex-1">
                            {[
                                "Vârsta de la 23 de ani",
                                "Sursă de venit stabilă",
                                "Buletin de identitate valabil",
                                "Decizie în 2-3 ore",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/credite/credit-pentru-nevoi-personale"
                            className="inline-flex items-center text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium"
                        >
                            Află mai mult →
                        </Link>
                    </div>
                </div>
                <Info className="mt-6">
                    În funcție de suma solicitată și situația financiară, pot fi necesare garanții suplimentare: garant personal sau gaj
                    imobil.
                </Info>
            </section>

            {/* 3. Cum functioneaza */}
            <HowItWorks />

            {/* 4. De ce Ideal Credit */}
            <WhyBento />

            {/* 5. Toate produsele */}
            <ServiciiList />

            {/* 6. Recenzii clienti */}
            <section className="container" id="recenzii">
                <RecenziiClient />
            </section>

            {/* 7. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ />
            </section>

            {/* 8. Metode de achitare */}
            <section className="container">
                <h2 className="title text-center">Metode de achitare a creditului</h2>
                <PaymentMethods />
            </section>

            {/* 9. Blog */}
            {stories.length > 0 && (
                <section className="container">
                    <h2 className="title text-center">Blog</h2>
                    <div className="space-y-8">
                        <BlogCards stories={stories} />
                        <div className="text-center">
                            <Link
                                href="/blog"
                                title="Blog financiar"
                                className="inline-flex items-center gap-2 border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors px-5 py-2 rounded-md"
                            >
                                Vezi toate articolele →
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
