import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import { repairLoanSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru reparație", url: "https://idealcredit.md/credite/credit-pentru-reparatie" },
];

const TITLE = "Credit pentru reparație, casă sau apartament | Ideal Credit";
const DESCRIPTION =
    "Credit pentru reparația casei sau a apartamentului, de la 10.000 la 300.000 lei. Nu trebuie să fii proprietar. Fără comisioane.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-reparatie" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-reparatie",
        title: TITLE,
        description: DESCRIPTION,
    },
};

const repairFaqItems: FaqItem[] = [
    {
        question: "Trebuie să aduc devize sau facturi de la constructor?",
        answer: "Nu. Devizele nu sunt obligatorii. Dacă ai un deviz, ne ajută să stabilim suma.",
    },
    {
        question: "Pot folosi banii pentru orice lucrare?",
        answer: "Da. Materiale, meșteri, instalații, ferestre, finisaje sau mobilier. Banii îi folosești cum ai nevoie.",
    },
    {
        question: "Pot lua credit dacă stau în chirie?",
        answer: "Da. Nu trebuie să fii proprietar. Ne uităm la venitul tău, nu la actele locuinței.",
    },
    {
        question: "Cereți gaj pe locuință?",
        answer: "La primul credit cerem un fidejusor. Gaj cerem doar la sume mari sau când venitul nu e stabil.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută e prea mare pentru venitul meu?",
        answer: "Îți spunem la telefon, înainte să aduni actele. Îți propunem o sumă mai mică sau un termen mai lung.",
    },
    {
        question: "Cât durează decizia?",
        answer: "De obicei 2-3 ore, dacă actele sunt complete. Banii îi primești în numerar la oficiu sau pe card.",
    },
    {
        question: "Se schimbă rata dacă renovarea durează mai mult?",
        answer: "Nu. Dobânda e fixă pe tot contractul. Graficul de plăți rămâne cel semnat.",
    },
];

export default function CreditReparatiePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(repairLoanSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit pentru reparație, <Accent>casă sau apartament.</Accent>
                    </>
                }
                subtitle="Pentru orice lucrare de renovare, de la 10.000 la 300.000 lei. Analizăm scopul și situația ta financiară. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "10.000–300.000 lei" },
                    { label: "Termen", value: "12–48 luni" },
                    { label: "Decizia", value: "2–3 ore" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau oamenii <Accent>credit de reparație.</Accent>
                    </>
                }
                intro="Banii îi folosești cum ai nevoie. Pentru materiale, pentru meșteri sau pentru ambele."
                items={[
                    { label: "Instalații", text: "Schimbi instalația electrică sau țevile din baie." },
                    { label: "Ferestre și uși", text: "Pui ferestre noi înainte de iarnă." },
                    { label: "Finisaje", text: "Zugrăvești pereții și pui parchet nou în camere." },
                    { label: "Mobilier", text: "Ai terminat lucrările și cumperi mobila pentru bucătărie." },
                ]}
            />

            <CostExample sum={50000} term={36} />
            <Calculator max={300000} />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Lucrăm de ${yearsSinceFoundation} ani.`}
                steps={[
                    { title: "Planul", body: "Ne spui ce lucrări vrei să faci și cât estimezi că vor costa." },
                    {
                        title: "Veniturile",
                        body: "Vedem din ce venit plătești rata în fiecare lună. Și cum o plătești dacă venitul scade.",
                    },
                    { title: "Garanțiile", body: "La final discutăm cine este fidejusor și, doar dacă e nevoie, ce bun pui gaj." },
                ]}
                showOutcomes={false}
                after="Dacă renovarea costă mult, începe cu lucrările cele mai necesare. Restul le poți finanța mai târziu, cu un al doilea credit."
            />

            <Eligibility
                can={[
                    "ai cel puțin 23 de ani;",
                    "ai un venit confirmat și stabil;",
                    "ai buletin de identitate valabil. Nu trebuie să fii proprietarul locuinței.",
                ]}
                cannot={["o sumă la care rata ar lua o parte prea mare din venitul lunar. În acest caz îți propunem o sumă mai mică."]}
            />

            <Documents
                items={[
                    { title: "Buletinul de identitate", note: "obligatoriu" },
                    { title: "Confirmarea veniturilor", note: "adeverință, extras de cont sau BIC" },
                    { title: "Actele imobilului", note: "doar dacă se cere gaj" },
                    { title: "Devizul de lucrări", note: "opțional" },
                ]}
                footnote="Banii îi primești numerar la oficiu sau pe card."
            />

            <Process />
            <LatePayment consumer example="lucrările costă mai mult decât ai estimat sau venitul scade o lună." />
            <ProductFaq items={repairFaqItems} />
            <ClosingCta />
        </div>
    );
}
