"use client";

import { useState } from "react";
import { Button, EligibilityChecklist, EyebrowLabel, LoanCalculator, PHONE_TEL, Reveal, StatCells, applyHref } from "@/components/ds";

/**
 * Business-loan hero: eyebrow, h1, lead, buttons, three hairline stats and the
 * self-qualification card on the left; the sticky calculator on the right.
 * Single column under 981px — calculator directly under the copy, not sticky.
 */
export function BusinessHero() {
    const [amount, setAmount] = useState(150_000);
    const [term, setTerm] = useState(12);

    return (
        <section className="ds-shell grid grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] items-start gap-16 pt-11 ds-section-follow-b max-ds-lg:grid-cols-1 max-ds-lg:gap-12 max-ds-sm:pt-7">
            <Reveal className="max-ds-lg:order-1">
                <EyebrowLabel tone="brand">Credit pentru afaceri</EyebrowLabel>
                <h1 className="mt-[22px] text-h1-service text-balance">Credit pentru afaceri mici</h1>
                <p className="mt-[26px] max-w-[470px] text-lead text-text-2">
                    Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Aprobare în 1–2 zile lucrătoare, fără birocrație excesivă.
                </p>
                <div className="mt-[38px] flex flex-wrap gap-3">
                    <Button variant="paper" size="lg" href={applyHref(amount, term)}>
                        Solicită un credit
                    </Button>
                    <Button variant="outline" size="lg" href={PHONE_TEL}>
                        Vorbește cu un consultant
                    </Button>
                </div>
                <div className="mt-16 max-ds-sm:mt-10">
                    <StatCells
                        size="md"
                        cellTone="bg"
                        divided={false}
                        items={[
                            { value: "1–2", label: "zile până la decizie" },
                            { value: "3 luni", label: "activitate minimă" },
                            { value: "0", label: "plan de afaceri cerut" },
                        ]}
                    />
                </div>
            </Reveal>
            {/* spans both rows and stretches so the sticky panel has room to travel */}
            <Reveal className="max-ds-lg:order-2 ds-lg:row-span-2 ds-lg:self-stretch">
                <LoanCalculator
                    title="Simulează creditul"
                    minAmount={20_000}
                    maxAmount={500_000}
                    stepAmount={5_000}
                    sticky
                    amount={amount}
                    term={term}
                    onAmountChange={setAmount}
                    onTermChange={setTerm}
                />
            </Reveal>
            <Reveal className="-mt-2 max-ds-lg:order-3 ds-lg:col-start-1 ds-lg:row-start-2">
                <EligibilityChecklist />
            </Reveal>
        </section>
    );
}
