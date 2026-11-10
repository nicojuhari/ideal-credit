"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import SplitSection from "@/components/ds/SplitSection";
import Accent from "@/components/ds/Accent";
import Note from "@/components/ds/Note";
import { ButtonPrimary } from "@/components/ds/Button";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";

const PreContractDialog = dynamic(() => import("@/components/home/PreContractDialog"), { ssr: false });

const SUM_MIN = 10000;
const SUM_STEP = 1000;
const TERM_MIN = 12;
const TERM_MAX = 60;
const TERM_STEP = 1;

function fmt(n: number) {
    return Math.round(n).toLocaleString("ro-RO");
}

const label = "text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";

function Slider({
    id,
    title,
    value,
    unit,
    min,
    max,
    step,
    minLabel,
    maxLabel,
    onChange,
}: {
    id: string;
    title: string;
    value: number;
    unit: string;
    min: number;
    max: number;
    step: number;
    minLabel: string;
    maxLabel: string;
    onChange: (v: number) => void;
}) {
    return (
        <div>
            <label htmlFor={id} className={`${label} block`}>
                {title}
            </label>
            <p className="dc-num mt-3 text-[34px] tracking-[-.03em] text-dc-text sm:text-[40px]">
                {unit === "lei" ? fmt(value) : value} <span className="text-sm text-dc-text-muted">{unit}</span>
            </p>
            <input
                id={id}
                type="range"
                className="dc-slider mt-5"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <div className="mt-2.5 flex justify-between font-dc-mono text-xs text-dc-text-muted">
                <span>{minLabel}</span>
                <span>{maxLabel}</span>
            </div>
        </div>
    );
}

// Persons can borrow up to 300.000 lei, businesses up to 500.000: personal credit pages pass max={300000}.
export default function Calculator({ max = 500000 }: { max?: number }) {
    const [sum, setSum] = useState(100000);
    const [term, setTerm] = useState(24);
    const [precontractOpen, setPrecontractOpen] = useState(false);
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
    const last = grafic?.[grafic.length - 1];
    const lastPayment = last ? last.credit_rata + last.dobinda_rata : 0;

    const results = [
        { title: "Prima rată", value: fmt(firstPayment), accent: true },
        { title: "Ultima rată", value: fmt(lastPayment) },
        { title: "Dobândă totală", value: fmt(totalCost) },
    ];

    return (
        <SplitSection
            id="calculator"
                        title={
                <>
                    Calculează rata <Accent>înainte să suni.</Accent>
                </>
            }
            description="Dobânda se calculează din suma rămasă de plătit, de aceea rata scade în fiecare lună. Pentru sume mari și pentru clienții care revin, dobânda poate fi mai mică."
        >
            <div className="border border-dc-line bg-dc-bg p-5 sm:p-10">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                    <Slider
                        id="dc-calc-suma"
                        title="Suma"
                        value={sum}
                        unit="lei"
                        min={SUM_MIN}
                        max={max}
                        step={SUM_STEP}
                        minLabel={fmt(SUM_MIN)}
                        maxLabel={fmt(max)}
                        onChange={(v) => {
                            setSum(v);
                            firePixelOnce();
                        }}
                    />
                    <Slider
                        id="dc-calc-termen"
                        title="Termen"
                        value={term}
                        unit="luni"
                        min={TERM_MIN}
                        max={TERM_MAX}
                        step={TERM_STEP}
                        minLabel={`${TERM_MIN}`}
                        maxLabel={`${TERM_MAX}`}
                        onChange={(v) => {
                            setTerm(v);
                            firePixelOnce();
                        }}
                    />
                </div>

                <div className="mt-10 grid grid-cols-2 gap-px border border-dc-line bg-dc-line sm:grid-cols-3" aria-live="polite">
                    {results.map((r) => (
                        <div key={r.title} className="min-w-0 bg-dc-surface p-4 last:col-span-2 sm:p-5 sm:last:col-span-1">
                            <p className={label}>{r.title}</p>
                            <p className={`dc-num mt-2.5 text-[19px] sm:text-2xl ${r.accent ? "text-dc-accent" : "text-dc-text"}`}>
                                {r.value} <span className="text-xs text-dc-text-muted">lei</span>
                            </p>
                        </div>
                    ))}
                </div>
                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-dc-mono text-[13px] text-dc-text-muted">
                    <span>
                        DAE <span className="text-dc-proof">{Number(dae).toLocaleString("ro-RO", { maximumFractionDigits: 2 })}%</span>
                    </span>
                    <span>
                        Comisioane <span className="text-dc-proof">0 lei</span>
                    </span>
                    <span>
                        Achitare înainte de termen <span className="text-dc-proof">0 lei</span>
                    </span>
                </p>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <ButtonPrimary href="/cerere-de-credit-online">Solicită un credit</ButtonPrimary>
                    <button
                        type="button"
                        onClick={() => {
                            firePixelOnce();
                            setPrecontractOpen(true);
                        }}
                        className="text-left text-sm text-dc-text underline underline-offset-4 transition-colors hover:text-white"
                    >
                        Informația precontractuală
                    </button>
                    {precontractOpen && (
                        <PreContractDialog
                            open={precontractOpen}
                            onOpenChange={setPrecontractOpen}
                            sum={sum}
                            term={term}
                            dae={dae}
                            grafic={grafic}
                            totalCost={totalCost}
                        />
                    )}
                </div>
            </div>
            <Note className="mt-4">Estimare orientativă. Graficul complet și informația precontractuală le primești înainte de semnare.</Note>
        </SplitSection>
    );
}
