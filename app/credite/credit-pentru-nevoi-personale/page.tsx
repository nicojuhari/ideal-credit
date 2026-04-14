import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import { Home, Tv, Activity, Cake, Plane, Zap } from "lucide-react";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Nevoi Personale în Moldova | Ideal Credit",
    description:
        "Credit personal rapid în Moldova - dobândă fixă, fără comisioane ascunse. Decizie în 2-3 ore. Până la 300.000 lei pentru orice nevoie personală.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
};

const personalFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit dacă am istoricul de credit negativ?",
        answer: "Analizăm individual. Un incident din trecut nu înseamnă refuz automat. Contează situația actuală - venit stabil, capacitate de rambursare și comportamentul recent.",
    },
    {
        question: "Cât pot împrumuta fără garanții?",
        answer: "Depinde de venitul tău și situația financiară. Comunicăm limita clară înainte de cererea formală - nu îți pierzi timpul cu un dosar complet dacă suma nu e accesibilă fără garanții.",
    },
    {
        question: "Trebuie neapărat adeverință de salariu?",
        answer: "Nu neapărat. Acceptăm orice formă de confirmare a veniturilor - adeverință de salariu, extras de card, pensie, activitate independentă sau verificare BIC. Discutăm ce ai disponibil înainte de a cere documente.",
    },
    {
        question: "Pot lua un nou credit dacă am deja unul activ?",
        answer: "Da, dacă capacitatea de rambursare o permite. Analizăm toate obligațiile existente și suma totală care poate fi gestionată confortabil.",
    },
    {
        question: "Cum primesc banii după aprobare?",
        answer: "Transfer bancar sau numerar la birou - alegem împreună ce e mai convenabil pentru tine.",
    },
    {
        question: "Pot rambursa creditul mai devreme?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată - nicio penalitate.",
    },
];

const useCases = [
    {
        icon: Home,
        label: "Renovare acasă",
        href: "/credite/credit-pentru-reparatie",
    },
    {
        icon: Tv,
        label: "Electrocasnice, mobilă",
        href: null,
    },
    {
        icon: Activity,
        label: "Tratament medical",
        href: null,
    },
    {
        icon: Cake,
        label: "Nuntă, botez, eveniment",
        href: null,
    },
    {
        icon: Plane,
        label: "Vacanță planificată",
        href: null,
    },
    {
        icon: Zap,
        label: "Urgențe financiare",
        href: "/credite/credit-pina-la-salariu",
    },
];

export default function CreditNevoiPersonalePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personalLoanSchema),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru nevoi personale"}
                subtitle="Bani pentru orice nevoie, fără destinație impusă. Dobândă fixă, costuri clare, decizie în 2-3 ore."
            />

            {/* Use-cases tile grid */}
            <section className="container">
                <h2 className="title text-center">Când folosești un credit personal</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {useCases.map(({ icon: Icon, label, href }) => {
                        const content = (
                            <>
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                                    <Icon size={22} />
                                </span>
                                <span className="text-sm font-medium text-white text-center leading-snug">{label}</span>
                            </>
                        );
                        return href ? (
                            <Link
                                key={label}
                                href={href}
                                className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50 hover:border-white/15 hover:bg-black-600 transition-colors"
                            >
                                {content}
                            </Link>
                        ) : (
                            <div
                                key={label}
                                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-black-600/50"
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
            </section>

            <CreditPageContent
                eligibilityTitle="Condiții de bază"
                eligibleIf={[
                    "Vârsta de la 23 de ani",
                    "Sursă de venit stabilă (angajat, pensionar, antreprenor)",
                    "Buletin de identitate valabil",
                    "Capacitate de rambursare demonstrabilă",
                ]}
                documents={[
                    "Buletin de identitate",
                    "Document de confirmare a veniturilor (adeverință, extras de card, verificare BIC etc.)",
                    "Ultimele 3 extrase de cont bancar (recomandat)",
                    "Actele fidejusorului sau ale bunului gajat (dacă este cazul)",
                ]}
                note="La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții repetați, fără întârzieri la plăți pot obține creditul fără fidejusor."
                description={{
                    title: "Credit personal rapid în Moldova",
                    paragraphs: [
                        "Creditul pentru nevoi personale de la Ideal Credit este o finanțare flexibilă, fără destinație impusă. Banii sunt ai tăi - îi folosești pentru renovarea casei, un tratament medical, un eveniment de familie sau orice altă nevoie personală. Nu trebuie să justifici destinația.",
                        "Condiția principală este un venit stabil și un buletin de identitate valabil. Nu aplicăm comisioane de analiză sau deschidere. Dobânda este fixă pe toată durata creditului - știi de la început exact cât plătești lunar. La primul credit, fidejusorul (garant personal) este obligatoriu. Pentru sume mari sau venituri nestabile poate fi cerut suplimentar gaj imobil.",
                        "Clienții recurenți cu istoric bun de plată și venituri stabile pot beneficia de dobândă redusă și fără fidejusor. Aprobăm în 2-3 ore - dacă situația ta este clară, banii pot fi disponibili în aceeași zi. Discutăm cerințele de garanție înainte de depunerea dosarului - fără surprize după semnare.",
                    ],
                }}
                relatedLinks={[
                    {
                        href: "/credite/credit-pentru-reparatie",
                        label: "Credit pentru reparație",
                        desc: "Renovezi casa cu rate fixe și costuri clare.",
                    },
                    {
                        href: "/credite/credit-pina-la-salariu",
                        label: "Credit până la salariu",
                        desc: "Sumă mică pentru urgențe, rambursare la salariu.",
                    },
                    {
                        href: "/credite/credit-pentru-automobil",
                        label: "Credit pentru automobil",
                        desc: "Cumperi sau repari mașina cu finanțare rapidă.",
                    },
                ]}
            />

            <HowItWorks />

            <CreditFAQ items={personalFaqItems} />

            <WhyBento />
        </>
    );
}
