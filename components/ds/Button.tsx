import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
    href?: string;
    className?: string;
    children: React.ReactNode;
    size?: "default" | "nav" | "inline";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type LinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

function renderAs(href: string | undefined, className: string, children: React.ReactNode, rest: Record<string, unknown>) {
    if (href) {
        const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
        return (
            <Link
                href={href}
                className={className}
                {...(external
                    ? {
                          target: href.startsWith("http") ? "_blank" : undefined,
                          rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                {...rest}
            >
                {children}
            </Link>
        );
    }
    return (
        <button type="button" className={className} {...rest}>
            {children}
        </button>
    );
}

const primarySizes = {
    default: "px-[26px] py-4",
    nav: "px-[18px] py-[11px]",
    inline: "px-[22px] py-3.5",
} as const;

export function ButtonPrimary({ href, className, children, size = "default", ...rest }: BaseProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 bg-dc-accent text-[15px] font-semibold text-dc-on-accent transition-[filter] hover:brightness-[1.08]",
        primarySizes[size],
        className,
    );
    return renderAs(href, classes, children, rest as Record<string, unknown>);
}

export function ButtonSecondary({ href, className, children, ...rest }: BaseProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 border border-dc-line px-[26px] py-4 text-[15px] font-semibold text-dc-text transition-colors hover:border-dc-line-hover",
        className,
    );
    return renderAs(href, classes, children, rest as Record<string, unknown>);
}

export function ButtonText({ href, className, children }: LinkProps) {
    return (
        <Link href={href} className={cn("text-[15px] uppercase tracking-[.04em] text-dc-accent underline underline-offset-4", className)}>
            {children}
        </Link>
    );
}

export function LinkQuiet({ href, className, children }: LinkProps) {
    return (
        <Link
            href={href}
            className={cn("text-[15px] text-dc-text underline underline-offset-4 transition-colors hover:text-white", className)}
        >
            {children}
        </Link>
    );
}
