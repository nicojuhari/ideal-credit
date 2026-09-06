import type { ReactNode } from "react";
import { HairlineGrid } from "./HairlineGrid";
import { cn } from "@/lib/utils";

export type StatItem = { value: ReactNode; label: ReactNode };

type Props = {
    items: StatItem[];
    cellTone?: "bg" | "section";
    /** xl: 44px mono (stats band) · md: 30px mono (service hero) */
    size?: "xl" | "md";
    /** false → no vertical rules and no bottom rule: a top hairline with plain columns (service hero) */
    divided?: boolean;
    className?: string;
};

/** Static mono figures in hairline cells. No count-up — numbers are text, never animation state. */
export function StatCells({ items, cellTone = "section", size = "xl", divided = true, className }: Props) {
    if (!divided) {
        return (
            <div className={cn("grid grid-cols-3 gap-6 border-t border-line pt-[30px] max-ds-sm:grid-cols-1 max-ds-sm:gap-5", className)}>
                {items.map((s, i) => (
                    <div key={i}>
                        <div className={cn("font-figure", size === "xl" ? "text-figure-xl" : "text-figure-md")}>{s.value}</div>
                        <div className={cn("text-text-3", size === "xl" ? "mt-2.5 text-small" : "mt-2 text-meta leading-[1.4]")}>{s.label}</div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <HairlineGrid columns={items.length === 3 ? 3 : 4} cellTone={cellTone} edges className={className}>
            {items.map((s, i) => (
                <div key={i} className={size === "xl" ? "px-6 py-10 max-ds-sm:px-0" : "py-7"}>
                    <div className={cn("font-figure", size === "xl" ? "text-figure-xl" : "text-figure-md")}>{s.value}</div>
                    <div className={cn("text-text-3", size === "xl" ? "mt-2.5 text-small" : "mt-2 text-meta leading-[1.4]")}>{s.label}</div>
                </div>
            ))}
        </HairlineGrid>
    );
}
