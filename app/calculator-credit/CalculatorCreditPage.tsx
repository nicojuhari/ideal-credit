"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "@/components/ds/Container";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";
import { ButtonPrimary } from "@/components/ds/Button";
import { cn } from "@/lib/utils";

const SUM_MIN = 10_000;
const SUM_MAX = 300_000;
const TERM_MIN = 12;
const TERM_MAX = 60;

type RepaymentType = "anuitate" | "principal-egal";

interface Row {
    month: number;
    date: string;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

function buildSchedule(principal: number, months: number, rate: number, type: RepaymentType, grace: number): Row[] {
    const r = rate / 100;
    const rows: Row[] = [];
    let balance = principal;
    const now = new Date();

    const getDate = (offset: number) => {
        const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
        return d.toLocaleDateString("ro-RO", { month: "short", year: "2-digit" });
    };

    // Grace period - interest only, balance unchanged
    for (let i = 1; i <= grace; i++) {
        const interest = +(balance * r).toFixed(2);
        rows.push({ month: i, date: getDate(i), payment: interest, principal: 0, interest, balance });
    }

    const n = Math.max(1, months - grace);

    if (type === "anuitate") {
        const pmt = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;

        for (let i = 1; i <= n; i++) {
            const interest = +(balance * r).toFixed(2);
            const principalPart = i === n ? balance : +(pmt - interest).toFixed(2);
            const payment = +(principalPart + interest).toFixed(2);
            balance = +Math.max(0, balance - principalPart).toFixed(2);
            rows.push({ month: grace + i, date: getDate(grace + i), payment, principal: principalPart, interest, balance });
        }
    } else {
        const baseP = +(principal / n).toFixed(2);
        for (let i = 1; i <= n; i++) {
            const interest = +(balance * r).toFixed(2);
            const principalPart = i === n ? balance : baseP;
            const payment = +(principalPart + interest).toFixed(2);
            balance = +Math.max(0, balance - principalPart).toFixed(2);
            rows.push({ month: grace + i, date: getDate(grace + i), payment, principal: principalPart, interest, balance });
        }
    }

    return rows;
}

function AnimatedNumber({ value }: { value: number }) {
    const mv = useMotionValue(value);
    const display = useTransform(mv, (v) => Math.round(v).toLocaleString("ro-RO").replace(/\./g, " "));

    useEffect(() => {
        const c = animate(mv, value, { duration: 0.4, ease: "easeOut" });
        return c.stop;
    }, [value, mv]);

    return <motion.span>{display}</motion.span>;
}

function BalanceChart({ schedule, principal }: { schedule: Row[]; principal: number }) {
    if (!schedule.length || principal <= 0) return null;
    const W = 400;
    const H = 80;

    const points = [{ m: 0, b: principal }, ...schedule.map((r) => ({ m: r.month, b: r.balance }))];
    const maxM = schedule[schedule.length - 1].month;
    const x = (m: number) => ((m / maxM) * W).toFixed(1);
    const y = (b: number) => (H - (b / principal) * H).toFixed(1);

    const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.m)},${y(p.b)}`).join(" ");

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" aria-hidden>
            <path d={line} stroke="#ff9a00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const PREVIEW_ROWS = 6;

export default function CalculatorCreditPage() {
    const searchParams = useSearchParams();

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const param = (key: string, fallback: number) => {
        const v = Number(searchParams.get(key));
        return isNaN(v) || v === 0 ? fallback : v;
    };

    const [suma, setSuma] = useState(() => clamp(param("suma", 50_000), SUM_MIN, SUM_MAX));
    const [termen, setTermen] = useState(() => clamp(param("termen", 24), TERM_MIN, TERM_MAX));
    const [type, setType] = useState<RepaymentType>(() => (searchParams.get("tip") === "principal-egal" ? "principal-egal" : "anuitate"));
    const [grace, setGrace] = useState(() => clamp(param("gratie", 0), 0, 6));
    const [rate, setRate] = useState(() => clamp(param("rata", 4), 0.5, 15));
    const [tableOpen, setTableOpen] = useState(false);

    // Sync state to URL without navigation
    useEffect(() => {
        const p = new URLSearchParams({ suma: String(suma), termen: String(termen), tip: type, gratie: String(grace), rata: String(rate) });
        window.history.replaceState(null, "", `?${p}`);
    }, [suma, termen, type, grace, rate]);

    const schedule = useMemo(() => buildSchedule(suma, termen, rate, type, Math.min(grace, termen - 1)), [suma, termen, rate, type, grace]);

    const totalPaid = useMemo(() => +schedule.reduce((s, r) => s + r.payment, 0).toFixed(2), [schedule]);
    const totalInterest = useMemo(() => +schedule.reduce((s, r) => s + r.interest, 0).toFixed(2), [schedule]);
    const dae = +((Math.pow(1 + rate / 100, 12) - 1) * 100).toFixed(1);

    const firstPayment = schedule[0]?.payment ?? 0;
    const lastPayment = schedule[schedule.length - 1]?.payment ?? 0;
    const isFixed = type === "anuitate";

    const visibleRows = tableOpen ? schedule : schedule.slice(0, PREVIEW_ROWS);

    return (
        <div className="pb-24">
            <Container>
                <div className="grid items-start gap-6 lg:grid-cols-[400px_1fr]">
                    {/* ── Inputs ── */}
                    <div className="dc-cell flex flex-col gap-7 p-8">
                        {/* Suma */}
                        <div>
                            <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                <label htmlFor="suma-range" className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                    Suma creditului
                                </label>
                                <Figure size="md">{suma.toLocaleString("ro-RO").replace(/\./g, " ")} MDL</Figure>
                            </div>
                            <input
                                id="suma-range"
                                type="range"
                                className="dc-slider"
                                min={SUM_MIN}
                                max={SUM_MAX}
                                step={500}
                                value={suma}
                                onChange={(e) => setSuma(Number(e.target.value))}
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

                        {/* Termen */}
                        <div>
                            <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                <label htmlFor="termen-range" className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                    Termen
                                </label>
                                <Figure size="md">{termen} LUNI</Figure>
                            </div>
                            <input
                                id="termen-range"
                                type="range"
                                className="dc-slider"
                                min={TERM_MIN}
                                max={TERM_MAX}
                                step={1}
                                value={termen}
                                onChange={(e) => setTermen(Number(e.target.value))}
                            />
                            <div className="mt-2.5 flex justify-between">
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {TERM_MIN} luni
                                </Figure>
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {TERM_MAX} luni
                                </Figure>
                            </div>
                        </div>

                        {/* Repayment type */}
                        <div>
                            <p className="mb-3.5 text-xs uppercase tracking-[.1em] text-dc-text-muted">Tip rambursare</p>
                            <div className="grid grid-cols-2 gap-px bg-dc-line">
                                {(["anuitate", "principal-egal"] as const).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setType(t)}
                                        className={cn(
                                            "px-4 py-3 text-[15px] font-semibold transition-colors duration-[120ms]",
                                            type === t ? "bg-dc-accent text-dc-on-accent" : "bg-dc-surface text-dc-text-muted hover:text-dc-text",
                                        )}
                                    >
                                        {t === "anuitate" ? "Anuitate" : "Principal egal"}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-3 text-xs leading-[1.7] text-dc-text-muted">
                                {isFixed ? "Rate egale pe toată durata creditului" : "Ratele scad lunar - plătești mai puțin spre final"}
                            </p>
                        </div>

                        {/* Grace period + Rate */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                    Perioadă de grație
                                </label>
                                <select value={grace} onChange={(e) => setGrace(Number(e.target.value))}>
                                    {[0, 1, 2, 3, 4, 5, 6].map((v) => (
                                        <option key={v} value={v} className="bg-dc-surface">
                                            {v === 0 ? "Fără" : `${v} ${v === 1 ? "lună" : "luni"}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">Dobândă lunară</label>
                                <div className="flex items-center gap-2.5">
                                    <input
                                        type="number"
                                        className="input-calculator font-dc-mono"
                                        value={rate}
                                        min={0.5}
                                        max={15}
                                        step={0.1}
                                        onChange={(e) => {
                                            const v = parseFloat(e.target.value);
                                            if (!isNaN(v) && v >= 0.5 && v <= 15) setRate(v);
                                        }}
                                    />
                                    <span className="shrink-0 text-[15px] text-dc-text-muted">%</span>
                                </div>
                            </div>
                        </div>

                        {grace > 0 && (
                            <Note className="-mt-4">
                                În primele {grace} {grace === 1 ? "lună" : "luni"} plătești doar dobânda. Principalul se amortizează în
                                cele {termen - grace} luni rămase.
                            </Note>
                        )}
                    </div>

                    {/* ── Results ── */}
                    <div className="flex flex-col gap-6">
                        {/* 4 stat cells */}
                        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                            <div className="dc-cell min-w-0 p-7">
                                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                    {isFixed ? "Rată lunară" : "Prima rată"}
                                </p>
                                <Figure size="xl" proof className="mt-2.5 block">
                                    <AnimatedNumber value={firstPayment} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">
                                    MDL{!isFixed && ` · ultima ${Math.round(lastPayment).toLocaleString("ro-RO").replace(/\./g, " ")}`}
                                </p>
                            </div>
                            <div className="dc-cell min-w-0 p-7">
                                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Total plătit</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    <AnimatedNumber value={totalPaid} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">MDL</p>
                            </div>
                            <div className="dc-cell min-w-0 p-7">
                                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Dobândă totală</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    <AnimatedNumber value={totalInterest} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">MDL</p>
                            </div>
                            <div className="dc-cell min-w-0 p-7">
                                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">DAE</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    {dae}
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">% ANUAL EFECTIV</p>
                            </div>
                        </div>

                        {/* Balance chart */}
                        <div className="dc-cell px-6 pt-6 pb-5">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Sold rămas în timp</span>
                                <span className="font-dc-mono text-xs text-dc-text-muted">{termen} luni</span>
                            </div>
                            <BalanceChart schedule={schedule} principal={suma} />
                            <div className="mt-2 flex justify-between font-dc-mono text-xs text-dc-text-muted">
                                <span>Lună 1</span>
                                <span>Lună {Math.ceil(termen / 2)}</span>
                                <span>Lună {termen}</span>
                            </div>
                        </div>

                        {/* Amortization table */}
                        <div className="dc-cell overflow-hidden">
                            <div className="flex items-center justify-between border-b border-dc-line px-6 py-4">
                                <span className="text-[15px] font-medium text-dc-text">Grafic de rambursare</span>
                                <span className="font-dc-mono text-xs text-dc-text-muted">{schedule.length} rate</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="border-b border-dc-line text-dc-text-muted">
                                            <th className="px-6 py-3 text-left font-normal uppercase tracking-[.1em]">#</th>
                                            <th className="px-6 py-3 text-left font-normal uppercase tracking-[.1em]">Data</th>
                                            <th className="px-6 py-3 text-right font-normal uppercase tracking-[.1em]">Plată</th>
                                            <th className="px-6 py-3 text-right font-normal uppercase tracking-[.1em]">Principal</th>
                                            <th className="px-6 py-3 text-right font-normal uppercase tracking-[.1em]">Dobândă</th>
                                            <th className="px-6 py-3 text-right font-normal uppercase tracking-[.1em]">Sold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-dc-line">
                                        {visibleRows.map((r) => (
                                            <tr
                                                key={r.month}
                                                className={cn("font-dc-mono", r.principal === 0 ? "text-dc-text-muted" : "text-dc-text-muted hover:bg-dc-surface")}
                                            >
                                                <td className="px-6 py-3">{r.month}</td>
                                                <td className="px-6 py-3">{r.date}</td>
                                                <td className="px-6 py-3 text-right font-medium text-dc-text">
                                                    {Math.round(r.payment).toLocaleString("ro-RO").replace(/\./g, " ")}
                                                </td>
                                                <td className="px-6 py-3 text-right">
                                                    {r.principal ? Math.round(r.principal).toLocaleString("ro-RO").replace(/\./g, " ") : "—"}
                                                </td>
                                                <td className="px-6 py-3 text-right text-dc-accent">
                                                    {Math.round(r.interest).toLocaleString("ro-RO").replace(/\./g, " ")}
                                                </td>
                                                <td className="px-6 py-3 text-right">
                                                    {Math.round(r.balance).toLocaleString("ro-RO").replace(/\./g, " ")}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {tableOpen && (
                                        <tfoot>
                                            <tr className="border-t border-dc-line font-dc-mono font-medium text-dc-text-muted">
                                                <td className="px-6 py-3" colSpan={2}>
                                                    Total
                                                </td>
                                                <td className="px-6 py-3 text-right text-dc-text">
                                                    {Math.round(totalPaid).toLocaleString("ro-RO").replace(/\./g, " ")}
                                                </td>
                                                <td className="px-6 py-3 text-right">{suma.toLocaleString("ro-RO").replace(/\./g, " ")}</td>
                                                <td className="px-6 py-3 text-right text-dc-accent">
                                                    {Math.round(totalInterest).toLocaleString("ro-RO").replace(/\./g, " ")}
                                                </td>
                                                <td className="px-6 py-3 text-right">0</td>
                                            </tr>
                                        </tfoot>
                                    )}
                                </table>
                            </div>
                            {schedule.length > PREVIEW_ROWS && (
                                <button
                                    onClick={() => setTableOpen(!tableOpen)}
                                    className="flex w-full items-center justify-center gap-1.5 border-t border-dc-line px-6 py-4 text-xs uppercase tracking-[.1em] text-dc-text-muted transition-colors duration-[120ms] hover:text-dc-text"
                                >
                                    {tableOpen ? "Restrânge graficul" : `Arată toate cele ${schedule.length} rate`}
                                </button>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="dc-cell flex flex-col items-start justify-between gap-5 px-8 py-7 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-[17px] font-medium text-dc-text">Vrei acest credit?</p>
                                <p className="mt-1 text-xs text-dc-text-muted">Completează cererea online în 5 minute.</p>
                            </div>
                            <ButtonPrimary href="/cerere-de-credit-online" className="whitespace-nowrap">
                                Aplică acum →
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
