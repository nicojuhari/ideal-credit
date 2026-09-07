import Link from "next/link";
import type { ReactNode } from "react";
import { Button, FaqAccordion, HairlineGrid, Reveal, SectionBand, StepRows, type FaqItem, type StepItem } from "@/components/ds";

/** The one approval process, worded for business pages. */
export const BUSINESS_STEPS: StepItem[] = [
    {
        label: "Pas 01",
        title: "Prima discuție",
        body: "Ne suni sau ne scrii pe Viber sau WhatsApp. Ne spui de cât ai nevoie și pentru ce. Dacă nu se potrivește, îți spunem direct.",
    },
    {
        label: "Pas 02",
        title: "Analiza extraselor",
        body: "Trimiți extrasele pe 3–6 luni și actele firmei, pe telefon sau pe email. Stabilim suma, termenul și garanțiile potrivite.",
    },
    { label: "Pas 03", title: "Decizia în 1–2 zile", body: "Primești oferta cu rata exactă și graficul de achitare, înainte de orice semnătură." },
    {
        label: "Pas 04",
        title: "Semnare și eliberare",
        body: "Vii la oficiu o singură dată, la semnare. Banii ajung în cont în aceeași zi. Rambursarea anticipată este gratuită oricând.",
    },
];

/** The same process, worded for personal pages. */
export const PERSONAL_STEPS: StepItem[] = [
    {
        label: "Pas 01",
        title: "Prima discuție",
        body: "Ne suni sau ne scrii pe Viber sau WhatsApp. Ne spui de cât ai nevoie și pentru ce. Îți spunem pe loc dacă se potrivește.",
    },
    {
        label: "Pas 02",
        title: "Analiza de la distanță",
        body: "Trimiți buletinul și dovada venitului pe telefon sau pe email. Verificăm totul înainte de întâlnire.",
    },
    { label: "Pas 03", title: "Răspunsul în aceeași zi", body: "Primești suma aprobată, prima și ultima rată și costul total, înainte de orice semnătură." },
    {
        label: "Pas 04",
        title: "Semnare și eliberare",
        body: "Vii la oficiu o singură dată, la semnare. Banii îi primești în aceeași zi: numerar la oficiu sau pe card.",
    },
];

type ProcessProps = { title: ReactNode; lead: ReactNode; steps: StepItem[] };

/** "Cum lucrăm" band: h2 + lead on the left, step rows on the right. */
export function ProcessSection({ title, lead, steps }: ProcessProps) {
    return (
        <SectionBand spacing="both" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
            <Reveal>
                <h2 className="text-h2 max-ds-sm:text-[34px]">{title}</h2>
                <p className="mt-5 max-w-[300px] text-body text-text-3">{lead}</p>
            </Reveal>
            <Reveal>
                <StepRows layout="rows" steps={steps} />
            </Reveal>
        </SectionBand>
    );
}

type FaqProps = { title: ReactNode; items: FaqItem[] };

/** FAQ band: h2 + contact button on the left, single-open accordion on the right. */
export function FaqSection({ title, items }: FaqProps) {
    return (
        <SectionBand spacing="bottom" shellClassName="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-[72px] max-ds-md:grid-cols-1 max-ds-md:gap-10">
            <Reveal>
                <h2 className="text-h2 max-ds-sm:text-[34px]">{title}</h2>
                <p className="mt-5 max-w-[280px] text-body text-text-3">Nu găsești răspunsul? Scrie-ne și te ghidăm pas cu pas.</p>
                <Button variant="outline" size="md" href="/contacte" className="mt-6">
                    Contactează-ne
                </Button>
            </Reveal>
            <Reveal>
                <FaqAccordion items={items} defaultOpen={0} />
            </Reveal>
        </SectionBand>
    );
}

export type UseCase = { n: string; title: string; body: string; href?: string; cta?: string };

type UseCaseGridProps = { items: UseCase[]; columns?: 2 | 3 | 4 };

/** Framed hairline grid of numbered use-case cells; a cell with `href` is a link. */
export function UseCaseGrid({ items, columns = 4 }: UseCaseGridProps) {
    const cell = "flex min-h-[280px] flex-col px-7 py-[34px] max-ds-sm:min-h-0 max-ds-sm:p-6";
    return (
        <HairlineGrid columns={columns} cellTone="section" frame className="mt-[52px] overflow-hidden">
            {items.map((p) => {
                const inner = (
                    <>
                        <span className="font-figure text-eyebrow normal-case tracking-normal text-text-3">{p.n}</span>
                        <h3 className="mt-[18px] text-h3-card tracking-[-0.02em]">{p.title}</h3>
                        <p className="mt-3 text-small text-text-3">{p.body}</p>
                        {p.href && <span className="mt-auto pt-6 text-small">{p.cta ?? "Află mai mult →"}</span>}
                    </>
                );
                return p.href ? (
                    <Link key={p.n} href={p.href} className={`${cell} transition-colors duration-[250ms] ease-out hover:bg-inset`}>
                        {inner}
                    </Link>
                ) : (
                    <div key={p.n} className={cell}>
                        {inner}
                    </div>
                );
            })}
        </HairlineGrid>
    );
}

export type CompareRow = { label: string; us: string; them: string };

type CompareProps = { usLabel: string; themLabel: string; rows: CompareRow[] };

/** Three-column hairline comparison: criterion · Ideal Credit · alternative. Renders as a real table. */
export function CompareTable({ usLabel, themLabel, rows }: CompareProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-body">
                <thead>
                    <tr className="border-b border-line-strong">
                        <th scope="col" className="w-[36%] py-4 pr-4 text-left font-figure text-eyebrow uppercase tracking-[0.1em] text-text-3">
                            Criteriu
                        </th>
                        <th scope="col" className="py-4 pr-4 text-left font-figure text-eyebrow uppercase tracking-[0.1em] text-brand">
                            {usLabel}
                        </th>
                        <th scope="col" className="py-4 text-left font-figure text-eyebrow uppercase tracking-[0.1em] text-text-3">
                            {themLabel}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.label} className="border-b border-line">
                            <th scope="row" className="py-[18px] pr-4 text-left font-medium text-text">
                                {r.label}
                            </th>
                            <td className="py-[18px] pr-4 text-text">{r.us}</td>
                            <td className="py-[18px] text-text-3">{r.them}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
