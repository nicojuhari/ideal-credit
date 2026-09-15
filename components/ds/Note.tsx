import { cn } from "@/lib/utils";

export default function Note({ className, children }: { className?: string; children: React.ReactNode }) {
    return <p className={cn("text-xs leading-[1.7] text-dc-text-muted", className)}>{children}</p>;
}
