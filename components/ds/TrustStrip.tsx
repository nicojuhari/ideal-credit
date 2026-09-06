import type { ReactNode } from "react";

/** One row between two hairlines, mono uppercase 12.5px, wrapping. */
export function TrustStrip({ items }: { items: ReactNode[] }) {
    return (
        <ul className="m-0 flex list-none flex-wrap items-center justify-between gap-x-6 gap-y-3 border-y border-line p-0 py-[22px] font-figure text-strip uppercase text-text-3">
            {items.map((it, i) => (
                <li key={i}>{it}</li>
            ))}
        </ul>
    );
}
