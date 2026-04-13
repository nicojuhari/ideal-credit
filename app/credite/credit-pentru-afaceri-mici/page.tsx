import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import HowItWorks from "@/components/HowItWorks";
import Info from "@/components/ui/Info";
import ServiceHero from "@/components/ServiceHero";
import { Check, X, TrendingUp, Building2, RefreshCw, Zap, ArrowRight } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";
import WhyBento from "@/components/WhyBento";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici în Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru SRL și ÎI din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare, fără plan de afaceri obligatoriu. Până la 400.000 lei.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
};

const businessFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit pentru SRL fără gaj?",
        answer: "Da, pentru sume până la un anumit plafon stabilit după analiza firmei. Pentru sume mai mari, cerem fidejusiune sau gaj imobil. Comunicăm limita înainte de cererea formală.",
    },
    {
        question: "Ce se întâmplă dacă firma mea are mai puțin de un an de activitate?",
        answer: "Evaluăm individual. Contează mai mult extrasele bancare și rulajul lunar decât vechimea exactă. Am finanțat firme cu 4-6 luni de activitate cu flux demonstrabil.",
    },
    {
        question: "Poate primi credit o firmă cu pierderi pe ultimul an?",
        answer: "Evaluăm situația curentă a firmei, nu doar bilanțul anual. Dacă activitatea este stabilă acum și extrasele bancare arată rulaj activ, discutăm.",
    },
    {
        question: "Pot obține finanțare pentru mai multe nevoi simultan?",
        answer: "Da, evaluăm suma totală necesară și structurăm creditul corespunzător - nu e nevoie să depui cereri separate pentru fiecare destinație.",
    },
    {
        question: "Cât de repede pot folosi banii după aprobare?",
        answer: "După semnarea contractului, fondurile sunt virate în aceeași zi sau în ziua lucrătoare următoare.",
    },
    {
        question: "Dobânda se schimbă pe parcursul creditului?",
        answer: "Nu. Dobânda este fixă de la prima până la ultima rată. Suma lunară pe care o plătești nu se schimbă pe toată durata contractului.",
    },
];

const businessFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const useCases = [
    {
        icon: TrendingUp,
        title: "Capital de lucru",
        desc: "Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea.",
        example: "Ai facturat 80.000 lei dar clientul plătește în 45 de zile. Continuăm producția împreună.",
        href: "/credite/credit-capital-de-lucru",
    },
    {
        icon: Building2,
        title: "Investiții",
        desc: "Echipamente, utilaje, extindere spațiu, vehicule comerciale.",
        example: "Un echipament de 120.000 lei plătit în 36 rate lunare egale.",
        href: "/credite/credit-investitional",
    },
    {
        icon: RefreshCw,
        title: "Refinanțare",
        desc: "Consolidezi creditele existente într-un singur credit cu rată mai mică.",
        example: "Două credite cu rate de 8.000 lei/lună devin un singur credit de 6.500 lei/lună.",
        href: "/credite/refinantare",
    },
    {
        icon: Zap,
        title: "Start-up",
        desc: "Lansezi afacerea: înregistrare firmă, echipamente inițiale, stoc de pornire.",
        example: "Evaluăm și activități noi cu potențial demonstrabil - nu doar firme cu ani în spate.",
        href: "/cerere-de-credit-online",
    },
];

export default function CreditAfaceriMiciPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([businessCreditSchema, businessFaqSchema]),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Credit pentru
                        <br />
                        afaceri mici
                    </>
                }
                subtitle="Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Până la 400.000 lei, aprobare în 1-2 zile lucrătoare, fără birocrație excesivă."
            />

            {/* 1. Este pentru afacerea mea? */}
            <section className="container">
                <h2 className="title text-center">Este pentru afacerea mea?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Eligibil dacă</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                                "Activitate economică de cel puțin 3-6 luni",
                                "Ai nevoie de capital rapid, fără să aștepți săptămâni",
                                "Banca te-a refuzat sau condițiile sunt prea rigide",
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
                                "Profit demonstrat pe ultimul an fiscal",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <X className="w-4 h-4 shrink-0 text-red-400/80 mt-0.5" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Info className="mt-6">
                    În funcție de suma solicitată și evaluarea riscului de credit, pot fi necesare garanții suplimentare: fidejusiune sau
                    gaj imobil.
                </Info>
            </section>

            {/* 2. Pentru ce folosești banii */}
            <section className="container">
                <h2 className="title text-center">Pentru ce poți folosi creditul</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCases.map(({ icon: Icon, title, desc, example, href }) => (
                        <div key={title} className="flex flex-col gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                    <Icon size={20} />
                                </span>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            <p className="text-xs text-gray-500 italic leading-relaxed border-l border-white/10 pl-3">{example}</p>
                            <Link
                                href={href}
                                className="inline-flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium mt-auto"
                            >
                                Află mai mult <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Cum funcționează */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 4. FAQ specific afaceri */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={businessFaqItems} />
            </section>

            {/* 6. ShortAboutUs */}
            <WhyBento />
        </>
    );
}
