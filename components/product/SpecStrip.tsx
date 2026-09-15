import Container from "@/components/ds/Container";
import Figure from "@/components/ds/Figure";

export type Spec = { value: string; label: string; proof?: boolean };

export default function SpecStrip({ specs }: { specs: Spec[] }) {
    return (
        <div className="pb-24">
            <Container>
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                    {specs.map((s) => (
                        <div key={s.label} className="dc-cell p-7">
                            <Figure size="lg" proof={s.proof} className="block">
                                {s.value}
                            </Figure>
                            <p className="mt-1.5 text-xs uppercase tracking-[.1em] text-dc-text-muted">{s.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
