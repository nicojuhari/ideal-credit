import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import { businessCreditSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru afaceri", url: "https://idealcredit.md/credite/credit-pentru-afaceri" },
];

const DESCRIPTION =
    "Credit pentru afaceri fără comisioane, de la 50.000 la 500.000 lei. Pentru SRL, ÎI și gospodării țărănești. Decizie în 1-2 zile lucrătoare.";

export const metadata: Metadata = {
    title: "Credit pentru afaceri, fără comisioane | Ideal Credit",
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-afaceri",
        title: "Credit pentru afaceri, fără comisioane | Ideal Credit",
        description: DESCRIPTION,
    },
};

const businessFaqItems: FaqItem[] = [
    {
        question: "Pot lua credit dacă firma are doar câteva luni de activitate?",
        answer: "Da. Ideal Credit finanțează companii cu cel puțin 4-6 luni de activitate, dacă pe extrasele bancare se văd încasări constante. Ne uităm la cât încasează afacerea acum, nu doar la vechimea companiei. La primul credit cerem un fidejusor, de obicei administratorul.",
    },
    {
        question: "Aveți comisioane?",
        answer: "Nu. Nici la acordare, nici lunare, nici când achiți creditul înainte de termen. Plătești doar dobânda.",
    },
    {
        question: "Cereți asigurare?",
        answer: "Nu cerem asigurare de viață. Doar la creditele cu gaj se asigură bunul pus gaj.",
    },
    {
        question: "Pot lua credit fără gaj?",
        answer: "Da, în majoritatea cazurilor. La primul credit cerem fidejusor, de obicei administratorul. Gaj cerem doar la sume mari sau când încasările nu sunt constante.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută e prea mare pentru afacerea mea?",
        answer: "Îți spunem la telefon, înainte să aduni actele. Îți propunem o sumă mai mică sau un termen mai lung, ca rata să fie ușor de plătit.",
    },
    {
        question: "Compania a avut pierderi anul trecut. Pot lua credit?",
        answer: "Se poate. Ne uităm la situația de acum. Dacă pe extrasele bancare se văd încasări constante, discutăm.",
    },
    {
        question: "Pot plăti salarii și furnizori din credit?",
        answer: "Da. Capitalul de lucru înseamnă exact asta: salarii, furnizori, chirie, marfă.",
    },
    {
        question: "Ce termen e potrivit pentru capital de lucru?",
        answer: "De obicei 12-24 de luni. Îl potrivim cu perioada în care încasezi banii de la clienți.",
    },
    {
        question: "Clienții care revin primesc condiții mai bune?",
        answer: "Da. Dacă ai achitat la timp primul credit, la următorul poți primi o dobândă mai mică și poți lua credit fără fidejusor.",
    },
];

export default function CreditAfaceriPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit pentru afaceri, <Accent>fără comisioane.</Accent>
                    </>
                }
                subtitle="Pentru SRL, ÎI și gospodării țărănești, de la 50.000 la 500.000 lei. Analizăm scopul creditului și veniturile afacerii. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "50.000–500.000 lei" },
                    { label: "Termen", value: "12–60 luni" },
                    { label: "Decizia", value: "1–2 zile lucrătoare" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau companiile <Accent>credit la noi.</Accent>
                    </>
                }
                intro="Alegem termenul după cum încasezi banii. Dacă clienții îți plătesc la 60 de zile, ratele țin cont de asta."
                items={[
                    { label: "Capital de lucru", text: "Ai livrat marfa, dar clientul plătește peste 60 de zile. Furnizorii trebuie plătiți acum." },
                    { label: "Marfă pentru sezon", text: "Sezonul începe în martie, iar marfa trebuie cumpărată din februarie." },
                    { label: "Echipament", text: "Cumperi un utilaj nou. Rata o plătești din venitul pe care îl aduce." },
                    { label: "Comandă mare", text: "Ai primit o comandă mare și ai nevoie de bani pentru materie primă." },
                ]}
            />

            <CostExample sum={100000} term={24} />
            <Calculator />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Avem ${yearsSinceFoundation} ani de lucru cu afaceri din Moldova.`}
                steps={[
                    { title: "Planul", body: "Ne uităm ce vrei să faci cu banii și dacă planul este realist pentru suma și termenul ales." },
                    {
                        title: "Veniturile",
                        body: "Vedem din ce bani plătești rata, după extrasele bancare pe ultimele 3-6 luni. Și cum o plătești dacă planul întârzie.",
                    },
                    { title: "Garanțiile", body: "La final discutăm cine este fidejusor și, dacă e nevoie, ce bun pui gaj." },
                ]}
                showOutcomes={false}
                after="Vrei să finanțezi mai multe lucruri deodată? Te ajutăm să alegi ce aduce venit mai repede. Restul poți finanța mai târziu, cu un al doilea credit."
            />

            <Eligibility
                can={[
                    "ai o companie înregistrată în Moldova: SRL, ÎI sau gospodărie țărănească;",
                    "afacerea are cel puțin 4-6 luni de activitate și încasări constante pe cont;",
                    "administratorul poate fi fidejusor (garant) la primul credit.",
                ]}
                cannot={[
                    "achitarea altor datorii, dacă afacerea nu aduce venituri noi;",
                    "o sumă la care rata ar lua aproape tot profitul lunar. În acest caz îți propunem o sumă mai mică.",
                ]}
            />

            <Documents
                title={
                    <>
                        Ce acte trebuie pentru un credit <Accent>pe firmă.</Accent>
                    </>
                }
                answer="Pentru un credit pe firmă la Ideal Credit îți trebuie: buletinul administratorului, extrasul din Registrul de stat (nu mai vechi de 30 de zile) și extrasele bancare pe ultimele 3-6 luni. Dacă SRL-ul are mai mulți asociați, aduci și decizia asociaților. Nu cerem plan de afaceri. Actele le trimiți pe e-mail, WhatsApp sau Viber."
                items={[
                    { title: "Buletinul de identitate", note: "al administratorului" },
                    { title: "Extrasul din Registrul de stat", note: "nu mai vechi de 30 de zile" },
                    { title: "Extrasele bancare", note: "pe ultimele 3-6 luni" },
                    { title: "Decizia asociaților", note: "doar dacă SRL-ul are mai mulți asociați · fără notar" },
                ]}
                footnote="Dările de seamă la SFS nu sunt obligatorii. Uneori le putem cere."
                tip={
                    <>
                        Ai nevoie de bani pentru sezon? Sună-ne cu <span className="font-dc-mono text-dc-accent">2 săptămâni</span> înainte, ca să ai
                        timp pentru analiză și acte.
                    </>
                }
            />

            <Process />
            <LatePayment example="o comandă se amână sau un client plătește mai târziu." />
            <ProductFaq items={businessFaqItems} />
            <ClosingCta />
        </div>
    );
}
