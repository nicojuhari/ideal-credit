import Section from "@/components/ds/Section";
import Card from "@/components/ds/Card";
import Accent from "@/components/ds/Accent";

const steps = [
    { title: "Solicită un credit", body: "Online, prin telefon, Viber/WhatsApp sau la unul din oficiile noastre." },
    { title: "Primești răspunsul", body: "Rapid, în doar câteva ore în timpul programului de lucru." },
    { title: "Semnezi contractul", body: "În oficiu și primești banii imediat, dacă decizia este pozitivă." },
];

export default function Process() {
    return (
        <Section
            title={
                <>
                    Obține un credit în 3 pași <Accent>simpli</Accent>
                </>
            }
        >
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                {steps.map((step, i) => (
                    <Card key={step.title} className="gap-8 p-8">
                        <span className="text-[13px] font-semibold text-dc-text-dim">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                            <h3 className="mb-1.5 text-[19px] font-bold text-dc-text">{step.title}</h3>
                            <p className="text-dc-text-muted leading-relaxed">{step.body}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
