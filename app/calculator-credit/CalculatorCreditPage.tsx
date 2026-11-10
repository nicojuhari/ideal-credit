"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "@/components/ds/Container";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";
import { cn, formatDateRo } from "@/lib/utils";
import { addMonths } from "ideal-credit";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";

const SUM_MIN = 10_000;
const SUM_MAX = 500_000;
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

    const getDate = (offset: number) => formatDateRo(addMonths(offset));

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
    const [type, setType] = useState<RepaymentType>(() => (searchParams.get("tip") === "anuitate" ? "anuitate" : "principal-egal"));
    const [grace, setGrace] = useState(() => clamp(param("gratie", 0), 0, 6));
    const [rate, setRate] = useState(() => clamp(param("rata", CALCULATOR_MONTHLY_RATE), 0.5, 15));
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
                <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[400px_1fr]">
                    {/* ── Inputs ── */}
                    <div className="flex min-w-0 flex-col gap-7 border border-dc-line bg-dc-surface p-6 sm:p-8 lg:sticky lg:top-28">
                        {/* Suma */}
                        <div>
                            <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                <label htmlFor="suma-range" className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                                    Suma creditului
                                </label>
                                <Figure size="md">{suma.toLocaleString("ro-RO")} MDL</Figure>
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
                                    {SUM_MIN.toLocaleString("ro-RO")}
                                </Figure>
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {SUM_MAX.toLocaleString("ro-RO")}
                                </Figure>
                            </div>
                        </div>

                        {/* Termen */}
                        <div>
                            <div className="mb-3.5 flex items-baseline justify-between gap-4">
                                <label htmlFor="termen-range" className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                                    Termen
                                </label>
                                <Figure size="md">{termen} luni</Figure>
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
                            <p className="mb-3.5 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">Cum plătești ratele</p>
                            <div className="grid grid-cols-2 gap-px bg-dc-line">
                                {(["principal-egal", "anuitate"] as const).map((t) => (
                                    <button
                                        type="button"
                                        key={t}
                                        aria-pressed={type === t}
                                        onClick={() => setType(t)}
                                        className={cn(
                                            "min-w-0 px-4 py-3 text-[15px] font-semibold transition-colors duration-[120ms]",
                                            type === t
                                                ? "bg-dc-accent text-dc-on-accent"
                                                : "bg-dc-surface text-dc-text-muted hover:text-dc-text",
                                        )}
                                    >
                                        {t === "anuitate" ? "Rate egale" : "Rate care scad"}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-3 text-xs leading-[1.7] text-dc-text-muted">
                                {isFixed
                                    ? "Plătești aceeași sumă în fiecare lună. Le facem la cerere, dacă așa îți e mai ușor să plătești."
                                    : "Așa calculăm creditele la Ideal Credit. Dobânda se calculează din suma rămasă, de aceea rata scade în fiecare lună."}
                            </p>
                        </div>

                        {/* Grace period + Rate */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="min-w-0">
                                <label htmlFor="gratie" className="mb-2.5 block text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                                    Perioadă de grație
                                </label>
                                <select id="gratie" value={grace} onChange={(e) => setGrace(Number(e.target.value))} className="w-full min-w-0">
                                    {[0, 1, 2, 3, 4, 5, 6].map((v) => (
                                        <option key={v} value={v} className="bg-dc-surface">
                                            {v === 0 ? "Fără" : `${v} ${v === 1 ? "lună" : "luni"}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="min-w-0">
                                <label htmlFor="rata" className="mb-2.5 block text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                                    Dobândă lunară
                                </label>
                                <div className="flex min-w-0 items-center gap-2.5">
                                    <input
                                        id="rata"
                                        type="number"
                                        className="input-calculator min-w-0 font-dc-mono"
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
                                În primele {grace} {grace === 1 ? "lună" : "luni"} plătești doar dobânda. Principalul se amortizează în cele{" "}
                                {termen - grace} luni rămase.
                            </Note>
                        )}
                    </div>

                    {/* ── Results ── */}
                    <div className="flex min-w-0 flex-col gap-6">
                        {/* 4 stat cells */}
                        <div className="grid grid-cols-2 gap-px border border-dc-line bg-dc-line">
                            <div className="min-w-0 bg-dc-bg p-5 sm:p-7">
                                <p className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                                    {isFixed ? "Rată lunară" : "Prima rată"}
                                </p>
                                <Figure size="xl" proof className="mt-2.5 block">
                                    <AnimatedNumber value={firstPayment} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">
                                    MDL{!isFixed && ` · ultima ${Math.round(lastPayment).toLocaleString("ro-RO")}`}
                                </p>
                            </div>
                            <div className="min-w-0 bg-dc-bg p-5 sm:p-7">
                                <p className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">Total plătit</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    <AnimatedNumber value={totalPaid} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">MDL</p>
                            </div>
                            <div className="min-w-0 bg-dc-bg p-5 sm:p-7">
                                <p className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">Dobândă totală</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    <AnimatedNumber value={totalInterest} />
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">MDL</p>
                            </div>
                            <div className="min-w-0 bg-dc-bg p-5 sm:p-7">
                                <p className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">DAE</p>
                                <Figure size="xl" className="mt-2.5 block">
                                    {dae.toLocaleString("ro-RO")}
                                </Figure>
                                <p className="mt-2 text-xs text-dc-text-muted">% ANUAL EFECTIV</p>
                            </div>
                        </div>

                        {/* Balance chart */}
                        <div className="border border-dc-line bg-dc-surface px-6 pb-5 pt-6">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">Sold rămas în timp</span>
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
                        <div className="min-w-0 overflow-hidden border border-dc-line bg-dc-surface">
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
                                                className={cn(
                                                    "font-dc-mono",
                                                    r.principal === 0 ? "text-dc-text-muted" : "text-dc-text-muted hover:bg-dc-surface",
                                                )}
                                            >
                                                <td className="px-6 py-3">{r.month}</td>
                                                <td className="px-6 py-3">{r.date}</td>
                                                <td className="px-6 py-3 text-right font-medium text-dc-text">
                                                    {Math.round(r.payment).toLocaleString("ro-RO")}
                                                </td>
                                                <td className="px-6 py-3 text-right">
                                                    {r.principal
                                                        ? Math.round(r.principal).toLocaleString("ro-RO")
                                                        : "-"}
                                                </td>
                                                <td className="px-6 py-3 text-right text-dc-accent">
                                                    {Math.round(r.interest).toLocaleString("ro-RO")}
                                                </td>
                                                <td className="px-6 py-3 text-right">
                                                    {Math.round(r.balance).toLocaleString("ro-RO")}
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
                                                    {Math.round(totalPaid).toLocaleString("ro-RO")}
                                                </td>
                                                <td className="px-6 py-3 text-right">{suma.toLocaleString("ro-RO")}</td>
                                                <td className="px-6 py-3 text-right text-dc-accent">
                                                    {Math.round(totalInterest).toLocaleString("ro-RO")}
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
                                    className="flex w-full items-center justify-center gap-1.5 border-t border-dc-line px-6 py-4 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted transition-colors duration-[120ms] hover:text-dc-text"
                                >
                                    {tableOpen ? "Restrânge graficul" : `Arată toate cele ${schedule.length} rate`}
                                </button>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col items-start justify-between gap-5 bg-dc-accent px-6 py-7 text-dc-on-accent sm:flex-row sm:items-center sm:px-8">
                            <div>
                                <p className="text-xl font-semibold tracking-[-.02em]">Ți se potrivește această rată?</p>
                                <p className="mt-1 text-[15px]">Completează cererea online. Te sunăm noi.</p>
                            </div>
                            <Link href="/cerere-de-credit-online" className="inline-flex items-center justify-center whitespace-nowrap bg-dc-bg px-[26px] py-4 text-[15px] font-semibold text-dc-text transition-colors hover:bg-[#1a1a1a]">
                                Solicită un credit
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
