import Link from "next/link";
import { cn } from "@/lib/utils";

type ListRowProps = {
    href: string;
    title: string;
    description?: string;
    compact?: boolean;
    className?: string;
};

export default function ListRow({ href, title, description, compact, className }: ListRowProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-dc-line px-5 transition-colors hover:bg-dc-surface",
                compact ? "py-4" : "py-7",
                className,
            )}
        >
            <span className="min-w-0">
                <span className="block text-xl font-semibold tracking-[-.025em] text-dc-text">{title}</span>
                {description && <span className="mt-1.5 block text-[17px] leading-[1.6] text-dc-text-muted">{description}</span>}
            </span>
            <span className="text-dc-text-muted transition-colors group-hover:text-dc-text" aria-hidden>
                →
            </span>
        </Link>
    );
}
