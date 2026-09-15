import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";
import Stack from "@/components/ds/Stack";
import { ButtonText } from "@/components/ds/Button";

export type DocumentItem = { title: string; note: string };

export default function DocumentRows({
    id,
    marker,
    title,
    trailing,
    items,
    footnote,
}: {
    id?: string;
    marker: string;
    title: React.ReactNode;
    trailing?: { label: string; href: string };
    items: DocumentItem[];
    footnote?: string;
}) {
    return (
        <div className="dc-section" id={id}>
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <div>
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            {marker}
                        </p>
                        <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                            {title}
                        </h2>
                    </div>
                    {trailing && <ButtonText href={trailing.href}>{trailing.label}</ButtonText>}
                </div>
                <Stack className="mt-14">
                    {items.map((doc, i) => (
                        <div
                            key={doc.title}
                            className="grid items-baseline gap-5 px-8 py-[26px]"
                            style={{ gridTemplateColumns: "44px minmax(0,1fr) auto" }}
                        >
                            <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-xl font-medium tracking-[-.02em] text-dc-text">{doc.title}</span>
                            <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{doc.note}</span>
                        </div>
                    ))}
                </Stack>
                {footnote && <Note className="mt-5 max-w-[900px]">{footnote}</Note>}
            </Container>
        </div>
    );
}
