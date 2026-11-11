"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "@/components/ds/Container";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";
import { ButtonSecondary } from "@/components/ds/Button";
import { cn } from "@/lib/utils";
import { buildSchedule, maxPayment, type RepaymentType } from "@/lib/credit-schedule";
import {
    HIGH_INCOME,
    HOME_LTV,
    PERSON_MAX,
    PERSON_MIN,
    TERM_MIN,
    UNCONFIRMED_MAX,
    personalCapacity,
    personalMaxTerm,
    requiredIncome,
} from "@/lib/credit-capacity";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";
import PrintSheet from "./PrintSheet";

const lei = (v: number) => Math.round(v).toLocaleString("ro-RO");
const pct = (v: number) => v.toLocaleString("ro-RO", { maximumFractionDigits: 1 });
const labelClass = "text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";
const PREVIEW_ROWS = 6;
// Above 10% a month even 12 months break the rule "total interest ≤ amount" for persons.
const RATE_MIN = 1;
const RATE_MAX = 10;

function AnimatedNumber({ value }: { value: number }) {
    const mv = useMotionValue(value);
    const display = useTransform(mv, (v) => Math.round(v).toLocaleString("ro-RO"));

    useEffect(() => {
        const c = animate(mv, value, { duration: 0.4, ease: "easeOut" });
        return c.stop;
    }, [value, mv]);

    return <motion.span>{display}</motion.span>;
}

// Form vocabulary, so each kind of element reads as what it is:
// a white question (label), a dark framed well (type here), a framed switch (pick one), small grey text (just information).
const fieldLabel = "block text-[15px] font-medium leading-snug text-dc-text";
const hint = "mt-2.5 text-[13px] leading-[1.55] text-dc-text-muted";
const well =
    "mt-3 flex min-w-0 items-center border border-dc-line-hover bg-dc-bg transition-colors duration-[120ms] hover:border-[#4a4a4a] focus-within:!border-dc-accent";
const wellInput =
    "min-w-0 flex-1 !border-0 !bg-transparent !px-4 !py-3.5 font-dc-mono !text-lg placeholder:text-[#555] focus-visible:!outline-none";
const unit = "shrink-0 select-none pr-4 text-[15px] text-dc-text-muted";

// Orange fill up to the thumb, so a slider shows how far along it is.
const fill = (v: number, min: number, max: number) => {
    const p = max > min ? ((v - min) / (max - min)) * 100 : 100;
    return { background: `linear-gradient(to right, var(--color-dc-accent) ${p}%, rgba(255,255,255,.18) ${p}%)` };
};

function LeiInput({ id, label, value, onChange, note }: { id: string; label: string; value: number; onChange: (v: number) => void; note?: string }) {
    return (
        <div className="min-w-0">
            <label htmlFor={id} className={fieldLabel}>
                {label}
            </label>
            <div className={well}>
                <input
                    id={id}
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    className={wellInput}
                    value={value ? lei(value) : ""}
                    placeholder="0"
                    onChange={(e) => onChange(Number(e.target.value.replace(/\D/g, "")) || 0)}
                />
                <span className={unit}>lei</span>
            </div>
            {note && <p className={hint}>{note}</p>}
        </div>
    );
}

