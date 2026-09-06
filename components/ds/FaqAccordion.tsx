"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: ReactNode };

type Props = {
    items: FaqItem[];
    /** index open on load; -1 = all closed */
    defaultOpen?: number;
    className?: string;
};

/**
 * Single-open disclosure list. Each question is a real <button aria-expanded>
 * controlling a region; the mono glyph flips + → − and turns orange when open.
 * Clicking the open row closes it. Rows nudge 8px on hover.
 */
export function FaqAccordion({ items, defaultOpen = 0, className }: Props) {
    const [open, setOpen] = useState<number>(defaultOpen);
    const base = useId();

    return (
        <div className={cn("border-t border-line", className)}>
            {items.map((item, i) => {
                const isOpen = open === i;
                const panelId = `${base}-panel-${i}`;
                const buttonId = `${base}-button-${i}`;
                return (
                    <div key={i} className="border-b border-line transition-[padding-left] duration-200 ease-out hover:pl-2">
                        <h3 className="m-0 text-row-title">
                            <button
                                type="button"
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpen(isOpen ? -1 : i)}
                                className="flex w-full items-baseline justify-between gap-6 py-[26px] text-left"
                            >
                                <span className="text-row-title">{item.question}</span>
                                <span aria-hidden className={cn("font-figure text-[19px]", isOpen ? "text-brand" : "text-text-3")}>
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>
                        </h3>
                        <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-[26px]">
                            <p className="-mt-3 max-w-[620px] text-body leading-[1.65] text-text-2">{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
