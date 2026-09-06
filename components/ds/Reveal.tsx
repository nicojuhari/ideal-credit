"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
    /** element to render — defaults to div */
    as?: ElementType;
    className?: string;
    id?: string;
    children: ReactNode;
};

/**
 * One-shot scroll fade-up (opacity 0→1, translateY 14px→0, 600ms, never repeats).
 *
 * Fail-safe by construction — see design-system/base.css:
 * - the hidden state only exists under `@media (scripting: enabled)`, so no-JS
 *   renders everything;
 * - anything already in view is revealed on mount, before any observer fires;
 * - IntersectionObserver with threshold 0 and NO negative rootMargin;
 * - a rect sweep also runs on `window` scroll/resize and on every scrolling ancestor;
 * - an unconditional ~900ms timeout reveals the block regardless;
 * - a CSS animation fallback unhides at 1.2s even if hydration never runs;
 * - `prefers-reduced-motion: reduce` disables transform and transition entirely.
 *
 * Never derive *content* from this state — it only toggles a data attribute.
 */
export function Reveal({ as = "div", className, id, children }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);
    const [state, setState] = useState<"pending" | "in">("pending");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let done = false;
        const listeners: Array<() => void> = [];
        const cleanup = () => listeners.splice(0).forEach((off) => off());
        const show = () => {
            if (done) return;
            done = true;
            setState("in");
            cleanup();
        };

        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
            show();
            return cleanup;
        }

        const sweep = () => {
            const r = el.getBoundingClientRect();
            const h = window.innerHeight || 800;
            if (r.top < h * 0.95 && r.bottom > -40) show();
        };

        sweep();
        if (done) return cleanup;

        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => entries.forEach((e) => e.isIntersecting && show()),
                { threshold: 0 },
            );
            io.observe(el);
            listeners.push(() => io.disconnect());
        }

        const opts: AddEventListenerOptions = { passive: true };
        window.addEventListener("scroll", sweep, opts);
        window.addEventListener("resize", sweep, opts);
        listeners.push(() => window.removeEventListener("scroll", sweep));
        listeners.push(() => window.removeEventListener("resize", sweep));

        let node = el.parentElement;
        while (node) {
            const ov = getComputedStyle(node).overflowY;
            if (ov === "auto" || ov === "scroll") {
                const scroller = node;
                scroller.addEventListener("scroll", sweep, opts);
                listeners.push(() => scroller.removeEventListener("scroll", sweep));
            }
            node = node.parentElement;
        }

        const t = window.setTimeout(show, 900);
        listeners.push(() => window.clearTimeout(t));

        return cleanup;
    }, []);

    const Tag = as;
    return (
        <Tag ref={ref} id={id} className={className} data-reveal={state}>
            {children}
        </Tag>
    );
}
