import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import { yearsSinceFoundation } from "@/lib/utils";

const rows = [
    {
        title: "Analizăm scopul, nu doar dosarul",
        body: "Ne interesează pentru ce ai nevoie de bani și dacă planul are logică - nu doar actele depuse.",
    },
    {
        title: "Condiții transparente",
        body: "Dobânzi fixe, zero comisioane ascunse - toate costurile înainte de semnare.",
    },
    {
        title: "Decizie rapidă",
        body: "Dosarul complet primit dimineața - răspunsul îl ai înainte de prânz.",
    },
    {
        title: "Rambursare anticipată gratuită",
        body: "Plătești dobânda doar pentru perioada folosită. Nicio penalitate.",
    },
];

export default function WhyUs() {
    return (
        <Section
            id="de-ce-noi"
            marker="De ce noi"
            title={
                <>
                    {yearsSinceFoundation} ani de finanțare de <Accent>încredere</Accent>
                </>
            }
        >
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {rows.map((row, i) => (
                    <div key={row.title} className="dc-cell p-8">
                        <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">{row.title}</h3>
                        <p className="mt-2.5 text-[17px] leading-[1.6] text-dc-text-muted">{row.body}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
