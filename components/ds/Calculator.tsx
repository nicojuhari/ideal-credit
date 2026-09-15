"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import PreContractContent from "@/components/PreContractContent";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";
import { ButtonPrimary } from "./Button";

const SUM_MIN = 10000;
const SUM_MAX = 300000;
const SUM_STEP = 1000;
const TERM_MIN = 12;
const TERM_MAX = 60;
const TERM_STEP = 1;

function fmt(n: number) {
    return Math.round(n).toLocaleString("ro-RO");
}

export default function Calculator() {
    const [sum, setSum] = useState(10000);
    const [term, setTerm] = useState(12);
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
        <div className="rounded-dc-card border border-dc-line bg-dc-surface p-8 flex flex-col gap-7">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-dc-text">Calculator de credit</h2>
                <span className="text-[13px] text-dc-text-dim">{CALCULATOR_MONTHLY_RATE}% lunar</span>
            </div>

            <div>
                <p className="text-[13px] text-dc-text-dim">Prima rată</p>
                <p className="mt-1 text-[44px] font-bold leading-[1.1] tracking-[-.03em] text-dc-text" aria-live="polite">
                    {fmt(firstPayment)} <span className="text-lg font-medium text-dc-text-dim">MDL</span>
                </p>
            </div>

            <div>
                <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="dc-calc-suma" className="text-sm text-dc-text-muted">
                        Suma
                    </label>
                    <span className="text-sm font-semibold text-dc-text">{sum.toLocaleString("ro-RO")} MDL</span>
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
            </div>

            <div>
                <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="dc-calc-termen" className="text-sm text-dc-text-muted">
                        Termen
                    </label>
                    <span className="text-sm font-semibold text-dc-text">{term} luni</span>
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
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-dc-control border border-dc-line bg-dc-line">
                <div className="bg-dc-surface px-4 py-3.5" aria-live="polite">
                    <p className="text-xs text-dc-text-dim">DAE %</p>
                    <p className="mt-1 text-lg font-bold text-dc-text">{dae.toLocaleString("ro-RO", { maximumFractionDigits: 2 })}%</p>
                </div>
                <div className="bg-dc-surface px-4 py-3.5" aria-live="polite">
                    <p className="text-xs text-dc-text-dim">Cost total</p>
                    <p className="mt-1 text-lg font-bold text-dc-text">{fmt(totalCost)} MDL</p>
                </div>
            </div>

            <ButtonPrimary href="/cerere-de-credit-online" className="w-full">
                Solicită un credit
            </ButtonPrimary>

            <Dialog>
                <DialogTrigger
                    onClick={() => firePixelOnce()}
                    className="mx-auto block text-center text-xs text-dc-text-dim underline underline-offset-[3px] hover:text-dc-text-muted"
                >
                    Graficul de achitare și Informația precontractuală
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                    <DialogHeader>
                        <DialogTitle>Informația preContractuală</DialogTitle>
                    </DialogHeader>
                    <PreContractContent creditSuma={sum} creditTermen={term} dae={dae} graficCalculat={grafic} dobindaTotal={totalCost} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
