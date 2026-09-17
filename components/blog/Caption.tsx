import { cn } from "@/lib/utils";

// Standard caption/legend style for anything supplementary attached to an
// image, chart, or table - always smaller and quieter than body text. See
// brand/blog-editorial-strategy.md, "Design & typography".

export default function Caption({
    as: Tag = "p",
    className,
    children,
}: {
    as?: "p" | "figcaption" | "div";
    className?: string;
    children: React.ReactNode;
}) {
    return <Tag className={cn("text-[12px] leading-[1.55] text-dc-text-muted", className)}>{children}</Tag>;
}
