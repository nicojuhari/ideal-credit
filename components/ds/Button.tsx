import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "paper" | "paper-ink" | "outline" | "ink" | "band";
export type ButtonSize = "sm" | "md" | "calc" | "lg" | "xl";

/*
 * paper     — paper fill, ink label, hover → orange fill        (header, hero, calculator)
 * paper-ink — paper fill, hover → `hover` fill with paper label (product card action)
 * outline   — hairline-strong border, hover → orange border
 * ink       — `inset` fill, paper label, hover → `hover` fill
 * band      — paper fill on the orange CTA band, lifts 2px on hover
 *
 * Heights: sm 44 · md 50 · calc 54 · lg 56 · xl 58. Corners are square.
 * Always `gap: 0.32em`: flex strips whitespace between text nodes, so
 * "Solicită {sum} MDL" would otherwise render as "Solicită100.000MDL".
 */
const VARIANT: Record<ButtonVariant, string> = {
    paper: "bg-text text-bg font-semibold hover:bg-brand",
    "paper-ink": "bg-text text-bg hover:bg-hover hover:text-text",
    outline: "border border-line-strong text-text hover:border-brand",
    ink: "bg-inset text-text hover:bg-hover",
    band: "bg-text text-bg font-medium hover:-translate-y-0.5",
};

const SIZE: Record<ButtonSize, string> = {
    sm: "h-btn-sm px-[22px] text-small",
    md: "h-btn px-[26px] text-[16px]",
    calc: "h-btn-md px-[26px] text-[17px]",
    lg: "h-btn-lg px-[30px] text-[17px]",
    xl: "h-btn-xl px-8 text-[17px]",
};

type Common = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** stretch to the container width (calculator submit) */
    full?: boolean;
    className?: string;
    children: ReactNode;
};

type LinkProps = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;
type NativeProps = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkProps | NativeProps;

export function Button(props: ButtonProps) {
    const { variant = "paper", size = "md", full, className, children, ...rest } = props;
    const classes = cn(
        "inline-flex shrink-0 items-center justify-center gap-[0.32em] whitespace-nowrap select-none",
        "transition-[background-color,border-color,color,transform] duration-200 ease-out active:translate-y-px",
        VARIANT[variant],
        SIZE[size],
        full && "flex w-full",
        className,
    );

    if ("href" in props && typeof props.href === "string") {
        const { href, ...anchor } = rest as LinkProps;
        const external = /^(https?:|tel:|mailto:)/.test(href);
        if (external) {
            return (
                <a href={href} className={classes} {...anchor}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes} {...anchor}>
                {children}
            </Link>
        );
    }

    const native = rest as NativeProps;
    return (
        <button type="button" className={classes} {...native}>
            {children}
        </button>
    );
}
