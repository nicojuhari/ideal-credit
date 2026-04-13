import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { Check, Cog, Leaf, Droplets, Sprout, TrendingUp, ArrowRight } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Agricultură în Moldova | Ideal Credit",
    description:
        "Credit agricol pentru fermieri, SRL și ÎI din Moldova. Finanțăm tehnica agricolă, semințe, irigații și capital de lucru sezonier. Până la 300.000 lei, decizie în 1-2 zile lucrătoare.",
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
                    __html: JSON.stringify(businessCreditSchema),
                }}
            />

            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Credit pentru
                        <br />
                        agricultură
                    </>
                }
                subtitle="Finanțare pentru fermieri, SRL-uri și gospodării individuale din Moldova. Grafic adaptat sezonalității, până la 300.000 lei."
            />

            {/* Ce finanțezi */}
            <section className="container">
                <h2 className="title text-center">Ce poți finanța</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {financingCategories.map(({ icon: Icon, title, desc, link }) => (
                        <div key={title} className="flex flex-col gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <Icon size={20} />
                                </span>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
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

            {/* Specificul creditului agricol */}
            <section className="container">
                <h2 className="title text-center">Adaptat la ritmul agriculturii</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Grafic de rambursare sezonier</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Agricultura nu produce venituri uniform pe parcursul anului. Știm asta. Structurăm graficul de rambursare în
                            funcție de ciclul tău de producție - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare și
                            vânzare.
                        </p>
                        <ul className="space-y-2 mt-1">
                            {[
                                "Rate adaptate sezonului de încasări",
                                "Posibilitate de perioadă de grație până la recoltă",
                                "Termen de până la 60 luni pentru investiții mari",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                                    <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Cum evaluăm activitatea agricolă</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Nu evaluăm doar un salariu lunar fix. Analizăm imaginea completă a activității tale agricole.
                        </p>
                        <ul className="space-y-2 mt-1">
                            {[
                                "Suprafața cultivată și culturile practicate",
                                "Istoricul de producție și vânzări din sezonul anterior",
                                "Contracte de arendă sau titluri de proprietate",
                                "Extrase bancare și fluxul de numerar anual",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                                    <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <CreditPageContent
                eligibilityTitle="Condiții de eligibilitate"
                eligibleIf={[
                    "Activitate agricolă înregistrată (SRL, ÎI, GȚ)",
                    "Activitate demonstrabilă în ultimul sezon",
                    "Teren agricol în proprietate sau în arendă",
                    "Extrase bancare sau dovezi de vânzări agricole",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Certificat de înregistrare (SRL/ÎI) sau legitimație gospodărie",
                    "Documente teren agricol (proprietate sau arendă)",
                    "Extrase bancare sau acte de vânzare a producției",
                    "Actele bunului gajat (dacă este cazul)",
                ]}
                note="Graficul de rambursare este adaptat sezonului agricol - rate mai mici în perioadele de cheltuieli, rate mai mari după recoltare."
                description={{
                    title: "Credit agricol pentru fermieri și gospodării din Moldova",
                    paragraphs: [
                        "Creditul agricol de la Ideal Credit este conceput pentru fermieri, gospodării țărănești, SRL-uri și ÎI cu activitate în agricultură. Finanțăm tehnica agricolă, semințele, îngrășămintele, irigațiile, forța de muncă sezonieră și orice alt cost legat de producția agricolă.",
                        "Cel mai important avantaj față de un credit standard este graficul de rambursare adaptat sezonului. Știm că încasările agricole vin în valuri - după recoltare și vânzare - nu lunar uniform. De aceea structurăm ratele în funcție de ciclul tău de producție, cu posibilitate de perioadă de grație în lunile de cheltuieli mari.",
                        "Nu cerem plan de afaceri formal sau profit demonstrat. Evaluăm activitatea reală - suprafața cultivată, contractele de arendă, istoricul de producție și extrasele bancare. Dacă ai activitate agricolă demonstrabilă, indiferent de forma juridică, putem discuta despre finanțare.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-afaceri-mici",
                        label: "Credit pentru afaceri mici",
                        desc: "Finanțare generală pentru orice activitate economică înregistrată.",
                    },
                    {
                        href: "/credite/credit-investitional",
                        label: "Credit investițional",
                        desc: "Tehnica agricolă și echipamente pe termen lung.",
                    },
                    {
                        href: "/credite/credit-capital-de-lucru",
                        label: "Credit capital de lucru",
                        desc: "Lichiditate sezonieră pentru semințe, îngrășăminte și forță de muncă.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={agricFaqItems} />

            {/* CTA */}

            <WhyBento />
        </>
    );
}
