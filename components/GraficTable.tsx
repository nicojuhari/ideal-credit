import { formatDateRo } from "@/lib/utils";

interface GraficRow {
    data_rata: string;
    credit_rata: number;
    dobinda_rata: number;
}

interface GraficTableProps {
    grafic: GraficRow[];
    dobindaTotal: number;
    credit: number;
}

export default function GraficTable({ grafic, dobindaTotal, credit }: GraficTableProps) {
    return (
        <div className="border border-dc-line">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] text-[13px]">
                    <thead>
                        <tr className="border-b border-dc-line text-dc-text-muted">
                            <th className="px-4 py-3 text-left font-normal uppercase tracking-[.08em]">Nr.</th>
                            <th className="px-4 py-3 text-left font-normal uppercase tracking-[.08em]">Data</th>
                            <th className="px-4 py-3 text-right font-normal uppercase tracking-[.08em]">Credit</th>
                            <th className="px-4 py-3 text-right font-normal uppercase tracking-[.08em]">Dobândă</th>
                            <th className="px-4 py-3 text-right font-normal uppercase tracking-[.08em]">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dc-line font-dc-mono text-dc-text-muted">
                        {grafic.map((rata, idx) => (
                            <tr key={idx}>
                                <td className="px-4 py-2.5">{idx + 1}</td>
                                <td className="px-4 py-2.5 whitespace-nowrap">{formatDateRo(rata.data_rata)}</td>
                                <td className="px-4 py-2.5 text-right">{rata.credit_rata}</td>
                                <td className="px-4 py-2.5 text-right text-dc-accent">{rata.dobinda_rata}</td>
                                <td className="px-4 py-2.5 text-right font-medium text-dc-text">
                                    {rata.dobinda_rata + rata.credit_rata}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t border-dc-line font-dc-mono font-medium">
                            <td className="px-4 py-3 text-dc-text" colSpan={2}>
                                Total
                            </td>
                            <td className="px-4 py-3 text-right text-dc-text">{credit}</td>
                            <td className="px-4 py-3 text-right text-dc-accent">{dobindaTotal}</td>
                            <td className="px-4 py-3 text-right text-dc-text">{+credit + +dobindaTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
