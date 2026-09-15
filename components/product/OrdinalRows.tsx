import Section from "@/components/ds/Section";
import Stack from "@/components/ds/Stack";
import NumberedRow from "@/components/ds/NumberedRow";

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
                    <NumberedRow
                        key={item.title}
                        index={i}
                        title={item.title}
                        desc={item.desc}
                        gridCols="44px minmax(0,1fr) minmax(0,1.5fr)"
                    />
                ))}
            </Stack>
        </Section>
    );
}
