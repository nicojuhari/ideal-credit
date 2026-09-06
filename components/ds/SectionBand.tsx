import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: ReactNode;
    /** bg (page) or section (raised band #1B1815) */
    tone?: "bg" | "section";
    /**
     * bottom  — 0 top, 112px bottom (default page section)
     * both    — 112px top and bottom (section bands, sections after a band)
     * follow  — 0 top, 96px bottom (follow-on section)
     * hero    — 92px top, 64px bottom
     * none    — no vertical rhythm
     * Values scale 112 → 72 → 56 with the viewport (see base.css).
     */
    spacing?: "bottom" | "both" | "follow" | "hero" | "none";
    /** render the shell as a grid (pass grid classes via shellClassName) */
    shellClassName?: string;
    className?: string;
    id?: string;
};

/** A full-width band with the 1240px shell inside. Compose pages from these. */
export function SectionBand({ children, tone = "bg", spacing = "bottom", shellClassName, className, id }: Props) {
    const rhythm = {
        bottom: "ds-section-b",
        both: "ds-section",
        follow: "ds-section-follow-b",
        hero: "ds-hero-t pb-16",
        none: "",
    }[spacing];
    return (
        <section id={id} className={cn(tone === "section" && "bg-section text-text", className)}>
            <div className={cn("ds-shell", rhythm, shellClassName)}>{children}</div>
        </section>
    );
}

type HeadingProps = {
    title: ReactNode;
    aside?: ReactNode;
    /** width cap for the h2 */
    titleClassName?: string;
    className?: string;
};

/** Section h2 with the optional right-aligned aside, bottoms aligned, wrapping. */
export function SectionHeading({ title, aside, titleClassName, className }: HeadingProps) {
    return (
        <div className={cn("flex flex-wrap items-end justify-between gap-x-12 gap-y-6", className)}>
            <h2 className={cn("text-h2 max-w-[560px] max-ds-sm:text-[34px]", titleClassName)}>{title}</h2>
            {aside && <div className="max-w-[340px] text-body text-text-3">{aside}</div>}
        </div>
    );
}
