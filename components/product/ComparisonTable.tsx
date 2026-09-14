export interface ComparisonRow {
    label: string;
    ours: string;
    other: string;
}

export default function ComparisonTable({ oursLabel, otherLabel, rows }: { oursLabel: string; otherLabel: string; rows: ComparisonRow[] }) {
    return (
        <div className="mx-auto max-w-3xl overflow-x-auto rounded-dc-card border border-dc-line">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-dc-line">
                        <th className="w-2/5 px-5 py-3.5 text-left font-medium text-dc-text-dim"></th>
                        <th className="px-5 py-3.5 text-center font-semibold text-dc-accent">{oursLabel}</th>
                        <th className="px-5 py-3.5 text-center font-medium text-dc-text-dim">{otherLabel}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={row.label} className={i < rows.length - 1 ? "border-b border-dc-line" : ""}>
                            <td className="px-5 py-4 text-dc-text">{row.label}</td>
                            <td className="px-5 py-4 text-center font-medium text-dc-text">{row.ours}</td>
                            <td className="px-5 py-4 text-center text-dc-text-muted">{row.other}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
