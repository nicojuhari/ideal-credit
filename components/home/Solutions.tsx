import Link from "next/link";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";

type Spec = { label: string; value: string; proof?: boolean };

type Solution = {
    ordinal: string;
    category: string;
    title: string;
    intro: string;
    specs: Spec[];
    checklist: string[];
    href: string;
};

const solutions: Solution[] = [
    {
        ordinal: "01",
        category: "Persoane juridice",
        title: "Credit pentru afaceri",
        intro: "Capital de lucru, investiții, refinanțare - fără plan de afaceri obligatoriu.",
        specs: [
            { label: "Sumă de la", value: "50 000 MDL" },
            { label: "Termen", value: "12-60 luni" },
            { label: "Decizie", value: "1-2 zile", proof: true },
        ],
        checklist: ["SRL, ÎI, GȚ - toate formele juridice acceptate", "Fără plan de afaceri obligatoriu", "Extrase bancare minim 3 luni"],
        href: "/credite/credit-pentru-afaceri",
    },
    {
        ordinal: "02",
        category: "Persoane fizice",
        title: "Credit personal",
        intro: "Pentru orice nevoie urgentă sau planificată - cu condiții clare de la prima discuție.",
        specs: [
            { label: "Sumă de la", value: "10 000 MDL" },
            { label: "Termen", value: "12-48 luni" },
            { label: "Decizie", value: "2-3 ore", proof: true },
        ],
        checklist: ["Vârsta de la 23 de ani, venit stabil", "Buletin de identitate valabil", "Fără comisioane ascunse sau penalități"],
        href: "/credite/credit-pentru-nevoi-personale",
    },
];

function SolutionBlock({ solution }: { solution: Solution }) {
    return (
        <div
            className="grid gap-12 bg-dc-bg p-[clamp(24px,4vw,44px)]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
            <div>
                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                    <span className="font-dc-mono">{solution.ordinal}</span> · {solution.category}
                </p>
                <h3 className="mt-3.5 text-[28px] tracking-[-.03em]">
                    <Link href={solution.href} className="text-dc-text transition-colors hover:text-dc-accent">
                        {solution.title}
                    </Link>
                </h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-dc-text-muted">{solution.intro}</p>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
                <div className="flex flex-col gap-px border border-dc-line bg-dc-line">
                    {solution.specs.map((spec) => (
                        <div key={spec.label} className="flex items-baseline justify-between gap-4 bg-dc-surface px-5 py-4">
                            <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{spec.label}</span>
                            <Figure size="md" proof={spec.proof}>
                                {spec.value}
                            </Figure>
                        </div>
                    ))}
                </div>
                <ul className="flex flex-col gap-3">
                    {solution.checklist.map((item, i) => (
                        <li key={item} className="flex items-baseline gap-3.5 text-[15px] leading-[1.5] text-dc-text-muted">
                            <span className="shrink-0 font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Solutions() {
    return (
        <Section
            id="solutii"
            marker="Soluții, nu produse"
            title={
                <>
                    Care este <Accent>scopul </Accent> tău?
                </>
            }
        >
            <div className="flex flex-col gap-px border border-dc-line bg-dc-line">
                {solutions.map((s) => (
                    <SolutionBlock key={s.title} solution={s} />
                ))}
            </div>
            <Note className="pt-3">
                Primul credit se acordă cu garant. Clienții cu istoric bun nu mai au nevoie de garant la creditele următoare.
            </Note>
        </Section>
    );
}
