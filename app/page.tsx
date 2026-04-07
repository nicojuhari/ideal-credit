import type { Metadata } from "next";
import Link from "next/link";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import PaymentMethods from "@/components/PaymentMethods";
import ShortAboutUs from "@/components/ShortAboutUs";
import RecenziiClient from "@/components/RecenziiClient";
import FAQ, { faqSchema } from "@/components/FAQ";
import BlogCards from "@/components/BlogCards";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { creditConditionsSchema, financialServiceSchema, localBusinessChisinauSchema, localBusinessCauseniSchema, howToSchema } from "@/lib/schema";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Credite Nebancare în Moldova | Ideal Credit",
  description:
    "Oferim credite nebancare în Moldova cu dobânzi fixe, fără comisioane ascunse, rapid și avantajos.",
  alternates: { canonical: "https://idealcredit.md/" },
};

async function getLatestBlogs() {
  try {
    const token = process.env.STORYBLOK_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${token}&version=published&per_page=3&page=1`,
      { next: { revalidate: 3600 } }
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

      <div className="relative pt-10 md:pt-12">
        <div className="bg-squares -mt-[1px]" />
        <div className="container">
          <RecenziiButton className="mb-16" />
          <h1 className="font-semibold text-center text-6xl md:text-8xl">
            Credite Nebancare
          </h1>
          <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
            Oferim credite nebancare în Moldova cu dobânzi fixe, fără comisioane ascunse, rapid și avantajos.
          </p>
          <MainCTA className="mt-16" />
          <div className="cs-blur cs-blur--center z-[-1]" />
          <CalculatorCredit />
        </div>
      </div>

      <section className="container">
        <h2 className="title text-center">Condițiile de creditare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {(["pj", "pf"] as const).map((type) => (
            <div key={type} className="card">
              <h3 className="text-xl text-center mb-8 mt-2 md:mt-0">
                {creditConditionsSchema[type].title}
              </h3>
              <ul className="list-outside list-none md:ml-6 space-y-1.5">
                {creditConditionsSchema[type].list.map((item) => (
                  <li key={item} className="font-light flex items-center gap-2.5">
                    <Check className="w-5 h-5 flex-shrink-0 text-green-400" weight="bold" />
                    <span className="text-gray-400 text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Info className="mt-6">
          În funcție de evaluarea riscului de credit, se va solicita informații suplimentare și/sau garanții: fidejusiune sau gaj imobil.
        </Info>
      </section>

      <section className="container">
        <HowItWorks />
      </section>

      <section className="container">
        <h2 className="title text-center">Metode de achitare a creditului</h2>
        <PaymentMethods />
      </section>

      <ShortAboutUs />

      <section className="container" id="recenzii">
        <RecenziiClient />
      </section>

      <section className="container">
        <h2 className="title text-center">Întrebări frecvente</h2>
        <FAQ />
      </section>

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
