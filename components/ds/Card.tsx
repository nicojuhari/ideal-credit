import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    padding?: "compact" | "feature";
};

export default function Card({ className, padding = "feature", children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "flex flex-col rounded-dc-card border border-dc-line bg-dc-surface",
                padding === "feature" ? "gap-6 p-8" : "gap-3 p-7",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
