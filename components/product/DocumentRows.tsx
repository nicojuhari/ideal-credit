import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";
import Stack from "@/components/ds/Stack";
import Figure from "@/components/ds/Figure";
import { ButtonText } from "@/components/ds/Button";

export type DocumentItem = {
    title: string;
    /** Short trailing tag, e.g. "Obligatoriu" or "SRL / ÎI / GȚ" */
    note?: string;
    /** Secondary tag shown before note/meta, e.g. a category label */
    group?: string;
    /** Trailing meta shown with an arrow, e.g. "PDF" or "2025" - implies the row links out */
    meta?: string;
    /** Makes the row a link; required when meta is set */
    href?: string;
};

function DocumentRow({ doc, index }: { doc: DocumentItem; index: number }) {
    const content = (
        <>
            <div className="flex items-baseline gap-5">
                <span className="w-11 shrink-0 font-dc-mono text-xs text-dc-text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-xl font-medium tracking-[-.02em] text-dc-text">{doc.title}</span>
            </div>
            {(doc.note || doc.group || doc.meta) && (
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pl-16 sm:shrink-0 sm:pl-0">
                    {doc.group && <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{doc.group}</span>}
                    {doc.note && <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{doc.note}</span>}
                    {doc.meta && (
                        <Figure size="ordinal" className="text-dc-text-muted">
                            {doc.meta} →
                        </Figure>
                    )}
                </div>
            )}
        </>
    );

    const className =
        "flex flex-col gap-2 px-8 py-[26px] transition-colors duration-[120ms] hover:bg-dc-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-5";

    if (doc.href) {
        return (
            <a href={doc.href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }
    return <div className={className}>{content}</div>;
}

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
                        <DocumentRow key={doc.title} doc={doc} index={i} />
                    ))}
                </Stack>
                {footnote && <Note className="mt-5 max-w-[900px]">{footnote}</Note>}
            </Container>
        </div>
    );
}
