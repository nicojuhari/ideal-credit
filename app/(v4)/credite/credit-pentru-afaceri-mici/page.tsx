import type { Metadata } from "next";
import { Breadcrumb, CtaBand, DataTile, EyebrowLabel, HairlineGrid, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { BUSINESS_STEPS, FaqSection, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { businessCreditSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit pentru afaceri mici în Moldova: SRL, ÎI, GȚ | Ideal Credit";
const DESCRIPTION =
    "Credit pentru afaceri mici din Moldova, de la 20.000 la 500.000 MDL. Fără plan de afaceri, de la 3–6 luni de activitate. Dobândă fixă, rata scade lunar, decizie în 1–2 zile lucrătoare.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
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
        question: "Pot obține credit pentru SRL fără gaj?",
        answer: "Da, pentru sume mai mici. Este suficient un fidejusor, de obicei administratorul sau un asociat. Gajul imobiliar se cere doar la sume mari sau când veniturile firmei nu sunt stabile.",
    },
    {
        question: "Firma mea are mai puțin de un an. Pot lua credit?",
        answer: "Da. Lucrăm de la 3–6 luni de activitate. Contează rulajul din extrasele bancare, nu vechimea formală a firmei.",
    },
    {
        question: "Poate primi credit o firmă cu pierderi pe ultimul an?",
        answer: "Da. Nu cerem profit obligatoriu. Analizăm fluxul curent și capacitatea reală de rambursare.",
    },
    {
        question: "Iau creditul pe firmă sau pe persoană fizică?",
        answer: "Pentru cheltuieli ale firmei, pe firmă: dobânda este cheltuială deductibilă, iar istoricul de credit se construiește pe firmă. Discutăm varianta potrivită la prima discuție.",
    },
    {
        question: "Pot acoperi mai multe nevoi cu un singur credit?",
        answer: "Da. Un singur credit poate acoperi capital de lucru și investiții împreună. Stabilim structura la analiza dosarului.",
    },
    {
        question: "Cât de repede pot folosi banii după aprobare?",
        answer: "În aceeași zi. Semnezi contractul în oficiu și banii pleacă prin transfer în contul firmei.",
    },
    {
        question: "Dobânda se schimbă pe parcursul creditului?",
        answer: "Nu. Dobânda este fixă. Rata scade în fiecare lună, pentru că dobânda se calculează la suma rămasă.",
    },
];

const PURPOSES: UseCase[] = [
    { n: "01", title: "Capital de lucru", body: "Salarii, furnizori, stocuri. Acoperi golurile din flux fără să oprești activitatea.", href: "/credite/credit-capital-de-lucru" },
    { n: "02", title: "Investiții", body: "Echipamente noi sau second-hand, utilaje, spațiu, vehicule comerciale.", href: "/credite/credit-investitional" },
    { n: "03", title: "Agricultură", body: "Tehnică, inputuri, irigații. Grafic de plată adaptat recoltei, pentru GȚ, SRL și ÎI.", href: "/credite/credit-pentru-agricultura" },
    { n: "04", title: "Consolidare", body: "Strângi mai multe credite ale firmei într-unul singur, cu o singură rată și un termen clar.", href: "/cerere-de-credit-online", cta: "Depune cererea →" },
];

const DOCS_BY_FORM = [
    {
        form: "SRL",
        items: ["Extras din Registrul de Stat, nu mai vechi de 30 de zile", "Statutul și decizia de fondare", "Buletinul administratorului", "Extrase bancare pe 3–6 luni", "Hotărârea asociaților privind creditul, dacă sunt mai mulți"],
    },
    {
        form: "ÎI",
        items: ["Certificatul de înregistrare cu codul IDNO", "Buletinul titularului", "Extrase bancare pe 3–6 luni", "Declarații fiscale sau raport de activitate"],
    },
    {
        form: "GȚ",
        items: ["Certificatul de înregistrare a gospodăriei", "Buletinul fondatorului", "Actele terenului: proprietate sau arendă", "Extrase bancare sau acte de vânzare a producției"],
    },
];

export default function CreditAfaceriMiciPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Afaceri mici" }]} />

            <ProductHero
                eyebrow="Credit pentru afaceri"
                title="Credit pentru afaceri mici"
                lead="Finanțăm SRL, ÎI și GȚ din toată Moldova, de la 20.000 la 500.000 MDL. Analizăm rulajul real, nu un plan de afaceri. Răspuns în 1–2 zile lucrătoare."
                stats={[
                    { value: "1–2", label: "zile până la decizie" },
                    { value: "3 luni", label: "activitate minimă" },
                    { value: "0", label: "plan de afaceri cerut" },
                ]}
                calculator={{ minAmount: 20_000, maxAmount: 500_000, defaultAmount: 150_000, minTerm: 6, maxTerm: 60, defaultTerm: 12 }}
                checklist={{
                    items: [
                        "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                        "Cel puțin 3 luni de activitate economică",
                        "Rulaj vizibil în extrasele bancare",
                        "Un fidejusor disponibil pentru primul credit",
                    ],
                }}
            />

            {/* Purposes, conditions, documents */}
            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading
                        title="Pentru ce poți folosi banii"
                        titleClassName="max-w-[520px]"
                        aside="Un singur dosar, patru destinații. Dacă ai nevoie de mai multe simultan, le combinăm într-un credit."
                    />
                    <UseCaseGrid items={PURPOSES} />
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Firmă înregistrată în Moldova: SRL, ÎI sau GȚ" },
                            { title: "Activitate economică de cel puțin 3–6 luni" },
                            { title: "Rulaj vizibil în extrasele bancare" },
                            { title: "Fără plan de afaceri și fără profit obligatoriu" },
                        ]}
                    />
                    <ListRows
                        variant="plain"
                        heading="Garanții"
                        headingTone="muted"
                        items={[
                            { title: "Primul credit: un fidejusor, de obicei administratorul sau un asociat" },
                            { title: "Sume mari sau venituri nestabile: gaj imobiliar, în plus față de fidejusor" },
                            { title: "Clienți recurenți cu plăți la zi: fără fidejusor" },
                            { title: "Pragurile exacte le stabilim la analiza dosarului" },
                        ]}
                    />
                </Reveal>

                <div className="mt-24 max-ds-md:mt-16">
                    <Reveal>
                        <SectionHeading title="Documente, după forma juridică" aside="Trimiți totul pe telefon sau pe email. Extrasul din Registrul de Stat este singurul act cu termen strict." />
                    </Reveal>
                    <Reveal>
                        <HairlineGrid columns={3} cellTone="section" frame className="mt-[52px] overflow-hidden">
                            {DOCS_BY_FORM.map((d) => (
                                <div key={d.form} className="px-7 py-[34px] max-ds-sm:p-6">
                                    <h3 className="font-figure text-figure-md text-brand">{d.form}</h3>
                                    <ul className="mt-5 flex list-none flex-col gap-3 p-0 text-small text-text-2">
                                        {d.items.map((it) => (
                                            <li key={it} className="flex gap-3">
                                                <span aria-hidden className="mt-[9px] size-1.5 flex-none bg-brand" />
                                                <span>{it}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </HairlineGrid>
                    </Reveal>
                    <Reveal className="mt-7">
                        <InsetNote>
                            Dacă încasările sunt mai ales în numerar, spune-ne. Chitanțele, contractele și registrele pot dovedi activitatea la fel de bine ca extrasele.
                        </InsetNote>
                    </Reveal>
                </div>
            </SectionBand>

            {/* How the instalment falls */}
            <SectionBand spacing="both" shellClassName="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <EyebrowLabel tone="brand">Rate descrescătoare</EyebrowLabel>
                    <h2 className="mt-[22px] text-h2 max-ds-sm:text-[34px]">Rata scade în fiecare lună</h2>
                    <p className="mt-5 max-w-[460px] text-body text-text-2">
                        Dobânda se calculează la suma rămasă, nu la suma inițială. Prima rată este cea mai mare, ultima cea mai mică. Poți închide creditul oricând,
                        fără penalitate, și plătești dobânda doar pentru zilele folosite.
                    </p>
                </Reveal>
                <Reveal>
                    <p className="mb-4 font-figure text-eyebrow uppercase tracking-[0.1em] text-text-3">Exemplu: 100.000 MDL pe 12 luni</p>
                    <DataTile
                        items={[
                            { label: "Prima rată", value: "12.333 MDL", tone: "brand" },
                            { label: "Ultima rată", value: "8.667 MDL" },
                            { label: "Cost total", value: "26.000 MDL" },
                            { label: "DAE", value: "60,1 %" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            <ProcessSection
                title="Cum lucrăm cu dosarul tău"
                lead="Analizăm situația reală a afacerii: rulajul, activitatea curentă, garanțiile. Nu doar actele formale."
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
                <CtaBand title="Trimite extrasele. Îți spunem direct dacă merge." lead="Fără dosar complet degeaba: primul răspuns vine după o singură discuție." />
            </Reveal>
        </>
    );
}
