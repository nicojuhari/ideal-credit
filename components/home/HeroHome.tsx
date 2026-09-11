import { Star } from "lucide-react";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Calculator from "@/components/ds/Calculator";
import { yearsSinceFoundation } from "@/lib/utils";

const stats: { figure: React.ReactNode; label: string }[] = [
    { figure: `${yearsSinceFoundation} ani`, label: "de experiență" },
    { figure: "1–3 ore", label: "până la decizie" },
    {
        figure: (
            <>
                <Star size={18} className="text-dc-text" fill="currentColor" /> 4.9
            </>
        ),
        label: "rating clienți",
    },
];

export default function HeroHome() {
    return (
        <div className="dc-section dc-section--hero">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">
                    {/* Left column */}
                    <div className="flex flex-col gap-7">
                        <h1 className="text-[64px] md:text-[96px] font-bold max-md:text-center leading-[1.04] tracking-[-.03em] text-dc-text">
                            Credite pentru <Accent>succes.</Accent>
                        </h1>

                        <h2 className="max-w-[480px] text-[19px] leading-relaxed text-dc-text-muted max-md:text-center">
                            Finanțăm afaceri și persoane fizice
                            <br className="max-md:hidden" /> din Republica Moldova.
                        </h2>

                        <div className="flex flex-wrap gap-10 border-t border-dc-line pt-6 hidden">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p className="flex items-center gap-1 text-[22px] font-bold tracking-[-.02em] leading-[1.5] text-dc-text">
                                        {s.figure}
                                    </p>
                                    <p className="text-[13px] text-dc-text-dim">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: calculator */}
                    <Calculator />
                </div>
            </Container>
        </div>
    );
}
