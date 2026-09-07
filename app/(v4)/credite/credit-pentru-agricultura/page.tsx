import type { Metadata } from "next";
import { Breadcrumb, Card, CtaBand, EyebrowLabel, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { BUSINESS_STEPS, FaqSection, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { agriculturalCreditSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit agricol pentru GȚ, SRL și ÎI, cu grafic adaptat recoltei | Ideal Credit";
const DESCRIPTION =
    "Credit pentru agricultură în Moldova: tehnică, semințe, irigații, lucrări sezoniere. Pentru gospodării țărănești, SRL și ÎI. Rate adaptate recoltei, până la 60 de luni, decizie în 1–2 zile.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
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
        question: "Activitatea mea este sezonieră. Se poate?",
        answer: "Da. Veniturile agricole vin după recoltă, nu lunar. Structurăm graficul de plată după ciclul tău de producție.",
    },
    {
        question: "Există perioadă de grație până la recoltă?",
        answer: "Analizăm o perioadă de grație în funcție de cultură și de ciclul de producție. Dacă recolta e în toamnă, discutăm un grafic adaptat, nu o rată egală în fiecare lună.",
    },
    {
        question: "Ce documente sunt necesare?",
        answer: "Actele de înregistrare (GȚ, SRL sau ÎI), extrase bancare pe ultimele 3 luni și actele terenului: titlu de proprietate sau contract de arendă. Nu cerem plan de afaceri.",
    },
    {
        question: "Pot cumpăra tehnică agricolă cu acest credit?",
        answer: "Da. Tractoare, combine, remorci, sisteme de irigații. Pentru sume mari și termene lungi, creditul investițional poate fi mai potrivit. Alegem împreună.",
    },
    {
        question: "Arendez terenul, nu îl dețin. Se poate?",
        answer: "Da. Contractul de arendă este suficient ca dovadă a activității. Analizăm capacitatea de producție și istoricul agricol, nu doar proprietatea terenului.",
    },
    {
        question: "Nu mă calific la programele de stat. Ce pot face?",
        answer: "Programele de stat finanțează de regulă doar utilaje noi, prin bănci, cu condiții stricte. Noi analizăm gospodăria reală: suprafața, culturile, vânzările din sezonul trecut.",
    },
];

const CATEGORIES: UseCase[] = [
    { n: "01", title: "Tehnică și utilaje", body: "Tractoare, combine, remorci, pluguri, semănători, echipamente de recoltare. Noi sau folosite." },
    { n: "02", title: "Semințe și inputuri", body: "Semințe certificate, îngrășăminte, produse de protecție a plantelor. Tot ce ai nevoie pentru sezon." },
    { n: "03", title: "Irigații", body: "Sisteme prin picurare, aspersoare, pompe, infrastructură de udare." },
    { n: "04", title: "Lucrări și capital sezonier", body: "Arat, semănat, tratamente, recoltare, muncitori sezonieri, transport, combustibil. Acoperi costurile înainte de încasări." },
];

export default function CreditAgriculturaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agriculturalCreditSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Agricultură" }]} />

            <ProductHero
                eyebrow="Credit pentru afaceri"
                title="Credit pentru agricultură"
                lead="Pentru gospodării țărănești, SRL și ÎI cu activitate agricolă. Rate adaptate recoltei, nu calendarului. Terenul poate fi în proprietate sau în arendă."
                stats={[
                    { value: "GȚ", label: "SRL și ÎI acceptate" },
                    { value: "60", label: "luni termen maxim" },
                    { value: "1–2", label: "zile până la decizie" },
                ]}
                calculator={{ minAmount: 20_000, maxAmount: 500_000, defaultAmount: 150_000, minTerm: 6, maxTerm: 60, defaultTerm: 12 }}
                checklist={{
                    title: "Este pentru gospodăria mea?",
                    items: [
                        "Activitate agricolă înregistrată: GȚ, SRL sau ÎI",
                        "Cel puțin un sezon de activitate",
                        "Teren în proprietate sau în arendă",
                        "Un fidejusor disponibil pentru primul credit",
                    ],
                }}
            />

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Ce poți finanța" aside="Orice cost legat de producția agricolă, de la semințe la combină." />
                    <UseCaseGrid items={CATEGORIES} />
                </Reveal>

                <div className="mt-24 max-ds-md:mt-16">
                    <Reveal>
                        <SectionHeading title="Adaptat la ritmul agriculturii" aside="Agricultura nu produce venit în fiecare lună. Graficul și analiza țin cont de asta." />
                    </Reveal>
                    <div className="mt-[52px] grid grid-cols-2 gap-5 max-ds-md:grid-cols-1">
                        <Reveal>
                            <Card padding="card">
                                <EyebrowLabel tone="brand">Grafic de plată</EyebrowLabel>
                                <h3 className="mt-[18px] text-h3-card">Rate mai mici înainte de recoltă, mai mari după</h3>
                                <p className="mt-3 text-body text-text-2">
                                    Structurăm graficul după ciclul tău de producție. Rate mici în lunile de cheltuieli, rate mai mari după recoltare și vânzare.
                                </p>
                                <ul className="mt-6 flex list-none flex-col gap-3 p-0 text-small text-text-2">
                                    {["Rate adaptate sezonului de încasări", "Perioadă de grație posibilă până la recoltă", "Termen până la 60 de luni pentru investiții mari"].map((it) => (
                                        <li key={it} className="flex gap-3">
                                            <span aria-hidden className="font-figure text-brand">✓</span>
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </Reveal>
                        <Reveal>
                            <Card padding="card">
                                <EyebrowLabel tone="brand">Analiza</EyebrowLabel>
                                <h3 className="mt-[18px] text-h3-card">Cum evaluăm o gospodărie</h3>
                                <p className="mt-3 text-body text-text-2">Nu căutăm un salariu lunar fix. Ne uităm la imaginea completă a activității tale.</p>
                                <ul className="mt-6 flex list-none flex-col gap-3 p-0 text-small text-text-2">
                                    {[
                                        "Suprafața cultivată și culturile practicate",
                                        "Producția și vânzările din sezonul anterior",
                                        "Contracte de arendă sau titluri de proprietate",
                                        "Extrase bancare și fluxul de numerar pe un an",
                                    ].map((it) => (
                                        <li key={it} className="flex gap-3">
                                            <span aria-hidden className="font-figure text-brand">✓</span>
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </Reveal>
                    </div>
                </div>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Activitate agricolă înregistrată: GȚ, SRL sau ÎI" },
                            { title: "Activitate demonstrabilă în ultimul sezon" },
                            { title: "Teren agricol în proprietate sau în arendă" },
                            { title: "Extrase bancare sau dovezi de vânzare a producției" },
                        ]}
                    />
                    <ListRows
                        variant="plain"
                        heading="Documente necesare"
                        headingTone="muted"
                        items={[
                            { title: "Buletinul de identitate" },
                            { title: "Certificatul de înregistrare a gospodăriei sau a firmei" },
                            { title: "Actele terenului: proprietate sau arendă" },
                            { title: "Extrase bancare sau acte de vânzare a producției" },
                            { title: "Actele bunului gajat, dacă este cazul" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        Dacă vânzările se fac în numerar, chitanțele și contractele cu cumpărătorii pot dovedi activitatea la fel de bine ca extrasele bancare.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            <ProcessSection
                title="Cum lucrăm cu dosarul tău"
                lead="Trimiți actele pe telefon sau pe email. Vii la oficiu o singură dată, la semnare. Oficiul din Căușeni este în mijlocul unui raion agricol."
                steps={BUSINESS_STEPS}
            />

            <FaqSection
                title={
                    <>
                        Ce ne întreabă
                        <br />
                        fermierii
                    </>
                }
                items={FAQ}
            />

            <Reveal>
                <CtaBand title="Spune-ne ce cultivi și când vinzi. Restul e treaba noastră." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
