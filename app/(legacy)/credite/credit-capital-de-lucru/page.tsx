import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import CreditPageContent from "@/components/CreditPageContent";
import CreditFAQ from "@/components/CreditFAQ";
import type { FaqItem } from "@/components/CreditFAQ";
import WhyBento from "@/components/WhyBento";
import ServiceFeatureGrid from "@/components/ui/ServiceFeatureGrid";
import type { ServiceFeatureItem } from "@/components/ui/ServiceFeatureGrid";
import { Clock, Package, Users, Trophy } from "lucide-react";
import { workingCapitalSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit Capital de Lucru pentru Afaceri | Ideal Credit Moldova",
    description:
        "Credit capital de lucru pentru SRL și ÎI din Moldova. Acoperiți salarii, furnizori și stocuri - decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-capital-de-lucru" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit Capital de Lucru pentru Afaceri | Ideal Credit Moldova",
        description: "Credit capital de lucru pentru SRL și ÎI din Moldova. Acoperiți salarii, furnizori și stocuri - decizie în 1-2 zile lucrătoare.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const workingCapitalFaqItems: FaqItem[] = [
    {
        question: "Pot folosi creditul pentru plata salariilor?",
        answer: "Da. Capital de lucru înseamnă exact asta - orice cheltuială operațională curentă: salarii, furnizori, chirie, utilități, stocuri.",
    },
    {
        question: "Ce termen de rambursare este recomandat pentru capital de lucru?",
        answer: "6-24 luni în general. Adaptăm termenul la ciclul tău de încasări - dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință.",
    },
    {
        question: "Pot reînnoi creditul după rambursare?",
        answer: "Da. Clienții cu istoric bun de plată primesc prioritate la o nouă finanțare, adesea cu condiții mai bune.",
    },
    {
        question: "Ce documente sunt necesare pentru capital de lucru?",
        answer: "Actele de înregistrare ale firmei (SRL/ÎI), extrase bancare pentru ultimele 3 luni și evidența contabilă de bază. Nu cerem plan de afaceri.",
    },
    {
        question: "Pot obține capital de lucru dacă firma are 6 luni de activitate?",
        answer: "Da, analizăm individual. Contează rulajul lunar și stabilitatea fluxului de numerar, nu doar vechimea firmei.",
    },
    {
        question: "Cât de repede intră banii după aprobare?",
        answer: "Fondurile sunt disponibile în aceeași zi sau ziua lucrătoare următoare după semnarea contractului.",
    },
];

const scenarios: ServiceFeatureItem[] = [
    {
        icon: Clock,
        title: "Creanțe blocate",
        desc: "Ai livrat marfa, clientul plătește în 60 de zile. Furnizorii cer bani azi. Continuăm producția fără să aștepți.",
    },
    {
        icon: Package,
        title: "Sezon aglomerat",
        desc: "Urmează sezonul de vârf, ai nevoie de stoc dublu, dar banii sunt blocați în creanțe. Pregătești depozitul la timp.",
    },
    {
        icon: Users,
        title: "Angajări noi",
        desc: "Ai angajați noi dar primii clienți plătesc abia luna viitoare. Acoperi salariile fără presiune pe flux.",
    },
    {
        icon: Trophy,
        title: "Contract mare",
        desc: "Ai câștigat un contract important dar ai nevoie de resurse să-l onorezi. Folosești ocazia fără să o ratezi.",
    },
];

export default function CreditCapitalDeLucruPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workingCapitalSchema) }} />

            <ServiceHero
                title={<>Credit capital<br />de lucru</>}
                subtitle="Menții activitatea firmei când încasările întârzie. Fără birocrație, fără așteptări săptămâni întregi."
            />

            <ServiceFeatureGrid heading="Când ai nevoie de capital de lucru" items={scenarios} cols={2} />

            <CreditPageContent
                eligibilityTitle="Condiții de eligibilitate"
                eligibleIf={[
                    "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                    "Activitate economică de cel puțin 3-6 luni",
                    "Extrase bancare cu rulaj activ",
                    "Nevoie de lichiditate pentru operațiuni curente",
                ]}
                documents={[
                    "Buletin de identitate al administratorului",
                    "Certificat de înregistrare (SRL/ÎI)",
                    "Extrase bancare - ultimele 3-6 luni",
                    "Contracte cu clienți sau furnizori (optional, ajută la evaluare)",
                ]}
                note="Finanțarea se aprobă pe baza rulajului real din extrase, nu doar pe baza bilanțului contabil."
                description={{
                    title: "Credit capital de lucru pentru firme din Moldova",
                    paragraphs: [
                        "Capitalul de lucru este banii de care ai nevoie să funcționezi zi de zi - salarii, furnizori, chirie, stocuri. Când încasările întârzie și cheltuielile nu pot aștepta, un credit de capital de lucru menține activitatea în mișcare fără să blochezi creșterea.",
                        "La Ideal Credit analizăm capacitatea de rambursare pe baza rulajului real din extrasele bancare, nu doar pe baza bilanțului anual. Asta înseamnă că și firmele cu câteva luni de activitate sau cu un an fiscal dificil pot accesa finanțare, dacă fluxul curent este stabil.",
                        "Termenul de rambursare se adaptează ciclului tău de încasări - de la 6 la 36 de luni. Dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință. Decizia se ia în 1-2 zile lucrătoare, iar fondurile sunt disponibile imediat după semnare.",
                    ],
                }}
                relatedLinks={[
                    { href: "/credite/credit-pentru-afaceri-mici", label: "Credit pentru afaceri mici", desc: "Toate tipurile de finanțare pentru antreprenori." },
                    { href: "/credite/credit-investitional", label: "Credit investițional", desc: "Finanțezi echipamente sau extinderi pe termen lung." },
                    { href: "/credite/refinantare", label: "Refinanțare", desc: "Consolidezi obligațiile existente într-un singur credit." },
                ]}
            />

            <HowItWorks />
            <CreditFAQ items={workingCapitalFaqItems} />
            <WhyBento />
        </>
    );
}
