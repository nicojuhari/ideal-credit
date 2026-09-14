"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Container from "@/components/ds/Container";
import { ButtonPrimary } from "@/components/ds/Button";

const SUM_MIN = 10_000;
const SUM_MAX = 300_000;
const TERM_MIN = 6;
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
    const display = useTransform(mv, (v) => Math.round(v).toLocaleString("ro-RO"));

    useEffect(() => {
        const c = animate(mv, value, { duration: 0.4, ease: "easeOut" });
        return c.stop;
    }, [value, mv]);

    return <motion.span className="tabular-nums">{display}</motion.span>;
}

function GradientSlider({
    id,
    value,
    min,
    max,
    step,
    onChange,
}: {
    id: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (v: number) => void;
}) {
    return (
        <input
            id={id}
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="dc-slider"
        />
    );
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
    const area = `${line} L${W},${H} L0,${H} Z`;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" aria-hidden>
            <defs>
                <linearGradient id="balance-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff9a00" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff9a00" stopOpacity="0.02" />
                </linearGradient>
            </defs>
            <path d={area} fill="url(#balance-fill)" />
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
        <Container className="pb-16 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
                {/* ── Inputs ── */}
                <div className="rounded-dc-card border border-dc-line bg-dc-surface p-6 space-y-6">
                    {/* Suma */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="suma-range" className="text-sm text-dc-text-muted">
                                Suma creditului
                            </label>
                            <div className="flex items-center gap-1.5 text-dc-text">
                                <span className="input-calculator text-xl text-dc-text">{suma.toLocaleString("ro-RO")}</span>
                                <span className="text-sm text-dc-text-dim">MDL</span>
                            </div>
                        </div>
                        <GradientSlider id="suma-range" value={suma} min={SUM_MIN} max={SUM_MAX} step={500} onChange={setSuma} />
                        <div className="flex justify-between text-xs text-dc-text-dim mt-1.5">
                            <span>10.000</span>
                            <span>300.000</span>
                        </div>
                    </div>

                    {/* Termen */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="termen-range" className="text-sm text-dc-text-muted">
                                Termen
                            </label>
                            <div className="flex items-center gap-1.5 text-dc-text">
                                <span className="input-calculator text-xl text-dc-text">{termen}</span>
                                <span className="text-sm text-dc-text-dim">luni</span>
                            </div>
                        </div>
                        <GradientSlider id="termen-range" value={termen} min={TERM_MIN} max={TERM_MAX} step={1} onChange={setTermen} />
                        <div className="flex justify-between text-xs text-dc-text-dim mt-1.5">
                            <span>6 luni</span>
                            <span>60 luni</span>
                        </div>
                    </div>

                    {/* Repayment type */}
                    <div>
                        <p className="text-sm text-dc-text-muted mb-2">Tip rambursare</p>
                        <div className="grid grid-cols-2 gap-2">
                            {(["anuitate", "principal-egal"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setType(t)}
                                    className={`rounded-dc-control py-2 px-3 text-sm font-medium transition-all duration-200 ${
                                        type === t
                                            ? "bg-dc-accent text-[#0b0b0c]"
                                            : "border border-dc-line text-dc-text-muted hover:text-dc-text"
                                    }`}
                                >
                                    {t === "anuitate" ? "Anuitate" : "Principal egal"}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-dc-text-dim mt-2 leading-relaxed">
                            {isFixed ? "Rate egale pe toată durata creditului" : "Ratele scad lunar - plătești mai puțin spre final"}
                        </p>
                    </div>

                    {/* Grace period + Rate */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-dc-text-muted block mb-2">Perioadă de grație</label>
                            <select
                                value={grace}
                                onChange={(e) => setGrace(Number(e.target.value))}
                                className="w-full bg-transparent border border-dc-line rounded-dc-control px-3 py-2 text-sm text-dc-text focus:outline-none focus:border-dc-line-hover"
                            >
                                {[0, 1, 2, 3, 4, 5, 6].map((v) => (
                                    <option key={v} value={v} className="bg-dc-surface">
                                        {v === 0 ? "Fără" : `${v} ${v === 1 ? "lună" : "luni"}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-dc-text-muted block mb-2">Dobândă lunară</label>
                            <div className="flex items-center gap-1.5">
                                <input
                                    type="number"
                                    value={rate}
                                    min={0.5}
                                    max={15}
                                    step={0.1}
                                    onChange={(e) => {
                                        const v = parseFloat(e.target.value);
                                        if (!isNaN(v) && v >= 0.5 && v <= 15) setRate(v);
                                    }}
                                    className="w-full bg-transparent border border-dc-line rounded-dc-control px-3 py-2 text-sm text-dc-text focus:outline-none focus:border-dc-line-hover"
                                />
                                <span className="text-sm text-dc-text-dim shrink-0">%</span>
                            </div>
                        </div>
                    </div>

                    {grace > 0 && (
                        <p className="text-xs text-dc-text-dim leading-relaxed -mt-2">
                            În primele {grace} {grace === 1 ? "lună" : "luni"} plătești doar dobânda. Principalul se amortizează în cele{" "}
                            {termen - grace} luni rămase.
                        </p>
                    )}
                </div>

                {/* ── Results ── */}
                <div className="space-y-4">
                    {/* 4 stat cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-dc-card border border-dc-accent/30 bg-dc-surface px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-dc-text-dim">
                                {isFixed ? "Rată lunară" : "Prima rată"}
                            </div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold text-dc-accent">
                                <AnimatedNumber value={firstPayment} />
                                <span className="text-sm font-normal text-dc-text-dim ml-1">MDL</span>
                            </div>
                            {!isFixed && (
                                <div className="text-xs text-dc-text-dim mt-1">
                                    Ultima: {Math.round(lastPayment).toLocaleString("ro-RO")} MDL
                                </div>
                            )}
                        </div>

                        <div className="rounded-dc-card border border-dc-line bg-dc-surface px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-dc-text-dim">Total plătit</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold text-dc-text">
                                <AnimatedNumber value={totalPaid} />
                                <span className="text-sm font-normal text-dc-text-dim ml-1">MDL</span>
                            </div>
                        </div>

                        <div className="rounded-dc-card border border-dc-line bg-dc-surface px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-dc-text-dim">Dobândă totală</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold text-dc-text">
                                <AnimatedNumber value={totalInterest} />
                                <span className="text-sm font-normal text-dc-text-dim ml-1">MDL</span>
                            </div>
                        </div>

                        <div className="rounded-dc-card border border-dc-line bg-dc-surface px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-dc-text-dim">DAE</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold text-dc-text">
                                {dae}
                                <span className="text-sm font-normal text-dc-text-dim ml-1">%/an</span>
                            </div>
                            <div className="text-[11px] text-dc-text-dim mt-0.5">Dobândă anuală efectivă</div>
                        </div>
                    </div>

                    {/* Balance chart */}
                    <div className="rounded-dc-card bg-dc-surface border border-dc-line px-4 pt-4 pb-3">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-dc-text-dim">Sold rămas în timp</span>
                            <span className="text-xs text-dc-text-dim">{termen} luni</span>
                        </div>
                        <BalanceChart schedule={schedule} principal={suma} />
                        <div className="flex justify-between text-[10px] text-dc-text-dim mt-1">
                            <span>Lună 1</span>
                            <span>Lună {Math.ceil(termen / 2)}</span>
                            <span>Lună {termen}</span>
                        </div>
                    </div>

                    {/* Amortization table */}
                    <div className="rounded-dc-card bg-dc-surface border border-dc-line overflow-hidden">
                        <div className="px-4 py-3 border-b border-dc-line flex items-center justify-between">
                            <span className="text-sm font-medium text-dc-text">Grafic de rambursare</span>
                            <span className="text-xs text-dc-text-dim">{schedule.length} rate</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-dc-text-dim border-b border-dc-line">
                                        <th className="text-left px-4 py-2.5 font-normal">#</th>
                                        <th className="text-left px-4 py-2.5 font-normal">Data</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Plată</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Principal</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Dobândă</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Sold</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-dc-line">
                                    {visibleRows.map((r) => (
                                        <tr
                                            key={r.month}
                                            className={r.principal === 0 ? "text-dc-text-dim" : "text-dc-text-muted hover:bg-white/[.03]"}
                                        >
                                            <td className="px-4 py-2.5">{r.month}</td>
                                            <td className="px-4 py-2.5">{r.date}</td>
                                            <td className="px-4 py-2.5 text-right font-semibold text-dc-text tabular-nums">
                                                {Math.round(r.payment).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">
                                                {r.principal ? Math.round(r.principal).toLocaleString("ro-RO") : "-"}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-dc-accent/80">
                                                {Math.round(r.interest).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">
                                                {Math.round(r.balance).toLocaleString("ro-RO")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                {tableOpen && (
                                    <tfoot>
                                        <tr className="border-t border-dc-line-strong text-dc-text-dim font-medium">
                                            <td className="px-4 py-2.5" colSpan={2}>
                                                Total
                                            </td>
                                            <td className="px-4 py-2.5 text-right text-dc-text tabular-nums">
                                                {Math.round(totalPaid).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">{suma.toLocaleString("ro-RO")}</td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-dc-accent/80">
                                                {Math.round(totalInterest).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">0</td>
                                        </tr>
                                    </tfoot>
                                )}
                            </table>
                        </div>
                        {schedule.length > PREVIEW_ROWS && (
                            <button
                                onClick={() => setTableOpen(!tableOpen)}
                                className="w-full px-4 py-3 text-xs text-dc-text-dim hover:text-dc-text border-t border-dc-line flex items-center justify-center gap-1.5 transition-colors"
                            >
                                {tableOpen ? (
                                    <>
                                        <ChevronUp size={14} />
                                        Restrânge graficul
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown size={14} />
                                        Arată toate cele {schedule.length} rate
                                    </>
                                )}
                            </button>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="rounded-dc-card border border-dc-line bg-dc-surface px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-dc-text">Vrei acest credit?</p>
                            <p className="text-xs text-dc-text-dim mt-0.5">Completează cererea online în 5 minute.</p>
                        </div>
                        <ButtonPrimary href="/cerere-de-credit-online" className="whitespace-nowrap">
                            Aplică acum <ArrowRight size={16} />
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </Container>
    );
}
