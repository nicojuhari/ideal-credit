"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

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
                    <stop offset="0%" stopColor="#6c8f58" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6c8f58" stopOpacity="0.02" />
                </linearGradient>
            </defs>
            <path d={area} fill="url(#balance-fill)" />
            <path d={line} stroke="#6c8f58" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="container relativepy-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
                {/* ── Inputs ── */}
                <div className="rounded-2xl border border-white/5 bg-black-600/70 p-6 space-y-6">
                    {/* Suma */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="suma-range" className="text-sm">
                                Suma creditului
                            </label>
                            <div className="flex items-center gap-1.5 text-white">
                                <span className="input-calculator text-xl">{suma.toLocaleString("ro-RO")}</span>
                                <span className="text-sm text-white/50">MDL</span>
                            </div>
                        </div>
                        <GradientSlider id="suma-range" value={suma} min={SUM_MIN} max={SUM_MAX} step={500} onChange={setSuma} />
                        <div className="flex justify-between text-[11px] text-white/30 mt-1.5">
                            <span>10.000</span>
                            <span>300.000</span>
                        </div>
                    </div>

                    {/* Termen */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="termen-range" className="text-sm">
                                Termen
                            </label>
                            <div className="flex items-center gap-1.5 text-white">
                                <span className="input-calculator text-xl">{termen}</span>
                                <span className="text-sm text-white/50">luni</span>
                            </div>
                        </div>
                        <GradientSlider id="termen-range" value={termen} min={TERM_MIN} max={TERM_MAX} step={1} onChange={setTermen} />
                        <div className="flex justify-between text-[11px] text-white/30 mt-1.5">
                            <span>6 luni</span>
                            <span>60 luni</span>
                        </div>
                    </div>

                    {/* Repayment type */}
                    <div>
                        <p className="text-sm mb-2">Tip rambursare</p>
                        <div className="grid grid-cols-2 gap-2">
                            {(["anuitate", "principal-egal"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setType(t)}
                                    className={`rounded-lg py-2 px-3 text-sm font-medium transition-all duration-200 ${
                                        type === t
                                            ? "bg-brand-500 text-black"
                                            : "bg-black-400 text-white/60 hover:text-white border border-white/5"
                                    }`}
                                >
                                    {t === "anuitate" ? "Anuitate" : "Principal egal"}
                                </button>
                            ))}
                        </div>
                        <p className="text-[11px] text-white/30 mt-2 leading-relaxed">
                            {isFixed ? "Rate egale pe toată durata creditului" : "Ratele scad lunar - plătești mai puțin spre final"}
                        </p>
                    </div>

                    {/* Grace period + Rate */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm block mb-2">Perioadă de grație</label>
                            <select
                                value={grace}
                                onChange={(e) => setGrace(Number(e.target.value))}
                                className="w-full bg-black-400 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50"
                            >
                                {[0, 1, 2, 3, 4, 5, 6].map((v) => (
                                    <option key={v} value={v}>
                                        {v === 0 ? "Fără" : `${v} ${v === 1 ? "lună" : "luni"}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm block mb-2">Dobândă lunară</label>
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
                                    className="w-full bg-black-400 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500/50"
                                />
                                <span className="text-sm text-white/50 shrink-0">%</span>
                            </div>
                        </div>
                    </div>

                    {grace > 0 && (
                        <p className="text-[11px] text-white/30 leading-relaxed -mt-2">
                            În primele {grace} {grace === 1 ? "lună" : "luni"} plătești doar dobânda. Principalul se amortizează în cele{" "}
                            {termen - grace} luni rămase.
                        </p>
                    )}
                </div>

                {/* ── Results ── */}
                <div className="space-y-4">
                    {/* 4 stat cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl p-px bg-linear-to-br from-brand-500/60 via-brand-500/10 to-transparent">
                            <div className="rounded-xl bg-black-600/90 px-4 py-4 h-full">
                                <div className="text-[11px] uppercase tracking-wider text-white/50">
                                    {isFixed ? "Rată lunară" : "Prima rată"}
                                </div>
                                <div className="mt-1 text-2xl md:text-3xl font-semibold text-brand-gradient">
                                    <AnimatedNumber value={firstPayment} />
                                    <span className="text-sm font-normal text-white/50 ml-1">MDL</span>
                                </div>
                                {!isFixed && (
                                    <div className="text-xs text-white/40 mt-1">
                                        Ultima: {Math.round(lastPayment).toLocaleString("ro-RO")} MDL
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="rounded-xl bg-black-600/70 border border-white/5 px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-white/50">Total plătit</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold">
                                <AnimatedNumber value={totalPaid} />
                                <span className="text-sm font-normal text-white/50 ml-1">MDL</span>
                            </div>
                        </div>

                        <div className="rounded-xl bg-black-600/70 border border-white/5 px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-white/50">Dobândă totală</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold">
                                <AnimatedNumber value={totalInterest} />
                                <span className="text-sm font-normal text-white/50 ml-1">MDL</span>
                            </div>
                        </div>

                        <div className="rounded-xl bg-black-600/70 border border-white/5 px-4 py-4">
                            <div className="text-[11px] uppercase tracking-wider text-white/50">DAE</div>
                            <div className="mt-1 text-2xl md:text-3xl font-semibold">
                                {dae}
                                <span className="text-sm font-normal text-white/50 ml-1">%/an</span>
                            </div>
                            <div className="text-[11px] text-white/25 mt-0.5">Dobândă anuală efectivă</div>
                        </div>
                    </div>

                    {/* Balance chart */}
                    <div className="rounded-xl bg-black-600/70 border border-white/5 px-4 pt-4 pb-3">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-white/40">Sold rămas în timp</span>
                            <span className="text-xs text-white/40">{termen} luni</span>
                        </div>
                        <BalanceChart schedule={schedule} principal={suma} />
                        <div className="flex justify-between text-[10px] text-white/20 mt-1">
                            <span>Lună 1</span>
                            <span>Lună {Math.ceil(termen / 2)}</span>
                            <span>Lună {termen}</span>
                        </div>
                    </div>

                    {/* Amortization table */}
                    <div className="rounded-xl bg-black-600/70 border border-white/5 overflow-hidden">
                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                            <span className="text-sm font-medium">Grafic de rambursare</span>
                            <span className="text-xs text-white/40">{schedule.length} rate</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-white/35 border-b border-white/5">
                                        <th className="text-left px-4 py-2.5 font-normal">#</th>
                                        <th className="text-left px-4 py-2.5 font-normal">Data</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Plată</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Principal</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Dobândă</th>
                                        <th className="text-right px-4 py-2.5 font-normal">Sold</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {visibleRows.map((r) => (
                                        <tr
                                            key={r.month}
                                            className={r.principal === 0 ? "text-white/35" : "text-white/75 hover:bg-white/[0.02]"}
                                        >
                                            <td className="px-4 py-2.5">{r.month}</td>
                                            <td className="px-4 py-2.5">{r.date}</td>
                                            <td className="px-4 py-2.5 text-right font-semibold text-white tabular-nums">
                                                {Math.round(r.payment).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">
                                                {r.principal ? Math.round(r.principal).toLocaleString("ro-RO") : "-"}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-brand-500/70">
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
                                        <tr className="border-t border-white/10 text-white/50 font-medium">
                                            <td className="px-4 py-2.5" colSpan={2}>
                                                Total
                                            </td>
                                            <td className="px-4 py-2.5 text-right text-white tabular-nums">
                                                {Math.round(totalPaid).toLocaleString("ro-RO")}
                                            </td>
                                            <td className="px-4 py-2.5 text-right tabular-nums">{suma.toLocaleString("ro-RO")}</td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-brand-500/70">
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
                                className="w-full px-4 py-3 text-xs text-white/40 hover:text-white/70 border-t border-white/5 flex items-center justify-center gap-1.5 transition-colors"
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
                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-white">Vrei acest credit?</p>
                            <p className="text-xs text-white/50 mt-0.5">Completează cererea online în 5 minute.</p>
                        </div>
                        <Link
                            href="/cerere-de-credit-online"
                            className="inline-flex items-center gap-2 rounded-lg bg-green-500 text-white px-5 py-2.5 text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                            Aplică acum <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
