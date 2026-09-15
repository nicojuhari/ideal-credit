import Stack from "@/components/ds/Stack";
import NumberedRow from "@/components/ds/NumberedRow";

export type ProductDescriptionItem = { title: string; text: string };

export default function ProductDescription({ items }: { items: ProductDescriptionItem[] }) {
    return (
        <Stack>
            {items.map((item, i) => (
                <NumberedRow key={item.title} index={i} title={item.title} desc={item.text} />
            ))}
        </Stack>
    );
}
