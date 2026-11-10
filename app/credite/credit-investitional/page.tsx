import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import MobileCallBar from "@/components/includes/MobileCallBar";
import { investitionalSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit investițional", url: "https://idealcredit.md/credite/credit-investitional" },
];

const TITLE = "Credit investițional pentru afaceri | Ideal Credit";
const DESCRIPTION =
    "Credit pentru echipament, utilaje, transport și renovarea spațiului. De la 50.000 la 400.000 lei, pe 12-60 de luni. Fără comisioane.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-investitional" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-investitional",
        title: TITLE,
        description: DESCRIPTION,
    },
};

const investFaqItems: FaqItem[] = [
    {
        question: "Ce echipamente sau utilaje pot finanța?",
        answer: "Aproape orice bun de care are nevoie afacerea. De exemplu utilaje industriale, tehnică agricolă, echipamente horeca, sisteme IT sau vehicule comerciale.",
    },
    {
        question: "Ce se întâmplă dacă investiția nu are sens acum?",
        answer: `Îți spunem direct, înainte să aduni actele. Avem ${yearsSinceFoundation} ani de lucru cu afaceri din Moldova. Îți propunem o sumă mai mică sau să amâni investiția pentru un sezon mai potrivit.`,
    },
    {
        question: "Care este termenul maxim?",
        answer: "Până la 60 de luni, adică 5 ani. Cu un termen mai lung, rata lunară e mai mică.",
    },
    {
        question: "Bunul cumpărat este al meu din prima zi?",
        answer: "Da. Bunul este al companiei din prima zi. Nu are restricții de folosire.",
    },
    {
        question: "Pot achita creditul înainte de termen?",
        answer: "Da, fără comisioane. Plătești dobânda doar pentru perioada în care ai folosit banii.",
    },
    {
        question: "Ce garanții cereți?",
        answer: "La primul credit cerem fidejusor, de obicei administratorul. Gaj imobiliar putem cere la sume mari sau când încasările nu sunt constante.",
    },
    {
        question: "Pot lua în același credit și bani pentru capital de lucru?",
        answer: "Da, de multe ori. Analizăm suma pentru echipament și suma pentru capital de lucru. Dacă afacerea le poate plăti, le finanțăm în același dosar, cu o singură rată lunară.",
    },
];

export default function CreditInvestitionalPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(investitionalSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit investițional pentru <Accent>echipamente și extindere.</Accent>
                    </>
                }
                subtitle="Pentru SRL, ÎI și gospodării țărănești, de la 50.000 la 400.000 lei. Analizăm scopul investiției și veniturile afacerii. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "50.000–400.000 lei" },
                    { label: "Termen", value: "12–60 luni" },
                    { label: "Decizia", value: "1–2 zile lucrătoare" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau companiile <Accent>credit investițional.</Accent>
                    </>
                }
                intro="Alegem termenul după cât de repede aduce venit investiția. Un termen mai lung face rata mai mică."
                items={[
                    { label: "Utilaj nou", text: "Cumperi o linie de producție sau tehnică agricolă. Rata o plătești din venitul pe care îl aduce." },
                    { label: "Vehicul comercial", text: "Ai nevoie de o autoutilitară sau un camion pentru livrări." },
                    { label: "Renovare spațiu", text: "Modernizezi magazinul, depozitul sau restaurantul. Sau extinzi spațiul în care lucrezi." },
                    { label: "Dotări și IT", text: "Dotezi un salon, un hotel sau un birou. Sau cumperi sisteme IT pentru companie." },
                ]}
            />

            <CostExample sum={200000} term={36} />
            <Calculator />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Avem ${yearsSinceFoundation} ani de lucru cu afaceri din Moldova.`}
                steps={[
                    { title: "Planul", body: "Ne spui ce bun cumperi și cum îți aduce venit. Nu cerem un plan de afaceri detaliat." },
                    {
                        title: "Veniturile",
                        body: "Vedem din ce bani plătești rata, după extrasele bancare pe ultimele 3-6 luni. Și cum o plătești până investiția aduce venit.",
                    },
                    { title: "Garanțiile", body: "La final discutăm cine este fidejusor și, dacă e nevoie, ce bun pui gaj." },
                ]}
                showOutcomes={false}
                after="Ai nevoie și de capital de lucru pe lângă echipament? Putem finanța ambele în același dosar, cu o singură rată."
            />

            <Eligibility
                can={[
                    "ai o companie înregistrată în Moldova: SRL, ÎI sau gospodărie țărănească;",
                    "afacerea are cel puțin 6 luni de activitate și încasări constante pe cont;",
                    "investiția are legătură directă cu activitatea companiei;",
                    "administratorul poate fi fidejusor (garant) la primul credit.",
                ]}
                cannot={["o sumă la care rata ar lua aproape tot profitul lunar. În acest caz îți propunem o sumă mai mică."]}
            />

            <Documents
                items={[
                    { title: "Buletinul de identitate", note: "al administratorului" },
                    { title: "Extrasul din Registrul de stat", note: "nu mai vechi de 30 de zile" },
                    { title: "Extrasele bancare", note: "pe ultimele 3-6 luni" },
                    { title: "Oferta sau factura pentru bun", note: "dacă o ai deja" },
                    { title: "Actele de proprietate", note: "doar dacă e nevoie de gaj" },
                ]}
                footnote="Bunul cumpărat este al companiei din prima zi."
            />

            <Process />
            <LatePayment example="un utilaj nou pornește mai târziu sau un client plătește cu întârziere." />
            <ProductFaq items={investFaqItems} />
            <ClosingCta />
            <MobileCallBar />
        </div>
    );
}
