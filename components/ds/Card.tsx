import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: ReactNode;
    /** card 32 · product 36 · check 34 · guide 30 · panel 64 (testimonials) */
    padding?: "card" | "product" | "check" | "guide" | "panel";
    /** tint: border → rgba orange on hover · brand: border → solid orange · none */
    hover?: "tint" | "brand" | "none";
    /** bg (transparent on page) · surface (calculator panel) */
    tone?: "bg" | "surface";
    as?: ElementType;
    className?: string;
    id?: string;
};

/** Hairline-bordered box, square, shadowless. Flex column so a spacer can pin content to the bottom. */
export function Card({ children, padding = "card", hover = "tint", tone = "bg", as: Tag = "div", className, id }: Props) {
    const pad = {
        card: "p-card max-ds-sm:p-6",
        product: "p-card-product max-ds-sm:p-6",
        check: "p-card-check max-ds-sm:p-6",
        guide: "p-card-guide max-ds-sm:p-6",
        panel: "p-16 max-ds-md:p-10 max-ds-sm:p-6",
    }[padding];
    return (
        <Tag
            id={id}
            className={cn(
                "flex flex-col border border-line transition-[border-color] duration-[250ms] ease-out",
                tone === "surface" && "bg-surface",
                hover === "tint" && "hover:border-brand-border",
                hover === "brand" && "hover:border-brand",
                pad,
                className,
            )}
        >
            {children}
        </Tag>
    );
}
