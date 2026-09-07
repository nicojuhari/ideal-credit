"use client";

import { useState, type ReactNode } from "react";
import {
    Button,
    EligibilityChecklist,
    EyebrowLabel,
    LoanCalculator,
    PHONE_TEL,
    Reveal,
    StatCells,
    applyHref,
    type StatItem,
    type VerdictSet,
} from "@/components/ds";

export type ProductHeroProps = {
    eyebrow: string;
    title: ReactNode;
    lead: ReactNode;
    /** three hairline stats under the buttons */
    stats: StatItem[];
    calculator: {
        title?: string;
        minAmount: number;
        maxAmount: number;
        stepAmount?: number;
        defaultAmount: number;
        minTerm?: number;
        maxTerm?: number;
        defaultTerm?: number;
    };
    /** self-qualification card under the copy; omit for pages without one */
    checklist?: {
        eyebrow?: string;
        title?: string;
        items: string[];
        defaultTicked?: boolean[];
        verdicts?: VerdictSet;
    };
    primaryLabel?: string;
};

/**
 * Product-page hero: eyebrow, h1, lead, buttons, three hairline stats and the
 * optional self-qualification card on the left; the sticky calculator on the
 * right. Amount/term are lifted here so the primary button carries the values.
 * Single column under 981px — calculator directly under the copy, not sticky.
 */
export function ProductHero({ eyebrow, title, lead, stats, calculator, checklist, primaryLabel = "Solicită un credit" }: ProductHeroProps) {
    const [amount, setAmount] = useState(calculator.defaultAmount);
    const [term, setTerm] = useState(calculator.defaultTerm ?? 12);

    return (
        <section className="ds-shell grid grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] items-start gap-16 pt-11 ds-section-follow-b max-ds-lg:grid-cols-1 max-ds-lg:gap-12 max-ds-sm:pt-7">
            <Reveal className="max-ds-lg:order-1">
                <EyebrowLabel tone="brand">{eyebrow}</EyebrowLabel>
                <h1 className="mt-[22px] text-h1-service text-balance">{title}</h1>
                <p className="mt-[26px] max-w-[470px] text-lead text-text-2">{lead}</p>
                <div className="mt-[38px] flex flex-wrap gap-3">
                    <Button variant="paper" size="lg" href={applyHref(amount, term)}>
                        {primaryLabel}
                    </Button>
                    <Button variant="outline" size="lg" href={PHONE_TEL}>
                        Vorbește cu un consultant
                    </Button>
                </div>
                <div className="mt-16 max-ds-sm:mt-10">
                    <StatCells size="md" cellTone="bg" divided={false} items={stats} />
                </div>
            </Reveal>
            {/* spans both rows and stretches so the sticky panel has room to travel */}
            <Reveal className={checklist ? "max-ds-lg:order-2 ds-lg:row-span-2 ds-lg:self-stretch" : "max-ds-lg:order-2"}>
                <LoanCalculator
                    title={calculator.title ?? "Simulează creditul"}
                    minAmount={calculator.minAmount}
                    maxAmount={calculator.maxAmount}
                    stepAmount={calculator.stepAmount ?? 5_000}
                    minTerm={calculator.minTerm}
                    maxTerm={calculator.maxTerm}
                    sticky={Boolean(checklist)}
                    amount={amount}
                    term={term}
                    onAmountChange={setAmount}
                    onTermChange={setTerm}
                />
            </Reveal>
            {checklist && (
                <Reveal className="-mt-2 max-ds-lg:order-3 ds-lg:col-start-1 ds-lg:row-start-2">
                    <EligibilityChecklist
                        eyebrow={checklist.eyebrow}
                        title={checklist.title}
                        items={checklist.items}
                        defaultTicked={checklist.defaultTicked}
                        verdicts={checklist.verdicts}
                    />
                </Reveal>
            )}
        </section>
    );
}
