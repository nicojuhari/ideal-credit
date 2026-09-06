import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HairlineGrid } from "./HairlineGrid";

export type DataTileItem = { label: ReactNode; value: ReactNode; tone?: "brand" | "text" };

type Props = {
    items: DataTileItem[];
    /** sm: 14/16 padding, 12/18px (promise card) · md: 20 padding, 13/25px (calculator) */
    size?: "sm" | "md";
    className?: string;
};

/** Framed hairline grid of label + mono figure cells. */
export function DataTile({ items, size = "md", className }: Props) {
    return (
        <HairlineGrid columns={2} frame responsive={false} className={cn("overflow-hidden", className)}>
            {items.map((it, i) => (
                <div key={i} className={size === "md" ? "p-5" : "px-4 py-3.5"}>
                    <div className={cn("text-text-3", size === "md" ? "text-fine" : "text-eyebrow normal-case tracking-normal")}>{it.label}</div>
                    <div
                        className={cn(
                            "font-figure",
                            size === "md" ? "mt-2 text-figure" : "mt-1 text-figure-xs",
                            it.tone === "brand" ? "text-brand" : "text-text",
                        )}
                    >
                        {it.value}
                    </div>
                </div>
            ))}
        </HairlineGrid>
    );
}