function Toggle<T extends string | boolean>({ label, value, options, onChange }: { label: string; value: T; options: { label: string; v: T }[]; onChange: (v: T) => void }) {
    return (
        <div role="group" aria-label={label}>
            <p className={fieldLabel}>{label}</p>
            <div className="mt-3 grid grid-cols-2 gap-1 border border-dc-line-hover bg-dc-bg p-1">
                {options.map((o) => (
                    <button
                        type="button"
                        key={o.label}
                        aria-pressed={value === o.v}
                        onClick={() => onChange(o.v)}
                        className={cn(
                            "min-w-0 px-3 py-2.5 text-[15px] font-semibold transition-colors duration-[120ms]",
                            value === o.v ? "bg-dc-accent text-dc-on-accent" : "text-dc-text hover:bg-dc-surface",
                        )}
                    >
                        {o.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

function Stat({ label, value, sub, tone }: { label: string; value: React.ReactNode; sub: React.ReactNode; tone?: "proof" | "accent" }) {
    return (
        <div className="min-w-0 bg-dc-bg p-5 sm:p-7">
            <p className={labelClass}>{label}</p>
            <Figure size="xl" className={cn("mt-2.5 block", tone === "proof" && "text-dc-proof", tone === "accent" && "text-dc-accent")}>
                {value}
            </Figure>
            <p className="mt-2 text-xs uppercase text-dc-text-muted">{sub}</p>
        </div>
    );
}

export default function CalculatorCreditPage() {
    const searchParams = useSearchParams();

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const param = (key: string, fallback: number) => {
        const v = Number(searchParams.get(key));
        return isNaN(v) || v === 0 ? fallback : v;
    };

    const [income, setIncome] = useState(12_000);
    const [debts, setDebts] = useState(0);
    const [home, setHome] = useState(false);
    const [homeValue, setHomeValue] = useState(0);
    // null = the amount follows the income (the maximum). A number = the client picked the amount, so we show the income it needs.
    const [picked, setPicked] = useState<number | null>(() =>
        searchParams.get("suma") ? clamp(Math.round(param("suma", PERSON_MIN) / 500) * 500, PERSON_MIN, PERSON_MAX) : null,
    );
    const [termPicked, setTermen] = useState(() => clamp(param("termen", 24), TERM_MIN, 60));
    const [type, setType] = useState<RepaymentType>(() => (searchParams.get("tip") === "anuitate" ? "anuitate" : "principal-egal"));
    const [rateText, setRateText] = useState(() => String(clamp(param("rata", CALCULATOR_MONTHLY_RATE), RATE_MIN, RATE_MAX)));
    const [tableOpen, setTableOpen] = useState(false);

    const rateParsed = parseFloat(rateText.replace(",", "."));
    const rate = isNaN(rateParsed) ? CALCULATOR_MONTHLY_RATE : clamp(rateParsed, RATE_MIN, RATE_MAX);

    // Persons: total interest may not exceed the amount, so the longest term depends on the rate and the repayment type.
    const maxTerm = useMemo(() => personalMaxTerm(type, rate), [type, rate]);
    const termen = Math.min(termPicked, maxTerm);

    const cap = useMemo(
        () =>
            personalCapacity({
                confirmed: income > 0,
                salary: income,
                salaryVaries: false,
                other: 0,
                otherType: "independent",
                debts,
                term: termen,
                type,
                homeValue: home ? homeValue : null,
                rate,
            }),
        [income, debts, termen, type, home, homeValue, rate],
    );
    const suma = picked ?? clamp(cap.amount, PERSON_MIN, PERSON_MAX);

    // Sync state to URL without navigation; the amount only once the client picked it.
    useEffect(() => {
        const p = new URLSearchParams({ ...(picked !== null && { suma: String(picked) }), termen: String(termen), tip: type, rata: String(rate) });
        window.history.replaceState(null, "", `?${p}`);
    }, [picked, termen, type, rate]);

    const schedule = useMemo(() => buildSchedule(suma, termen, rate, type, 0), [suma, termen, rate, type]);

    const totalPaid = useMemo(() => +schedule.reduce((s, r) => s + r.payment, 0).toFixed(2), [schedule]);
    const totalInterest = useMemo(() => +schedule.reduce((s, r) => s + r.interest, 0).toFixed(2), [schedule]);
    const dae = +((Math.pow(1 + rate / 100, 12) - 1) * 100).toFixed(1);

    const firstPayment = schedule[0]?.payment ?? 0;
    const lastPayment = schedule[schedule.length - 1]?.payment ?? 0;
    const topPayment = maxPayment(schedule);
    const isFixed = type === "anuitate";

    const fits = suma <= cap.amount;
    const rsdv = income > 0 ? ((debts + topPayment) / income) * 100 : null;
    const left = income - debts - topPayment;
    const needed = Math.ceil(requiredIncome(debts, topPayment) / 100) * 100;
    const homeLimit = home ? Math.floor((homeValue * HOME_LTV) / 500) * 500 : Infinity;
    const incomeShort = income > 0 ? needed > income : debts + topPayment > UNCONFIRMED_MAX;

    // One verdict, used on screen and in the printed sheet.
    const verdict: string[] = [];
    if (fits) {
        verdict.push(
            picked === null
                ? cap.binding === "imobil"
                    ? `Atât poți lua pentru casă: ${HOME_LTV * 100}% din valoarea ei.`
                    : cap.binding === "plafon"
                      ? `Atât poți lua: ${lei(PERSON_MAX)} lei este suma maximă pentru persoane fizice.`
                      : "Atât poți lua cu venitul tău."
                : `Suma de ${lei(suma)} lei se încadrează.`,
        );
        if (rsdv !== null) verdict.push(`Toate ratele tale vor lua ${pct(rsdv)}% din venit. Limita este ${cap.limitPct}%.`);
    } else {
        if (suma > homeLimit)
            verdict.push(
                homeValue > 0
                    ? `Pentru casă, creditul poate fi de cel mult ${HOME_LTV * 100}% din valoarea ei. Asta înseamnă ${lei(homeLimit)} lei.`
                    : "Scrie valoarea casei sau a apartamentului.",
            );
        if (incomeShort)
            verdict.push(
                income > 0
                    ? `Pentru ${lei(suma)} lei ai nevoie de încă ${lei(Math.max(100, needed - income))} lei venit confirmat pe lună. În total, ${lei(needed)} lei.`
                    : `Fără venit confirmat, toate ratele tale pot fi de cel mult ${lei(UNCONFIRMED_MAX)} lei pe lună. Pentru ${lei(suma)} lei ai nevoie de un venit confirmat de cel puțin ${lei(needed)} lei pe lună.`,
            );
    }

    const visibleRows = tableOpen ? schedule : schedule.slice(0, PREVIEW_ROWS);

    const keyFigures: [string, string][] = [
        ["Suma creditului", `${lei(suma)} lei`],
        [isFixed ? "Rata lunară" : "Prima rată", `${lei(firstPayment)} lei`],
        ["Total de plătit", `${lei(totalPaid)} lei`],
    ];
    const inputsList: [string, string][] = [
        ["Venit net confirmat, pe lună", income > 0 ? `${lei(income)} lei` : "fără acte"],
        ["Rate la alte credite, pe lună", `${lei(debts)} lei`],
        ["Pentru ce", home ? "Casă, cu ipotecă" : "Nevoi personale"],
        ...(home ? [["Valoarea casei", `${lei(homeValue)} lei`] as [string, string]] : []),
        ["Termen", `${termen} luni`],
        ["Ratele", isFixed ? "Rate egale" : "Rate care scad"],
        ["Dobânda pe lună", `${pct(rate)}%`],
    ];
    const resultsList: [string, string][] = [
        ["Ratele din venit (RSDV)", rsdv === null ? "venit fără acte" : `${pct(rsdv)}%, maxim ${cap.limitPct}%`],
        ["Îți rămân pe lună", income > 0 ? `${lei(Math.max(0, left))} lei` : "-"],
        ...(isFixed ? [] : [["Ultima rată", `${lei(lastPayment)} lei`] as [string, string]]),
        ["Dobândă totală", `${lei(totalInterest)} lei`],
        ["DAE", `${pct(dae)}%`],
    ];

    return (
        <div className="pb-24 print:pb-0">
            <Container className="print:hidden">
                <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[400px_1fr]">
                    {/* ── Inputs ── */}
                    <div className="flex min-w-0 flex-col divide-y divide-dc-line border border-dc-line bg-dc-surface px-6 sm:px-8 [&>*]:py-7">
                        <LeiInput
                            id="venit"
                            label="Venitul tău net, pe lună"
                            value={income}
                            onChange={setIncome}
                            note="Tot venitul pe care îl confirmi cu acte: salariu, pensie, activitate independentă, chirie."
                        />
                        <LeiInput
                            id="datorii"
                            label="Rate la alte credite, pe lună"
                            value={debts}
                            onChange={setDebts}
                            note="Toate creditele tale, și cele unde ești codebitor. Scrie 0 dacă nu ai."
                        />

                        <div>
                            <Toggle
                                label="Pentru ce iei creditul"
                                value={home}
                                onChange={setHome}
                                options={[
                                    { label: "Nevoi personale", v: false },
                                    { label: "Casă, cu ipotecă", v: true },
                                ]}
                            />
                            {home && (
                                <div className="mt-6">
                                    <LeiInput
                                        id="valoare-casa"
                                        label="Valoarea casei sau a apartamentului"
                                        value={homeValue}
                                        onChange={setHomeValue}
                                        note={`Creditul poate fi de cel mult ${HOME_LTV * 100}% din valoarea lor.`}
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-baseline justify-between gap-4">
                                <label htmlFor="termen-range" className={fieldLabel}>
                                    Termen
                                </label>
                                <Figure size="md" className="text-dc-accent">
                                    {termen} luni
                                </Figure>
                            </div>
                            <input
                                id="termen-range"
                                type="range"
                                className="dc-slider dc-slider--lg mt-5"
                                style={fill(termen, TERM_MIN, maxTerm)}
                                min={TERM_MIN}
                                max={maxTerm}
                                step={1}
                                value={termen}
                                onChange={(e) => setTermen(Number(e.target.value))}
                            />
                            <div className="mt-2.5 flex justify-between font-dc-mono text-xs text-dc-text-muted">
                                <span>{TERM_MIN}</span>
                                <span>{maxTerm}</span>
                            </div>
                            <p className={hint}>Dobânda totală nu poate depăși suma creditului. De aceea termenul este de cel mult {maxTerm} luni.</p>
                        </div>

                        <div>
                            <Toggle
                                label="Cum plătești ratele"
                                value={type}
                                onChange={setType}
                                options={[
                                    { label: "Rate care scad", v: "principal-egal" },
                                    { label: "Rate egale", v: "anuitate" },
                                ]}
                            />
                            <p className={hint}>
                                {isFixed
                                    ? "Plătești aceeași sumă în fiecare lună. Le facem la cerere, dacă așa îți e mai ușor să plătești."
                                    : "Așa calculăm creditele la Ideal Credit. Dobânda se calculează din suma rămasă, de aceea rata scade în fiecare lună."}
                            </p>
                        </div>

                        <div className="min-w-0">
                            <label htmlFor="rata" className={fieldLabel}>
                                Dobânda pe lună
                            </label>
                            <div className={cn(well, "max-w-[160px]")}>
                                <input
                                    id="rata"
                                    type="text"
                                    inputMode="decimal"
                                    autoComplete="off"
                                    className={wellInput}
                                    value={rateText}
                                    onChange={(e) => setRateText(e.target.value)}
                                    onBlur={() => setRateText(String(rate))}
                                />
                                <span className={unit}>%</span>
                            </div>
                            <p className={hint}>
                                De la {RATE_MIN}% la {RATE_MAX}% pe lună. Calculul pornește de la {CALCULATOR_MONTHLY_RATE}%.
                            </p>
                        </div>
                    </div>

                    {/* ── Results ── */}
                    <div className="flex min-w-0 flex-col gap-6">
                        {/* Amount: follows the income until the client moves it, then shows what it needs */}
                        <div className="border border-dc-line bg-dc-bg p-6 sm:p-8">
                            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
                                <div className="min-w-0">
                                    <label htmlFor="suma-range" className={labelClass}>
                                        {picked === null && fits ? "Poți lua până la" : "Suma creditului"}
                                    </label>
                                    <Figure size="xl" proof={fits} className="mt-2.5 block">
                                        <AnimatedNumber value={suma} /> lei
                                    </Figure>
                                </div>
                                {picked !== null && cap.amount >= PERSON_MIN && cap.amount !== suma && (
                                    <ButtonSecondary size="inline" onClick={() => setPicked(null)}>
                                        Arată suma maximă: {lei(cap.amount)} lei
                                    </ButtonSecondary>
                                )}
                            </div>
                            <input
                                id="suma-range"
                                type="range"
                                className="dc-slider dc-slider--lg mt-6"
                                style={fill(suma, PERSON_MIN, PERSON_MAX)}
                                min={PERSON_MIN}
                                max={PERSON_MAX}
                                step={500}
                                value={suma}
                                onChange={(e) => setPicked(Number(e.target.value))}
                            />
                            <div className="mt-2.5 flex justify-between">
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {lei(PERSON_MIN)} lei
                                </Figure>
                                <Figure size="ordinal" className="text-dc-text-muted">
                                    {lei(PERSON_MAX)} lei
                                </Figure>
                            </div>
                            <div className="mt-5 max-w-[60ch] space-y-1 text-[15px] leading-[1.6] text-dc-text" aria-live="polite">
                                {verdict.map((v) => (
                                    <p key={v}>{v}</p>
                                ))}
                            </div>
                            {cap.limitPct === 55 && <Note className="mt-2">Venitul tău trece de {lei(HIGH_INCOME)} lei pe lună. De aceea limita este 55%, nu 40%.</Note>}
                        </div>

                        {/* Payment + RSDV first, then the totals */}
                        <div className="grid grid-cols-2 gap-px border border-dc-line bg-dc-line sm:grid-cols-3">
                            <Stat label={isFixed ? "Rată lunară" : "Prima rată"} value={<AnimatedNumber value={firstPayment} />} sub={`MDL${isFixed ? "" : ` · ultima ${lei(lastPayment)}`}`} />
                            <Stat
                                label="Ratele din venit"
                                value={rsdv === null ? "-" : `${pct(rsdv)}%`}
                                sub={rsdv === null ? `venit fără acte · max ${lei(UNCONFIRMED_MAX)} lei` : `RSDV · maxim ${cap.limitPct}%`}
                                tone={rsdv === null ? undefined : rsdv <= cap.limitPct! ? "proof" : "accent"}
                            />
                            <Stat label="Îți rămân pe lună" value={income > 0 ? <AnimatedNumber value={Math.max(0, left)} /> : "-"} sub="MDL, după toate ratele" />
                            <Stat label="Total plătit" value={<AnimatedNumber value={totalPaid} />} sub="MDL" />
                            <Stat label="Dobândă totală" value={<AnimatedNumber value={totalInterest} />} sub="MDL" />
                            <Stat label="DAE" value={pct(dae)} sub="% anual efectiv" />
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
                                            <tr key={r.month} className="font-dc-mono text-dc-text-muted">
                                                <td className="px-6 py-3">{r.month}</td>
                                                <td className="px-6 py-3">{r.date}</td>
                                                <td className="px-6 py-3 text-right font-medium text-dc-text">{lei(r.payment)}</td>
                                                <td className="px-6 py-3 text-right">{lei(r.principal)}</td>
                                                <td className="px-6 py-3 text-right text-dc-accent">{lei(r.interest)}</td>
                                                <td className="px-6 py-3 text-right">{lei(r.balance)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {tableOpen && (
                                        <tfoot>
                                            <tr className="border-t border-dc-line font-dc-mono font-medium text-dc-text-muted">
                                                <td className="px-6 py-3" colSpan={2}>
                                                    Total
                                                </td>
                                                <td className="px-6 py-3 text-right text-dc-text">{lei(totalPaid)}</td>
                                                <td className="px-6 py-3 text-right">{lei(suma)}</td>
                                                <td className="px-6 py-3 text-right text-dc-accent">{lei(totalInterest)}</td>
                                                <td className="px-6 py-3 text-right">0</td>
                                            </tr>
                                        </tfoot>
                                    )}
                                </table>
                            </div>
                            {schedule.length > PREVIEW_ROWS && (
                                <button
                                    type="button"
                                    aria-expanded={tableOpen}
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
                            <Link
                                href="/cerere-de-credit-online"
                                className="inline-flex items-center justify-center whitespace-nowrap bg-dc-bg px-[26px] py-4 text-[15px] font-semibold text-dc-text transition-colors hover:bg-[#1a1a1a]"
                            >
                                Solicită un credit
                            </Link>
                        </div>

                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <Note className="max-w-[56ch]">
                                Este o estimare după regulile Băncii Naționale. Suma exactă o stabilim după ce vedem actele și istoria ta de credit.
                            </Note>
                            <ButtonSecondary size="inline" className="shrink-0" onClick={() => window.print()}>
                                Salvează PDF sau printează
                            </ButtonSecondary>
                        </div>
                    </div>
                </div>
            </Container>

            <PrintSheet
                key3={keyFigures}
                inputs={inputsList}
                results={resultsList}
                verdict={verdict}
                fits={fits}
                schedule={schedule}
                suma={suma}
                totalPaid={totalPaid}
                totalInterest={totalInterest}
            />
        </div>
    );
}
