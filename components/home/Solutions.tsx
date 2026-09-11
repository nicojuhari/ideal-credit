import { Check } from "lucide-react";
import Section from "@/components/ds/Section";
import Card from "@/components/ds/Card";
import Accent from "@/components/ds/Accent";
import { ButtonSecondary } from "@/components/ds/Button";

const businessItems = [
    "SRL, ÎI, GȚ — toate formele juridice acceptate",
    "Fără plan de afaceri obligatoriu",
    "Extrase bancare minim 3 luni",
    "Decizie în 1–2 zile lucrătoare",
];

const personalItems = [
    "Vârsta de la 23 de ani, venit stabil",
    "Buletin de identitate valabil",
    "Fără comisioane ascunse sau penalități",
    "Decizie în 2–3 ore",
];

function ChecklistCard({ title, intro, items, href, cta }: { title: string; intro: string; items: string[]; href: string; cta: string }) {
    return (
        <Card className="gap-6 p-8">
            <div>
                <h3 className="text-[22px] font-bold tracking-[-.02em] leading-[1.5] text-dc-text">{title}</h3>
                <p className="mt-1 text-dc-text-muted">{intro}</p>
            </div>
            <ul className="flex flex-col gap-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-dc-text-muted">
                        <Check size={18} className="mt-0.5 shrink-0 text-dc-text" strokeWidth={2.5} />
                        {item}
                    </li>
                ))}
            </ul>
            <ButtonSecondary href={href} className="mt-auto self-start">
                {cta}
            </ButtonSecondary>
        </Card>
    );
}

export default function Solutions() {
    return (
        <Section
            id="solutii"
            title={
                <>
                    Alege soluția <Accent>potrivită</Accent> pentru tine
                </>
            }
        >
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <ChecklistCard
                    title="Credit pentru afaceri"
                    intro="Capital de lucru, investiții, refinanțare — fără plan de afaceri obligatoriu."
                    items={businessItems}
                    href="/credite/credit-pentru-afaceri-mici"
                    cta="Condiții pentru afaceri"
                />
                <ChecklistCard
                    title="Credit personal"
                    intro="Pentru orice nevoie urgentă sau planificată — cu condiții clare de la prima discuție."
                    items={personalItems}
                    href="/credite/credit-pentru-nevoi-personale"
                    cta="Condiții credit personal"
                />
            </div>

            <p className="mt-5 max-w-[820px] text-sm text-dc-text-dim">
                Primul credit se acordă cu garant. Clienții cu istoric bun nu mai au nevoie de garant la creditele următoare. Toate
                costurile sunt prezentate înainte de semnare, fără surprize.
            </p>
        </Section>
    );
}
