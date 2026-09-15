import { cn } from "@/lib/utils";

export default function Cell({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("dc-cell p-7", className)} {...props}>
            {children}
        </div>
    );
}
