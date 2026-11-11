import type { Metadata } from "next";
import Link from "next/link";
import Accent from "@/components/ds/Accent";
import SplitSection from "@/components/ds/SplitSection";
import Analysis from "@/components/home/Analysis";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { ServiceHero, Situations, CostExample, Eligibility, Documents, LatePayment } from "@/components/product/ServiceSections";
import { personalLoanSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru nevoi personale", url: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
];

const DESCRIPTION =
    "Credit pentru nevoi personale în Moldova, fără comisioane. De la 10.000 la 300.000 lei, pe 12-48 de luni. Plătești doar dobânda fixă. Decizie în 2-3 ore.";

export const metadata: Metadata = {
    title: "Credit pentru nevoi personale în Moldova | Ideal Credit",
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-nevoi-personale",
        title: "Credit pentru nevoi personale în Moldova | Ideal Credit",
        description: DESCRIPTION,
    },
};

const personalFaqItems: FaqItem[] = [
    {
        question: "Aveți comisioane?",
        answer: "Nu. Nu plătești comision de analiză sau de acordare. Plătești doar dobânda fixă.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută e prea mare pentru venitul meu?",
        answer: `Îți spunem la telefon, înainte să aduni actele. Avem ${yearsSinceFoundation} ani de experiență. Îți propunem o sumă potrivită pentru venitul tău.`,
    },
    {
        question: "Cât pot lua fără gaj?",
        answer: "Depinde de venitul tău. Îți spunem limita la prima discuție. Așa nu aduni acte degeaba.",
    },
    {
        question: "Trebuie neapărat adeverință de salariu?",
        answer: "Nu neapărat. Poți confirma venitul cu adeverință de salariu, extras de card sau pensie. Merge și venitul din activitate independentă. Putem face și verificarea la Biroul Istoriilor de Credit.",
    },
    {
        question: "Pot lua un credit nou dacă am deja unul activ?",
        answer: "Da, dacă venitul îți permite. Ne uităm la toate ratele pe care le plătești deja.",
    },
    {
        question: "Cum primesc banii după aprobare?",
        answer: "Pe cont sau în numerar la oficiu. Alegi tu.",
    },
    {
        question: "Pot achita creditul înainte de termen?",
        answer: "Da, fără nicio taxă. Plătești dobânda doar pentru perioada în care ai folosit banii.",
    },
    {
        question: "Am nevoie de fidejusor?",
        answer: "La primul credit, da. Dacă ai achitat la timp, la următorul credit poți primi o dobândă mai mică și poți lua credit fără fidejusor.",
    },
    {
        question: "Bugetarii au condiții speciale?",
        answer: "Condițiile sunt aceleași ca pentru toți clienții. Venitul de la stat este stabil și se confirmă ușor, de aceea analiza e mai simplă. Ajunge adeverința de salariu sau extrasul de card.",
    },
];

const bugetari = [
    { title: "Medici și personal medical", note: "medici, asistenți medicali, farmaciști, personal auxiliar" },
    { title: "Militari", note: "ofițeri și subofițeri ai Armatei Naționale" },
    { title: "Polițiști", note: "angajați ai MAI și ai Serviciului de Protecție și Pază de Stat" },
    { title: "Profesori și educatori", note: "personal didactic" },
    { title: "Funcționari publici", note: "administrația locală, instituții și autorități de stat" },
];

