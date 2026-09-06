import type { Metadata } from "next";
import Link from "next/link";
import {
    Breadcrumb,
    Button,
    CtaBand,
    FaqAccordion,
    HairlineGrid,
    InsetNote,
    ListRows,
    Reveal,
    SectionBand,
    SectionHeading,
    StepRows,
    type FaqItem,
} from "@/components/ds";
import { BusinessHero } from "@/components/v4/BusinessHero";
import { businessCreditSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

export const metadata: Metadata = {
    title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-afaceri-mici" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credit pentru Afaceri Mici din Moldova | Ideal Credit",
        description: "Credit nebancar pentru afaceri mici din Moldova - capital de lucru, investiții sau refinanțare. Decizie în 1-2 zile lucrătoare.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const FAQ: FaqItem[] = [
    {
        question: "Pot obține credit pentru SRL fără gaj?",
        answer: "Da, pentru sume mai mici gajul nu este necesar — este suficient un fidejusor. Pentru sume mari sau venituri nestabile poate fi cerut gaj imobiliar.",
    },
    {
        question: "Ce se întâmplă dacă firma are mai puțin de un an de activitate?",
        answer: "Lucrăm de la 3–6 luni de activitate demonstrabilă. Contează rulajul din extrase, nu vechimea formală a firmei.",
    },
    {
        question: "Poate primi credit o firmă cu pierderi pe ultimul an?",
        answer: "Da. Nu cerem profit obligatoriu — analizăm fluxul curent și capacitatea reală de rambursare.",
    },
    {
        question: "Pot obține finanțare pentru mai multe nevoi simultan?",
        answer: "Da, un singur credit poate acoperi capital de lucru și investiții împreună. Stabilim structura la analiza dosarului.",
    },
    {
        question: "Cât de repede pot folosi banii după aprobare?",
        answer: "Imediat după semnarea contractului în oficiu — în aceeași zi în care primești decizia pozitivă.",
    },
    {
        question: "Dobânda se schimbă pe parcursul creditului?",
        answer: "Nu. Dobânda este fixă, iar rata scade lunar pentru că se calculează la soldul rămas.",
    },
];

const PURPOSES = [
    { n: "01", title: "Capital de lucru", body: "Salarii, furnizori, stocuri — acoperi golurile din flux fără să oprești activitatea.", href: "/credite/credit-capital-de-lucru" },
    { n: "02", title: "Investiții", body: "Echipamente, utilaje, extindere de spațiu sau vehicule comerciale.", href: "/credite/credit-investitional" },
    { n: "03", title: "Refinanțare", body: "Consolidezi creditele existente într-unul singur, cu o rată mai mică.", href: "/credite/refinantare" },
    { n: "04", title: "Start-up", body: "Înregistrarea firmei, primele echipamente și stocul de pornire.", href: "/cerere-de-credit-online" },
];

export default function CreditAfaceriMiciPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            {/* 2. Breadcrumb */}
            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Afaceri mici" }]} />

            {/* 3. Hero + sticky calculator + checklist */}
            <BusinessHero />

            {/* 4–5. Section band: purposes, conditions & documents */}
            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading
                        title="Pentru ce poți folosi banii"
                        titleClassName="max-w-[520px]"
                        aside="Un singur dosar, patru destinații. Dacă ai nevoie de mai multe simultan, le combinăm într-un credit."
                    />
                    <HairlineGrid columns={4} cellTone="section" frame className="mt-[52px] overflow-hidden">
                        {PURPOSES.map((p) => (
                            <Link
                                key={p.n}
                                href={p.href}
                                className="flex min-h-[280px] flex-col px-7 py-[34px] transition-colors duration-[250ms] ease-out hover:bg-inset max-ds-sm:min-h-0 max-ds-sm:p-6"
                            >
                                <span className="font-figure text-eyebrow normal-case tracking-normal text-text-3">{p.n}</span>
                                <h3 className="mt-[18px] text-h3-card tracking-[-0.02em]">{p.title}</h3>
                                <p className="mt-3 text-small text-text-3">{p.body}</p>
                                <span className="mt-auto pt-6 text-small">Află mai mult →</span>
                            </Link>
                        ))}
                    </HairlineGrid>
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)" },
                            { title: "Activitate economică de cel puțin 3–6 luni" },
                            { title: "Rulaj demonstrabil în extrasele bancare" },
                            { title: "Fără plan de afaceri și fără profit obligatoriu" },
                        ]}
                    />
                    <ListRows
                        variant="plain"
                        heading="Documente necesare"
                        headingTone="muted"
                        items={[
                            { title: "Buletinul de identitate al administratorului" },
                            { title: "Certificatul de înregistrare a firmei" },
                            { title: "Extrase bancare pe ultimele 3–6 luni" },
                            { title: "Actele de proprietate, dacă se solicită gaj" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții
                        recurenți cu dosar solid obțin creditul fără fidejusor.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            {/* 6. Process */}
            <SectionBand spacing="both" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <h2 className="text-h2 max-ds-sm:text-[34px]">Cum lucrăm cu dosarul tău</h2>
                    <p className="mt-5 max-w-[300px] text-body text-text-3">
                        Analizăm situația reală a afacerii — rulajul, activitatea curentă, garanțiile — nu doar actele formale.
                    </p>
                </Reveal>
                <Reveal>
                    <StepRows
                        layout="rows"
                        steps={[
                            {
                                label: "Pas 01",
                                title: "Prima discuție",
                                body: "Ne spui de cât ai nevoie și pentru ce. Dacă finanțarea nu e potrivită, îți spunem direct — fără dosar complet degeaba.",
                            },
                            {
                                label: "Pas 02",
                                title: "Analiza extraselor",
                                body: "Trimiți extrasele pe 3–6 luni și actele firmei. Stabilim suma, termenul și garanțiile potrivite situației.",
                            },
                            { label: "Pas 03", title: "Decizia în 1–2 zile", body: "Primești oferta cu rata exactă și graficul de achitare, înainte de orice semnătură." },
                            {
                                label: "Pas 04",
                                title: "Semnare și eliberare",
                                body: "Semnezi în oficiu, banii ajung imediat în cont. Rambursarea anticipată este gratuită oricând.",
                            },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            {/* 7. FAQ */}
            <SectionBand spacing="bottom" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <h2 className="text-h2 max-ds-sm:text-[34px]">
                        Ce ne întreabă
                        <br />
                        antreprenorii
                    </h2>
                    <p className="mt-5 max-w-[280px] text-body text-text-3">Nu găsești răspunsul? Scrie-ne și te ghidăm pas cu pas.</p>
                    <Button variant="outline" size="md" href="/contacte" className="mt-6">
                        Contactează-ne
                    </Button>
                </Reveal>
                <Reveal>
                    <FaqAccordion items={FAQ} defaultOpen={0} />
                </Reveal>
            </SectionBand>

            {/* 8. CTA band */}
            <Reveal>
                <CtaBand title="Trimite extrasele. Îți spunem direct dacă merge." lead="Fără dosar complet degeaba: primul răspuns vine după o singură discuție." />
            </Reveal>
        </>
    );
}
