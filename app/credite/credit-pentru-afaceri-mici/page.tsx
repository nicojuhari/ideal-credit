import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import ServiceHero from "@/components/ServiceHero";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import WhyBento from "@/components/WhyBento";
import ServiceFeatureGrid from "@/components/ui/ServiceFeatureGrid";
import type { ServiceFeatureItem } from "@/components/ui/ServiceFeatureGrid";
import { TrendingUp, Building2, RefreshCw, Zap } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
        description: "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
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

const useCases: ServiceFeatureItem[] = [
    {
        icon: TrendingUp,
        title: "Capital de lucru",
        desc: "Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea.",
        link: { href: "/credite/credit-capital-de-lucru" },
    },
    {
        icon: Building2,
        title: "Investiții",
        desc: "Echipamente, utilaje, extindere spațiu, vehicule comerciale.",
        link: { href: "/credite/credit-investitional" },
    },
    {
        icon: RefreshCw,
        title: "Refinanțare",
        desc: "Consolidezi creditele existente într-un singur credit cu rată mai mică.",
        link: { href: "/credite/refinantare" },
    },
    {
        icon: Zap,
        title: "Start-up",
        desc: "Lansezi afacerea: înregistrare firmă, echipamente inițiale, stoc de pornire.",
        link: { href: "/cerere-de-credit-online" },
    },
];

export default function CreditAfaceriMiciPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />

            <ServiceHero
                title={<>Credit pentru<br />afaceri mici</>}
                subtitle="Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Aprobare în 1-2 zile lucrătoare, fără birocrație excesivă."
            />

            <ServiceFeatureGrid heading="Pentru ce poți folosi creditul" items={useCases} cols={2} />

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
                    { href: "/credite/credit-capital-de-lucru", label: "Credit capital de lucru", desc: "Acoperi golurile de lichiditate fără să oprești activitatea." },
                    { href: "/credite/credit-investitional", label: "Credit investițional", desc: "Finanțezi echipamente sau extindere pe termen lung." },
                    { href: "/credite/refinantare", label: "Refinanțare", desc: "Consolidezi creditele existente într-un singur credit cu rată mai bună." },
                ]}
            />

            <HowItWorks />
            <CreditFAQ items={businessFaqItems} />
            <WhyBento />
        </>
    );
}
