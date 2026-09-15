import Section from "@/components/ds/Section";
import Stack from "@/components/ds/Stack";

export type OrdinalRowItem = { title: string; desc: string };

export default function OrdinalRows({
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
    items: OrdinalRowItem[];
}) {
    return (
        <Section id={id} marker={marker} title={title} description={description}>
            <Stack>
                {items.map((item, i) => (
                    <div
                        key={item.title}
                        className="grid items-baseline gap-7 p-8"
                        style={{ gridTemplateColumns: "44px minmax(0,1fr) minmax(0,1.5fr)" }}
                    >
                        <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl tracking-[-.025em] text-dc-text">{item.title}</h3>
                        <p className="text-[17px] leading-[1.6] text-dc-text-muted">{item.desc}</p>
                    </div>
                ))}
            </Stack>
        </Section>
    );
}
