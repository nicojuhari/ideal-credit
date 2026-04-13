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
        answer: "Evaluăm individual. Un incident din trecut nu înseamnă refuz automat. Contează situația actuală - venit stabil, capacitate de rambursare și comportamentul recent.",
    },
    {
        question: "Cât pot împrumuta fără garanții?",
        answer: "Depinde de venitul tău și profilul de risc. Comunicăm limita clară înainte de cererea formală - nu îți pierzi timpul cu un dosar complet dacă suma nu e accesibilă fără garanții.",
    },
    {
        question: "Trebuie neapărat adeverință de salariu?",
        answer: "Un document de venit este recomandat, dar evaluăm și alte surse: pensie, activitate independentă, venituri din chirie. Discutăm ce ai disponibil înainte de a cere documente.",
    },
    {
        question: "Pot lua un nou credit dacă am deja unul activ?",
        answer: "Da, dacă capacitatea de rambursare o permite. Evaluăm toate obligațiile existente și suma totală care poate fi gestionată confortabil.",
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
                    "Adeverință de salariu sau alt document de venit",
                    "Ultimele 3 extrase de cont bancar (recomandat)",
                    "Actele garantului sau ale bunului gajat (dacă este cazul)",
                ]}
                note="Garanțiile depind de suma solicitată și profilul de risc. Comunicăm cerința clar înainte de semnarea contractului."
                description={{
                    title: "Credit personal rapid în Moldova",
                    paragraphs: [
                        "Creditul pentru nevoi personale de la Ideal Credit este o finanțare flexibilă, fără destinație impusă. Banii sunt ai tăi - îi folosești pentru renovarea casei, un tratament medical, un eveniment de familie sau orice altă nevoie personală. Nu trebuie să justifici destinația.",
                        "Condiția principală este un venit stabil și un buletin de identitate valabil. Nu cerem garant obligatoriu pentru sume mai mici și nu aplicăm comisioane de analiză sau deschidere. Dobânda este fixă pe toată durata creditului - știi de la început exact cât plătești lunar.",
                        "Aprobăm cererile în 2-3 ore. Dacă situația ta este clară, banii pot fi disponibili în aceeași zi. Dacă ai întrebări despre sumă, termen sau garanții, discutăm înainte de a depune dosarul - fără surprize după semnare.",
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
