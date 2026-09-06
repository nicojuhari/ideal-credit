"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { computeLoan, formatDae, formatMdl } from "@/lib/loan-math";
import { Button } from "./Button";
import { DataTile } from "./DataTile";
import { applyHref } from "./constants";

export type LoanCalculatorProps = {
    title?: string;
    minAmount?: number;
    maxAmount?: number;
    stepAmount?: number;
    defaultAmount?: number;
    minTerm?: number;
    maxTerm?: number;
    defaultTerm?: number;
    /** sticky at top: 108px on desktop (turns off under 981px) */
    sticky?: boolean;
    /** controlled mode — lift state to share the values with other CTAs on the page */
    amount?: number;
    term?: number;
    onAmountChange?: (amount: number) => void;
    onTermChange?: (term: number) => void;
    className?: string;
};

/**
 * Surface-filled panel: two native range inputs with visible labels and
 * aria-valuetext in MDL, a 2×2 hairline data tile (first payment in orange),
 * a full-width paper→orange submit carrying the values to the application form,
 * and the fine-print disclaimer. Math lives in lib/loan-math.ts.
 */
export function LoanCalculator({
    title = "Calculator de credit",
    minAmount = 5_000,
    maxAmount = 500_000,
    stepAmount = 5_000,
    defaultAmount = 100_000,
    minTerm = 3,
    maxTerm = 36,
    defaultTerm = 12,
    sticky,
    amount: amountProp,
    term: termProp,
    onAmountChange,
    onTermChange,
    className,
}: LoanCalculatorProps) {
    const [amountState, setAmountState] = useState(defaultAmount);
    const [termState, setTermState] = useState(defaultTerm);
    const amount = amountProp ?? amountState;
    const term = termProp ?? termState;
    const setAmount = (v: number) => {
        setAmountState(v);
        onAmountChange?.(v);
    };
    const setTerm = (v: number) => {
        setTermState(v);
        onTermChange?.(v);
    };

    const id = useId();
    const amountId = `${id}-amount`;
    const termId = `${id}-term`;
    const f = computeLoan(amount, term);
    const amountLabel = formatMdl(amount);

    return (
        <div className={cn("border border-line bg-surface p-card max-ds-sm:p-6", sticky && "ds-lg:sticky ds-lg:top-[108px]", className)}>
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-panel-title">{title}</h2>
                <span className="font-figure text-fine text-brand">4% lunar</span>
            </div>

            <div className="mt-[34px]">
                <div className="flex items-baseline justify-between gap-4">
                    <label htmlFor={amountId} className="text-meta text-text-3">
                        Suma creditului
                    </label>
                    <output htmlFor={amountId} className="font-figure text-figure-sm">
                        {amountLabel} MDL
                    </output>
                </div>
                <input
                    id={amountId}
                    type="range"
                    min={minAmount}
                    max={maxAmount}
                    step={stepAmount}
                    value={amount}
                    aria-valuetext={`${amountLabel} MDL`}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="mt-4"
                />
                <div aria-hidden className="mt-2 flex justify-between font-figure text-eyebrow normal-case tracking-normal text-text-3">
                    <span>{formatMdl(minAmount)}</span>
                    <span>{formatMdl(maxAmount)}</span>
                </div>
            </div>

            <div className="mt-[26px]">
                <div className="flex items-baseline justify-between gap-4">
                    <label htmlFor={termId} className="text-meta text-text-3">
                        Termen
                    </label>
                    <output htmlFor={termId} className="font-figure text-figure-sm">
                        {term} luni
                    </output>
                </div>
                <input
                    id={termId}
                    type="range"
                    min={minTerm}
                    max={maxTerm}
                    step={1}
                    value={term}
                    aria-valuetext={`${term} luni`}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="mt-4"
                />
                <div aria-hidden className="mt-2 flex justify-between font-figure text-eyebrow normal-case tracking-normal text-text-3">
                    <span>{minTerm} luni</span>
                    <span>{maxTerm} luni</span>
                </div>
            </div>

            <DataTile
                className="mt-[26px]"
                items={[
                    { label: "Prima rată", value: formatMdl(f.firstPay), tone: "brand" },
                    { label: "Ultima rată", value: formatMdl(f.lastPay) },
                    { label: "Cost total credit", value: formatMdl(f.totalCost) },
                    { label: "DAE", value: formatDae(f.dae) },
                ]}
            />

            <Button variant="paper" size="calc" full href={applyHref(amount, term)} className="mt-[22px]">
                <span>Solicită</span>
                <span>{amountLabel}</span>
                <span>MDL</span>
            </Button>
            <p className="mt-3.5 text-fine text-text-3">Calcul orientativ. Graficul de achitare și informația precontractuală se prezintă înainte de semnare.</p>
        </div>
    );
}
