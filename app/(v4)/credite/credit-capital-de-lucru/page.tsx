import type { Metadata } from "next";
import { Breadcrumb, CtaBand, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { BUSINESS_STEPS, FaqSection, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { workingCapitalSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit capital de lucru pentru SRL și ÎI | Ideal Credit";
const DESCRIPTION =
    "Credit capital de lucru pentru firme din Moldova: salarii, furnizori, stoc, decalajul dintre facturi și încasări. 20.000–500.000 MDL, 6–36 luni, decizie în 1–2 zile lucrătoare.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-capital-de-lucru" },
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
        question: "Pot folosi creditul pentru plata salariilor?",
        answer: "Da. Capital de lucru înseamnă exact asta: orice cheltuială curentă a firmei. Salarii, furnizori, chirie, utilități, stocuri.",
    },
    {
        question: "Ce termen este potrivit pentru capital de lucru?",
        answer: "De obicei 6–24 de luni. Adaptăm termenul la ciclul tău de încasări. Dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință.",
    },
    {
        question: "Ce documente sunt necesare?",
        answer: "Actele de înregistrare ale firmei, extrase bancare pe ultimele 3–6 luni și evidența contabilă de bază. Nu cerem plan de afaceri.",
    },
    {
        question: "Firma are doar 6 luni de activitate. Se poate?",
        answer: "Da. Contează rulajul lunar și stabilitatea fluxului de numerar, nu vechimea firmei.",
    },
    {
        question: "Pot lua din nou credit după ce îl închid?",
        answer: "Da. Clienții cu plăți la zi primesc răspuns mai repede la o nouă finanțare, de regulă fără fidejusor.",
    },
    {
        question: "Cât de repede intră banii după aprobare?",
        answer: "În aceeași zi. Semnezi contractul în oficiu și banii pleacă prin transfer în contul firmei.",
    },
];

const SCENARIOS: UseCase[] = [
    { n: "01", title: "Facturi neîncasate", body: "Ai livrat marfa, clientul plătește la 60 de zile. Furnizorii cer bani azi. Continui producția fără să aștepți." },
    { n: "02", title: "Sezon de vârf", body: "Urmează sezonul aglomerat și ai nevoie de stoc dublu, dar banii sunt blocați în creanțe. Pregătești depozitul la timp." },
    { n: "03", title: "Angajări noi", body: "Ai angajat oameni, dar primii clienți plătesc abia luna viitoare. Acoperi salariile fără presiune pe flux." },
    { n: "04", title: "Contract mare", body: "Ai câștigat un contract important și ai nevoie de resurse ca să îl onorezi. Folosești ocazia fără să o ratezi." },
];

export default function CreditCapitalDeLucruPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workingCapitalSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Capital de lucru" }]} />

            <ProductHero
                eyebrow="Credit pentru afaceri"
                title="Credit capital de lucru"
                lead="Menții firma în mișcare când încasările întârzie. Salarii, furnizori, stoc. Termen adaptat ciclului tău de încasări, de la 6 la 36 de luni."
                stats={[
                    { value: "6–36", label: "luni, după ciclul de încasări" },
                    { value: "1–2", label: "zile până la decizie" },
                    { value: "0", label: "plan de afaceri cerut" },
                ]}
                calculator={{ minAmount: 20_000, maxAmount: 500_000, defaultAmount: 100_000, minTerm: 6, maxTerm: 36, defaultTerm: 12 }}
                checklist={{
                    items: [
                        "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                        "Cel puțin 3 luni de activitate economică",
                        "Rulaj vizibil în extrasele bancare",
                        "Un fidejusor disponibil pentru primul credit",
                    ],
                }}
            />

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading
                        title="Când ai nevoie de capital de lucru"
                        titleClassName="max-w-[560px]"
                        aside="Patru situații pe care le vedem cel mai des. Toate au aceeași cauză: banii vin mai târziu decât pleacă."
                    />
                    <UseCaseGrid items={SCENARIOS} />
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Firmă înregistrată în Moldova: SRL, ÎI sau GȚ" },
                            { title: "Activitate economică de cel puțin 3–6 luni" },
                            { title: "Rulaj activ în extrasele bancare" },
                            { title: "Nevoie de lichiditate pentru operațiuni curente" },
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
                            { title: "Contracte cu clienți sau furnizori, dacă le ai. Ajută la evaluare" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        Aprobăm pe baza rulajului real din extrase, nu pe baza bilanțului anual. O firmă cu un an fiscal slab, dar cu flux curent stabil, poate primi finanțare.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            <ProcessSection
                title="Cum lucrăm cu dosarul tău"
                lead="Trimiți extrasele pe telefon sau pe email. Vii la oficiu o singură dată, la semnare."
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
                <CtaBand title="Încasările întârzie? Spune-ne cât și pe ce termen." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
