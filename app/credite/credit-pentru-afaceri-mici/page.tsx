import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import SpecStrip from "@/components/product/SpecStrip";
import OrdinalRows from "@/components/product/OrdinalRows";
import EligibilityRows from "@/components/product/EligibilityRows";
import ProductDescription from "@/components/product/ProductDescription";
import CardGrid from "@/components/product/CardGrid";
import DocumentRows from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
    description:
        "Credit pentru afaceri mici din Moldova - capital de lucru, investiții sau extindere. Decizie în 1-2 zile lucrătoare, dobândă fixă.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
        description:
            "Credit pentru afaceri mici din Moldova - capital de lucru, investiții sau extindere. Decizie în 1-2 zile lucrătoare, dobândă fixă.",
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
        answer: "Analizăm individual. Contează mai mult extrasele bancare și activitatea lunară a contului decât vechimea exactă. Am finanțat firme cu 4-6 luni de activitate cu flux demonstrabil.",
    },
    {
        question: "Poate primi credit o firmă cu pierderi pe ultimul an?",
        answer: "Analizăm situația curentă a firmei, nu doar rezultatul financiar din anul trecut. Dacă activitatea este stabilă acum și extrasele bancare arată bani care intră și ies constant, discutăm.",
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
        answer: "12-24 luni în general. Adaptăm termenul la ciclul tău de încasări - dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință.",
    },
    {
        question: "Pot consolida mai multe credite de afaceri într-unul singur?",
        answer: "Da - dacă ai mai multe credite active la instituții diferite, analizăm situația și, dacă are sens financiar, le aduni într-un singur credit cu o rată lunară mai mică. Nu este o soluție separată, ci o opțiune discutată în cadrul consultației inițiale.",
    },
    {
        question: "De ce e dobânda mai mare la un OCN decât la o bancă?",
        answer: "Noi suntem un OCN (organizație de creditare nebancară) - nu o bancă. Băncile atrag bani din depozite, la costuri mici. Noi ne finanțăm din capital propriu și linii de credit, la costuri mai mari - și acceptăm un profil de risc mai flexibil (firme mai noi, fără gaj). Diferența de dobândă reflectă exact asta: viteza și accesul au un cost. Dacă ai timp, 2+ ani de activitate și gaj imobiliar disponibil, o bancă poate fi mai ieftină pentru sume mari.",
    },
    {
        question: "Ce documente în plus dacă SRL-ul are mai mulți asociați?",
        answer: "Se adaugă Hotărârea Adunării Generale a Asociaților privind contractarea creditului - un document intern, semnat de toți asociații, fără notar. Dacă nu știi cum arată, îți arătăm un model.",
    },
    {
        question: "Cât de vechi pot fi documentele din dosar?",
        answer: "Extrasul din Registrul de Stat nu trebuie să aibă mai mult de 30 de zile. Extrasele bancare și declarațiile fiscale trebuie să fie recente (ultimele 3-6, respectiv 6-12 luni) - nu neapărat de azi, dar să reflecte situația curentă a firmei.",
    },
];

const useCases = [
    { title: "Capital de lucru", desc: "Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea." },
    { title: "Investiții", desc: "Echipamente, utilaje, extindere spațiu, vehicule comerciale." },
    {
        title: "Consolidare credite",
        desc: "Aduni creditele de afaceri existente într-unul singur, cu o rată lunară mai mică - o opțiune analizată în cadrul consultației, nu o soluție separată.",
    },
    { title: "Start-up", desc: "Lansezi afacerea: înregistrare firmă, echipamente inițiale, stoc de pornire." },
];

const capitalDeLucruScenarios = [
    {
        title: "Creanțe blocate",
        desc: "Ai livrat marfa, clientul plătește în 60 de zile. Furnizorii cer bani azi. Continuăm producția fără să aștepți.",
    },
    {
        title: "Sezon aglomerat",
        desc: "Urmează sezonul de vârf, ai nevoie de stoc dublu, dar banii sunt blocați în creanțe. Pregătești depozitul la timp.",
    },
    {
        title: "Angajări noi",
        desc: "Ai angajați noi dar primii clienți plătesc abia luna viitoare. Acoperi salariile fără presiune pe flux.",
    },
    {
        title: "Contract mare",
        desc: "Ai câștigat un contract important dar ai nevoie de resurse să-l onorezi. Folosești ocazia fără să o ratezi.",
    },
];

