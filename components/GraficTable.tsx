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
        <div className="border border-white/10 overflow-auto w-full">
            <table className="table-fixed min-w-100 w-full text-sm divide-y divide-white/10 grafic-table">
                <thead>
                    <tr>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap w-12">Nr.</th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">Data</th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">Credit</th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">Dobânda</th>
                        <th className="px-2 py-2 font-bold text-right whitespace-nowrap">Total</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                    {grafic.map((rata, idx) => (
                        <tr key={idx}>
                            <td className="px-2 py-2 font-bold whitespace-nowrap">{idx + 1}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{new Date(rata.data_rata).toLocaleDateString("ro-RO")}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{rata.credit_rata}</td>
                            <td className="px-2 py-2 whitespace-nowrap">{rata.dobinda_rata}</td>
                            <td className="px-2 py-2 text-right whitespace-nowrap">{rata.dobinda_rata + rata.credit_rata}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap"></th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">Total</th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">{credit}</th>
                        <th className="px-2 py-2 font-bold text-left whitespace-nowrap">{dobindaTotal}</th>
                        <th className="px-2 py-2 font-bold text-right whitespace-nowrap">{+credit + +dobindaTotal}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
