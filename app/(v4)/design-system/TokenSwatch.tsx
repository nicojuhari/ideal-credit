"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders a colour token and reports its *computed* value, so the reference
 * page never hardcodes a colour and always shows what tokens.css really says.
 */
export function TokenSwatch({ name, className }: { name: string; className: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (!ref.current) return;
        const rgb = getComputedStyle(ref.current).backgroundColor;
        const m = rgb.match(/\d+(\.\d+)?/g);
        if (!m) return setValue(rgb);
        const [r, g, b, a] = m.map(Number);
        const hex = [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("").toUpperCase();
        setValue(a !== undefined && a < 1 ? `${rgb}` : `#${hex}`);
    }, []);

    return (
        <div className="p-4">
            <div ref={ref} className={`h-14 border border-line ${className}`} />
            <div className="mt-3 font-figure text-fine">{name}</div>
            <div className="font-figure text-fine text-text-3">{value || "…"}</div>
        </div>
    );
}
