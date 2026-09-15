import Container from "./Container";
import { cn } from "@/lib/utils";

type SectionProps = {
    id?: string;
    marker?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: "left" | "center";
    children?: React.ReactNode;
    className?: string;
};

export default function Section({ id, marker, title, description, align = "left", children, className }: SectionProps) {
    const centered = align === "center";

    return (
        <section id={id} className={cn("dc-section", className)}>
            <Container>
                <div className={cn("flex flex-col", centered && "items-center text-center")}>
                    {marker && (
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            {marker}
                        </p>
                    )}
                    <h2
                        className={cn(
                            "text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text",
                            marker && "mt-5",
                            centered && "max-w-[720px]",
                        )}
                    >
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-4 max-w-[640px] text-[17px] leading-[1.6] text-dc-text-muted">{description}</p>
                    )}
                </div>

                {children && <div className="mt-14">{children}</div>}
            </Container>
        </section>
    );
}
