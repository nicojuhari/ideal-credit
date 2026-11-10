import { cn } from "@/lib/utils";

type ValueRowProps = {
    label: React.ReactNode;
    value: React.ReactNode;
    /** Orange value, for the one number that matters. */
    accent?: boolean;
    /** Green value, for a positive fact. */
    proof?: boolean;
    /** White, bold label, for totals. */
    strong?: boolean;
    className?: string;
};

// Label left, number right, hairline between rows. Used in cost cards and spec cards.
export default function ValueRow({ label, value, accent, proof, strong, className }: ValueRowProps) {
    return (
        <div className={cn("flex items-baseline justify-between gap-4 border-b border-dc-line py-3.5 last:border-b-0", className)}>
            <span className={cn("text-[15px]", strong ? "font-semibold text-dc-text" : "text-dc-text-muted")}>{label}</span>
            <span className={cn("text-right font-dc-mono text-base text-dc-text", accent && "text-lg text-dc-accent", proof && "text-lg text-dc-proof")}>{value}</span>
        </div>
    );
}
