import type { Metadata } from "next";
import { Breadcrumb, CtaBand, InsetNote, ListRows, Reveal, SectionBand, SectionHeading, type FaqItem, type VerdictSet } from "@/components/ds";
import { ProductHero } from "@/components/v4/ProductHero";
import { CompareTable, FaqSection, PERSONAL_STEPS, ProcessSection, UseCaseGrid, type UseCase } from "@/components/v4/product-shared";
import { autoLoanSchema } from "@/lib/schema";
import { faqPageSchema } from "@/lib/faq-schema";

const TITLE = "Credit pentru automobil fără gaj pe mașină, de la orice vânzător | Ideal Credit";
const DESCRIPTION =
    "Credit auto în Moldova pentru mașină nouă sau second-hand, cumpărată de la dealer, de la o persoană fizică sau de pe 999.md. Mașina nu se gajează și e a ta din prima zi. Dobândă fixă, răspuns în aceeași zi.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-automobil" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: TITLE,
        description: DESCRIPTION,
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite pentru afaceri și persoane fizice în Moldova" }],
    },
};

const AUTO_VERDICTS: VerdictSet = {
    qualify: { title: "Te califici", text: "Trimite buletinul și dovada venitului. Primești răspunsul cu suma și rata exactă în aceeași zi lucrătoare." },
    probable: { title: "Probabil se poate", text: "Analizăm situația reală, nu doar actele. Sună-ne și verificăm în câteva minute." },
    low: { title: "Hai să discutăm", text: "Chiar dacă nu bifezi condițiile standard, îți spunem direct ce alternative există." },
};

const FAQ: FaqItem[] = [
    {
        question: "Pot cumpăra o mașină second-hand de la o persoană fizică?",
        answer: "Da. Finanțăm mașini noi și second-hand, de la dealeri sau de la persoane fizice, inclusiv anunțuri de pe 999.md. Nu există limită de vârstă sau de tip pentru vehicul.",
    },
    {
        question: "Mașina se gajează?",
        answer: "Nu. Creditul se acordă pe venitul tău, cu un fidejusor la primul credit. Mașina este a ta din prima zi și o poți vinde oricând.",
    },
    {
        question: "Pot lua credit pentru o reparație majoră la mașina pe care o am?",
        answer: "Da. Motor, cutie de viteze, suspensie, caroserie. Nu cerem deviz de la service înainte de aprobare.",
    },
    {
        question: "Ce garanții sunt necesare?",
        answer: "La primul credit, un fidejusor. Gajul imobiliar poate fi cerut în plus pentru sume mari sau venituri nestabile. Mașina nu se gajează.",
    },
    {
        question: "Cât durează aprobarea?",
        answer: "Răspunsul vine în aceeași zi lucrătoare pentru un dosar complet. Semnezi în oficiu și primești banii în aceeași zi, ca să poți încheia vânzarea.",
    },
    {
        question: "Pot rambursa anticipat?",
        answer: "Da, gratuit și oricând. Plătești dobânda doar pentru perioada folosită.",
    },
];

const USE_CASES: UseCase[] = [
    { n: "01", title: "Mașină second-hand", body: "De la o persoană fizică, un anunț de pe 999.md sau un dealer. Fără limită de vârstă a mașinii." },
    { n: "02", title: "Mașină nouă", body: "De la orice dealer, fără să depinzi de lista de parteneri a finanțatorului." },
    { n: "03", title: "Autoutilitară sau vehicul de lucru", body: "Pentru activitatea ta, pe persoană fizică. Pentru firmă, vezi creditul investițional.", href: "/credite/credit-investitional" },
    { n: "04", title: "Reparație majoră", body: "Motor, cutie de viteze, suspensie, caroserie. Fără deviz obligatoriu de la service." },
];

export default function CreditAutomobilPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoLoanSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ)) }} />

            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Automobil" }]} />

            <ProductHero
                eyebrow="Credit personal"
                title="Credit pentru automobil"
                lead="Cumperi mașina de la oricine: dealer, persoană fizică sau anunț pe 999.md. Mașina nu se gajează și este a ta din prima zi. Dobândă fixă, rata scade lunar."
                stats={[
                    { value: "0", label: "gaj pe mașină" },
                    { value: "Oricine", label: "poate fi vânzătorul" },
                    { value: "1 zi", label: "până la răspuns" },
                ]}
                calculator={{ minAmount: 10_000, maxAmount: 300_000, defaultAmount: 80_000, minTerm: 6, maxTerm: 60, defaultTerm: 36 }}
                checklist={{
                    title: "Este pentru mine?",
                    items: ["Am între 23 și 55 de ani", "Am un venit stabil pe care îl pot dovedi", "Am buletin de identitate valabil", "Am un fidejusor pentru primul credit"],
                    verdicts: AUTO_VERDICTS,
                }}
            />

            <SectionBand tone="section" spacing="both">
                <Reveal>
                    <SectionHeading title="Ce poți finanța" aside="Analizăm capacitatea ta de plată, nu mașina. De aceea nu contează de unde o cumperi." />
                    <UseCaseGrid items={USE_CASES} />
                </Reveal>

                <Reveal className="mt-24 grid grid-cols-2 gap-16 max-ds-md:mt-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                    <ListRows
                        variant="plain"
                        heading="Condiții"
                        headingTone="muted"
                        items={[
                            { title: "Vârsta între 23 și 55 de ani" },
                            { title: "Venit stabil, confirmat" },
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
                            { title: "Actul tehnic al mașinii, dacă ai ales-o deja" },
                            { title: "Buletinul fidejusorului" },
                        ]}
                    />
                </Reveal>
                <Reveal className="mt-7">
                    <InsetNote>
                        Nu cerem ofertă de la dealer sau deviz de la service înainte de analiză. Poți lua răspunsul întâi și abia apoi negocia mașina.
                    </InsetNote>
                </Reveal>
            </SectionBand>

            <SectionBand spacing="both">
                <Reveal>
                    <SectionHeading title="Cum diferă de un credit auto clasic" aside="La majoritatea finanțatorilor auto mașina este garanția. La noi, garanția este venitul tău." />
                </Reveal>
                <Reveal className="mt-[52px]">
                    <CompareTable
                        usLabel="Ideal Credit"
                        themLabel="Credit auto cu gaj sau leasing"
                        rows={[
                            { label: "Garanția", us: "Venitul tău și un fidejusor", them: "Mașina, gajată până la ultima rată" },
                            { label: "Vânzătorul", us: "Oricine: dealer, persoană fizică, 999.md", them: "Dealer sau furnizor partener" },
                            { label: "Vârsta mașinii", us: "Fără limită", them: "Limitată, de obicei sub 10–12 ani" },
                            { label: "Proprietatea", us: "A ta din prima zi", them: "Cu drept de gaj sau a finanțatorului" },
                            { label: "Rambursare anticipată", us: "Gratuită, oricând", them: "De regulă cu penalizări" },
                        ]}
                    />
                </Reveal>
            </SectionBand>

            <ProcessSection title="Cum lucrăm cu cererea ta" lead="Totul se verifică de la distanță. Vii la oficiu o singură dată, la semnare, și pleci cu banii." steps={PERSONAL_STEPS} />

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
                <CtaBand title="Ai găsit mașina. Spune-ne cât costă." lead="Un telefon de 5 minute. Îți spunem în aceeași zi dacă și cât putem finanța." />
            </Reveal>
        </>
    );
}
