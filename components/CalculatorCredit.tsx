"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import PreContractContent from "./PreContractContent";

const SUM_MIN = 10000;
const SUM_MAX = 300000;
const TERM_MIN = 6;
const TERM_MAX = 60;

const sumPresets = [10000, 25000, 50000, 100000, 200000];
const termPresets = [6, 12, 24, 36, 60];

function AnimatedNumber({ value }: { value: number }) {
    const mv = useMotionValue(value);
    const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("ro-RO"));

    useEffect(() => {
        const controls = animate(mv, value, { duration: 0.45, ease: "easeOut" });
        return controls.stop;
    }, [value, mv]);

    return <motion.span className="tabular-nums">{rounded}</motion.span>;
}

function GradientSlider({
    value,
    min,
    max,
    step,
    onChange,
    id,
}: {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (v: number) => void;
    id: string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <input
            id={id}
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer border-0 p-0! outline-none"
            style={{
                background: `linear-gradient(to right, #ff9a00 0%, #ffb347 ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`,
            }}
        />
    );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`h-8 px-3 rounded-full text-xs font-medium transition-all border ${
                active
                    ? "border-brand-500/60 bg-brand-500/15 text-brand-500"
                    : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/20"
            }`}
        >
            {children}
        </button>
    );
}

export default function CalculatorCredit() {
    const [creditSuma, setCreditSuma] = useState(10000);
    const [creditTermen, setCreditTermen] = useState(12);
    const [showModal, setShowModal] = useState(false);
    const pixelFired = useRef(false);
    const { trackEvent } = useFacebookPixel();

    const firePixelOnce = useCallback(() => {
        if (!pixelFired.current) {
            pixelFired.current = true;
            trackEvent("CustomizeProduct");
        }
    }, [trackEvent]);

    const graficCalculat = useMemo(() => {
        return createGrafic({ sum: creditSuma, period: creditTermen, interest: 4 });
    }, [creditSuma, creditTermen]);

    const dae = useMemo(() => {
        if (!graficCalculat?.length) return 0;
        return calcDAE(graficCalculat, creditSuma);
    }, [graficCalculat, creditSuma]);

    const dobindaTotal = useMemo(() => {
        if (!graficCalculat?.length) return 0;
        return graficCalculat.reduce((acc: number, rata: GraficRow) => rata.dobinda_rata + acc, 0);
    }, [graficCalculat]);

    const primaRata = graficCalculat?.[0] ? graficCalculat[0].credit_rata + graficCalculat[0].dobinda_rata : 0;

    const handleSumaChange = (val: number) => {
        const clamped = Math.min(SUM_MAX, Math.max(SUM_MIN, val));
        setCreditSuma(clamped);
        firePixelOnce();
    };

    const handleTermenChange = (val: number) => {
        const clamped = Math.min(TERM_MAX, Math.max(TERM_MIN, val));
        setCreditTermen(clamped);
        firePixelOnce();
    };

    return (
        <div className="p-5 md:p-7">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg md:text-xl font-semibold">Calculator de credit</h2>
                <span className="text-[11px] uppercase tracking-wider text-white/40">4% lunar</span>
            </div>

            {/* Prima rată focal card */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-brand-500/70 via-brand-500/20 to-transparent mb-5">
                <div className="rounded-[calc(0.75rem-1px)] bg-black-700/80 px-5 py-4 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                            </span>
                            Prima rată
                        </div>
                        <div className="mt-1 text-3xl md:text-4xl font-semibold text-brand-gradient">
                            <AnimatedNumber value={primaRata} /> <span className="text-base text-white/60 font-normal">MDL</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[11px] uppercase tracking-wider text-white/40">Termen</div>
                        <div className="text-xl font-semibold tabular-nums">{creditTermen} <span className="text-sm text-white/50 font-normal">luni</span></div>
                    </div>
                </div>
            </div>

            {/* Sum block */}
            <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="credit-amount-input" className="text-sm text-white/60">Suma</label>
                    <div className="flex items-center gap-1 text-white">
                        <input
                            id="credit-amount-input"
                            type="number"
                            value={creditSuma}
                            onChange={(e) => {
                                const v = Math.round(Number(e.target.value));
                                if (!isNaN(v)) handleSumaChange(v);
                            }}
                            className="bg-transparent text-right font-semibold text-xl w-28 outline-none tabular-nums focus:text-brand-500"
                        />
                        <span className="text-sm text-white/50">MDL</span>
                    </div>
                </div>
                <GradientSlider
                    id="credit-amount-range"
                    value={creditSuma}
                    min={SUM_MIN}
                    max={SUM_MAX}
                    step={500}
                    onChange={handleSumaChange}
                />
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {sumPresets.map((p) => (
                        <Chip key={p} active={creditSuma === p} onClick={() => handleSumaChange(p)}>
                            {p >= 1000 ? `${p / 1000}k` : p}
                        </Chip>
                    ))}
                </div>
            </div>

            {/* Term block */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="credit-period-input" className="text-sm text-white/60">Termen</label>
                    <div className="flex items-center gap-1 text-white">
                        <input
                            id="credit-period-input"
                            type="number"
                            value={creditTermen}
                            onChange={(e) => {
                                const v = Math.round(Number(e.target.value));
                                if (!isNaN(v)) handleTermenChange(v);
                            }}
                            className="bg-transparent text-right font-semibold text-xl w-14 outline-none tabular-nums focus:text-brand-500"
                        />
                        <span className="text-sm text-white/50">luni</span>
                    </div>
                </div>
                <GradientSlider
                    id="credit-period-range"
                    value={creditTermen}
                    min={TERM_MIN}
                    max={TERM_MAX}
                    step={1}
                    onChange={handleTermenChange}
                />
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {termPresets.map((p) => (
                        <Chip key={p} active={creditTermen === p} onClick={() => handleTermenChange(p)}>
                            {p} luni
                        </Chip>
                    ))}
                </div>
            </div>

            {/* DAE / cost strip */}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                <div className="rounded-lg bg-white/[0.02] px-3 py-2">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">DAE</div>
                    <div className="text-sm font-semibold tabular-nums">{dae} %</div>
                </div>
                <div className="rounded-lg bg-white/[0.02] px-3 py-2">
                    <div className="text-[11px] uppercase tracking-wider text-white/40">Cost total</div>
                    <div className="text-sm font-semibold tabular-nums">{Math.round(dobindaTotal).toLocaleString("ro-RO")} MDL</div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>Consumatorul este responsabil pentru rambursare.</span>
                <Dialog open={showModal} onOpenChange={setShowModal}>
                    <DialogTrigger
                        onClick={() => firePixelOnce()}
                        className="text-brand-500 hover:text-brand-400 underline underline-offset-2 transition-colors"
                    >
                        preContract
                    </DialogTrigger>
                    <DialogContent className="w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                        <DialogHeader>
                            <DialogTitle>Informația preContractuală</DialogTitle>
                        </DialogHeader>
                        <PreContractContent
                            creditSuma={creditSuma}
                            creditTermen={creditTermen}
                            dae={dae}
                            graficCalculat={graficCalculat}
                            dobindaTotal={dobindaTotal}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
