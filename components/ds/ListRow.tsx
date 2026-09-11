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
                "group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-dc-line",
                compact ? "py-[18px]" : "py-5",
                className,
            )}
        >
            <span className="min-w-0">
                <span className="block text-base font-semibold text-dc-text transition-colors group-hover:text-white">{title}</span>
                {description && <span className="mt-0.5 block text-sm text-dc-text-dim">{description}</span>}
            </span>
            <span className="text-dc-text-dim transition-colors group-hover:text-white" aria-hidden>
                →
            </span>
        </Link>
    );
}
