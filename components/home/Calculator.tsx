"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";
import { ButtonPrimary } from "@/components/ds/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import PreContractContent from "@/components/PreContractContent";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";

const SUM_MIN = 10000;
const SUM_MAX = 300000;
const SUM_STEP = 1000;
const TERM_MIN = 12;
const TERM_MAX = 60;
const TERM_STEP = 1;

function fmt(n: number) {
    return Math.round(n).toLocaleString("ro-RO").replace(/\./g, " ");
}

export default function Calculator() {
    const [sum, setSum] = useState(120000);
    const [term, setTerm] = useState(36);
    const pixelFired = useRef(false);
    const { trackEvent } = useFacebookPixel();

    const firePixelOnce = useCallback(() => {
        if (!pixelFired.current) {
            pixelFired.current = true;
            trackEvent("CustomizeProduct");
        }
    }, [trackEvent]);

    const grafic = useMemo(() => createGrafic({ sum, period: term, interest: CALCULATOR_MONTHLY_RATE }), [sum, term]);
    const dae = useMemo(() => (grafic?.length ? calcDAE(grafic, sum) : 0), [grafic, sum]);
    const totalCost = useMemo(
        () => (grafic?.length ? grafic.reduce((acc: number, row: GraficRow) => acc + row.dobinda_rata, 0) : 0),
        [grafic],
    );
    const firstPayment = grafic?.[0] ? grafic[0].credit_rata + grafic[0].dobinda_rata : 0;

    return (
        <div id="calculator" className="dc-section">
            <Container>
                <div className="flex flex-col gap-10 border border-dc-line p-[clamp(24px,4vw,56px)] sm:gap-14">
                    {/* Heading + settings */}
                    <div className="grid items-start gap-10 lg:gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        <div>
                            <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                                Calculator
                            </p>
                            <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                                Calculator de <Accent>credit</Accent>
                            </h2>
                            <p className="mt-4 text-[17px] leading-[1.6] text-dc-text-muted">
                                Dobândă fixă {CALCULATOR_MONTHLY_RATE}% lunar pe toată durata contractului. Fără comisioane ascunse.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                    <label htmlFor="dc-calc-suma" className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                        Suma creditului
                                    </label>
                                    <Figure size="md">{fmt(sum)} MDL</Figure>
                                </div>
                                <input
                                    id="dc-calc-suma"
                                    type="range"
                                    className="dc-slider"
                                    aria-label="Suma creditului"
                                    min={SUM_MIN}
                                    max={SUM_MAX}
                                    step={SUM_STEP}
                                    value={sum}
                                    onChange={(e) => {
                                        setSum(Number(e.target.value));
                                        firePixelOnce();
                                    }}
                                />
                                <div className="mt-2.5 flex justify-between">
                                    <Figure size="ordinal" className="text-dc-text-muted">
                                        10 000
                                    </Figure>
                                    <Figure size="ordinal" className="text-dc-text-muted">
                                        300 000
                                    </Figure>
                                </div>
                            </div>
                            <div>
                                <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                    <label htmlFor="dc-calc-termen" className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                        Termen
                                    </label>
                                    <Figure size="md">{term} LUNI</Figure>
                                </div>
                                <input
                                    id="dc-calc-termen"
                                    type="range"
                                    className="dc-slider"
                                    aria-label="Termen în luni"
                                    min={TERM_MIN}
                                    max={TERM_MAX}
                                    step={TERM_STEP}
                                    value={term}
                                    onChange={(e) => {
                                        setTerm(Number(e.target.value));
                                        firePixelOnce();
                                    }}
                                />
                                <div className="mt-2.5 flex justify-between">
                                    <Figure size="ordinal" className="text-dc-text-muted">
                                        12 luni
                                    </Figure>
                                    <Figure size="ordinal" className="text-dc-text-muted">
                                        60 luni
                                    </Figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 lg:grid-cols-3">
                        <div className="dc-cell min-w-0 p-5 sm:p-7">
                            <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Prima rată</p>
                            <Figure size="xl" proof className="mt-2.5 block" aria-live="polite">
                                {fmt(firstPayment)}
                            </Figure>
                            <p className="mt-2 text-xs text-dc-text-muted">MDL / LUNĂ</p>
                        </div>
                        <div className="dc-cell min-w-0 p-5 sm:p-7">
                            <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">DAE</p>
                            <Figure size="xl" className="mt-2.5 block" aria-live="polite">
                                {dae.toLocaleString("ro-RO", { maximumFractionDigits: 1 })}
                            </Figure>
                            <p className="mt-2 text-xs text-dc-text-muted">% anual, cu toate costurile incluse</p>
                        </div>
                        <div className="dc-cell col-span-2 min-w-0 p-5 sm:p-7 lg:col-span-1">
                            <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Cost total</p>
                            <Figure size="xl" className="mt-2.5 block" aria-live="polite">
                                {fmt(totalCost)}
                            </Figure>
                            <p className="mt-2 text-xs text-dc-text-muted">MDL DOBÂNDĂ</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-5">
                        <ButtonPrimary href="/cerere-de-credit-online">Solicită un credit</ButtonPrimary>
                        <Dialog>
                            <DialogTrigger
                                onClick={() => firePixelOnce()}
                                className="text-sm text-dc-text underline underline-offset-4 transition-colors hover:text-white"
                            >
                                Informația precontractuală
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                                <DialogHeader>
                                    <DialogTitle>Informația preContractuală</DialogTitle>
                                </DialogHeader>
                                <PreContractContent
                                    creditSuma={sum}
                                    creditTermen={term}
                                    dae={dae}
                                    graficCalculat={grafic}
                                    dobindaTotal={totalCost}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <Note className="mt-5 max-w-[820px]">
                    Estimare orientativă. Graficul complet și informația precontractuală se emit înainte de semnare.
                </Note>
            </Container>
        </div>
    );
}
