import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroHome from "@/components/home/HeroHome";
import { faqSchema } from "@/components/FAQ";
import Info from "@/components/ui/Info";

// Below-the-fold sections: lazy-load to keep LCP on the hero headline
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const PaymentMethods = dynamic(() => import("@/components/PaymentMethods"));
const WhyBento = dynamic(() => import("@/components/home/WhyBento"));
const InvestorStrip = dynamic(() => import("@/components/home/InvestorStrip"));
const RecenziiClient = dynamic(() => import("@/components/RecenziiClient"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BlogCards = dynamic(() => import("@/components/BlogCards"));
import {
    creditConditionsSchema,
    financialServiceSchema,
    localBusinessChisinauSchema,
    localBusinessCauseniSchema,
    howToSchema,
} from "@/lib/schema";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Credite Nebancare în Moldova | Ideal Credit",
    description: "Oferim credite nebancare în Moldova cu dobânzi fixe, fără comisioane ascunse, rapid și avantajos.",
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        financialServiceSchema,
                        localBusinessChisinauSchema,
                        localBusinessCauseniSchema,
                        howToSchema,
                        faqSchema,
                    ]),
                }}
            />

            <HeroHome />

            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {(["pj", "pf"] as const).map((type) => (
                        <div key={type} className="card">
                            <h3 className="text-xl text-center mb-8 mt-2 md:mt-0">{creditConditionsSchema[type].title}</h3>
                            <ul className="list-outside list-none md:ml-6 space-y-1.5">
                                {creditConditionsSchema[type].list.map((item) => (
                                    <li key={item} className="font-light flex items-center gap-2.5">
                                        <Check className="w-5 h-5 shrink-0 text-green-400" strokeWidth={3} />
                                        <span className="text-gray-400 text-xl">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Info className="mt-6">
                    În funcție de evaluarea riscului de credit, se va solicita informații suplimentare și/sau garanții: fidejusiune sau gaj
                    imobil.
                </Info>
            </section>

            <section className="container">
                <HowItWorks />
            </section>

            <section className="container">
                <h2 className="title text-center">Metode de achitare a creditului</h2>
                <PaymentMethods />
            </section>

            <WhyBento />

            <section className="container" id="recenzii">
                <RecenziiClient />
            </section>

            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ />
            </section>

            <InvestorStrip />

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
                                Vezi toate articolele
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
