import { cn } from "@/lib/utils";

export default function Info({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("flex items-start gap-3 border border-dc-line bg-dc-surface px-5 py-4", className)}>
            <span className="mt-[6px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
            <span className="text-[13px] leading-[1.6] text-dc-text-muted">{children}</span>
        </div>
    );
}
