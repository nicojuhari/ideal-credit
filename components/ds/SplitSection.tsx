import Container from "./Container";
import { cn } from "@/lib/utils";

/** Shared H2 style for the redesign sections. */
export const sectionTitle = "text-[clamp(32px,3.8vw,54px)] font-semibold leading-[1.05] tracking-[-.03em] text-dc-text";

type SplitSectionProps = {
    id?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Extra content under the description, in the left column. */
    aside?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    /** Keep the headline column in view while a long right column scrolls (desktop only). */
    sticky?: boolean;
};

// Story layout: the headline on the left, the details on the right. Reading only the
// left column tells the page's story. Stacks on mobile.
export default function SplitSection({ id, title, description, aside, children, className, sticky }: SplitSectionProps) {
    return (
        <section id={id} className={cn("dc-section", className)}>
            <Container>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-24">
                    <div className={cn("max-w-[460px]", sticky && "lg:sticky lg:top-28 lg:self-start")}>
                        <h2 className={sectionTitle}>{title}</h2>
                        {description && <div className="mt-5 text-[17px] leading-[1.6] text-dc-text-muted md:text-lg">{description}</div>}
                        {aside}
                    </div>
                    <div className="min-w-0">{children}</div>
                </div>
            </Container>
        </section>
    );
}
