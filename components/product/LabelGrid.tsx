import Link from "next/link";
import Section from "@/components/ds/Section";

export type LabelGridItem = { label: string; href?: string };

export default function LabelGrid({
    id,
    marker,
    title,
    description,
    items,
}: {
    id?: string;
    marker: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    items: LabelGridItem[];
}) {
    return (
        <Section id={id} marker={marker} title={title} description={description}>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {items.map((item, i) => {
                    const inner = (
                        <>
                            <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            <span className="mt-4 block text-lg tracking-[-.02em] text-dc-text">
                                {item.label}
                                {item.href && " →"}
                            </span>
                        </>
                    );
                    return item.href ? (
                        <Link key={item.label} href={item.href} className="dc-cell p-7 transition-colors duration-[120ms] hover:bg-[#1a1a1a]">
                            {inner}
                        </Link>
                    ) : (
                        <div key={item.label} className="dc-cell p-7">
                            {inner}
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
