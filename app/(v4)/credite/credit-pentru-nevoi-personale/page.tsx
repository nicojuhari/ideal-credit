import type { Metadata } from "next";
import { Breadcrumb, Button, CtaBand, DataTile, EyebrowLabel, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem, type VerdictSet } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { FaqSection, PERSONAL_STEPS, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { personalLoanSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit pentru nevoi personale: reparație, cheltuieli planificate | Ideal Credit";
const DESCRIPTION =
    "Credit pentru nevoi personale în Moldova, de la 10.000 la 300.000 MDL. Reparația casei, o cheltuială planificată, condiții pentru angajați la stat. Dobândă fixă, rata scade lunar, răspuns în aceeași zi.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite pentru afaceri și persoane fizice în Moldova" }],
    },
};

const PERSONAL_VERDICTS: VerdictSet = {
    qualify: { title: "Te califici", text: "Trimite buletinul și dovada venitului. Primești răspunsul cu suma și rata exactă în aceeași zi lucrătoare." },
    probable: { title: "Probabil se poate", text: "Analizăm situația reală, nu doar actele. Sună-ne și verificăm în câteva minute." },
    low: { title: "Hai să discutăm", text: "Chiar dacă nu bifezi condițiile standard, îți spunem direct ce alternative există." },
};

const FAQ: FaqItem[] = [
    {
        question: "Ce sumă pot lua?",
        answer: "Între 10.000 și 300.000 MDL. Suma depinde de venit și de ratele pe care le ai deja. Îți spunem limita înainte de dosar, ca să nu pierzi timp.",
    },
    {
        question: "Ce dovadă de venit acceptați?",
        answer: "Adeverință de salariu, extras de card, decizie de pensie sau venit din activitate independentă. Discutăm ce ai disponibil înainte să cerem acte.",
    },
    {
        question: "Am nevoie de fidejusor?",
        answer: "La primul credit, da. Clienții cu plăți la zi nu mai au nevoie de fidejusor la creditele următoare. Gajul se cere doar la sume mari sau venituri nestabile.",
    },
    {
        question: "Trebuie să justific pe ce cheltuiesc banii?",
        answer: "Nu. Nu cerem devize, facturi sau contracte. Banii îi folosești cum ai planificat.",
    },
    {
        question: "Am deja un credit. Pot lua încă unul?",
        answer: "Da, dacă venitul acoperă ambele rate confortabil. Ne uităm la toate obligațiile existente și îți spunem suma care se poate.",
    },
    {
        question: "Cum primesc banii?",
        answer: "Numerar la oficiu sau prin transfer pe card. Alegi tu la semnare.",
    },
    {
        question: "Pot rambursa creditul mai devreme?",
        answer: "Da, gratuit și oricând. Plătești dobânda doar pentru perioada folosită.",
    },
];

const USE_CASES: UseCase[] = [
    { n: "01", title: "Reparația casei", body: "Materiale, meșteri, ferestre, instalații, mobilă. Fără devize obligatorii.", href: "#reparatie", cta: "Vezi condițiile →" },
    { n: "02", title: "Cheltuială planificată", body: "Electrocasnice, mobilă, un tratament, o nuntă sau un botez, o vacanță plătită din timp." },
    { n: "03", title: "Automobil", body: "Mașină nouă sau second-hand, de la orice vânzător. Mașina nu se gajează.", href: "/credite/credit-pentru-automobil" },
    { n: "04", title: "Angajați la stat", body: "Medici, profesori, militari, polițiști, funcționari. Venitul stabil simplifică analiza.", href: "#angajati-la-stat", cta: "Vezi condițiile →" },
];

