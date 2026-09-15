import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Stack from "@/components/ds/Stack";

const steps = [
    { title: "Discuție la telefon", body: "O conversație reală, nu un formular. Înțelegem situația completă." },
    { title: "Analiză la distanță", body: "Documentele se verifică prin e-mail, WhatsApp sau Viber - fără drumuri." },
    { title: "Semnătură în oficiu", body: "Întâlnirea confirmă, nu decide. Primești banii în aceeași zi." },
];

export default function Process() {
    return (
        <div className="dc-section">
            <Container>
                <div className="grid items-start gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    <div>
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            Procesul
                        </p>
                        <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                            Cum <Accent>funcționează</Accent>
                        </h2>
                        <p className="mt-4 text-[17px] leading-[1.6] text-dc-text-muted">
                            Analiza se face înainte de întâlnire. Te chemăm în oficiu doar când suntem siguri că răspunsul e „da”.
                        </p>
                    </div>
                    <Stack>
                        {steps.map((step, i) => (
                            <div key={step.title} className="grid items-center gap-7 p-8" style={{ gridTemplateColumns: "1fr auto" }}>
                                <div>
                                    <h3 className="text-xl tracking-[-.02em] text-dc-text">{step.title}</h3>
                                    <p className="mt-1.5 text-[17px] leading-[1.6] text-dc-text-muted">{step.body}</p>
                                </div>
                                <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            </div>
                        ))}
                    </Stack>
                </div>
            </Container>
        </div>
    );
}
