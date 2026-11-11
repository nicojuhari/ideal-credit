import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import { autoLoanSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru automobil", url: "https://idealcredit.md/credite/credit-pentru-automobil" },
];

const DESCRIPTION =
    "Credit pentru o mașină nouă sau rulată ori pentru reparația ei. De la 10.000 la 300.000 lei, fără comisioane. Decizie în 2-3 ore.";

export const metadata: Metadata = {
    title: "Credit pentru automobil în Moldova | Ideal Credit",
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-automobil" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-automobil",
        title: "Credit pentru automobil în Moldova | Ideal Credit",
        description: DESCRIPTION,
    },
};

const faqItems: FaqItem[] = [
    {
        question: "Pot cumpăra o mașină rulată?",
        answer: "Da. Finanțăm mașini noi și rulate. Poți cumpăra de la o persoană fizică sau de la un dealer. Nu avem restricții pe vârsta sau tipul mașinii.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută e prea mare pentru venitul meu?",
        answer: "Îți spunem la telefon, înainte să aduni actele. Îți propunem o sumă mai mică sau un termen mai lung. Rata trebuie să fie ușor de plătit.",
    },
    {
        question: "Mașina e a mea din prima zi?",
        answer: "Da. Mașina este pe numele tău de la cumpărare. Nu ai limită de kilometri. Nu ai nimic de răscumpărat la final.",
    },
    {
        question: "Pot lua credit pentru reparația mașinii?",
        answer: "Da. Finanțăm reparații mari: motor, cutie de viteze, suspensie, caroserie. Nu cerem ofertă de la service înainte de aprobare.",
    },
    {
        question: "Am nevoie de fidejusor sau gaj?",
        answer: "La primul credit cerem un fidejusor, indiferent de sumă. Gaj putem cere la sume mari sau dacă venitul nu este stabil.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Decizia o luăm în 2-3 ore, dacă actele sunt complete. După ce semnezi contractul, banii îi primești în numerar la oficiu sau pe card.",
    },
    {
        question: "Pot achita creditul înainte de termen?",
        answer: "Da, fără comision. Plătești dobânda doar pentru perioada în care ai folosit banii.",
    },
];

export default function CreditAutomobilPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoLoanSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit pentru automobil, <Accent>fără comisioane.</Accent>
                    </>
                }
                subtitle="Pentru cumpărarea sau reparația mașinii, de la 10.000 la 300.000 lei. Analizăm scopul creditului și veniturile tale. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "10.000–300.000 lei" },
                    { label: "Termen", value: "12–48 luni" },
                    { label: "Decizia", value: "2–3 ore" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau persoanele fizice <Accent>credit auto la noi.</Accent>
                    </>
                }
                intro="Nu avem restricții pe tipul mașinii. Ne uităm la venitul tău, nu la mașină."
                items={[
                    { label: "Mașină rulată", text: "Ai găsit o mașină la o persoană fizică. Vânzătorul vrea banii acum." },
                    { label: "Mașină nouă", text: "Cumperi o mașină nouă de la un dealer. Plătești în rate fixe." },
                    { label: "Reparație mare", text: "S-a stricat motorul sau cutia de viteze. Ai nevoie de mașină în fiecare zi." },
                    { label: "Caroserie", text: "Repari caroseria sau suspensia înainte ca problema să devină mai scumpă." },
                ]}
            />

            <CostExample sum={80000} term={36} />
            <Calculator max={300000} />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Avem ${yearsSinceFoundation} ani de lucru cu persoane fizice din Moldova.`}
                steps={[
                    { title: "Planul", body: "Ne spui ce mașină cumperi sau ce reparație faci și de ce ai nevoie de ea." },
                    {
                        title: "Veniturile",
                        body: "Vedem din ce venit plătești rata în fiecare lună. Și cum o plătești dacă venitul scade.",
                    },
                    { title: "Garanțiile", body: "La final discutăm cine este fidejusor și, doar dacă e nevoie, ce bun pui gaj." },
                ]}
                showOutcomes={false}
            />

            <Eligibility
                can={[
                    "ai cel puțin 23 de ani;",
                    "ai un venit confirmat și stabil;",
                    "ai buletin de identitate valabil;",
                    "nu ai restanțe mari la creditele active.",
                ]}
                cannot={["o sumă la care rata ar lua o parte prea mare din venitul lunar. În acest caz îți propunem o sumă mai mică."]}
            />

            <Documents
                items={[
                    { title: "Buletinul de identitate", note: "valabil" },
                    { title: "Confirmarea veniturilor", note: "adeverință de salariu sau extras de cont" },
                    { title: "Certificatul de înmatriculare", note: "dacă mașina e deja cumpărată" },
                    { title: "Actele vânzătorului", note: "doar pentru mașina rulată" },
                ]}
                footnote="Nu cerem ofertă de la dealer sau deviz de la service înainte de aprobare."
            />

            <Process />
            <LatePayment consumer example="salariul vine mai târziu." />
            <ProductFaq items={faqItems} />
            <ClosingCta />
        </div>
    );
}
