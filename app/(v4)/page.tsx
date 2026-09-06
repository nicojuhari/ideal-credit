import type { Metadata } from "next";
import Link from "next/link";
import {
    Button,
    Card,
    CtaBand,
    DataTile,
    EyebrowLabel,
    FaqAccordion,
    GuideCard,
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
    title: "Credite Nebancare în Moldova | Ideal Credit",
    description:
        "Credit nebancar pentru SRL, ÎI și antreprenori din Moldova — și soluții pentru nevoi personale. Dobândă fixă, zero comisioane ascunse, decizie în 1–2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/" },
};

const FAQ: FaqItem[] = [
    {
        question: "Ce sumă pot obține pentru afacerea mea?",
        answer: "Suma depinde de rulajul din extrasele bancare și de garanțiile disponibile. Pentru afaceri mici lucrăm de regulă între 20.000 și 500.000 MDL, iar limita exactă o stabilim după analiza dosarului.",
    },
    {
        question: "Pot obține credit doar cu buletinul, fără gaj?",
        answer: "Da, pentru sume mai mici este suficient buletinul și un fidejusor. Gajul se solicită doar pentru sume mari sau venituri nestabile.",
    },
    {
        question: "Dobânda este fixă sau flotantă?",
        answer: "Fixă pe toată durata contractului. Rata scade lunar, pentru că dobânda se calculează la soldul rămas.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile — dobânda, taxele și eventualele penalități — sunt prezentate în informația precontractuală, înainte de semnare.",
    },
    {
        question: "Pot rambursa creditul anticipat?",
        answer: "Da, gratuit și oricând. Plătești dobânda doar pentru perioada în care ai folosit efectiv banii.",
    },
    {
        question: "Cât timp durează aprobarea?",
        answer: "Dosarul complet primit dimineața primește răspuns înainte de prânz. Pentru credite de afaceri, decizia finală vine în 1–2 zile lucrătoare.",
    },
];

const BUSINESS_PRODUCTS = [
    { title: "Afaceri mici", description: "Capital rapid pentru SRL, ÎI și antreprenori.", href: "/credite/credit-pentru-afaceri-mici" },
    { title: "Capital de lucru", description: "Salarii, furnizori, stoc — flux fără întreruperi.", href: "/credite/credit-capital-de-lucru" },
    { title: "Investițional", description: "Echipamente, extindere spațiu, modernizare.", href: "/credite/credit-investitional" },
    { title: "Refinanțare", description: "Consolidezi datoriile, reduci rata lunară.", href: "/credite/refinantare" },
    { title: "Agricol", description: "Pentru fermieri și activități sezoniere.", href: "/credite/credit-pentru-agricultura" },
];

const PERSONAL_PRODUCTS = [
    { title: "Nevoi personale", description: "Pentru orice cheltuială planificată sau urgentă.", href: "/credite/credit-pentru-nevoi-personale" },
    { title: "Până la salariu", description: "Sumă mică, rambursare la următorul salariu.", href: "/credite/credit-pina-la-salariu" },
    { title: "Reparație", description: "Renovarea locuinței cu rate fixe.", href: "/credite/credit-pentru-reparatie" },
    { title: "Automobil", description: "Finanțare pentru mașină nouă sau second-hand.", href: "/credite/credit-pentru-automobil" },
    { title: "Bugetari", description: "Condiții speciale pentru medici, militari, polițiști.", href: "/credite/credit-pentru-bugetari" },
];

const GUIDES = [
    {
        href: "/blog/ocn-vs-banca-credit-afaceri-moldova",
        readTime: "9 min",
        title: "OCN sau bancă: ce să alegi pentru creditul de afacere",
        description: "Când e mai bun fiecare, de ce diferă dobânzile și cum decizi fără să greșești.",
    },
    {
        href: "/blog/documente-necesare-credit-afaceri-moldova",
        readTime: "8 min",
        title: "Ce documente trebuie pentru un credit de afaceri",
        description: "Lista completă de acte — și ce nu ți se va cere niciodată.",
    },
    {
        href: "/blog/ghid-credit-afaceri-ocn-moldova",
        readTime: "11 min",
        title: "Cum obții credit la un OCN: ghid pas cu pas",
        description: "De la prima discuție până la banii în cont, cu pași concreți și cifre reale.",
    },
];

