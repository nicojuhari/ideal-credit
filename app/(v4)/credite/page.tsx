import type { Metadata } from "next";
import { Breadcrumb, Button, Card, CtaBand, EyebrowLabel, HairlineGrid, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, StatCells, type FaqItem } from "@/components/ds";
import { FaqSection } from "@/components/v4/product-shared";
import { financialServiceSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credite pentru afaceri și persoane fizice în Moldova | Ideal Credit";
const DESCRIPTION =
    "Toate creditele Ideal Credit: credit pentru afaceri și persoane juridice (SRL, ÎI, GȚ), capital de lucru, investiții, agricultură, plus credit personal și auto. Dobândă fixă, rata scade lunar.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite" },
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
        question: "Ce este o organizație de creditare nebancară?",
        answer: "O instituție financiară autorizată și supravegheată de CNPF, care acordă credite fără a fi bancă. Dosarul e mai scurt, analiza o face un om, iar decizia vine în 1–2 zile lucrătoare.",
    },
    {
        question: "Iau credit pe firmă sau pe persoană fizică?",
        answer: "Dacă banii sunt pentru afacere, pe firmă: dobânda este cheltuială deductibilă, iar istoricul de credit se construiește pe firmă. Dacă e o cheltuială personală, pe persoană fizică. Discutăm varianta potrivită la primul telefon.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Pentru persoane fizice, răspunsul vine în aceeași zi lucrătoare. Pentru credite de afaceri, decizia finală vine în 1–2 zile lucrătoare.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile sunt în informația precontractuală, înainte de semnare. Ce citești în contract, aia plătești.",
    },
    {
        question: "Dobânda este fixă?",
        answer: "Da, pe toată durata contractului. Rata scade lunar, pentru că dobânda se calculează la suma rămasă.",
    },
];

const BUSINESS = [
    { title: "Afaceri mici", description: "Produsul de bază pentru SRL, ÎI și GȚ. 20.000–500.000 MDL, fără plan de afaceri.", href: "/credite/credit-pentru-afaceri-mici" },
    { title: "Capital de lucru", description: "Salarii, furnizori, stoc. Termen adaptat ciclului de încasări, 6–36 luni.", href: "/credite/credit-capital-de-lucru" },
    { title: "Investițional", description: "Echipamente noi sau second-hand, spațiu, vehicule. Până la 60 de luni.", href: "/credite/credit-investitional" },
    { title: "Agricultură", description: "Pentru GȚ, SRL și ÎI. Grafic de plată adaptat recoltei.", href: "/credite/credit-pentru-agricultura" },
];

const PERSONAL = [
    { title: "Nevoi personale", description: "Reparație, cheltuială planificată, condiții pentru angajați la stat.", href: "/credite/credit-pentru-nevoi-personale" },
    { title: "Automobil", description: "Mașină nouă sau second-hand, de la orice vânzător. Fără gaj pe mașină.", href: "/credite/credit-pentru-automobil" },
];

