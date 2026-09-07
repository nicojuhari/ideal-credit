import type { Metadata } from "next";
import {
    Button,
    Card,
    CtaBand,
    DataTile,
    EyebrowLabel,
    FaqAccordion,
    InsetNote,
    ListRows,
    PullQuote,
    Reveal,
    SectionBand,
    SectionHeading,
    StatCells,
    StepRows,
    TrustStrip,
    type FaqItem,
} from "@/components/ds";
import { HomeHero } from "@/components/v4/HomeHero";
import { financialServiceSchema, howToSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

export const metadata: Metadata = {
    title: "Credite pentru afaceri și persoane fizice în Moldova | Ideal Credit",
    description:
        "Credit pentru afaceri mici (SRL, ÎI, GȚ) și credit personal pentru cheltuieli planificate. Dobândă fixă, rata scade lunar, fără comisioane ascunse. Decizie în 1–2 zile lucrătoare. Din 2010.",
    alternates: { canonical: "https://idealcredit.md/" },
};

const FAQ: FaqItem[] = [
    {
        question: "Ce sumă pot obține pentru afacerea mea?",
        answer: "Pentru afaceri mici lucrăm între 20.000 și 500.000 MDL. Suma depinde de rulajul din extrasele bancare și de garanții. Limita exactă o stabilim după analiza dosarului.",
    },
    {
        question: "Pot obține credit fără gaj?",
        answer: "Da, pentru sume mai mici. E suficient buletinul și un fidejusor. Gajul se cere doar la sume mari sau venituri nestabile.",
    },
    {
        question: "Firma mea are doar câteva luni. Pot lua credit?",
        answer: "Da. Lucrăm de la 3–6 luni de activitate. Contează rulajul din extrase, nu vechimea firmei.",
    },
    {
        question: "Dobânda este fixă sau flotantă?",
        answer: "Fixă, pe toată durata contractului. Rata scade lunar, pentru că dobânda se calculează la suma rămasă.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile sunt în informația precontractuală, înainte de semnare.",
    },
    {
        question: "Pot rambursa creditul anticipat?",
        answer: "Da, gratuit și oricând. Plătești dobânda doar pentru perioada folosită.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Dosarul complet primit dimineața primește răspuns înainte de prânz. Pentru credite de afaceri, decizia finală vine în 1–2 zile lucrătoare.",
    },
];

const BUSINESS_PRODUCTS = [
    { title: "Afaceri mici", description: "Capital pentru SRL, ÎI și antreprenori.", href: "/credite/credit-pentru-afaceri-mici" },
    { title: "Capital de lucru", description: "Salarii, furnizori, stoc.", href: "/credite/credit-capital-de-lucru" },
    { title: "Investițional", description: "Echipamente, spațiu, modernizare.", href: "/credite/credit-investitional" },
    { title: "Agricol", description: "Pentru fermieri, cu grafic adaptat recoltei.", href: "/credite/credit-pentru-agricultura" },
];

const PERSONAL_PRODUCTS = [
    { title: "Nevoi personale", description: "Pentru o cheltuială planificată.", href: "/credite/credit-pentru-nevoi-personale" },
    { title: "Automobil", description: "Mașină nouă sau second-hand, de la oricine.", href: "/credite/credit-pentru-automobil" },
];

export default function HomePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            {/* 1. Hero + calculator */}
            <HomeHero />

            {/* 2. Trust strip */}
            <SectionBand spacing="follow">
                <Reveal>
                    <TrustStrip items={["Achitare online banking", "VictoriaBank", "Poșta Moldovei", "Numerar în oficii", "Rambursare anticipată gratuită"]} />
                </Reveal>
            </SectionBand>

            {/* 3. Three promises */}
            <SectionBand spacing="bottom">
                <Reveal>
                    <SectionHeading
                        title={
                            <>
                                Trei promisiuni.
                                <br />
                                Fără asterisc.
                            </>
                        }
                        aside="Din 2010 finanțăm afaceri și familii din Moldova. Regulile sunt aceleași pentru toți."
                    />
                </Reveal>
                <div className="mt-11 grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] gap-5 max-ds-md:grid-cols-1">
                    <Reveal>
                        <Card padding="card" className="min-h-[300px] max-ds-md:min-h-0">
                            <EyebrowLabel tone="brand">Transparență</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Toate costurile, înainte de semnare</h3>
                            <p className="mt-3 max-w-[380px] text-body text-text-2">
                                Dobânda este fixă pe tot termenul. Nu există comisioane ascunse. Vezi suma totală de plată înainte să semnezi.
                            </p>
                            <div className="mt-auto pt-[26px]">
                                <DataTile
                                    size="sm"
                                    items={[
                                        { label: "Dobândă", value: "4% / lună" },
                                        { label: "Comisioane", value: "0 MDL", tone: "brand" },
                                    ]}
                                />
                            </div>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card padding="card" className="min-h-[300px] max-ds-md:min-h-0">
                            <EyebrowLabel tone="brand">Rate descrescătoare</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Rata scade în fiecare lună</h3>
                            <p className="mt-3 text-body text-text-2">
                                Dobânda se calculează la suma rămasă. Plătești mai puțin cu fiecare lună. Calculatorul îți arată prima și ultima rată.
                            </p>
                            <div className="mt-auto pt-[26px]">
                                <DataTile
                                    size="sm"
                                    items={[
                                        { label: "Prima rată", value: "12.333" },
                                        { label: "Ultima rată", value: "8.667", tone: "brand" },
                                    ]}
                                />
                            </div>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card padding="card" className="min-h-[300px] max-ds-md:min-h-0">
                            <EyebrowLabel tone="brand">Flexibilitate</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Rambursare anticipată gratuită</h3>
                            <p className="mt-3 text-body text-text-2">Poți închide creditul oricând. Plătești dobânda doar pentru zilele folosite. Nicio penalitate.</p>
                            <div className="mt-auto pt-[26px] font-figure text-figure-lg">0 %</div>
                        </Card>
                    </Reveal>
                </div>
            </SectionBand>

            {/* 4–6. Section band: two directions, stats, how it works */}
            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading
                        title={
                            <>
                                Alege direcția.
                                <br />
                                Restul îl clarificăm noi.
                            </>
                        }
                        titleClassName="max-w-[540px]"
                        aside="Două trasee, aceleași reguli: costurile spuse din prima discuție și un răspuns rapid."
                    />
                </Reveal>
                <div className="mt-[52px] grid grid-cols-2 gap-5 max-ds-md:grid-cols-1">
                    <Reveal>
                        <Card padding="product" hover="brand" className="min-h-[360px] max-ds-md:min-h-0">
                            <EyebrowLabel>01 / Afaceri</EyebrowLabel>
                            <h3 className="mt-[22px] text-h3-product">Credit pentru afaceri</h3>
                            <p className="mt-3.5 max-w-[380px] text-body text-text-3">Capital de lucru, investiții sau consolidarea creditelor existente.</p>
                            <div className="mt-[26px] flex flex-col gap-3 text-[15.5px]">
                                <span>SRL, ÎI, GȚ</span>
                                <span>De la 3–6 luni de activitate</span>
                                <span>Fără plan de afaceri</span>
                                <span>Decizie în 1–2 zile lucrătoare</span>
                            </div>
                            <div className="mt-auto pt-8">
                                <Button variant="paper-ink" size="md" href="/credite/credit-pentru-afaceri-mici">
                                    Condiții pentru afaceri →
                                </Button>
                            </div>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card padding="product" hover="brand" className="min-h-[360px] max-ds-md:min-h-0">
                            <EyebrowLabel>02 / Persoane fizice</EyebrowLabel>
                            <h3 className="mt-[22px] text-h3-product">Credit personal</h3>
                            <p className="mt-3.5 max-w-[380px] text-body text-text-3">Pentru un plan clar: o mașină, o reparație, o cheltuială mare.</p>
                            <div className="mt-[26px] flex flex-col gap-3 text-[15.5px]">
                                <span>De la 23 de ani, cu venit stabil</span>
                                <span>Buletin și dovada venitului</span>
                                <span>Răspuns în aceeași zi lucrătoare</span>
                            </div>
                            <div className="mt-auto pt-8">
                                <Button variant="outline" size="md" href="/credite/credit-pentru-nevoi-personale">
                                    Condiții credit personal →
                                </Button>
                            </div>
                        </Card>
                    </Reveal>
                </div>
                <Reveal className="mt-5">
                    <InsetNote>Primul credit se acordă cu un fidejusor. Clienții cu istoric bun nu mai au nevoie de fidejusor la creditele următoare.</InsetNote>
                </Reveal>

                {/* 5. Stats */}
                <Reveal className="mt-[104px] max-ds-md:mt-16">
                    <StatCells
                        items={[
                            { value: "16", label: "ani de activitate" },
                            { value: "4.9", label: "rating Google" },
                            { value: "2", label: "oficii: Căușeni și Chișinău" },
                            { value: "0", label: "comisioane ascunse" },
                        ]}
                    />
                </Reveal>

                {/* 6. How it works */}
                <div className="mt-[104px] max-ds-md:mt-16">
                    <Reveal>
                        <EyebrowLabel>Cum funcționează</EyebrowLabel>
                    </Reveal>
                    <Reveal className="mt-9">
                        <StepRows
                            layout="cells"
                            steps={[
                                {
                                    label: "Pas 01",
                                    title: "Discutăm",
                                    body: "Ne suni sau ne scrii pe Viber sau WhatsApp. Ne spui de cât ai nevoie și pentru ce. Dacă nu se potrivește, îți spunem direct.",
                                },
                                {
                                    label: "Pas 02",
                                    title: "Analizăm de la distanță",
                                    body: "Trimiți documentele pe telefon sau pe email. Verificăm totul înainte de întâlnire. Primești răspunsul cu suma și rata exactă.",
                                },
                                {
                                    label: "Pas 03",
                                    title: "Semnezi și iei banii",
                                    body: "Vii la oficiu o singură dată, la semnare. Banii se eliberează în aceeași zi. Ratele le plătești online sau la poștă.",
                                },
                            ]}
                        />
                    </Reveal>
                </div>
            </SectionBand>

            {/* 7. All products */}
            <SectionBand spacing="both">
                <Reveal>
                    <SectionHeading title="Toate produsele" aside={<span className="text-small">Șase produse, un singur proces de aprobare.</span>} />
                </Reveal>
                <div className="mt-12 grid grid-cols-2 gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <Reveal>
                        <ListRows heading="Pentru afaceri" items={BUSINESS_PRODUCTS} />
                    </Reveal>
                    <Reveal>
                        <ListRows heading="Pentru persoane fizice" items={PERSONAL_PRODUCTS} />
                    </Reveal>
                </div>
            </SectionBand>

            {/* 8. Testimonials */}
            <SectionBand spacing="bottom">
                <Reveal>
                    <PullQuote
                        quote="„Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și oameni care explică fiecare cifră.”"
                        name="Ion C."
                        role="Proprietar de magazin, Căușeni"
                        initials="IC"
                        side={[
                            { text: "„Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem.”", meta: "Ana · credit investițional" },
                            { text: "„Transparență totală, fără comisioane ascunse.”", meta: "Maria · antreprenoare" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            {/* 9. FAQ */}
            <SectionBand spacing="bottom" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
                <Reveal>
                    <h2 className="text-h2 max-ds-sm:text-[34px]">
                        Întrebări
                        <br />
                        frecvente
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

            {/* 10. CTA band */}
            <Reveal>
                <CtaBand title="Spune-ne de cât ai nevoie. Restul e treaba noastră." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
