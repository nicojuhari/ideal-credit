import Link from "next/link";
import { cn } from "@/lib/utils";

export type NumberedRowProps = {
    index: number;
    title: React.ReactNode;
    desc: React.ReactNode;
    href?: string;
    /** CSS grid-template-columns used from the `sm` breakpoint up. Mobile always stacks: number+title, then desc below. */
    gridCols?: string;
    className?: string;
    titleClassName?: string;
    descClassName?: string;
    /** Heading level for the title - match the page's outline. Defaults to h3. */
    titleAs?: "h2" | "h3";
};

export default function NumberedRow({
    index,
    title,
    desc,
    href,
    gridCols = "44px minmax(0,1fr) minmax(0,1.6fr)",
    className,
    titleClassName,
    descClassName,
    titleAs: TitleTag = "h3",
}: NumberedRowProps) {
    const content = (
        <>
            <div className="flex items-baseline gap-5 sm:contents">
                <span className="w-11 shrink-0 font-dc-mono text-xs text-dc-text-muted">{String(index + 1).padStart(2, "0")}</span>
                <TitleTag className={cn("text-xl tracking-[-.025em] text-dc-text", titleClassName)}>{title}</TitleTag>
            </div>
            <p className={cn("pl-16 text-[17px] leading-[1.6] text-dc-text-muted sm:pl-0", descClassName)}>{desc}</p>
        </>
    );

    const rowClass = cn(
        "flex flex-col gap-2 p-8 sm:grid sm:items-baseline sm:gap-7 sm:[grid-template-columns:var(--row-cols)]",
        className,
    );
    const style = { "--row-cols": gridCols } as React.CSSProperties;

    if (href) {
        return (
            <Link href={href} className={cn(rowClass, "transition-colors hover:bg-dc-surface")} style={style}>
                {content}
            </Link>
        );
    }
    return (
        <div className={rowClass} style={style}>
            {content}
        </div>
    );
}
