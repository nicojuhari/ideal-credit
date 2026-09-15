import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import { yearsSinceFoundation } from "@/lib/utils";

const stats = [
    { figure: `${yearsSinceFoundation}`, label: "ani pe piață" },
    { figure: "0", label: "comisioane", proof: true },
    { figure: "4,9", label: "rating clienți" },
    { figure: "10 000", label: "MDL sumă minimă" },
];

export default function HeroHome() {
    return (
        <>
            <div className="dc-section dc-section--hero">
                <Container className="flex flex-col items-center gap-8 text-center">
                    <h1 className="max-w-[1000px] text-[clamp(64px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Credite pentru <Accent>succes.</Accent>
                    </h1>
                    <p className="max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Finanțăm afaceri și persoane fizice din Moldova cu credite rapide, flexibile și transparente.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3.5">
                        <ButtonPrimary href="/cerere-de-credit-online">Solicită un credit</ButtonPrimary>
                        <ButtonSecondary href="#calculator">Calculează rata</ButtonSecondary>
                    </div>
                </Container>
            </div>

            <div className="pb-24">
                <Container>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                        {stats.map((s) => (
                            <div key={s.label} className="dc-cell p-7">
                                <Figure size="lg" proof={s.proof} className="block">
                                    {s.figure}
                                </Figure>
                                <p className="mt-1.5 text-xs uppercase tracking-[.1em] text-dc-text-muted">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
}
