"use client";

import { useState } from "react";
import { Button, EyebrowLabel, LoanCalculator, Reveal, applyHref } from "@/components/ds";

/**
 * Home hero: copy on the left, calculator on the right. Amount/term are lifted
 * here so the hero CTA carries the same values as the calculator's own button.
 * Under 981px it becomes one column with the calculator under the copy.
 */
export function HomeHero() {
    const [amount, setAmount] = useState(100_000);
    const [term, setTerm] = useState(12);

    return (
        <section className="ds-shell ds-hero-t grid grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] items-start gap-16 pb-16 max-ds-lg:grid-cols-1 max-ds-lg:gap-12">
            <Reveal>
                <EyebrowLabel variant="chip">OCN licențiată · din 2010</EyebrowLabel>
                <h1 className="mt-[34px] text-h1 text-balance">Capital pentru afacerea ta, cu cifrele pe masă.</h1>
                <p className="mt-7 max-w-[460px] text-lead text-text-2">
                    Credit nebancar pentru SRL, ÎI și antreprenori din Moldova — și soluții pentru nevoi personale. Dobândă fixă, zero comisioane
                    ascunse, decizie în 1–2 zile lucrătoare.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Button variant="paper" size="lg" href={applyHref(amount, term)}>
                        Solicită credit pentru afacere
                    </Button>
                    <Button variant="outline" size="lg" href="/credite/credit-pentru-afaceri-mici">
                        Condiții pentru afaceri
                    </Button>
                </div>
                <ul className="mt-11 flex list-none flex-wrap items-center gap-[18px] p-0 text-meta text-text-3">
                    <li className="inline-flex items-center gap-2">
                        <span className="font-figure text-small text-brand">4.9</span>rating Google
                    </li>
                    <li aria-hidden className="size-1 bg-line-dot" />
                    <li>Rambursare anticipată gratuită</li>
                    <li aria-hidden className="size-1 bg-line-dot" />
                    <li>Supravegheat de CNPF</li>
                </ul>
            </Reveal>
            <Reveal id="calculator">
                <LoanCalculator
                    title="Calculator de credit"
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
