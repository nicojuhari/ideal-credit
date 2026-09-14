export default function ProductDescription({ paragraphs }: { paragraphs: string[] }) {
    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-dc-text-muted">
                    {p}
                </p>
            ))}
        </div>
    );
}
