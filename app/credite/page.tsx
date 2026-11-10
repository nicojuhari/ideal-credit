import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import ValueRow from "@/components/ds/ValueRow";
import PageHero, { cardLabel } from "@/components/ds/PageHero";
import { sectionTitle } from "@/components/ds/SplitSection";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import ProductFaq, { type FaqItem } from "@/components/product/ProductFaq";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";
import { yearsSinceFoundation } from "@/lib/utils";

const breadcrumbItems = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
];

const DESCRIPTION =
    "Credite pentru afaceri, investiții, agricultură, nevoi personale, reparație și automobil. Dobândă fixă, fără comisioane.";

export const metadata: Metadata = {
    title: "Credite pentru afaceri și persoane fizice | Ideal Credit",
    description: DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/credite" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite",
        title: "Credite pentru afaceri și persoane fizice | Ideal Credit",
        description: DESCRIPTION,
    },
};

type Credit = { name: string; desc: string; sum: string; href: string };

const groups: { title: string; who: string; decision: string; items: Credit[] }[] = [
    {
        title: "Pentru afaceri",
        who: "SRL, ÎI și gospodării țărănești",
        decision: "1–2 zile lucrătoare",
        items: [
            {
                name: "Credit pentru afaceri",
                desc: "Plătești marfa, furnizorii și salariile până încasezi banii de la clienți.",
                sum: "50.000–500.000 lei",
                href: "/credite/credit-pentru-afaceri",
            },
            {
                name: "Credit investițional",
                desc: "Cumperi echipament, utilaje sau transport care aduc venit afacerii.",
                sum: "50.000–400.000 lei",
                href: "/credite/credit-investitional",
            },
            {
                name: "Credit pentru agricultură",
                desc: "Cumperi semințe și tehnică. Ratele se potrivesc cu perioada recoltei.",
                sum: "50.000–500.000 lei",
                href: "/credite/credit-pentru-agricultura",
            },
        ],
    },
    {
        title: "Pentru persoane fizice",
        who: "Salariați, pensionari și persoane cu venit din activitate independentă",
        decision: "2–3 ore",
        items: [
            {
                name: "Credit pentru nevoi personale",
                desc: "Pentru studii, sănătate sau o cumpărătură mare pe care ai planificat-o.",
                sum: "10.000–300.000 lei",
                href: "/credite/credit-pentru-nevoi-personale",
            },
            {
                name: "Credit pentru reparație",
                desc: "Repari sau renovezi casa ori apartamentul.",
                sum: "10.000–300.000 lei",
                href: "/credite/credit-pentru-reparatie",
            },
            {
                name: "Credit pentru automobil",
                desc: "Cumperi o mașină nouă sau rulată, ori o repari.",
                sum: "10.000–300.000 lei",
                href: "/credite/credit-pentru-automobil",
            },
        ],
    },
];

const hubFaqItems: FaqItem[] = [
    {
        question: "Ce este o organizație de creditare nebancară (OCN)?",
        answer: "Este o companie care dă credite, dar nu este bancă. Are licență și este supravegheată de stat. Ideal Credit este supravegheată de Banca Națională a Moldovei (BNM) și de Comisia Națională a Pieței Financiare (CNPF).",
    },
    {
        question: "Cât durează până primesc decizia?",
        answer: "Pentru persoane fizice, decizia vine în 2-3 ore. Pentru afaceri, în 1-2 zile lucrătoare. Timpul se socotește din momentul în care avem toate actele.",
    },
    {
        question: "Există comisioane?",
        answer: "Nu. Plătești doar dobânda. Toate costurile le vezi în graficul de plăți, înainte să semnezi contractul.",
    },
    {
        question: "Dobânda este fixă?",
        answer: "Da. Procentul nu se schimbă pe toată durata contractului. Rata lunară scade în timp, pentru că dobânda se calculează din suma rămasă de plătit. Toate ratele le vezi în graficul de plăți, înainte să semnezi.",
    },
    {
        question: "Ce garanții cereți?",
        answer: "La primul credit cerem un fidejusor: o persoană care garantează cu venitul său. Gaj imobiliar (o casă, un apartament sau un teren) cerem doar pentru sume mari sau când venitul nu este stabil.",
    },
    {
        question: "Pot achita creditul înainte de termen?",
        answer: "Da, fără comision. Plătești dobânda doar pentru lunile în care ai folosit banii.",
    },
    {
        question: "Ce credit să aleg?",
        answer: "Alege după ce vrei să faci cu banii. Dacă nu ești sigur, sună-ne. În 15 minute îți spunem ce credit, ce sumă și ce termen ți se potrivesc.",
    },
    {
        question: "Ce se întâmplă dacă niciun credit nu mi se potrivește?",
        answer: `Îți spunem direct, din prima discuție. În ${yearsSinceFoundation} ani am văzut multe situații. Îți propunem o sumă mai mică, un termen mai lung sau îți spunem că acum nu e momentul.`,
    },
];

