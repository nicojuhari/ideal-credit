import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: ReactNode;
    /** 2 · 3 · 4 equal minmax(0,1fr) tracks, or a custom track list (must use minmax(0, …)) */
    columns?: 2 | 3 | 4 | string;
    /** fill of every cell — the 1px gap between cells IS the rule */
    cellTone?: "bg" | "section" | "surface";
    /** outer 1px border on all sides */
    frame?: boolean;
    /** hairline only above and below (stats band, how-it-works) */
    edges?: boolean;
    /** collapse to fewer columns on small screens (4→2→1, 3→1) */
    responsive?: boolean;
    className?: string;
};

/**
 * `display:grid; gap:1px; background:<hairline>` with filled cells.
 * Reuse this instead of per-cell borders — it keeps rules to exactly 1px
 * and both hairline tones consistent.
 */
export function HairlineGrid({ children, columns = 2, cellTone = "bg", frame, edges, responsive = true, className }: Props) {
    const cols =
        typeof columns === "string"
            ? undefined
            : columns === 4
              ? responsive
                  ? "grid-cols-1 ds-sm:grid-cols-2 ds-md:grid-cols-4"
                  : "grid-cols-4"
              : columns === 3
                ? responsive
                    ? "grid-cols-1 ds-sm:grid-cols-3"
                    : "grid-cols-3"
                : "grid-cols-2";
    const fill = { bg: "*:bg-bg", section: "*:bg-section", surface: "*:bg-surface" }[cellTone];
    return (
        <div
            className={cn("grid gap-px bg-line", cols, fill, frame && "border border-line", edges && "border-y border-line", className)}
            style={typeof columns === "string" ? { gridTemplateColumns: columns } : undefined}
        >
            {children}
        </div>
    );
}