export default function HomePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            {/* 2. Hero + calculator */}
            <HomeHero />

            {/* 3. Trust strip */}
            <SectionBand spacing="follow">
                <Reveal>
                    <TrustStrip items={["Achitare online banking", "VictoriaBank", "Poșta Moldovei", "Numerar în oficii", "Rambursare anticipată gratuită"]} />
                </Reveal>
            </SectionBand>

            {/* 4. Three promises */}
            <SectionBand spacing="bottom">
                <Reveal>
                    <SectionHeading
                        title={
                            <>
                                Trei promisiuni,
                                <br />
                                fără asterisc.
                            </>
                        }
                        aside="Din 2010 finanțăm afaceri și familii din Moldova. Regulile sunt aceleași pentru toți clienții."
                    />
                </Reveal>
                <div className="mt-11 grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] gap-5 max-ds-md:grid-cols-1">
                    <Reveal>
                        <Card padding="card" className="min-h-[300px] max-ds-md:min-h-0">
                            <EyebrowLabel tone="brand">Transparență</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Toate costurile, înainte de semnare</h3>
                            <p className="mt-3 max-w-[380px] text-body text-text-2">
                                Dobândă fixă, zero comisioane ascunse. Vezi rata, costul total și DAE în informația precontractuală.
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
                            <EyebrowLabel tone="brand">Viteză</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Răspuns înainte de prânz</h3>
                            <p className="mt-3 text-body text-text-2">Dosarul complet primit dimineața primește decizie în aceeași zi lucrătoare.</p>
                            <div className="mt-auto pt-[26px] font-figure text-figure-lg">1–3 h</div>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card padding="card" className="min-h-[300px] max-ds-md:min-h-0">
                            <EyebrowLabel tone="brand">Flexibilitate</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Rambursare anticipată gratuită</h3>
                            <p className="mt-3 text-body text-text-2">Plătești dobânda doar pentru perioada folosită. Nicio penalitate.</p>
                            <div className="mt-auto pt-[26px] font-figure text-figure-lg">0 %</div>
                        </Card>
                    </Reveal>
                </div>
            </SectionBand>

            {/* 5–7. Section band: product direction, stats, how it works */}
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
                        aside="Două trasee, aceleași reguli: costurile spuse din prima discuție și un răspuns în aceeași zi lucrătoare."
                    />
                </Reveal>
                <div className="mt-[52px] grid grid-cols-2 gap-5 max-ds-md:grid-cols-1">
                    <Reveal>
                        <Card padding="product" hover="brand" className="min-h-[360px] max-ds-md:min-h-0">
                            <EyebrowLabel>01 / Afaceri</EyebrowLabel>
                            <h3 className="mt-[22px] text-h3-product">Credit pentru afaceri</h3>
                            <p className="mt-3.5 max-w-[380px] text-body text-text-3">Capital de lucru, investiții sau refinanțare — fără plan de afaceri obligatoriu.</p>
                            <div className="mt-[26px] flex flex-col gap-3 text-[15.5px]">
                                <span>SRL, ÎI, GȚ — toate formele juridice</span>
                                <span>Extrase bancare de minim 3 luni</span>
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
                            <p className="mt-3.5 max-w-[380px] text-body text-text-3">Pentru o nevoie urgentă sau un plan pregătit, cu condiții clare de la început.</p>
                            <div className="mt-[26px] flex flex-col gap-3 text-[15.5px]">
                                <span>De la 23 de ani, cu venit stabil</span>
                                <span>Doar buletinul de identitate valabil</span>
                                <span>Decizie în 2–3 ore</span>
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
                    <InsetNote>
                        Primul credit se acordă cu garant. Clienții cu istoric bun nu mai au nevoie de garant la creditele următoare — iar toate costurile sunt
                        prezentate înainte de semnare.
                    </InsetNote>
                </Reveal>

                {/* 6. Stats */}
                <Reveal className="mt-[104px] max-ds-md:mt-16">
                    <StatCells
                        items={[
                            { value: "16", label: "ani de activitate" },
                            { value: "4.9", label: "rating Google" },
                            { value: "10", label: "produse de credit" },
                            { value: "0", label: "comisioane ascunse" },
                        ]}
                    />
                </Reveal>

                {/* 7. How it works */}
                <div className="mt-[104px] max-ds-md:mt-16">
                    <Reveal>
                        <EyebrowLabel>Cum funcționează</EyebrowLabel>
                    </Reveal>
                    <Reveal className="mt-9">
                        <StepRows
                            layout="cells"
                            steps={[
                                { label: "Pas 01", title: "Depui cererea", body: "Online, la telefon, pe Viber/WhatsApp sau într-unul din oficii." },
                                { label: "Pas 02", title: "Primești răspunsul", body: "În câteva ore în timpul programului, cu suma și rata exactă." },
                                { label: "Pas 03", title: "Semnezi și iei banii", body: "Contractul se semnează în oficiu, banii se eliberează imediat." },
                            ]}
                        />
                    </Reveal>
                </div>
            </SectionBand>

            {/* 8. All products */}
            <SectionBand spacing="both">
                <Reveal>
                    <SectionHeading title="Toate produsele" aside={<span className="text-small">Zece produse, un singur proces de aprobare.</span>} />
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

            {/* 9. Testimonials */}
            <SectionBand spacing="bottom">
                <Reveal>
                    <PullQuote
                        quote="„Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și oameni care explică fiecare cifră.”"
                        name="Ion C."
                        role="Proprietar de magazin, Căușeni"
                        initials="IC"
                        side={[
                            { text: "„Banca m-a refuzat, voi m-ați ajutat în 2 zile.”", meta: "Victor · credit pentru automobil" },
                            { text: "„Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem.”", meta: "Ana · credit investițional" },
                            { text: "„Transparență totală, fără comisioane ascunse.”", meta: "Maria · antreprenoare" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            {/* 10. Guides */}
            <SectionBand spacing="bottom">
                <Reveal>
                    <SectionHeading
                        title="Ghiduri practice"
                        aside={
                            <Link href="/blog" className="text-small hover:text-brand">
                                Toate ghidurile →
                            </Link>
                        }
                    />
                </Reveal>
                <div className="mt-11 grid grid-cols-3 gap-5 max-ds-md:grid-cols-1">
                    {GUIDES.map((g) => (
                        <Reveal key={g.href}>
                            <GuideCard {...g} />
                        </Reveal>
                    ))}
                </div>
            </SectionBand>

            {/* 11. FAQ */}
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

            {/* 12. CTA band */}
            <Reveal>
                <CtaBand
                    title="Spune-ne de cât ai nevoie. Restul e treaba noastră."
                    lead="Completezi cererea în 3 minute și primești răspunsul în aceeași zi lucrătoare."
                />
            </Reveal>
        </>
    );
}
