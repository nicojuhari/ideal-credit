"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { EyebrowLabel } from "./EyebrowLabel";

export type Verdict = { tone: "brand" | "brand-light" | "low"; title: string; text: string };

export const DEFAULT_CHECKS = [
    "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
    "Cel puțin 3 luni de activitate economică",
    "Rulaj vizibil în extrasele bancare",
    "Un fidejusor disponibil pentru primul credit",
];

export type VerdictCopy = { title: string; text: string };
export type VerdictSet = { qualify: VerdictCopy; probable: VerdictCopy; low: VerdictCopy };

/** Business defaults; personal pages pass their own `verdicts`. */
export const BUSINESS_VERDICTS: VerdictSet = {
    qualify: { title: "Dosarul tău se califică", text: "Trimite extrasele și primești oferta cu rata exactă în 1–2 zile lucrătoare." },
    probable: { title: "Probabil se poate", text: "Analizăm situația reală a afacerii, nu doar actele. Sună-ne și verificăm în câteva minute." },
    low: { title: "Hai să discutăm", text: "Chiar dacă nu bifezi condițiile standard, îți spunem direct ce alternative există." },
};

/** 4 ticked → orange "se califică" · 2–3 → brand-light "probabil" · 0–1 → muted dot "hai să discutăm" */
export function verdictFor(tickedCount: number, verdicts: VerdictSet = BUSINESS_VERDICTS): Verdict {
    if (tickedCount >= 4) return { tone: "brand", ...verdicts.qualify };
    if (tickedCount >= 2) return { tone: "brand-light", ...verdicts.probable };
    return { tone: "low", ...verdicts.low };
}

type Props = {
    eyebrow?: string;
    title?: string;
    items?: string[];
    defaultTicked?: boolean[];
    /** verdict copy per band — defaults to the business wording */
    verdicts?: VerdictSet;
    className?: string;
};

/**
 * Self-qualification card: real checkboxes with labels (22px square, orange
 * fill + ink ✓ when on), and a live verdict derived from the tick count.
 */
export function EligibilityChecklist({
    eyebrow = "Verifică în 10 secunde",
    title = "Este pentru afacerea mea?",
    items = DEFAULT_CHECKS,
    defaultTicked = [true, true, true, false],
    verdicts = BUSINESS_VERDICTS,
    className,
}: Props) {
    const [ticked, setTicked] = useState<boolean[]>(() => items.map((_, i) => defaultTicked[i] ?? false));
    const id = useId();
    const count = ticked.filter(Boolean).length;
    const verdict = verdictFor(count, verdicts);
    const dot = { brand: "bg-brand", "brand-light": "bg-brand-light", low: "bg-verdict-low" }[verdict.tone];

    return (
        <Card padding="check" hover="tint" className={className}>
            <EyebrowLabel>{eyebrow}</EyebrowLabel>
            <h2 className="mt-3.5 text-h3-check">{title}</h2>
            <div className="mt-[18px]" role="group" aria-labelledby={`${id}-title`}>
                <span id={`${id}-title`} className="sr-only">
                    {title}
                </span>
                {items.map((label, i) => {
                    const on = ticked[i];
                    const inputId = `${id}-${i}`;
                    return (
                        <label
                            key={i}
                            htmlFor={inputId}
                            className="flex min-h-hit cursor-pointer items-center gap-4 border-t border-line py-[15px]"
                        >
                            <input
                                id={inputId}
                                type="checkbox"
                                checked={on}
                                onChange={() => setTicked((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                                className="peer sr-only"
                            />
                            <span
                                aria-hidden
                                className={cn(
                                    "flex size-[22px] flex-none items-center justify-center border text-[13px] text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-brand",
                                    on ? "border-brand bg-brand" : "border-line-control bg-transparent",
                                )}
                            >
                                {on ? "✓" : ""}
                            </span>
                            <span className={cn("text-body leading-snug", on ? "text-text" : "text-text-3")}>{label}</span>
                        </label>
                    );
                })}
            </div>
            <div className="mt-6 flex items-start gap-3.5 border-t border-line pt-[22px]" aria-live="polite">
                <span aria-hidden className={cn("mt-[7px] size-2 flex-none", dot)} />
                <div>
                    <div className="text-[17px] font-medium leading-snug">{verdict.title}</div>
                    <div className="mt-[5px] max-w-[420px] text-small leading-[1.55] text-text-3">{verdict.text}</div>
                </div>
            </div>
        </Card>
    );
}
