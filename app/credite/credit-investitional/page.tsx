import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { Cog, Truck, Store, Monitor, Armchair, ArrowRight } from "lucide-react";
import { investitionalSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit Investițional pentru Afaceri în Moldova | Ideal Credit",
    description:
        "Finanțăm echipamente, extinderi și modernizări pentru afaceri din Moldova. Până la 300.000 lei, termen până la 60 luni, decizie în 1-2 zile lucrătoare.",
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
    { label: "Proprietatea bunului", OCN: "Imediată, din prima zi", leasing: "La finalul contractului" },
    { label: "Flexibilitate bunuri", OCN: "Orice tip de bun", leasing: "Vehicule și echipamente specifice" },
    { label: "Sumă disponibilă", OCN: "Până la 300.000 lei", leasing: "Variabilă, limitată de furnizor" },
    { label: "Rambursare anticipată", OCN: "Gratuită", leasing: "Cu penalizări" },
    { label: "Restricții de utilizare", OCN: "Nicio restricție", leasing: "Kilometraj, modificări interzise" },
];

export default function CreditInvestitionalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(investitionalSchema),
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

            {/* Ce finanțezi */}
            <section className="container">
                <h2 className="title text-center">Ce poți finanța</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {financingCategories.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500 mt-0.5">
                                <Icon size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CreditPageContent
                eligibilityTitle="Condiții de eligibilitate"
                eligibleIf={[
                    "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                    "Activitate economică de cel puțin 6 luni",
                    "Investiția are legătură directă cu activitatea firmei",
                    "Extrase bancare cu rulaj constant",
                ]}
                documents={[
                    "Buletin de identitate al administratorului",
                    "Certificat de înregistrare (SRL/ÎI)",
                    "Extrase bancare - ultimele 3-6 luni",
                    "Ofertă sau factură proformă pentru bunul achiziționat (dacă există)",
                    "Actele de proprietate (pentru gaj, dacă este cazul)",
                ]}
                note="Bunul achiziționat devine proprietatea ta din prima zi. Spre deosebire de leasing, nu există clauze de răscumpărare."
                description={{
                    title: "Credit investițional pentru afaceri din Moldova",
                    paragraphs: [
                        "Creditul investițional este destinat achizițiilor care ajută firma să crească pe termen mediu și lung - echipamente, utilaje, vehicule comerciale, modernizarea spațiului sau dotări IT. Spre deosebire de leasing, bunul este al tău din prima zi și nu există restricții de utilizare sau clauze de răscumpărare.",
                        "Termenul de rambursare ajunge până la 60 de luni, ceea ce reduce semnificativ rata lunară și face investiția mai ușor de gestionat din perspectiva fluxului de numerar al firmei. Dobânda este fixă pe toată durata contractului - știi exact cât plătești de la prima până la ultima rată.",
                        "Nu cerem plan de afaceri detaliat sau factură finalizată înainte de aprobare. Evaluăm firma pe baza extraselor bancare și a activității curente. Dacă investiția are legătură cu activitatea ta economică, discutăm - indiferent dacă banca te-a refuzat sau condițiile ei sunt prea rigide.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-afaceri-mici",
                        label: "Credit pentru afaceri mici",
                        desc: "Toate tipurile de finanțare pentru antreprenori.",
                    },
                    {
                        href: "/credite/credit-capital-de-lucru",
                        label: "Credit capital de lucru",
                        desc: "Lichiditate pentru operațiunile zilnice ale firmei.",
                    },
                    {
                        href: "/credite/credit-pentru-agricultura",
                        label: "Credit pentru agricultură",
                        desc: "Finanțare pentru tehnica agricolă și capital sezonier.",
                    },
                ]}
            />

            <HowItWorks />

            {/* Credit investițional vs. leasing */}
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
                                    <td className="px-5 py-4 text-green-400 text-center font-medium">{row.OCN}</td>
                                    <td className="px-5 py-4 text-gray-500 text-center">{row.leasing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <CreditFAQ items={investFaqItems} />

            {/* CTA */}

            <WhyBento />
        </>
    );
}
