import Link from "next/link";
import Container from "./Container";
import { cn } from "@/lib/utils";

type SectionProps = {
    id?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    trailing?: { href: string; label: string };
    align?: "left" | "center";
    children: React.ReactNode;
    className?: string;
};

export default function Section({ id, title, description, trailing, align = "left", children, className }: SectionProps) {
    const centered = align === "center";

    return (
        <section id={id} className={cn("dc-section", className)}>
            <Container>
                <div
                    className={cn(
                        "flex flex-wrap items-end justify-between gap-6",
                        centered && "flex-col items-center text-center",
                    )}
                >
                    <div className={cn("flex flex-col gap-3.5", centered ? "max-w-[720px] items-center" : "max-w-[640px]")}>
                        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-.025em] text-dc-text">{title}</h2>
                        {description && <p className="text-dc-text-muted text-base leading-relaxed">{description}</p>}
                    </div>
                    {trailing && (
                        <Link href={trailing.href} className="shrink-0 text-sm font-medium text-dc-text hover:text-white">
                            {trailing.label} →
                        </Link>
                    )}
                </div>

                <div className="mt-14">{children}</div>
            </Container>
        </section>
    );
}
