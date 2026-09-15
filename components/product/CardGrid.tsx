import Section from "@/components/ds/Section";

export type CardGridItem = { title: string; desc: string };

export default function CardGrid({
    id,
    marker,
    title,
    description,
    items,
    minWidth = 280,
}: {
    id?: string;
    marker: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    items: CardGridItem[];
    minWidth?: number;
}) {
    return (
        <Section id={id} marker={marker} title={title} description={description}>
            <div className="grid" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))` }}>
                {items.map((item, i) => (
                    <div key={item.title} className="dc-cell p-8">
                        <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">{item.title}</h3>
                        <p className="mt-2.5 text-[17px] leading-[1.6] text-dc-text-muted">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
