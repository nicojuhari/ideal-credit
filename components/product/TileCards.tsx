import Link from "next/link";
import { cn } from "@/lib/utils";

export interface TileItem {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    href?: string | null;
}

export default function TileCards({ items }: { items: TileItem[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map(({ icon: Icon, label, href }) => {
                const classes = cn(
                    "flex flex-col items-center gap-3 rounded-dc-card border border-dc-line bg-dc-surface p-6 text-center transition-colors",
                    href && "hover:border-dc-line-hover",
                );
                const inner = (
                    <>
                        <span className="flex h-11 w-11 items-center justify-center rounded-dc-control bg-dc-accent/10 text-dc-accent">
                            <Icon size={20} />
                        </span>
                        <span className="text-sm font-medium leading-snug text-dc-text">{label}</span>
                    </>
                );
                return href ? (
                    <Link key={label} href={href} className={classes}>
                        {inner}
                    </Link>
                ) : (
                    <div key={label} className={classes}>
                        {inner}
                    </div>
                );
            })}
        </div>
    );
}
