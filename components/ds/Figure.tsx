import { cn } from "@/lib/utils";

const sizes = {
    xl: "text-[clamp(30px,3.2vw,40px)] tracking-[-.035em]",
    lg: "text-[28px] tracking-[-.03em]",
    md: "text-[19px] tracking-[-.02em]",
    ordinal: "text-xs",
} as const;

type FigureProps = React.HTMLAttributes<HTMLSpanElement> & {
    size?: keyof typeof sizes;
    proof?: boolean;
};

export default function Figure({ size = "md", proof, className, children, ...props }: FigureProps) {
    return (
        <span className={cn("dc-num", sizes[size], proof && "text-dc-proof", className)} {...props}>
            {children}
        </span>
    );
}
