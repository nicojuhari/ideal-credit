export interface ComparisonRow {
    label: string;
    ours: string;
    other: string;
}

export default function ComparisonRows({
    oursLabel,
    otherLabel,
    rows,
}: {
    oursLabel: string;
    otherLabel: string;
    rows: ComparisonRow[];
}) {
    const cols = "minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr)";
    return (
        <div className="border-t border-dc-line">
            <div className="grid items-baseline gap-5 border-b border-dc-line px-5 py-4" style={{ gridTemplateColumns: cols }}>
                <span />
                <span className="text-xs uppercase tracking-[.1em] text-dc-text">{oursLabel}</span>
                <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{otherLabel}</span>
            </div>
            {rows.map((row) => (
                <div key={row.label} className="grid items-baseline gap-5 border-b border-dc-line px-5 py-4" style={{ gridTemplateColumns: cols }}>
                    <span className="text-[15px] text-dc-text-muted">{row.label}</span>
                    <span className="text-[15px] font-medium text-dc-text">{row.ours}</span>
                    <span className="text-[15px] text-dc-text-muted">{row.other}</span>
                </div>
            ))}
        </div>
    );
}
