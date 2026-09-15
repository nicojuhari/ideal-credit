import { cn } from "@/lib/utils";

export default function Stack({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("dc-stack", className)} {...props}>
            {children}
        </div>
    );
}