export default function CreditePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite" }]} />

            <SectionBand spacing="follow" className="pt-11 max-ds-sm:pt-7">
                <Reveal>
                    <EyebrowLabel tone="brand">Toate produsele</EyebrowLabel>
                    <h1 className="mt-[22px] max-w-[760px] text-h1-service text-balance">Credite pentru afaceri și persoane fizice</h1>
                    <p className="mt-[26px] max-w-[560px] text-lead text-text-2">
                        Șase produse, un singur proces de aprobare. Dobândă fixă, rata scade în fiecare lună, rambursare anticipată gratuită. Aceleași reguli pentru
                        toți.
                    </p>
                    <div className="mt-[38px] flex flex-wrap gap-3">
                        <Button variant="paper" size="lg" href="/credite/credit-pentru-afaceri-mici">
                            Credite pentru afaceri
                        </Button>
                        <Button variant="outline" size="lg" href="/credite/credit-pentru-nevoi-personale">
                            Credite personale
                        </Button>
                    </div>
                </Reveal>
                <Reveal className="mt-16 max-ds-sm:mt-10">
                    <StatCells
                        size="md"
                        cellTone="bg"
                        divided={false}
                        items={[
                            { value: "20.000–500.000", label: "MDL pentru afaceri" },
                            { value: "10.000–300.000", label: "MDL pentru persoane fizice" },
                            { value: "6–60", label: "luni termen" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Alege produsul" aside="Dacă nu ești sigur care se potrivește, sună-ne. Alegem împreună la primul telefon." />
                </Reveal>
                <div className="mt-12 grid grid-cols-2 gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <Reveal>
                        <ListRows heading="Pentru afaceri" items={BUSINESS} />
                    </Reveal>
                    <Reveal>
                        <ListRows heading="Pentru persoane fizice" items={PERSONAL} />
                    </Reveal>
                </div>
            </SectionBand>

            {/* Persoane juridice */}
            <SectionBand spacing="both">
                <Reveal>
                    <SectionHeading
                        title="Credite pentru persoane juridice"
                        aside="SRL, ÎI și GȚ din toată Moldova. Analizăm rulajul real din extrase, nu un plan de afaceri."
                    />
                </Reveal>
                <Reveal>
                    <HairlineGrid columns={3} cellTone="bg" frame className="mt-[52px] overflow-hidden">
                        {[
                            { value: "3 luni", label: "Activitate minimă", body: "Contează rulajul din extrasele bancare, nu vechimea firmei. O firmă cu un an fiscal slab, dar cu flux stabil, poate primi finanțare." },
                            { value: "1 fidejusor", label: "Garanția la primul credit", body: "De obicei administratorul sau un asociat. Gajul imobiliar se cere doar la sume mari sau venituri nestabile." },
                            { value: "1–2 zile", label: "Până la decizie", body: "Trimiți extrasele pe telefon sau pe email. Vii la oficiu o singură dată, la semnare. Banii pleacă prin transfer în aceeași zi." },
                        ].map((c) => (
                            <div key={c.label} className="px-7 py-[34px] max-ds-sm:p-6">
                                <div className="font-figure text-figure-md text-brand">{c.value}</div>
                                <h3 className="mt-3 text-row-title">{c.label}</h3>
                                <p className="mt-3 text-small text-text-3">{c.body}</p>
                            </div>
                        ))}
                    </HairlineGrid>
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        Cheltuiala firmei se finanțează pe firmă: dobânda este deductibilă, iar istoricul de credit se construiește pe SRL sau ÎI, nu pe administrator. Dacă
                        nu ești sigur, discutăm varianta potrivită la primul telefon.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            {/* Three promises */}
            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Aceleași reguli, la orice produs" aside="Din 2010 finanțăm afaceri și familii din Moldova. Regulile sunt aceleași pentru toți." />
                </Reveal>
                <div className="mt-11 grid grid-cols-3 gap-5 max-ds-md:grid-cols-1">
                    {[
                        { eyebrow: "Transparență", title: "Toate costurile, înainte de semnare", body: "Dobânda este fixă pe tot termenul. Nu există comisioane ascunse. Vezi suma totală de plată înainte să semnezi." },
                        { eyebrow: "Rate descrescătoare", title: "Rata scade în fiecare lună", body: "Dobânda se calculează la suma rămasă. Plătești mai puțin cu fiecare lună. Calculatorul îți arată prima și ultima rată." },
                        { eyebrow: "Flexibilitate", title: "Rambursare anticipată gratuită", body: "Poți închide creditul oricând. Plătești dobânda doar pentru zilele folosite. Nicio penalitate." },
                    ].map((c) => (
                        <Reveal key={c.eyebrow}>
                            <Card padding="card" className="h-full">
                                <EyebrowLabel tone="brand">{c.eyebrow}</EyebrowLabel>
                                <h3 className="mt-[18px] text-h3-card">{c.title}</h3>
                                <p className="mt-3 text-body text-text-2">{c.body}</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </SectionBand>

            <FaqSection
                title={
                    <>
                        Întrebări
                        <br />
                        frecvente
                    </>
                }
                items={FAQ}
            />

            <Reveal>
                <CtaBand title="Spune-ne de cât ai nevoie. Restul e treaba noastră." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