export default function CreditNevoiPersonalePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Nevoi personale" }]} />

            <ProductHero
                eyebrow="Credit personal"
                title="Credit pentru nevoi personale"
                lead="Pentru un plan clar: o reparație, o cheltuială mare, o mașină. De la 10.000 la 300.000 MDL, dobândă fixă, rata scade în fiecare lună."
                stats={[
                    { value: "23+", label: "ani, cu venit stabil" },
                    { value: "1 zi", label: "până la răspuns" },
                    { value: "0", label: "comisioane ascunse" },
                ]}
                calculator={{ minAmount: 10_000, maxAmount: 300_000, defaultAmount: 50_000, minTerm: 6, maxTerm: 60, defaultTerm: 24 }}
                checklist={{
                    title: "Este pentru mine?",
                    items: ["Am cel puțin 23 de ani", "Am un venit stabil pe care îl pot dovedi", "Am buletin de identitate valabil", "Am un fidejusor pentru primul credit"],
                    verdicts: PERSONAL_VERDICTS,
                }}
            />

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Pentru ce folosești creditul" aside="Nu impunem destinația și nu cerem justificare. Patru situații pe care le vedem cel mai des." />
                    <UseCaseGrid items={USE_CASES} />
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Vârsta de la 23 de ani" },
                            { title: "Venit stabil: salariu, pensie sau activitate independentă" },
                            { title: "Buletin de identitate valabil" },
                            { title: "Un fidejusor pentru primul credit" },
                        ]}
                    />
                    <ListRows
                        variant="plain"
                        heading="Documente necesare"
                        headingTone="muted"
                        items={[
                            { title: "Buletinul de identitate" },
                            { title: "Dovada venitului: adeverință, extras de card sau decizie de pensie" },
                            { title: "Ultimele 3 extrase de cont, dacă le ai. Ajută la evaluare" },
                            { title: "Buletinul fidejusorului" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut în plus pentru sume mari sau venituri nestabile. Clienții cu plăți la zi
                        obțin creditele următoare fără fidejusor.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            {/* Reparație */}
            <SectionBand spacing="both" id="reparatie" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <EyebrowLabel tone="brand">01 / Reparație</EyebrowLabel>
                    <h2 className="mt-[22px] text-h2 max-ds-sm:text-[34px]">Credit pentru reparație</h2>
                    <p className="mt-5 max-w-[300px] text-body text-text-3">Renovezi casa sau apartamentul acum, nu peste câțiva ani de economii.</p>
                </Reveal>
                <Reveal>
                    <p className="text-lead text-text-2">
                        Poți finanța orice lucrare: instalații electrice sau sanitare, zugrăveli, ferestre și uși, parchet, mobilă. Plătești materialele și meșterii cum și când
                        ai nevoie.
                    </p>
                    <ListRows
                        variant="plain"
                        className="mt-8"
                        items={[
                            { title: "Fără devize sau facturi obligatorii. Dacă le ai, ajută la stabilirea sumei" },
                            { title: "Nu trebuie să fii proprietarul locuinței. Chiria nu este o piedică" },
                            { title: "Dobânda rămâne fixă, indiferent cât durează lucrările" },
                            { title: "Banii îi primești numerar la oficiu sau pe card" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            {/* Angajați la stat */}
            <SectionBand tone="section" spacing="both" id="angajati-la-stat" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <EyebrowLabel tone="brand">04 / Angajați la stat</EyebrowLabel>
                    <h2 className="mt-[22px] text-h2 max-ds-sm:text-[34px]">Pentru angajați la stat</h2>
                    <p className="mt-5 max-w-[300px] text-body text-text-3">Medici, profesori, militari, polițiști, funcționari publici.</p>
                </Reveal>
                <Reveal>
                    <p className="text-lead text-text-2">
                        Venitul plătit de stat este stabil și ușor de dovedit. Asta simplifică analiza: adeverința de salariu sau extrasul de card sunt de obicei suficiente.
                        Condițiile sunt aceleași ca la orice credit personal, iar dosarul se mișcă mai repede.
                    </p>
                    <ListRows
                        variant="plain"
                        className="mt-8"
                        items={[
                            { title: "Contract de muncă activ în sectorul bugetar" },
                            { title: "Adeverință de salariu sau extras din sistemul de salarizare" },
                            { title: "Legitimația de serviciu, dacă o ai" },
                            { title: "Perioada de probă nu înseamnă refuz. Analizăm individual" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            {/* Rate descrescătoare */}
            <SectionBand spacing="both" shellClassName="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <EyebrowLabel tone="brand">Rate descrescătoare</EyebrowLabel>
                    <h2 className="mt-[22px] text-h2 max-ds-sm:text-[34px]">Rata scade în fiecare lună</h2>
                    <p className="mt-5 max-w-[460px] text-body text-text-2">
                        Dobânda se calculează la suma rămasă, nu la suma inițială. Prima rată este cea mai mare, ultima cea mai mică. Poți închide creditul oricând,
                        fără penalitate.
                    </p>
                    <Button variant="outline" size="md" href="/calculator-credit" className="mt-7">
                        Deschide calculatorul
                    </Button>
                </Reveal>
                <Reveal>
                    <p className="mb-4 font-figure text-eyebrow uppercase tracking-[0.1em] text-text-3">Exemplu: 30.000 MDL pe 12 luni</p>
                    <DataTile
                        items={[
                            { label: "Prima rată", value: "3.700 MDL", tone: "brand" },
                            { label: "Ultima rată", value: "2.600 MDL" },
                            { label: "Cost total", value: "7.800 MDL" },
                            { label: "DAE", value: "60,1 %" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            <ProcessSection title="Cum lucrăm cu cererea ta" lead="Totul se verifică de la distanță. Vii la oficiu o singură dată, la semnare." steps={PERSONAL_STEPS} />

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
