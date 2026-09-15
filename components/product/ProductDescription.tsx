export default function ProductDescription({ paragraphs }: { paragraphs: string[] }) {
    return (
        <div className="mx-auto flex max-w-[720px] flex-col gap-5">
            {paragraphs.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.6] text-dc-text-muted">
                    {p}
                </p>
            ))}
        </div>
    );
}
