import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
    href?: string;
    className?: string;
    children: React.ReactNode;
    size?: "default" | "nav";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

function renderAs(href: string | undefined, className: string, children: React.ReactNode, rest: Record<string, unknown>) {
    if (href) {
        const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
        return (
            <Link href={href} className={className} {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {})} {...rest}>
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

export function ButtonPrimary({ href, className, children, size = "default", ...rest }: BaseProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 rounded-dc-control bg-dc-accent font-bold text-[#0b0b0c] transition-[filter] hover:brightness-[1.08]",
        size === "nav" ? "px-[18px] py-[10px] text-sm" : "px-6 py-3.5 text-[15px]",
        className,
    );
    return renderAs(href, classes, children, rest as Record<string, unknown>);
}

export function ButtonSecondary({ href, className, children, size = "default", ...rest }: BaseProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2 rounded-dc-control border border-dc-line-strong font-semibold text-dc-text transition-colors hover:border-dc-line-hover",
        size === "nav" ? "px-[18px] py-[10px] text-sm" : "px-6 py-3.5 text-[15px]",
        className,
    );
    return renderAs(href, classes, children, rest as Record<string, unknown>);
}
