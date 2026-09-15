import { cn } from "@/lib/utils";

export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("ic-container", className)}>{children}</div>;
}