export default function CreditePage() {
    return (
        <div className="dc bg-dc-bg">
            <PageHero
                breadcrumb={breadcrumbItems}
                title={
                    <>
                        Credite pentru afaceri și <Accent>nevoi personale.</Accent>
                    </>
                }
                subtitle="Toate creditele au aceleași condiții: dobândă fixă și fără comisioane. Alege creditul după ce vrei să faci cu banii."
                actions={
                    <>
                        <ButtonPrimary href="/cerere-de-credit-online">Solicită un credit</ButtonPrimary>
                        <ButtonSecondary href="/calculator-credit">Calculează rata</ButtonSecondary>
                    </>
                }
                aside={
                    <aside aria-label="Condițiile creditelor" className="border border-dc-line bg-dc-surface px-6 pb-3 pt-6 sm:px-9 sm:pt-8">
                        <p className={cardLabel}>La toate creditele</p>
                        <div className="mt-2">
                            <ValueRow label="Dobânda fixă" value={`${CALCULATOR_MONTHLY_RATE}% pe lună`} proof />
                            <ValueRow label="Comision de acordare" value="0 lei" />
                            <ValueRow label="Comision lunar" value="0 lei" />
                            <ValueRow label="Achitare înainte de termen" value="0 lei" />
                        </div>
                    </aside>
                }
            />

            <section className="dc-section" id="solutii-toate">
                <Container>
                    <h2 className={sectionTitle}>
                        Alege <Accent>creditul.</Accent>
                    </h2>
                    <div className="mt-12 grid gap-px border border-dc-line bg-dc-line lg:mt-20 lg:grid-cols-2">
                        {groups.map((g) => (
                            <div key={g.title} className="flex flex-col bg-dc-bg">
                                <div className="border-b border-dc-line p-6 sm:p-10 lg:min-h-[220px]">
                                    <h3 className="text-[28px] font-semibold tracking-[-.03em] text-dc-text">{g.title}</h3>
                                    <p className="mt-2 text-[17px] leading-[1.55] text-dc-text-muted">{g.who}.</p>
                                    <p className="mt-5 flex flex-wrap items-baseline gap-x-3 text-[15px]">
                                        <span className="text-dc-text-muted">Decizia în</span>
                                        <span className="font-dc-mono text-dc-proof">{g.decision}</span>
                                    </p>
                                </div>
                                <ul>
                                    {g.items.map((c) => (
                                        <li key={c.href} className="border-b border-dc-line last:border-b-0">
                                            <Link
                                                href={c.href}
                                                className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-2 p-6 transition-colors hover:bg-dc-surface sm:px-10 sm:py-8"
                                            >
                                                <span className="text-xl font-semibold tracking-[-.02em] text-dc-text">{c.name}</span>
                                                <span className="text-dc-text-muted transition-colors group-hover:text-dc-accent" aria-hidden>
                                                    →
                                                </span>
                                                <span className="col-span-2 text-[17px] leading-[1.55] text-dc-text-muted">{c.desc}</span>
                                                <span className="col-span-2 font-dc-mono text-[15px] text-dc-text">{c.sum}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <Process />
            <ProductFaq items={hubFaqItems} />
            <ClosingCta />
        </div>
    );
}
