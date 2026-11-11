import type { Metadata } from "next";
import Accent from "@/components/ds/Accent";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import { agriculturalLoanSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru agricultură", url: "https://idealcredit.md/credite/credit-pentru-agricultura" },
];

const DESCRIPTION =
    "Credit pentru fermieri, gospodării țărănești, SRL și ÎI, de la 50.000 la 500.000 lei. Ratele se potrivesc cu sezonul. Fără comisioane.";

export const metadata: Metadata = {
    title: "Credit pentru agricultură în Moldova | Ideal Credit",
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-agricultura",
        title: "Credit pentru agricultură în Moldova | Ideal Credit",
        description: DESCRIPTION,
    },
};

const agricFaqItems: FaqItem[] = [
    {
        question: "Există perioadă de grație pentru creditul agricol?",
        answer: "Da, se poate. În perioada de grație plătești doar dobânda. O stabilim până la recoltă, după cultură și ciclul de producție.",
    },
    {
        question: "Pot lua credit dacă venitul meu vine doar după recoltă?",
        answer: "Da. Știm că banii din agricultură vin în anumite luni. Potrivim graficul de plată cu perioada în care vinzi recolta.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută e prea mare pentru gospodăria mea?",
        answer: "Îți spunem la telefon, înainte să aduni actele. Ne uităm la suprafață, la producția de anul trecut și la vânzări. Apoi îți propunem o sumă mai mică sau alt grafic.",
    },
    {
        question: "Ce acte trebuie pentru un credit agricol?",
        answer: "Buletinul, actul de înregistrare al gospodăriei sau companiei și actele pe teren. Plus extrasele bancare sau actele de vânzare a producției. Nu cerem plan de afaceri.",
    },
    {
        question: "Pot cumpăra tehnică agricolă din credit?",
        answer: "Da. Tractoare, combine, remorci sau sisteme de irigare. Alegem suma și termenul după prețul tehnicii.",
    },
    {
        question: "Terenul e în arendă. Pot lua credit?",
        answer: "Da. Contractul de arendă este suficient ca dovadă a activității. Ne uităm la ce produci, nu doar la cine deține terenul.",
    },
];

export default function CreditAgriculturaPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agriculturalLoanSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit pentru agricultură, <Accent>după sezonul tău.</Accent>
                    </>
                }
                subtitle="Pentru fermieri, gospodării țărănești, SRL și ÎI, de la 50.000 la 500.000 lei. Analizăm scopul creditului și veniturile din recoltă. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "50.000–500.000 lei" },
                    { label: "Termen", value: "12–60 luni" },
                    { label: "Decizia", value: "1–2 zile lucrătoare" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau fermierii <Accent>credit la noi.</Accent>
                    </>
                }
                intro="Banii din agricultură vin după recoltă. Ratele țin cont de lunile în care vinzi."
                items={[
                    { label: "Semințe și îngrășăminte", text: "Semănatul începe primăvara. Semințele și îngrășămintele trebuie cumpărate înainte." },
                    { label: "Tehnică agricolă", text: "Cumperi un tractor sau o combină. Rata o plătești din recolta pe care o aduce." },
                    { label: "Irigare", text: "Pui un sistem de irigare prin picurare. Recolta nu mai depinde doar de ploaie." },
                    { label: "Muncitori sezonieri", text: "La recoltare ai nevoie de oameni, transport și motorină. Banii din vânzare vin mai târziu." },
                ]}
            />

            <CostExample sum={150000} term={36} />
            <Calculator />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Avem ${yearsSinceFoundation} ani de lucru cu afaceri din Moldova.`}
                steps={[
                    { title: "Planul", body: "Ne uităm ce vrei să faci cu banii și dacă planul e realist pentru suma și termenul ales." },
                    {
                        title: "Veniturile",
                        body: "Ne uităm la suprafață, la culturi și la producția din sezonul trecut. Extrasele bancare sau actele de vânzare arată cât încasezi după recoltă.",
                    },
                    { title: "Garanțiile", body: "La final discutăm cine este fidejusor și, dacă e nevoie, ce bun pui gaj." },
                ]}
                showOutcomes={false}
            />

            <Eligibility
                can={[
                    "ai o activitate agricolă înregistrată: gospodărie țărănească, SRL sau ÎI;",
                    "ai lucrat cel puțin un sezon și se vede din acte;",
                    "terenul e al tău sau îl ai în arendă.",
                ]}
                cannot={["o sumă la care rata ar lua aproape tot venitul. În acest caz îți propunem o sumă mai mică."]}
            />

            <Documents
                items={[
                    { title: "Buletinul de identitate", note: "obligatoriu" },
                    { title: "Actul de înregistrare", note: "al gospodăriei țărănești, SRL sau ÎI" },
                    { title: "Actele pe teren", note: "titlu de proprietate sau contract de arendă" },
                    { title: "Extrasele bancare", note: "sau actele de vânzare a producției" },
                    { title: "Actele bunului pus gaj", note: "doar dacă e cazul" },
                ]}
                footnote="Nu cerem plan de afaceri."
            />

            <Process />
            <LatePayment example="recolta se vinde mai târziu." />
            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul <Accent>agricol.</Accent>
                    </>
                }
                items={agricFaqItems}
            />
            <ClosingCta />
        </div>
    );
}
