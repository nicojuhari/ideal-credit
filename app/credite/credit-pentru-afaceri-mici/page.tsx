import type { Metadata } from "next";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import ServiceHero from "@/components/ServiceHero";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import WhyBento from "@/components/WhyBento";
import { TrendingUp, Building2, RefreshCw, Zap, ArrowRight } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare. Până la 300.000 lei.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
};

const businessFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit pentru SRL fără gaj?",
        answer: "La primul credit, fidejusorul (garant personal - de obicei administratorul firmei) este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau fluxuri financiare nestabile.",
    },
    {
        question: "Ce se întâmplă dacă firma mea are mai puțin de un an de activitate?",
        answer: "Analizăm individual. Contează mai mult extrasele bancare și rulajul lunar decât vechimea exactă. Am finanțat firme cu 4-6 luni de activitate cu flux demonstrabil.",
    },
    {
        question: "Poate primi credit o firmă cu pierderi pe ultimul an?",
        answer: "Analizăm situația curentă a firmei, nu doar bilanțul anual. Dacă activitatea este stabilă acum și extrasele bancare arată rulaj activ, discutăm.",
    },
    {
        question: "Pot obține finanțare pentru mai multe nevoi simultan?",
        answer: "Da, analizăm suma totală necesară și structurăm creditul corespunzător - nu e nevoie să depui cereri separate pentru fiecare destinație.",
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

const useCases = [
    {
        icon: TrendingUp,
        title: "Capital de lucru",
        desc: "Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea.",
        href: "/credite/credit-capital-de-lucru",
    },
    {
        icon: Building2,
        title: "Investiții",
        desc: "Echipamente, utilaje, extindere spațiu, vehicule comerciale.",
        href: "/credite/credit-investitional",
    },
    {
        icon: RefreshCw,
        title: "Refinanțare",
        desc: "Consolidezi creditele existente într-un singur credit cu rată mai mică.",
        href: "/credite/refinantare",
    },
    {
        icon: Zap,
        title: "Start-up",
        desc: "Lansezi afacerea: înregistrare firmă, echipamente inițiale, stoc de pornire.",
        href: "/cerere-de-credit-online",
    },
];

export default function CreditAfaceriMiciPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(businessCreditSchema),
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
                subtitle="Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Până la 300.000 lei, aprobare în 1-2 zile lucrătoare, fără birocrație excesivă."
            />

            {/* Use-cases grid cu linkuri interne */}
            <section className="container">
                <h2 className="title text-center">Pentru ce poți folosi creditul</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCases.map(({ icon: Icon, title, desc, href }) => (
                        <div key={title} className="flex flex-col gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <Icon size={20} />
                                </span>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            <Link
                                href={href}
                                title={`Află mai multe despre ${title.toLowerCase()}`}
                                className="inline-flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium mt-auto"
                            >
                                Află mai mult <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <CreditPageContent
                eligibilityTitle="Este pentru afacerea mea?"
                eligibleIf={[
                    "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                    "Activitate economică de cel puțin 3-6 luni",
                    "Ai nevoie de capital rapid, cu aprobare în 1-2 zile lucrătoare",
                    "Cauți o analiză flexibilă, adaptată situației reale a afacerii",
                ]}
                documents={[
                    "Buletin de identitate al administratorului",
                    "Certificat de înregistrare a firmei (SRL/ÎI)",
                    "Extrase bancare - ultimele 3-6 luni",
                    "Actele de proprietate (dacă se solicită gaj)",
                ]}
                note="La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții recurenți cu dosar solid pot obține creditul fără fidejusor."
                description={{
                    title: "Credit nebancar pentru afaceri mici în Moldova",
                    paragraphs: [
                        "Ideal Credit finanțează firme mici și mijlocii care au nevoie de bani rapizi pentru a-și continua sau extinde activitatea. Analizăm situația reală a afacerii tale - rulajul din extrase, activitatea curentă, garanțiile disponibile - nu doar documentele formale.",
                        "Pentru a te califica, ai nevoie de o firmă înregistrată în Moldova, câteva luni de activitate demonstrabilă și extrase bancare cu rulaj activ. Nu cerem plan de afaceri, profit obligatoriu sau garanție imobiliară pentru sume mai mici. Creditul poate fi folosit pentru orice nevoie legată de afacere: capital de lucru, echipamente, refinanțare sau extindere.",
                        "Luăm decizii în 1-2 zile lucrătoare. Dacă finanțarea nu este potrivită pentru situația ta, îți spunem direct - fără să îți pierzi timpul cu un dosar complet.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-capital-de-lucru",
                        label: "Credit capital de lucru",
                        desc: "Acoperi golurile de lichiditate fără să oprești activitatea.",
                    },
                    {
                        href: "/credite/credit-investitional",
                        label: "Credit investițional",
                        desc: "Finanțezi echipamente sau extindere pe termen lung.",
                    },
                    {
                        href: "/credite/refinantare",
                        label: "Refinanțare",
                        desc: "Consolidezi creditele existente într-un singur credit cu rată mai bună.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={businessFaqItems} />

            <WhyBento />
        </>
    );
}
