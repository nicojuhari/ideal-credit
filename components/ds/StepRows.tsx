import type { ReactNode } from "react";
import { HairlineGrid } from "./HairlineGrid";

export type StepItem = { label: string; title: ReactNode; body: ReactNode };

type Props = {
    steps: StepItem[];
    /**
     * cells — hairline cells side by side, "Pas 0X" in brand-light (home).
     *         First cell has no left padding, last no right padding, so rules meet the shell edges.
     * rows  — stacked rows with a 64px mono "Pas 0X" column in brand, hairline above each and below the last (service).
     */
    layout?: "cells" | "rows";
    cellTone?: "bg" | "section";
};

export function StepRows({ steps, layout = "rows", cellTone = "section" }: Props) {
    if (layout === "cells") {
        return (
            <HairlineGrid columns={3} cellTone={cellTone} edges>
                {steps.map((s, i) => (
                    <div
                        key={s.label}
                        className={
                            i === 0
                                ? "py-10 pr-8 max-ds-sm:pr-0"
                                : i === steps.length - 1
                                  ? "py-10 pl-8 max-ds-sm:pl-0"
                                  : "py-10 px-8 max-ds-sm:px-0"
                        }
                    >
                        <span className="font-figure text-fine text-brand-light">{s.label}</span>
                        <h3 className="mt-[18px] text-h3-step">{s.title}</h3>
                        <p className="mt-3 text-body text-text-3">{s.body}</p>
                    </div>
                ))}
            </HairlineGrid>
        );
    }
    return (
        <ol className="m-0 list-none p-0">
            {steps.map((s, i) => (
                <li key={s.label} className={i === steps.length - 1 ? "flex gap-7 border-y border-line py-7 max-ds-sm:flex-col max-ds-sm:gap-3" : "flex gap-7 border-t border-line py-7 max-ds-sm:flex-col max-ds-sm:gap-3"}>
                    <span className="w-16 flex-none font-figure text-fine text-brand">{s.label}</span>
                    <div>
                        <h3 className="text-h3-row">{s.title}</h3>
                        <p className="mt-2.5 max-w-[540px] text-body text-text-2">{s.body}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
}
