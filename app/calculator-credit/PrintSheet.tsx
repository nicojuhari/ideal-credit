import Logo from "@/components/icons/Logo";
import { OFFICES, fullAddress } from "@/lib/constants";
import type { Row } from "@/lib/credit-schedule";

const lei = (v: number) => Math.round(v).toLocaleString("ro-RO");

type Pair = [string, string];

// The printed / PDF version of the calculator: a plain A4 document, black on white with the brand orange as the only colour.
export default function PrintSheet({
    key3,
    inputs,
    results,
    verdict,
    fits,
    schedule,
    suma,
    totalPaid,
    totalInterest,
}: {
    key3: Pair[];
    inputs: Pair[];
    results: Pair[];
    verdict: string[];
    fits: boolean;
    schedule: Row[];
    suma: number;
    totalPaid: number;
    totalInterest: number;
}) {
    const th = "py-[2.2mm] px-[2mm] font-semibold text-[7.5pt] uppercase tracking-[.08em] text-[#666]";
    const td = "py-[1.6mm] px-[2mm]";

    return (
        <div className="print-sheet hidden font-dc-sans text-[9.5pt] leading-[1.45] text-[#111] print:block">
            {/* Letterhead */}
            <header className="flex items-start justify-between gap-6 border-b-[1.5pt] border-[#ff9a00] pb-[4mm]">
                <div className="flex items-center gap-[3mm]">
                    <Logo className="size-[11mm]" />
                    <div>
                        <p className="text-[13pt] font-semibold tracking-[-.02em]">Ideal Credit</p>
                        <p className="text-[8pt] text-[#666]">idealcredit.md · {OFFICES[1].mobileDisplay}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[8pt] uppercase tracking-[.1em] text-[#666]">Calcul de credit</p>
                    <p className="mt-[0.5mm] font-dc-mono text-[9pt]">{new Date().toLocaleDateString("ro-RO")}</p>
                </div>
            </header>

            <h1 className="mt-[7mm] text-[19pt] font-semibold leading-[1.1] tracking-[-.03em]">Calcul de credit pentru persoane fizice</h1>

            {/* The three numbers the client came for */}
            <div className="mt-[5mm] grid grid-cols-3 border border-[#d9d9d9]">
                {key3.map(([k, v], i) => (
                    <div key={k} className={i > 0 ? "border-l border-[#d9d9d9] p-[4mm]" : "p-[4mm]"}>
                        <p className="text-[7.5pt] uppercase tracking-[.1em] text-[#666]">{k}</p>
                        <p className="mt-[1.5mm] text-[17pt] font-semibold leading-none tracking-[-.03em] tabular-nums">{v}</p>
                    </div>
                ))}
            </div>

            {/* Verdict */}
            <div className="mt-[4mm] break-inside-avoid bg-[#f5f5f5] px-[4mm] py-[3.5mm]">
                <p className="flex items-center gap-[2mm] text-[8pt] font-semibold uppercase tracking-[.1em]">
                    <span className={fits ? "size-[2.2mm] bg-[#4f7a3a]" : "size-[2.2mm] bg-[#ff9a00]"} aria-hidden />
                    {fits ? "Suma se încadrează" : "Suma nu se încadrează"}
                </p>
                <div className="mt-[1.5mm] space-y-[0.5mm]">
                    {verdict.map((v) => (
                        <p key={v}>{v}</p>
                    ))}
                </div>
            </div>

            {/* Inputs and results side by side */}
            <div className="mt-[7mm] grid grid-cols-2 gap-[8mm] break-inside-avoid">
                {(
                    [
                        ["Datele tale", inputs],
                        ["Rezultatul", results],
                    ] as const
                ).map(([title, rows]) => (
                    <section key={title}>
                        <h2 className="border-b border-[#111] pb-[1.5mm] text-[10.5pt] font-semibold">{title}</h2>
                        <dl>
                            {rows.map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-[4mm] border-b border-[#e5e5e5] py-[1.6mm]">
                                    <dt className="text-[#555]">{k}</dt>
                                    <dd className="text-right font-medium tabular-nums">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                ))}
            </div>

            {/* Full schedule; the header row repeats on every page */}
            <h2 className="mt-[8mm] border-b border-[#111] pb-[1.5mm] text-[10.5pt] font-semibold">
                Graficul de plăți <span className="font-normal text-[#666]">· {schedule.length} rate, în lei</span>
            </h2>
            <table className="w-full border-collapse text-[8.5pt] tabular-nums">
                <thead>
                    <tr className="border-b border-[#d9d9d9] text-left">
                        <th className={th}>#</th>
                        <th className={th}>Data</th>
                        <th className={`${th} text-right`}>Rata</th>
                        <th className={`${th} text-right`}>Credit</th>
                        <th className={`${th} text-right`}>Dobândă</th>
                        <th className={`${th} text-right`}>Rămas de plătit</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((r) => (
                        <tr key={r.month} className="break-inside-avoid border-b border-[#eee] even:bg-[#fafafa]">
                            <td className={`${td} text-[#666]`}>{r.month}</td>
                            <td className={`${td} font-dc-mono text-[8pt]`}>{r.date}</td>
                            <td className={`${td} text-right font-semibold`}>{lei(r.payment)}</td>
                            <td className={`${td} text-right`}>{lei(r.principal)}</td>
                            <td className={`${td} text-right`}>{lei(r.interest)}</td>
                            <td className={`${td} text-right text-[#555]`}>{lei(r.balance)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="[display:table-row-group]">
                    <tr className="break-inside-avoid border-t-[1.5pt] border-[#111] font-semibold">
                        <td className={td} colSpan={2}>
                            Total
                        </td>
                        <td className={`${td} text-right`}>{lei(totalPaid)}</td>
                        <td className={`${td} text-right`}>{lei(suma)}</td>
                        <td className={`${td} text-right`}>{lei(totalInterest)}</td>
                        <td className={`${td} text-right`}>0</td>
                    </tr>
                </tfoot>
            </table>

            {/* Closing note and offices */}
            <footer className="mt-[8mm] break-inside-avoid border-t border-[#d9d9d9] pt-[4mm] text-[8pt] text-[#555]">
                <p className="max-w-[150mm]">
                    Este o estimare după regulile Băncii Naționale pentru creditarea responsabilă. Suma exactă o stabilim după ce vedem actele și istoria ta
                    de credit.
                </p>
                <div className="mt-[3mm] grid grid-cols-2 gap-[8mm]">
                    {OFFICES.map((o) => (
                        <p key={o.id}>
                            <span className="font-semibold text-[#111]">{o.title}</span>
                            <br />
                            {fullAddress(o)}
                            <br />
                            {o.mobileDisplay}
                        </p>
                    ))}
                </div>
            </footer>
        </div>
    );
}
