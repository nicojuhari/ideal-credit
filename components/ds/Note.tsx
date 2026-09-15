import { cn } from "@/lib/utils";

export default function Note({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("text-xs leading-[1.7] text-dc-text-muted", className)}>{children}</div>;
}
