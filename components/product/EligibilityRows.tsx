import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";
import Stack from "@/components/ds/Stack";

export default function EligibilityRows({
    id,
    marker,
    title,
    description,
    note,
    items,
}: {
    id?: string;
    marker: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    note?: string;
    items: string[];
}) {
    return (
        <div className="dc-section" id={id}>
            <Container>
                <div className="grid items-start gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    <div>
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            {marker}
                        </p>
                        <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                            {title}
                        </h2>
                        {description && <p className="mt-4 text-[17px] leading-[1.6] text-dc-text-muted">{description}</p>}
                        {note && <Note className="mt-7 max-w-[340px]">{note}</Note>}
                    </div>
                    <Stack>
                        {items.map((text, i) => (
                            <div key={text} className="flex items-baseline gap-3.5 px-5 py-4">
                                <span className="shrink-0 font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-[15px] leading-[1.5] text-dc-text-muted">{text}</span>
                            </div>
                        ))}
                    </Stack>
                </div>
            </Container>
        </div>
    );
}
