"use client";

import { useState } from "react";
import { Button, EyebrowLabel, LoanCalculator, Reveal } from "@/components/ds";

/**
 * Home hero: copy on the left, calculator on the right. Amount/term are lifted
 * here so the calculator's own apply button carries the current values.
 * Under 981px it becomes one column with the calculator under the copy.
 */
export function HomeHero() {
    const [amount, setAmount] = useState(100_000);
    const [term, setTerm] = useState(12);

    return (
        <section className="ds-shell ds-hero-t grid grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] items-start gap-16 pb-16 max-ds-lg:grid-cols-1 max-ds-lg:gap-12">
            <Reveal>
                <EyebrowLabel variant="chip">
                    <span className="text-brand">4.9</span>
                    <span>rating Google · din 2010</span>
                </EyebrowLabel>
                <h1 className="mt-[34px] text-h1 text-balance">Credite pentru succes.</h1>
                <p className="mt-7 max-w-[460px] text-lead text-text-2">Finanțăm afaceri și persoane fizice din Moldova. Dobândă fixă, fără comisioane ascunse.</p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Button variant="paper" size="lg" href="/credite/credit-pentru-afaceri-mici">
                        Credite pentru afaceri
                    </Button>
                    <Button variant="outline" size="lg" href="/credite/credit-pentru-nevoi-personale">
                        Credite personale
                    </Button>
                </div>
            </Reveal>
            <Reveal id="calculator">
                <LoanCalculator
                    title="Calculează prima și ultima rată"
                    minAmount={5_000}
                    maxAmount={500_000}
                    stepAmount={5_000}
                    amount={amount}
                    term={term}
                    onAmountChange={setAmount}
                    onTermChange={setTerm}
                />
            </Reveal>
        </section>
    );
}
