import SplitSection from "@/components/ds/SplitSection";
import Accent from "@/components/ds/Accent";

type Step = { title: string; body: string };

const defaultSteps: Step[] = [
    { title: "Planul", body: "Ne uităm ce vrei să faci cu banii și dacă planul este realist." },
    { title: "Veniturile", body: "Vedem din ce bani plătești rata. Și cum o plătești dacă planul întârzie." },
    {
        title: "Garanțiile",
        body: "La final discutăm cine este fidejusor și, dacă e nevoie, ce bun pui gaj.",
    },
];

const outcomes = [
    { title: "Aprobare", body: "Suma și termenul se potrivesc. Pregătim contractul.", color: "bg-dc-proof" },
    {
        title: "O sumă potrivită",
        body: "Dacă suma e prea mare pentru veniturile de acum, îți propunem o sumă mai mică sau un termen mai lung.",
        color: "bg-dc-accent",
    },
    { title: "Un plan clar", body: "Dacă acum nu e momentul, îți explicăm ce trebuie să se schimbe ca să revii.", color: "bg-dc-text-muted" },
];

const label = "text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";

type AnalysisProps = {
    title?: React.ReactNode;
    intro?: string;
    steps?: Step[];
    /** Shows the three possible results of the analysis. */
    showOutcomes?: boolean;
    /** Closing paragraph under the steps. */
    after?: React.ReactNode;
};

export default function Analysis({
    title = (
        <>
            Analizăm fiecare cerere <Accent>cu atenție.</Accent>
        </>
    ),
    intro = "Te întrebăm pentru ce sunt banii și îți propunem suma și termenul potrivite. Fiecare cerere o analizează un specialist, care discută direct cu tine.",
    steps = defaultSteps,
    showOutcomes = true,
    after,
}: AnalysisProps) {
    return (
        <SplitSection title={title} description={intro} sticky>
            <p className={label}>Ce analizăm</p>
            <ol className="mt-2">
                {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-5 border-b border-dc-line py-6 sm:gap-7 sm:py-7">
                        <span className="pt-1.5 font-dc-mono text-[13px] text-dc-accent">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                            <h3 className="text-xl font-semibold tracking-[-.02em] text-dc-text sm:text-2xl">{step.title}</h3>
                            <p className="mt-2 text-[17px] leading-[1.6] text-[#c4c4c4]">{step.body}</p>
                        </div>
                    </li>
                ))}
            </ol>

            {showOutcomes && (
                <>
                    <p className={`${label} mt-12 sm:mt-14`}>Ce primești după analiză</p>
                    <ul className="mt-4 grid gap-px border border-dc-line bg-dc-line">
                        {outcomes.map((o) => (
                            <li key={o.title} className="grid gap-2 bg-dc-surface p-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:px-7">
                                <p className="flex items-center gap-3 text-lg font-semibold tracking-[-.01em] text-dc-text">
                                    <span className={`block h-2 w-2 shrink-0 ${o.color}`} aria-hidden />
                                    {o.title}
                                </p>
                                <p className="text-base leading-[1.55] text-[#c4c4c4]">{o.body}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {after && <div className="mt-8 max-w-[52ch] text-lg leading-[1.55] text-dc-text">{after}</div>}
        </SplitSection>
    );
}
