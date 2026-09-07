import type { Metadata } from "next";
import { Breadcrumb, CtaBand, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { BUSINESS_STEPS, CompareTable, FaqSection, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { investitionalSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit investițional pentru afaceri: utilaje, spațiu, vehicule | Ideal Credit";
const DESCRIPTION =
    "Credit investițional pentru firme din Moldova: echipamente noi sau second-hand, spațiu comercial, vehicule. Bunul e al tău din prima zi. Până la 60 de luni, dobândă fixă, decizie în 1–2 zile.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-investitional" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite pentru afaceri și persoane fizice în Moldova" }],
    },
};

const FAQ: FaqItem[] = [
    {
        question: "Pot finanța utilaje second-hand?",
        answer: "Da. Programele de stat finanțează de regulă doar echipamente noi. Noi finanțăm și utilaje folosite, de la orice vânzător, dacă au legătură cu activitatea firmei.",
    },
    {
        question: "Care este termenul maxim?",
        answer: "Până la 60 de luni. Un termen mai lung înseamnă o rată lunară mai mică și o investiție mai ușor de purtat din fluxul firmei.",
    },
    {
        question: "Bunul cumpărat devine al meu imediat?",
        answer: "Da. Spre deosebire de leasing, bunul este al tău din prima zi. Fără restricții de utilizare, fără clauze de răscumpărare.",
    },
    {
        question: "Ce garanții sunt necesare?",
        answer: "La primul credit, un fidejusor. Gajul imobiliar poate fi cerut în plus pentru sume mari sau venituri nestabile. Bunul cumpărat nu trebuie gajat.",
    },
    {
        question: "Am nevoie de factură sau ofertă înainte de aprobare?",
        answer: "Nu. Analizăm firma pe baza extraselor și a activității curente. Dacă ai o ofertă sau o factură proformă, ne ajută să stabilim suma, dar nu este obligatorie.",
    },
    {
        question: "Pot combina investiția cu capital de lucru?",
        answer: "Da. Analizăm situația totală a firmei. De multe ori finanțăm ambele nevoi prin același dosar.",
    },
];

const CATEGORIES: UseCase[] = [
    { n: "01", title: "Echipamente și utilaje", body: "Mașini industriale, linii de producție, tehnică agricolă, echipamente de prelucrare." },
    { n: "02", title: "Utilaje second-hand", body: "Echipamente folosite, cumpărate de la o altă firmă sau de la o persoană fizică. Nu cerem factură de la un furnizor autorizat." },
    { n: "03", title: "Vehicule comerciale", body: "Autoutilitare, camioane, vehicule de lucru, transport de marfă." },
    { n: "04", title: "Spațiu comercial", body: "Birouri, depozite, magazine, restaurante, hoteluri. Modernizare sau extindere." },
    { n: "05", title: "Tehnologie și IT", body: "Sisteme informatice, software specializat, echipamente de comunicații." },
    { n: "06", title: "Mobilier și dotări", body: "Dotarea completă a spațiilor: hoteluri, restaurante, birouri, saloane." },
];

export default function CreditInvestitionalPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(investitionalSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Investițional" }]} />

            <ProductHero
                eyebrow="Credit pentru afaceri"
                title="Credit investițional"
                lead="Cumperi echipamente, extinzi spațiul sau modernizezi producția. Bunul este al tău din prima zi. Termen până la 60 de luni, dobândă fixă."
                stats={[
                    { value: "60", label: "luni termen maxim" },
                    { value: "1–2", label: "zile până la decizie" },
                    { value: "Ziua 1", label: "bunul este al tău" },
                ]}
                calculator={{ minAmount: 20_000, maxAmount: 500_000, defaultAmount: 200_000, minTerm: 12, maxTerm: 60, defaultTerm: 24 }}
                checklist={{
                    items: [
                        "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                        "Cel puțin 6 luni de activitate economică",
                        "Investiția are legătură cu activitatea firmei",
                        "Un fidejusor disponibil pentru primul credit",
                    ],
                }}
            />

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Ce poți finanța" aside="Orice bun care ajută firma să producă sau să vândă mai mult. Nou sau folosit, de la orice vânzător." />
                    <UseCaseGrid items={CATEGORIES} columns={3} />
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Firmă înregistrată în Moldova: SRL, ÎI sau GȚ" },
                            { title: "Activitate economică de cel puțin 6 luni" },
                            { title: "Investiția are legătură directă cu activitatea firmei" },
                            { title: "Rulaj constant în extrasele bancare" },
                        ]}
                    />
                    <ListRows
                        variant="plain"
                        heading="Documente necesare"
                        headingTone="muted"
                        items={[
                            { title: "Buletinul administratorului" },
                            { title: "Actele de înregistrare ale firmei" },
                            { title: "Extrase bancare pe ultimele 3–6 luni" },
                            { title: "Ofertă sau factură proformă pentru bun, dacă există" },
                            { title: "Actele de proprietate, dacă se cere gaj" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>Bunul cumpărat devine proprietatea ta din prima zi. Nu există clauze de răscumpărare și nu trebuie să îl gajezi.</InsetNote>
                </Reveal>
            </SectionBand>

            <SectionBand spacing="both">
                <Reveal>
                    <SectionHeading title="Credit investițional sau leasing" aside="Aceeași investiție, două mecanisme diferite. Diferența e cine deține bunul și cât de liber îl folosești." />
                </Reveal>
                <Reveal className="mt-[52px]">
                    <CompareTable
                        usLabel="Ideal Credit"
                        themLabel="Leasing"
                        rows={[
                            { label: "Proprietatea bunului", us: "A ta din prima zi", them: "A finanțatorului până la ultima rată" },
                            { label: "Ce poți finanța", us: "Orice bun, nou sau folosit", them: "Vehicule și echipamente noi, de la furnizori agreați" },
                            { label: "Vânzătorul", us: "Oricine: firmă sau persoană fizică", them: "Dealer sau furnizor partener" },
                            { label: "Rambursare anticipată", us: "Gratuită, oricând", them: "De regulă cu penalizări" },
                            { label: "Restricții de utilizare", us: "Niciuna", them: "Kilometraj, modificări interzise" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            <ProcessSection
                title="Cum lucrăm cu dosarul tău"
                lead="Nu cerem plan de afaceri și nici factură finală înainte de aprobare. Analizăm firma pe baza extraselor."
                steps={BUSINESS_STEPS}
            />

            <FaqSection
                title={
                    <>
                        Ce ne întreabă
                        <br />
                        antreprenorii
                    </>
                }
                items={FAQ}
            />

            <Reveal>
                <CtaBand title="Ai găsit utilajul. Spune-ne cât costă." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
