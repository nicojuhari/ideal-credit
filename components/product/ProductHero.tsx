import { Star } from "lucide-react";
import Container from "@/components/ds/Container";
import Calculator from "@/components/ds/Calculator";

export default function ProductHero({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
    return (
        <div className="relative isolate dc-section dc-section--hero">
            <div className="dc-bg-squares" aria-hidden />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-sm text-dc-text-dim max-md:justify-center">
                            <span className="flex items-center gap-1 text-dc-text">
                                <Star size={14} className="text-dc-accent" fill="currentColor" /> 4.9
                            </span>
                            <span aria-hidden>·</span>
                            <span>Din 2010</span>
                            <span aria-hidden>·</span>
                            <span>Credite pentru succes!</span>
                        </div>

                        <h1 className="text-[44px] md:text-[64px] font-bold max-md:text-center leading-[1.05] tracking-[-.03em] text-dc-text">
                            {title}
                        </h1>

                        <p className="max-w-[480px] text-[19px] leading-relaxed text-dc-text-muted max-md:text-center max-md:mx-auto">
                            {subtitle}
                        </p>
                    </div>

                    <Calculator />
                </div>
            </Container>
        </div>
    );
}