export default function CreditAfaceriMiciPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />

            <ProductHero
                category="Persoane juridice"
                position={1}
                title={
                    <>
                        Credit pentru <Accent>afaceri</Accent> mici.
                    </>
                }
                subtitle="Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Aprobare în 1-2 zile lucrătoare, fără birocrație excesivă."
                primaryCta={{ label: "Depune cererea", href: "/cerere-de-credit-online" }}
                secondaryCta={{ label: "Calculează rata", href: "#calculator" }}
            />
            <SpecStrip
                specs={[
                    { value: "50 000", label: "MDL sumă minimă" },
                    { value: "12–60", label: "luni termen" },
                    { value: "1–2 zile", label: "până la decizie", proof: true },
                    { value: "4 %", label: "dobândă fixă / lună" },
                ]}
            />

            <OrdinalRows
                marker="Destinații"
                title={
                    <>
                        Pentru ce poți folosi <Accent>creditul</Accent>
                    </>
                }
                items={useCases}
            />

            <EligibilityRows
                marker="Eligibilitate"
                title={
                    <>
                        Este pentru afacerea <Accent>mea?</Accent>
                    </>
                }
                description="Patru condiții. Dacă le bifezi pe toate, dosarul tău trece la analiză în aceeași zi."
                note="Nu cerem plan de afaceri, profit obligatoriu sau gaj imobiliar pentru sume mici."
                items={[
                    "Firmă înregistrată în Moldova (SRL, ÎI sau gospodărie țărănească)",
                    "Activitate economică de cel puțin 3-6 luni",
                    "Ai nevoie de capital rapid, cu aprobare în 1-2 zile lucrătoare",
                    "Cauți o analiză flexibilă, adaptată situației reale a afacerii",
                ]}
            />

            <Calculator />

            <Section
                marker="Detalii"
                title={
                    <>
                        Credit nebancar pentru <Accent>afaceri mici</Accent> în Moldova
                    </>
                }
            >
                <ProductDescription
                    items={[
                        {
                            title: "Cum analizăm dosarul",
                            text: "Ne uităm la afacerea reală - banii care intră și ies din cont, activitatea curentă, garanțiile disponibile. Nu doar actele formale.",
                        },
                        {
                            title: "Cine se califică",
                            text: "Firmă înregistrată în Moldova, câteva luni de activitate și extrase bancare cu mișcare de bani constantă. Fără plan de afaceri, fără profit obligatoriu, fără garanție imobiliară pentru sume mici.",
                        },
                        {
                            title: "Decizia",
                            text: "1-2 zile lucrătoare. Dacă finanțarea nu ți se potrivește, îți spunem direct - fără să pierzi timpul cu un dosar complet.",
                        },
                    ]}
                />
            </Section>

            <CardGrid
                id="capital-de-lucru"
                marker="Capital de lucru"
                title={
                    <>
                        Patru situații în care sună <Accent>telefonul</Accent>
                    </>
                }
                items={capitalDeLucruScenarios}
            />

            <Process />

            <DocumentRows
                id="documente"
                marker="Dosar"
                title={
                    <>
                        Documente <Accent>necesare</Accent>
                    </>
                }
                items={[
                    { title: "Buletin de identitate al administratorului", note: "Obligatoriu" },
                    { title: "Certificat de înregistrare a firmei", note: "SRL / ÎI / GȚ" },
                    { title: "Extrase bancare - ultimele 3-6 luni", note: "Obligatoriu" },
                    { title: "Actele de proprietate", note: "Doar dacă se solicită gaj" },
                ]}
                footnote="La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții recurenți cu dosar solid pot obține creditul fără fidejusor."
            />

            <ProductFaq
                marker="Întrebări"
                title={
                    <>
                        Întrebări despre credite de <Accent>afaceri</Accent>
                    </>
                }
                items={businessFaqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
