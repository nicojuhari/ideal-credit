import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: ReactNode;
    /** text: plain mono label · chip: 34px bordered pill with a 6px orange square */
    variant?: "text" | "chip";
    /** muted (text-3) · brand (orange) · paper (text) */
    tone?: "muted" | "brand" | "paper";
    /** 0.08em for chips/footer headings, 0.1em for section eyebrows */
    tracking?: "tight" | "wide";
    as?: ElementType;
    className?: string;
};

/** Mono, uppercase, 12px. All eyebrows, breadcrumbs and column headings use this. */
export function EyebrowLabel({ children, variant = "text", tone = "muted", tracking = "wide", as: Tag = "span", className }: Props) {
    const toneClass = tone === "brand" ? "text-brand" : tone === "paper" ? "text-text" : "text-text-3";
    if (variant === "chip") {
        return (
            <Tag
                className={cn(
                    "inline-flex h-[34px] items-center gap-3 border border-line-chip px-4 font-figure text-eyebrow uppercase whitespace-nowrap",
                    "tracking-[0.08em]",
                    toneClass,
                    className,
                )}
            >
                <span aria-hidden className="size-1.5 shrink-0 bg-brand" />
                {children}
            </Tag>
        );
    }
    return (
        <Tag
            className={cn(
                "block font-figure text-eyebrow uppercase",
                tracking === "wide" ? "tracking-[0.1em]" : "tracking-[0.08em]",
                toneClass,
                className,
            )}
        >
            {children}
        </Tag>
    );
}
