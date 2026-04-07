"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import Info from "./ui/Info";
import PreContractContent from "./PreContractContent";

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
        const clamped = Math.min(300000, Math.max(10000, val));
        setCreditSuma(clamped);
        firePixelOnce();
    };

    const handleTermenChange = (val: number) => {
        const clamped = Math.min(60, Math.max(6, val));
        setCreditTermen(clamped);
        firePixelOnce();
    };

    return (
        <div className="relative">
            <div className="card">
                <h2 className="text-center card-title">Calculator de credit</h2>
                <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
                    {/* Sliders */}
                    <div className="space-y-4 md:space-y-8">
                        <div>
                            <div className="flex gap-4 justify-between items-center mb-1">
                                <label htmlFor="credit-amount-input">Suma (MDL)</label>
                                <input
                                    id="credit-amount-input"
                                    type="number"
                                    value={creditSuma}
                                    onChange={(e) => {
                                        const v = Math.round(Number(e.target.value));
                                        if (!isNaN(v)) handleSumaChange(v);
                                    }}
                                    className="input-calculator"
                                />
                            </div>
                            <input
                                type="range"
                                value={creditSuma}
                                min={10000}
                                max={300000}
                                step={500}
                                onChange={(e) => handleSumaChange(Number(e.target.value))}
                                className="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 p-0!"
                            />
                        </div>
                        <div>
                            <div className="flex gap-4 justify-between items-center mb-1">
                                <label htmlFor="credit-period-input">Termen (luni)</label>
                                <input
                                    id="credit-period-input"
                                    type="number"
                                    value={creditTermen}
                                    onChange={(e) => {
                                        const v = Math.round(Number(e.target.value));
                                        if (!isNaN(v)) handleTermenChange(v);
                                    }}
                                    className="input-calculator"
                                />
                            </div>
                            <input
                                type="range"
                                value={creditTermen}
                                min={6}
                                max={60}
                                step={1}
                                onChange={(e) => handleTermenChange(Number(e.target.value))}
                                className="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 p-0!"
                            />
                        </div>
                    </div>

                    {/* Result circle */}
                    <div className="space-y-1">
                        <motion.div
                            key={primaRata}
                            initial={{ scale: 0.95, opacity: 0.7 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="mx-auto w-40 h-40 grid place-content-center gap-2 border-6 border-black-300 bg-black-300/50 rounded-full text-center"
                        >
                            <div className="text-sm">Prima rată</div>
                            <div className="text-brand-500 text-3xl font-semibold">{primaRata.toLocaleString()}</div>
                            <div className="text-sm">MDL</div>
                        </motion.div>
                        <div className="mt-4 flex justify-center">
                            <Dialog open={showModal} onOpenChange={setShowModal}>
                                <DialogTrigger
                                    onClick={() => firePixelOnce()}
                                    className="text-sm border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors px-4 py-1.5 rounded-md"
                                >
                                    Vezi preContractul
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
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-8 text-gray-400">
                    <div className="flex gap-6 justify-between">
                        <div>Dobânda anuală</div>
                        <div>48 %</div>
                    </div>
                    <div className="flex gap-6 justify-between">
                        <div>
                            DAE <span>(Dobânda anuală efectivă)</span>
                        </div>
                        <div>{dae} %</div>
                    </div>
                    <div className="flex gap-6 justify-between">
                        <div>Costul total al creditului</div>
                        <div>{dobindaTotal.toLocaleString()} MDL</div>
                    </div>
                    <div className="flex gap-6 justify-between">
                        <div>Penalitate pe zi</div>
                        <div>0.04 %</div>
                    </div>
                </div>
                <Info className="mt-6">Consumatorul este responsabil pentru rambursarea creditului.</Info>
            </div>
        </div>
    );
}
