import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import FeatureCards from "@/components/product/FeatureCards";
import type { FeatureCardItem } from "@/components/product/FeatureCards";
import EligibilityCard from "@/components/product/EligibilityCard";
import ProductDescription from "@/components/product/ProductDescription";
import DocumentsBlock from "@/components/product/DocumentsBlock";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { TrendingUp, Building2, RefreshCw, Zap, Clock, Package, Users, Trophy } from "lucide-react";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau extindere. Decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
        description: "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau extindere. Decizie în 1-2 zile lucrătoare.",
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
    {
        question: "Pot folosi creditul pentru plata salariilor sau a furnizorilor?",
        answer: "Da. Capital de lucru înseamnă exact asta - orice cheltuială operațională curentă: salarii, furnizori, chirie, utilități, stocuri.",
    },
    {
        question: "Ce termen de rambursare este recomandat pentru capital de lucru?",
        answer: "6-24 luni în general. Adaptăm termenul la ciclul tău de încasări - dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință.",
    },
    {
        question: "Pot consolida mai multe credite de afaceri într-unul singur?",
        answer: "Da - dacă ai mai multe credite active la instituții diferite, analizăm situația și, dacă are sens financiar, le aduni într-un singur credit cu o rată lunară mai mică. Nu este un produs separat, ci o opțiune discutată în cadrul consultației inițiale.",
    },
];

const useCases: FeatureCardItem[] = [
    {
        icon: TrendingUp,
        title: "Capital de lucru",
        desc: "Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea.",
        link: { href: "#capital-de-lucru", label: "Vezi mai jos" },
    },
    {
        icon: Building2,
        title: "Investiții",
        desc: "Echipamente, utilaje, extindere spațiu, vehicule comerciale.",
        link: { href: "/credite/credit-investitional" },
    },
    {
        icon: RefreshCw,
        title: "Consolidare credite",
        desc: "Aduni creditele de afaceri existente într-unul singur, cu o rată lunară mai mică - o opțiune analizată în cadrul consultației, nu un produs separat.",
    },
    {
        icon: Zap,
        title: "Start-up",
        desc: "Lansezi afacerea: înregistrare firmă, echipamente inițiale, stoc de pornire.",
        link: { href: "/cerere-de-credit-online" },
    },
];

const capitalDeLucruScenarios: FeatureCardItem[] = [
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

export default function CreditAfaceriMiciPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />

            <ProductHero
                title={<>Credit pentru afaceri mici</>}
                subtitle="Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Aprobare în 1-2 zile lucrătoare, fără birocrație excesivă."
            />

            <Section
                title={
                    <>
                        Pentru ce poți folosi <Accent>creditul</Accent>
                    </>
                }
            >
                <FeatureCards items={useCases} cols={2} />
            </Section>

            <Section align="center" title={<>Este pentru afacerea <Accent>mea?</Accent></>}>
                <EligibilityCard
                    items={[
                        "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                        "Activitate economică de cel puțin 3-6 luni",
                        "Ai nevoie de capital rapid, cu aprobare în 1-2 zile lucrătoare",
                        "Cauți o analiză flexibilă, adaptată situației reale a afacerii",
                    ]}
                />
            </Section>

            <Process />

            <Section align="center" title={<>Credit nebancar pentru <Accent>afaceri mici</Accent> în Moldova</>}>
                <ProductDescription
                    paragraphs={[
                        "Ideal Credit finanțează firme mici și mijlocii care au nevoie de bani rapizi pentru a-și continua sau extinde activitatea. Analizăm situația reală a afacerii tale - rulajul din extrase, activitatea curentă, garanțiile disponibile - nu doar documentele formale.",
                        "Pentru a te califica, ai nevoie de o firmă înregistrată în Moldova, câteva luni de activitate demonstrabilă și extrase bancare cu rulaj activ. Nu cerem plan de afaceri, profit obligatoriu sau garanție imobiliară pentru sume mai mici. Creditul poate fi folosit pentru orice nevoie legată de afacere: capital de lucru, echipamente sau extindere.",
                        "Luăm decizii în 1-2 zile lucrătoare. Dacă finanțarea nu este potrivită pentru situația ta, îți spunem direct - fără să îți pierzi timpul cu un dosar complet.",
                    ]}
                />
            </Section>

            <div id="capital-de-lucru">
                <Section title={<>Capital de lucru: <Accent>când</Accent> ai nevoie</>}>
                    <FeatureCards items={capitalDeLucruScenarios} cols={2} />
                </Section>
            </div>

            <Section align="center" title={<>Documente <Accent>necesare</Accent></>} id="documente">
                <DocumentsBlock
                    documents={[
                        "Buletin de identitate al administratorului",
                        "Certificat de înregistrare a firmei (SRL/ÎI)",
                        "Extrase bancare - ultimele 3-6 luni",
                        "Actele de proprietate (dacă se solicită gaj)",
                    ]}
                    note="La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții recurenți cu dosar solid pot obține creditul fără fidejusor."
                    relatedLinks={[
                        { href: "/credite/credit-investitional", label: "Credit investițional", desc: "Finanțezi echipamente sau extindere pe termen lung." },
                        { href: "/credite/credit-pentru-agricultura", label: "Credit pentru agricultură", desc: "Finanțare adaptată sezonului pentru activitate agricolă." },
                    ]}
                />
            </Section>

            <ProductFaq items={businessFaqItems} />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
