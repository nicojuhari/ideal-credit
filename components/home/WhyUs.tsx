import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { yearsSinceFoundation } from "@/lib/utils";

const rows = [
    {
        title: "Condiții transparente",
        body: "Dobânzi fixe, zero comisioane ascunse — toate costurile înainte de semnare.",
    },
    {
        title: "Decizie rapidă",
        body: "Dosarul complet primit dimineața — răspunsul îl ai înainte de prânz.",
    },
    {
        title: "Rambursare anticipată gratuită",
        body: "Plătești dobânda doar pentru perioada folosită. Nicio penalitate la achitare înainte de termen.",
    },
];

export default function WhyUs() {
    return (
        <section className="dc-section" id="de-ce-noi">
            <Container>
                <div className="grid gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <div className="flex flex-col gap-3.5 max-w-[420px]">
                        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-.025em] text-dc-text">
                            {yearsSinceFoundation} ani de finanțare de <Accent>încredere</Accent>
                        </h2>
                        <p className="text-dc-text-muted leading-relaxed">
                            Din 2010 — finanțare nebancară pentru persoane fizice și afaceri din Moldova.
                        </p>
                    </div>

                    <div>
                        {rows.map((row, i) => (
                            <div
                                key={row.title}
                                className="grid gap-4 border-t border-dc-line py-7 last:border-b"
                                style={{ gridTemplateColumns: "40px 1fr" }}
                            >
                                <span className="text-[13px] font-semibold text-dc-text-dim">{String(i + 1).padStart(2, "0")}</span>
                                <div>
                                    <h3 className="text-[19px] font-bold text-dc-text">{row.title}</h3>
                                    <p className="mt-1 text-dc-text-muted leading-relaxed">{row.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
