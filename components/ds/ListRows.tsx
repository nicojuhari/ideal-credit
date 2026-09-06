import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EyebrowLabel } from "./EyebrowLabel";

export type ListRowItem = { title: ReactNode; description?: ReactNode; href?: string };

type Props = {
    /** mono eyebrow above the list, with a bottom hairline */
    heading?: ReactNode;
    headingTone?: "brand" | "muted";
    items: ListRowItem[];
    /**
     * product — 19px title (min-width 180) + 15px description, hover nudges 10px with a faint fill
     * plain   — single 17px line per row, no hover (conditions / documents)
     */
    variant?: "product" | "plain";
    className?: string;
};

/** Hairline-separated rows. Product rows are links; descriptions stack under titles on small screens. */
export function ListRows({ heading, headingTone = "brand", items, variant = "product", className }: Props) {
    return (
        <div className={className}>
            {heading && (
                <EyebrowLabel as="div" tone={headingTone} className={variant === "product" ? "border-b border-line pb-4" : "mb-[22px]"}>
                    {heading}
                </EyebrowLabel>
            )}
            <ul className={cn("m-0 list-none p-0", variant === "plain" && "border-t border-line")}>
                {items.map((it, i) => {
                    if (variant === "plain") {
                        return (
                            <li key={i} className="border-b border-line py-[19px] text-row">
                                {it.title}
                            </li>
                        );
                    }
                    const inner = (
                        <>
                            <span className="min-w-[180px] text-row-title">{it.title}</span>
                            {it.description && <span className="text-small leading-[1.5] text-text-3">{it.description}</span>}
                        </>
                    );
                    const rowClass =
                        "flex items-baseline gap-5 border-b border-line py-[22px] transition-[padding-left,background-color] duration-200 ease-out hover:bg-row-hover hover:pl-2.5 max-ds-sm:flex-col max-ds-sm:gap-1.5";
                    return (
                        <li key={i}>
                            {it.href ? (
                                <Link href={it.href} className={rowClass}>
                                    {inner}
                                </Link>
                            ) : (
                                <div className={rowClass}>{inner}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