export default function CreditNevoiPersonalePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />

            <ServiceHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credit pentru nevoi personale, <Accent>fără comisioane.</Accent>
                    </>
                }
                subtitle="De la 10.000 la 300.000 lei, pentru ce ai planificat. Analizăm scopul creditului și veniturile tale. Apoi îți spunem ce sumă și ce termen ți se potrivesc."
                rows={[
                    { label: "Suma", value: "10.000–300.000 lei" },
                    { label: "Termen", value: "12–48 luni" },
                    { label: "Decizia", value: "2–3 ore" },
                ]}
            />

            <Situations
                title={
                    <>
                        Pentru ce iau oamenii <Accent>credit la noi.</Accent>
                    </>
                }
                intro={
                    <>
                        Alegem rata după venitul tău lunar. Așa o plătești ușor până la capăt. Pentru renovarea casei avem un credit separat:{" "}
                        <Link href="/credite/credit-pentru-reparatie" className="text-dc-accent underline underline-offset-4">
                            credit pentru reparație
                        </Link>
                        .
                    </>
                }
                items={[
                    { label: "Vacanță", text: "Rezervi vacanța familiei din timp. Plătești biletele și cazarea acum." },
                    { label: "Mobilă și electrocasnice", text: "Cumperi o bucătărie nouă sau o mașină de spălat. Achiți în rate lunare." },
                    { label: "Nuntă sau botez", text: "Ai stabilit data evenimentului. Banii pentru sală și restaurant trebuie dați din timp." },
                    { label: "Studii sau tratament", text: "Plătești taxa de studii sau un tratament. Achiți suma în rate lunare." },
                ]}
            />

            <SplitSection
                id="bugetari"
                title={
                    <>
                        Credit pentru <Accent>bugetari.</Accent>
                    </>
                }
                description="Venitul stabil de la stat face analiza mai simplă. Confirmi venitul cu adeverința de salariu sau extrasul din sistemul de salarizare."
            >
                <ul className="border-b border-dc-line">
                    {bugetari.map((b) => (
                        <li
                            key={b.title}
                            className="flex flex-col gap-1 border-t border-dc-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                        >
                            <span className="text-lg font-semibold text-dc-text">{b.title}</span>
                            <span className="text-[15px] text-dc-text-muted sm:text-right">{b.note}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-5 text-[15px] leading-[1.55] text-dc-text-muted">Condițiile exacte depind de venitul fiecăruia.</p>
            </SplitSection>

            <CostExample sum={30000} term={24} />
            <Calculator max={300000} />

            <Analysis
                title={
                    <>
                        Ce analizăm înainte <Accent>de aprobare.</Accent>
                    </>
                }
                intro={`Fiecare cerere o analizează un specialist cu experiență, care discută direct cu tine. Avem ${yearsSinceFoundation} ani de experiență.`}
                steps={[
                    { title: "Planul", body: "Ne spui pentru ce ai nevoie de bani. Vedem dacă suma și termenul se potrivesc." },
                    { title: "Veniturile", body: "Vedem din ce bani plătești rata: salariu, pensie sau venit din activitate independentă." },
                    { title: "Garanțiile", body: "La primul credit cerem un fidejusor. Pentru sume mari cerem și gaj. Le discutăm la final." },
                ]}
                showOutcomes={false}
            />

            <Eligibility
                can={[
                    "ai cel puțin 23 de ani și buletin valabil;",
                    "ai un venit stabil: salariu, pensie sau activitate independentă;",
                    "ai un fidejusor (garant) la primul credit.",
                ]}
                cannot={["o sumă la care rata ar lua o parte prea mare din venitul lunar. În acest caz îți propunem o sumă mai mică."]}
            />

            <Documents
                items={[
                    { title: "Buletinul de identitate", note: "obligatoriu" },
                    { title: "Confirmarea venitului", note: "adeverință de salariu, extras de card sau pensie" },
                    { title: "Extrasele de cont", note: "pe ultimele 3 luni · recomandat" },
                    { title: "Actele fidejusorului sau ale bunului pus gaj", note: "dacă e cazul" },
                ]}
                footnote="Gajul imobiliar îl putem cere pentru sume mari sau venituri care nu sunt stabile."
            />

            <Process />
            <LatePayment consumer example="salariul întârzie sau ai o cheltuială neplanificată." />
            <ProductFaq items={personalFaqItems} />
            <ClosingCta />
        </div>
    );
}
